# Agent readiness deployment

The website remains a Next.js static export on GitHub Pages. Cloudflare routes run a Worker in front of that origin. Do not use a Worker Custom Domain: that makes the Worker the origin instead of retaining the existing GitHub Pages origin.

## What is delivered

`npm run build` exports HTML, extracts editorial text into Markdown, writes per-page `index.md` files, and generates sitemap.xml and llms.txt from `lib/public-routes.mjs`. The same extraction creates `worker/generated/pages.json` and a content-derived release marker. Generated Worker files are ignored by Git and transferred through the deployment artifact.

All 27 public information/contact-card routes receive Markdown representations. The sitemap contains only the 22 indexable editorial routes. Contact cards preserve their existing noindex behavior. The thank-you route, vCards and framework payloads bypass page negotiation. FAQ answers and all response-sequence descriptions exist in the exported HTML.

## Local verification

Use Node 22.13 or later. Node 24 also works. Install with `npm ci`, then run:

```sh
npm run lint
npm run test:agent
npm run build
npx tsc --noEmit
npm run verify:export
npm run worker:check
```

For browser regression tests, set `QA_EXPORT=1` and run `npm run test:browser`; Playwright starts the static export server. Do not submit real Formspree requests: the tests intercept submissions and scheduling requests.

For end-to-end header/body checks, start `node scripts/serve-export.mjs` and `node scripts/serve-worker.mjs` in separate terminals. Set `VERIFY_BASE_URL=http://127.0.0.1:3002` and run `npm run verify:public`. This harness uses the actual Worker negotiation module and the exported origin.

## Owner setup and activation

1. Keep GitHub Pages configured for mardeinc.com. In the existing Cloudflare zone, verify both apex and www DNS records reach that origin, are proxied, and have working HTTPS. Record current DNS and routing settings before changing them.
2. Create a Cloudflare API token restricted to the appropriate account and zone, with Workers Scripts edit, Workers Routes edit and Zone read. Worker script editing is account-scoped; route editing and zone lookup must be restricted to mardeinc.com. These are the permissions verified during the first deployment.
3. Add GitHub Actions secrets `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`. Never commit their values. Add repository variable `CLOUDFLARE_AGENT_ENABLED=true` only when the domain setup is ready.
4. Run the existing deployment workflow. It builds/tests once, deploys GitHub Pages, downloads the matching Worker artifact, waits for the origin's content-derived release ID, and then activates apex and www Worker routes. A failed or mismatched origin deployment prevents activation.
5. The final workflow step checks every public route in HTML and Markdown, explicit Markdown files, machine-readable files and a nonexistent path. Inspect failures before considering the release complete.

The committed `wrangler.jsonc` contains no routes and disables workers.dev previews. `npm run worker:check` is a dry-run bundle validation. Do not run bare `wrangler deploy` against an already active Worker: use the deployment workflow's explicit routes.

## Verify the real domain

```sh
curl -sS -L -i -H 'Accept: text/markdown' https://mardeinc.com/
curl -sS -L -i -H 'Accept: text/html' https://mardeinc.com/
curl -sS -L -i -H 'Accept: text/markdown' https://mardeinc.com/__ora-verification-missing
curl -sS -L -i -H 'Accept: text/html' https://mardeinc.com/__ora-verification-missing
npm run verify:public
```

The homepage must produce actual Markdown with HTTP 200, text/markdown and Vary: Accept. Its HTML variant remains HTML. The missing-path Markdown response must be HTTP 404 with explanatory text and discovery links. HEAD uses the same status/headers without a body. Unsupported page representations receive 406; explicit Markdown file URLs serve Markdown directly.

Negotiated pages use Cache-Control: no-store, including origin HTML subrequests. This avoids relying on CDN support for arbitrary Vary keys. Markdown uses its own content-hash ETag. HTML conditional/range validators are removed from negotiated origin requests so a Markdown validator cannot suppress an HTML body. Assets and machine-readable files retain origin behavior.

After activation, rerun the Ora/Is Agentic and Accept Markdown audits in their public interfaces and record dates, URLs, evidence and results. Their reported scores cannot be inferred from local tests. Branded rankings and AI citations also require independent observation.

## Rollback

Remove both mardeinc.com/* and www.mardeinc.com/* Worker routes in Cloudflare and set `CLOUDFLARE_AGENT_ENABLED=false`. Requests then go directly to GitHub Pages. Roll back the Pages deployment separately if necessary. Do not delete the DNS records or company content as a Worker rollback.

Future content revisions must update the relevant registry lastmod. Builds never substitute today's date for every page. Sitemap and llms.txt source copies are regenerated deterministically to match the export.
