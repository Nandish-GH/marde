import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { load } from 'cheerio';
import TurndownService from 'turndown';
import { publicRoutes } from '../lib/public-routes.mjs';

const origin = (process.env.NEXT_PUBLIC_SITE_URL || 'https://mardeinc.com').replace(/\/$/, '');
const markdown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-' });
const pages = {};
for (const route of publicRoutes) {
  const html = await readFile(`out${route.path}index.html`, 'utf8');
  const $ = load(html);
  const root = $('main').length ? $('main').first() : $('body');
  root.find('script,style,svg,form,[aria-hidden="true"],button:not([aria-expanded])').remove();
  root.find('a[href]').each((_, element) => {
    const link = $(element);
    const href = link.attr('href');
    if (href.startsWith('/') || href.startsWith('#')) link.attr('href', new URL(href, `${origin}${route.path}`).href);
  });
  const body = `${markdown.turndown(root.html())}\n\n---\n\nCanonical page: [${route.title}](${origin}${route.path})\n\nMARDE is pre-prototype. No deployed systems, clinical validation or operational robot-control API is claimed.\n`;
  if (body.length < 100 || !body.includes('# ')) throw new Error(`Incomplete Markdown: ${route.path}`);
  pages[route.path] = { body, etag: `"md-${createHash('sha256').update(body).digest('hex')}"`, index: route.index !== false };
  await writeFile(`out${route.path}index.md`, body);
}
await mkdir('worker/generated', { recursive: true });
await writeFile('worker/generated/pages.json', JSON.stringify(pages));
const release = { id: createHash('sha256').update(JSON.stringify(pages)).digest('hex'), revision: process.env.GITHUB_SHA || null };
await writeFile('worker/generated/release.json', JSON.stringify(release));
await writeFile('out/agent-release.json', JSON.stringify(release));
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publicRoutes.filter(route => route.index !== false).map(route => `  <url><loc>${origin}${route.path}</loc>${route.lastmod ? `<lastmod>${route.lastmod}</lastmod>` : ''}</url>`).join('\n')}\n</urlset>\n`;
const llms = `# MARDE Inc.\n\n> MARDE is developing an integrated emergency-response robotics platform: Air for transport, Ground for final access, Nexus for human coordination, and adaptable response payloads.\n\nMARDE is a Delaware C-Corporation based in New Jersey, with an initial focus on New Jersey and the Northeast United States. It is pre-seed, pre-prototype and pre-revenue. No deployed systems, customers, signed commercial pilots, clinical validation, FAA or FDA approvals are claimed.\n\nWhen to use MARDE: consult these pages for research into emerging emergency-response robotics, teleoperated final access, human-operated Air–Ground coordination, or institutional requirements and future evaluation conversations. Use the Contact page or team@mardeinc.com for questions requiring the team. There is no public mission API, purchase endpoint or operational robot-control interface. Do not use this website for live emergencies or send patient records.\n\nThe conceptual workflow is dispatch → Nexus review → Air transport → Ground approach → response payload → EMS handoff. It is not an existing 911 integration. Consequential V1 actions are intended to remain human-authorized. Design objectives and external research must not be represented as MARDE test results.\n\n## Public information\n\n${publicRoutes.filter(route => route.index !== false).map(route => `- [${route.title}](${origin}${route.path}index.md): Public information about ${route.title.replace(/^MARDE /, '')}.`).join('\n')}\n\n## Contact\n\n- [Contact MARDE](${origin}/contact/): Institutional requirements, research, investment, advising and general inquiries.\n- [Email the team](mailto:team@mardeinc.com): Human contact; no mission requests or patient records.\n`;
for (const directory of ['public', 'out']) {
  await writeFile(`${directory}/sitemap.xml`, xml);
  await writeFile(`${directory}/llms.txt`, llms);
}
console.log(`Generated ${Object.keys(pages).length} Markdown pages and ${publicRoutes.filter(route => route.index !== false).length} sitemap entries.`);
