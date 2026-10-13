import pages from './generated/pages.json';
import { createHandler, createOriginFetch } from './negotiation.mjs';
const worker = { fetch: createHandler(pages, createOriginFetch()) };
export default worker;
