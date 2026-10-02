import assert from 'node:assert/strict';
import { publicRoutes } from '../lib/public-routes.mjs';
const base = process.env.VERIFY_BASE_URL || 'https://mardeinc.com';
let failures = 0;
for (const route of publicRoutes) for (const accept of ['text/html', 'text/markdown']) {
  try {
    const response = await fetch(`${base}${route.path}`, { headers: { Accept: accept }, signal: AbortSignal.timeout(15000) });
    assert.equal(response.status, 200); assert.ok(response.headers.get('content-type')?.startsWith(accept));
    assert.match(response.headers.get('vary') || '', /\bAccept\b/i); assert.ok((await response.text()).length > 20);
    console.log(`PASS ${accept} ${route.path}`);
  } catch (error) { failures++; console.error(`FAIL ${accept} ${route.path}: ${error.message}`); }
}
for (const file of ['llms.txt', 'sitemap.xml', 'robots.txt']) {
  try { const response = await fetch(`${base}/${file}`, { signal: AbortSignal.timeout(15000) }); assert.equal(response.status, 200); assert.ok((await response.text()).length > 20); console.log(`PASS /${file}`); }
  catch (error) { failures++; console.error(`FAIL /${file}: ${error.message}`); }
}
for (const route of publicRoutes) {
  try { const response = await fetch(`${base}${route.path}index.md`, { signal: AbortSignal.timeout(15000) }); assert.equal(response.status, 200); assert.match(response.headers.get('content-type') || '', /^text\/markdown/); assert.ok((await response.text()).length > 20); console.log(`PASS ${route.path}index.md`); }
  catch (error) { failures++; console.error(`FAIL ${route.path}index.md: ${error.message}`); }
}
for (const accept of ['text/html', 'text/markdown']) {
  try { const response = await fetch(`${base}/__ora-verification-missing`, { headers: { Accept: accept }, signal: AbortSignal.timeout(15000) }); assert.equal(response.status, 404); assert.ok(response.headers.get('content-type')?.startsWith(accept)); const body = await response.text(); assert.ok(body.length > 20); if (accept === 'text/markdown') assert.ok(body.includes('/llms.txt')); console.log(`PASS ${accept} 404`); }
  catch (error) { failures++; console.error(`FAIL 404 ${accept}: ${error.message}`); }
}
process.exitCode = failures ? 1 : 0;
