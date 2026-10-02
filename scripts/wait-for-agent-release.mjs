import { readFile } from 'node:fs/promises';
const expected = JSON.parse(await readFile('worker/generated/release.json', 'utf8'));
for (let attempt = 0; attempt < 18; attempt++) {
  try {
    const response = await fetch(`https://mardeinc.com/agent-release.json?release=${expected.id}&attempt=${attempt}`, { cache: 'no-store', signal: AbortSignal.timeout(15000) });
    if (response.ok && (await response.json()).id === expected.id) { console.log(`Origin serves matching release ${expected.id}.`); process.exit(0); }
  } catch { /* Retry origin propagation; never activate mismatched Markdown. */ }
  await new Promise(resolve => setTimeout(resolve, 10000));
}
throw new Error('GitHub Pages did not serve the matching release. Worker was not activated.');
