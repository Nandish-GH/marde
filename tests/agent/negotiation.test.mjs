import test from 'node:test';
import assert from 'node:assert/strict';
import { createHandler, negotiate, varyAccept } from '../../worker/negotiation.mjs';

for (const [accept, expected] of [
  [undefined, 'html'], ['', 'html'], ['*/*', 'html'], ['text/*', 'html'],
  ['text/markdown', 'markdown'], ['text/html', 'html'], ['application/json', null],
  ['text/markdown;q=0,text/html;q=0', null],
  ['text/markdown;q=0.8,text/html;q=0.2', 'markdown'],
  ['text/markdown;q=0.5,text/html;q=0.5', 'html'],
  ['text/markdown;q=0,*/*;q=1', 'html'],
  ['text/html;q=0,text/*;q=1', 'markdown'],
  ['text/markdown;q=invalid,text/html;q=0.5', 'html'],
  ['TEXT/MARKDOWN; charset=utf-8', 'markdown'],
]) test(`Accept ${accept} → ${expected}`, () => assert.equal(negotiate(accept), expected));

const pages = { '/': { body: '# MARDE\n\nPre-prototype robotics information.\n', etag: '"md-test"', index: true }, '/technology/air/': { body: '# Air\n\nConcept.', etag: '"md-air"', index: true }, '/nandish/': { body: '# Nandish', etag: '"md-person"', index: false } };
const origin = async request => new Response(request.method === 'HEAD' ? null : '<html>Original page</html>', { status: new URL(request.url).pathname.includes('missing') ? 404 : 200, headers: { 'Content-Type': 'text/html', Vary: 'Accept-Encoding', ETag: '"html-test"' } });
const handle = createHandler(pages, origin);
const request = (path, accept = 'text/markdown', extra = {}) => new Request(`https://mardeinc.com${path}`, { ...extra, headers: { Accept: accept, ...extra.headers } });

test('homepage negotiates a real Markdown body and headers', async () => {
  const response = await handle(request('/'));
  assert.equal(response.status, 200);
  assert.match(response.headers.get('content-type'), /^text\/markdown/);
  assert.equal(response.headers.get('vary'), 'Accept');
  assert.equal(await response.text(), pages['/'].body);
});
test('HTML is forwarded unchanged, with Vary merged', async () => {
  const response = await handle(request('/', 'text/html'));
  assert.equal(await response.text(), '<html>Original page</html>');
  assert.equal(response.headers.get('vary'), 'Accept-Encoding, Accept');
});
test('Markdown 404 has useful links, HTML 404 retains origin status', async () => {
  const md = await handle(request('/missing'));
  assert.equal(md.status, 404);
  const body = await md.text();
  assert.ok(body.length > 20);
  for (const link of ['/llms.txt', '/sitemap.xml', '/contact/']) assert.ok(body.includes(link));
  assert.match(md.headers.get('content-type'), /text\/markdown/);
  assert.equal((await handle(request('/missing', 'text/html'))).status, 404);
});
test('unacceptable representations return 406, including HEAD', async () => {
  assert.equal((await handle(request('/', 'application/json'))).status, 406);
  const response = await handle(request('/', 'application/json', { method: 'HEAD' }));
  assert.equal(response.status, 406); assert.equal(await response.text(), '');
});
test('HEAD matches GET headers and does not return a body', async () => {
  for (const path of ['/', '/missing']) for (const accept of ['text/markdown', 'text/html']) {
    const get = await handle(request(path, accept));
    const head = await handle(request(path, accept, { method: 'HEAD' }));
    assert.equal(head.status, get.status);
    assert.deepEqual([...head.headers], [...get.headers]);
    assert.equal(await head.text(), '');
  }
});
test('variants cannot contaminate cache or conditional responses', async () => {
  for (const accept of ['text/html', 'text/markdown']) assert.equal((await handle(request('/', accept))).headers.get('cache-control'), 'no-store');
  assert.equal((await handle(request('/', 'text/markdown', { headers: { 'If-None-Match': 'W/"md-test"' } }))).status, 304);
  assert.equal((await handle(request('/', 'text/markdown', { headers: { 'If-None-Match': '"html-test"' } }))).status, 200);
  let conditional;
  const htmlHandler = createHandler(pages, async req => { conditional = req.headers.get('if-none-match'); return origin(req); });
  assert.equal((await htmlHandler(request('/', 'text/html', { headers: { 'If-None-Match': '"md-test"' } }))).status, 200);
  assert.equal(conditional, null);
});
test('assets, files, RSC and non-GET/HEAD bypass negotiation', async () => {
  const cases = [request('/llms.txt'), request('/sitemap.xml'), request('/robots.txt'), request('/image.webp'), request('/_next/static/chunk.js'), request('/thank-you/'), request('/contacts/nandish.vcf'), request('/? _rsc=x'.replace(' ', '')), request('/', 'text/markdown', { headers: { RSC: '1' } }), request('/', 'text/markdown', { headers: { 'Next-Router-Prefetch': '1' } }), request('/', 'text/markdown', { method: 'POST', body: 'test' })];
  for (const req of cases) { const response = await handle(req); assert.equal(response.headers.get('vary'), 'Accept-Encoding'); assert.match(response.headers.get('content-type'), /text\/html/); }
});
test('canonical and trailing-slash redirects preserve query strings', async () => {
  for (const url of ['http://mardeinc.com/?a=1', 'https://www.mardeinc.com/?a=1']) {
    const response = await handle(new Request(url)); assert.equal(response.status, 308); assert.equal(response.headers.get('location'), 'https://mardeinc.com/?a=1');
  }
  const response = await handle(request('/technology/air?ref=1'));
  assert.equal(response.status, 308); assert.equal(response.headers.get('location'), 'https://mardeinc.com/technology/air/?ref=1');
});
test('contact-card Markdown retains noindex', async () => assert.equal((await handle(request('/nandish/'))).headers.get('x-robots-tag'), 'noindex, nofollow'));
test('explicit Markdown aliases work without an Accept header and expose guidance', async () => {
  const response = await handle(new Request('https://mardeinc.com/index.md'));
  assert.equal(await response.text(), pages['/'].body);
  assert.match(response.headers.get('content-type'), /text\/markdown/);
  assert.match(response.headers.get('link'), /llms.txt/);
  assert.match(response.headers.get('x-robots-tag'), /noindex/);
  const html = await handle(request('/', 'text/html'));
  assert.match(html.headers.get('link'), /index.md.*alternate/);
});
test('Vary deduplicates Accept and respects wildcard', () => {
  for (const value of ['accept, Accept-Encoding', '*']) { const headers = new Headers({ Vary: value }); varyAccept(headers); assert.equal(headers.get('vary'), value); }
});
