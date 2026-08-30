import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const baseURL = process.env.QA_BASE_URL ?? "http://localhost:3000";
const output = path.resolve("docs/qa/operational-relay-homepage");
await mkdir(output, { recursive: true });

const browser = await chromium.launch();
const viewports = [
  ["mobile-320", 320, 720], ["mobile-390", 390, 844], ["mobile-430", 430, 932],
  ["tablet-768", 768, 1024], ["laptop-1024", 1024, 768], ["desktop-1280", 1280, 900],
  ["desktop-1440", 1440, 1000],
];

for (const [name, width, height] of viewports) {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto(`${baseURL}/`, { waitUntil: "networkidle" });
  await page.screenshot({ path: path.join(output, `${name}-hero.png`) });
  if (name === "mobile-390" || name === "desktop-1440") {
    await page.screenshot({ path: path.join(output, `${name}-full.png`), fullPage: true });
    await page.locator("#home-nexus").scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(output, `${name}-nexus.png`) });
  }
  await context.close();
}

await browser.close();
