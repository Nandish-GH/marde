import { readdir, copyFile, readFile, writeFile } from 'node:fs/promises';
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
    } else if (entry.name.endsWith('.html')) {
      const html = await readFile(file, 'utf8');
      // Exclude public page content from Cloudflare's email-link rewriting at origin.
      // These inert comments preserve React markup and also cover plain-text emails.
      if (!html.includes('<!--email_off-->') && /<body\b/i.test(html)) {
        await writeFile(file, html.replace(/(<body\b[^>]*>)/i, '$1<!--email_off-->').replace(/<\/body>/i, '<!--/email_off--></body>'));
      }
    } else if (segmentRoot && entry.name.endsWith('.txt')) {
      const filename = path.relative(segmentRoot, file).split(path.sep).join('.');
      await copyFile(file, path.join(segmentRoot, filename));
      copied++;
    }
  }
}
await visit(root);
console.log(`Static export: normalized ${copied} segment filenames.`);
