import fs from "node:fs/promises";
import path from "node:path";
import postcss from "postcss";

const projectRoot = process.cwd();
const appRoot = path.join(projectRoot, "app");
const stylesRoot = path.join(appRoot, "styles");
const globalsPath = path.join(appRoot, "globals.css");
const styleOrder = ["foundation.css", "shared.css", "pages.css", "motion.css", "nexus.css", "shared-ui.css"];

async function sourceFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(target);
    return /\.(?:ts|tsx)$/.test(entry.name) ? [target] : [];
  }));
  return files.flat();
}

const currentGlobals = await fs.readFile(globalsPath, "utf8");
const inputCss = currentGlobals.includes("/* Tokens */")
  ? currentGlobals
  : (await Promise.all(styleOrder.map((name) => fs.readFile(path.join(stylesRoot, name), "utf8")))).join("\n");
const sourceRoots = ["app", "components", "lib"].map((directory) => path.join(projectRoot, directory));
const sourcePaths = (await Promise.all(sourceRoots.map(sourceFiles))).flat();
const corpus = (await Promise.all(sourcePaths.map((file) => fs.readFile(file, "utf8")))).join("\n");
const root = postcss.parse(inputCss);
const before = { bytes: Buffer.byteLength(inputCss), rules: 0, declarations: 0 };
root.walkRules(() => before.rules++);
root.walkDecls(() => before.declarations++);

let removedRules = 0;
let removedDeclarations = 0;
const runtimePrefixes = ["nexus-", "custom-cursor-", "marde-", "anime-", "reveal-", "lenis", "home-scroll-"];

root.walkAtRules("import", (rule) => rule.remove());
root.walkRules((rule) => {
  if (rule.parent?.type === "atrule" && /keyframes$/i.test(rule.parent.name)) return;
  const classes = [...rule.selector.matchAll(/\.(-?[_a-zA-Z]+[\w-]*)/g)].map((match) => match[1]);
  if (!classes.length) return;
  const used = classes.some((name) => corpus.includes(name) || runtimePrefixes.some((prefix) => name.startsWith(prefix)));
  if (!used) {
    removedRules++;
    rule.remove();
  }
});

function compactParent(parent) {
  const seen = new Map();
  const nodes = [...(parent.nodes ?? [])];
  for (let index = nodes.length - 1; index >= 0; index--) {
    const node = nodes[index];
    if (node.type === "atrule" && node.nodes) compactParent(node);
    if (node.type !== "rule") continue;
    const declarations = seen.get(node.selector) ?? new Set();
    for (let childIndex = (node.nodes?.length ?? 0) - 1; childIndex >= 0; childIndex--) {
      const child = node.nodes[childIndex];
      if (child.type !== "decl") continue;
      const key = `${child.prop}|${child.important ? "important" : "normal"}`;
      if (declarations.has(key)) {
        child.remove();
        removedDeclarations++;
      } else {
        declarations.add(key);
      }
    }
    seen.set(node.selector, declarations);
    if (!node.nodes?.some((child) => child.type === "decl" || child.type === "atrule" || child.type === "rule")) {
      removedRules++;
      node.remove();
    }
  }
}
compactParent(root);

const referencedAnimations = new Set();
root.walkDecls(/^(?:animation|animation-name)$/, (decl) => {
  for (const match of decl.value.matchAll(/[-_a-zA-Z][\w-]*/g)) referencedAnimations.add(match[0]);
});
root.walkAtRules(/keyframes$/i, (rule) => {
  if (!referencedAnimations.has(rule.params)) rule.remove();
});

const buckets = new Map(styleOrder.map((name) => [name, postcss.root()]));
let bucket = "foundation.css";
for (const node of [...root.nodes]) {
  if (node.type === "comment") {
    if (node.text.includes("Header and navigation")) bucket = "shared.css";
    else if (node.text.trim() === "Technology") bucket = "pages.css";
    else if (node.text.includes("Interaction and motion polish")) bucket = "motion.css";
    else if (node.text.includes("MARDE Nexus: coordination layer")) bucket = "nexus.css";
    else if (node.text.includes("Shared component contracts")) bucket = "shared-ui.css";
  }
  buckets.get(bucket).append(node);
}

function formatContainer(container, depth = 0) {
  const indent = "  ".repeat(depth);
  const childIndent = "  ".repeat(depth + 1);
  for (const node of container.nodes ?? []) {
    node.raws.before = depth === 0 ? "\n\n" : `\n${indent}`;
    if (node.type === "comment") continue;
    if (node.type === "decl") {
      node.raws.before = `\n${indent}`;
      node.raws.between = ": ";
      continue;
    }
    if (node.type === "rule" || (node.type === "atrule" && node.nodes)) {
      node.raws.after = `\n${indent}`;
      formatContainer(node, depth + 1);
      for (const child of node.nodes ?? []) {
        if (child.type === "decl") child.raws.before = `\n${childIndent}`;
      }
    }
  }
}

await fs.mkdir(stylesRoot, { recursive: true });
for (const [name, cssRoot] of buckets) {
  formatContainer(cssRoot);
  await fs.writeFile(path.join(stylesRoot, name), `${cssRoot.toString().trim()}\n`);
}
await fs.writeFile(globalsPath, [
  '@import "tailwindcss";',
  ...styleOrder.map((name) => `@import "./styles/${name}";`),
  "",
].join("\n"));

const outputCss = (await Promise.all(styleOrder.map((name) => fs.readFile(path.join(stylesRoot, name), "utf8")))).join("\n");
const outputRoot = postcss.parse(outputCss);
const after = { bytes: Buffer.byteLength(outputCss), rules: 0, declarations: 0 };
outputRoot.walkRules(() => after.rules++);
outputRoot.walkDecls(() => after.declarations++);
console.log(JSON.stringify({ before, after, removedRules, removedDeclarations }, null, 2));
