import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { load } from 'cheerio';
import { publicRoutes } from '../lib/public-routes.mjs';
const pages = JSON.parse(await readFile('worker/generated/pages.json', 'utf8'));
const sitemap = load(await readFile('out/sitemap.xml', 'utf8'), { xmlMode: true });
const entries = sitemap('url loc').map((_, el) => sitemap(el).text()).get();
assert.equal(entries.length, publicRoutes.filter(route => route.index !== false).length);
assert.ok(!entries.some(url => /thank-you|contacts|nandish/.test(url)));
const registry = new Set(publicRoutes.map(route => route.path));
for (const route of publicRoutes) {
  const $ = load(await readFile(`out${route.path}index.html`, 'utf8'));
  assert.equal($('h1').length, 1, route.path);
  assert.equal($('link[rel=canonical]').attr('href'), `https://mardeinc.com${route.path}`, route.path);
  assert.ok(pages[route.path]?.body.length > 100);
  assert.equal(await readFile(`out${route.path}index.md`, 'utf8'), pages[route.path].body);
  for (const script of $('script[type="application/ld+json"]').toArray()) JSON.parse($(script).text());
  for (const link of $('a[href]').toArray()) {
    const href = $(link).attr('href');
    const url = new URL(href, `https://mardeinc.com${route.path}`);
    if (url.origin !== 'https://mardeinc.com') continue;
    const path = url.pathname.endsWith('/') ? url.pathname : `${url.pathname}/`;
    if (/\.[^/]+$/.test(url.pathname)) await access(`out${url.pathname}`);
    else assert.ok(registry.has(path) || path === '/thank-you/', `${route.path}: broken ${href}`);
    if (url.hash && registry.has(path)) { const target = path === route.path ? $ : load(await readFile(`out${path}index.html`, 'utf8')); assert.ok(target(`[id="${decodeURIComponent(url.hash.slice(1))}"]`).length, `Missing anchor ${href}`); }
  }
  if (['/about/', '/contact/', '/privacy/'].includes(route.path)) assert.ok($('main').text().replace(/\s+/g, ' ').length >= 500, route.path);
  if (route.path === '/faq/') {
    const schema = $('script[type="application/ld+json"]').toArray().map(el => JSON.parse($(el).text())).find(data => data['@type'] === 'FAQPage');
    assert.equal(schema.mainEntity.length, 20);
    for (const item of schema.mainEntity) { assert.ok($('main').text().includes(item.acceptedAnswer.text)); const words = item.acceptedAnswer.text.split(/\s+/).length; assert.ok(words >= 50 && words <= 90, `${item.name}: ${words} words`); }
  }
  if (route.path === '/') {
    const graph = JSON.parse($('script[type="application/ld+json"]').first().text())['@graph'];
    const org = graph.find(item => item['@type'] === 'Organization');
    assert.equal(org.contactPoint.email, 'team@mardeinc.com'); assert.equal(org.address.addressRegion, 'NJ');
    for (const phrase of ['Professional responders take over.', 'Is the system deployed today?']) assert.ok(pages['/'].body.includes(phrase));
  }
  if (route.index === false) assert.match($('meta[name="robots"]').attr('content'), /noindex/);
  if (route.index === false) {
    const person = $('script[type="application/ld+json"]').toArray().map(el => JSON.parse($(el).text())).find(item => item['@type'] === 'Person');
    assert.ok(person?.name && person?.jobTitle);
    assert.equal(person.worksFor['@id'], 'https://mardeinc.com/#organization');
    assert.equal(person.url, `https://mardeinc.com${route.path}`);
  }
  if (/^\/technology\/(air|ground|nexus|modules)\/$/.test(route.path)) {
    const count = $('article').first().text().split(/\s+/).length;
    assert.ok(count >= 600 && count <= 1000, `${route.path}: ${count} words`);
  }
  if (/^\/research\/.+\/$/.test(route.path)) {
    const article = $('article').first();
    const count = article.text().split(/\s+/).length;
    assert.ok(count >= 1200 && count <= 2000, `${route.path}: ${count} words`);
    assert.ok(article.find('time[datetime="2026-10-01"]').length);
    assert.ok(article.find('a[href^="https://"]').length);
  }
}
const llms = await readFile('out/llms.txt', 'utf8');
assert.match(llms, /^# MARDE Inc\.\n\n> /); assert.match(llms, /When to use MARDE/); assert.match(llms, /no public mission API/i);
for (const match of llms.matchAll(/\]\((https:\/\/mardeinc.com[^)]*)\)/g)) assert.ok(registry.has(new URL(match[1]).pathname.replace(/index\.md$/, "")));
assert.match(await readFile('out/robots.txt', 'utf8'), /Sitemap: https:\/\/mardeinc.com\/sitemap.xml/);
assert.deepEqual(Object.keys(pages).sort(), [...registry].sort());
console.log(`PASS: ${registry.size} exported routes, schema, internal links, anchors, FAQ, trust pages, Markdown, sitemap and llms.txt.`);
