// Local integration harness: identical negotiation handler, static export origin.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { createHandler } from '../worker/negotiation.mjs';
const pages = JSON.parse(await readFile('worker/generated/pages.json', 'utf8'));
const handle = createHandler(pages, request => {
  const url = new URL(request.url); url.hostname = '127.0.0.1'; url.port = '3001';
  return fetch(new Request(url, request));
});
createServer(async (req, res) => {
  try {
    const request = new Request(`http://127.0.0.1:3002${req.url}`, { method: req.method, headers: req.headers });
    const response = await handle(request);
    const headers = Object.fromEntries(response.headers);
    delete headers['content-encoding']; delete headers['content-length'];
    res.writeHead(response.status, headers).end(Buffer.from(await response.arrayBuffer()));
  } catch (error) { res.writeHead(500).end(error.message); }
}).listen(3002, '127.0.0.1', () => console.log('Agent edge integration: http://127.0.0.1:3002'));
