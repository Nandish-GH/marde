import assert from 'node:assert/strict';
import { load } from 'cheerio';

// Live checks supplement export tests: origin/CDN settings can introduce redirect chains.
// Search ranking is deliberately not asserted: it depends on external search indexes.
const canonical = 'https://mardeinc.com/';
const options = { redirect: 'manual', signal: AbortSignal.timeout(15000) };
for (const source of ['http://mardeinc.com/', 'http://www.mardeinc.com/', 'https://www.mardeinc.com/']) {
  const response = await fetch(source, options);
  assert.ok([301, 308].includes(response.status), `${source}: expected permanent redirect, got ${response.status}`);
  assert.equal(new URL(response.headers.get('location'), source).href, canonical, `${source}: redirect must reach apex HTTPS in one hop`);
  console.log(`PASS brand redirect ${source} -> ${canonical}`);
}
const response = await fetch(canonical, { headers: { Accept: 'text/html' }, ...options });
assert.equal(response.status, 200);
assert.ok(!/noindex/i.test(response.headers.get('x-robots-tag') || ''));
const $ = load(await response.text());
assert.equal($('link[rel="canonical"]').attr('href'), canonical);
assert.ok(!/noindex/i.test($('meta[name="robots"]').attr('content') || ''));
assert.match($('title').text(), /^MARDE\b/);
assert.equal($('meta[property="og:site_name"]').attr('content'), 'MARDE');
const entities = $('script[type="application/ld+json"]').toArray().map(el => JSON.parse($(el).text()));
const org = entities.find(item => item['@type'] === 'Organization');
const website = entities.find(item => item['@type'] === 'WebSite');
assert.equal(org.name, 'MARDE Inc.'); assert.equal(org.legalName, org.name);
assert.equal(org.alternateName, 'MARDE'); assert.equal(org.url, canonical);
assert.equal(website.name, 'MARDE'); assert.equal(website.alternateName, org.name);
assert.equal(website.url, canonical); assert.equal(website.publisher['@id'], org['@id']);
assert.equal(org.contactPoint.email, 'team@mardeinc.com');
assert.equal(org.address.addressRegion, 'NJ'); assert.equal(org.address.addressCountry, 'US');
assert.ok($('footer').text().includes(org.name));
assert.ok($('footer').text().includes(org.contactPoint.email));
assert.ok($('footer').text().includes('New Jersey, USA'));
console.log('PASS crawlable canonical homepage and consistent MARDE/MARDE Inc. identity');
