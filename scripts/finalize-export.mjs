import { readdir, copyFile } from 'node:fs/promises';
import path from 'node:path';

// Next 16.3 on Windows leaves backslash-separated RSC segments as directories.
// The browser and Linux export use dot-separated filenames. Add matching files
// without deleting the originals; this is a no-op for the GitHub Linux build.
const root = path.resolve('out');
let copied = 0;
async function visit(directory, segmentRoot) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await visit(file, segmentRoot || (entry.name.startsWith('__next.') ? directory : undefined));
    } else if (segmentRoot && entry.name.endsWith('.txt')) {
      const filename = path.relative(segmentRoot, file).split(path.sep).join('.');
      await copyFile(file, path.join(segmentRoot, filename));
      copied++;
    }
  }
}
await visit(root);
console.log(`Static export: normalized ${copied} segment filenames.`);
