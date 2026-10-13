import pages from './generated/pages.json';
import { createHandler, bypass } from './negotiation.mjs';
const worker = { fetch: createHandler(pages, request => bypass(request) ? fetch(request) : fetch(request, { cf: { cacheTtl: 0, cacheEverything: false } })) };
export default worker;
