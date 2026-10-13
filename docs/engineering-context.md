# MARDE engineering context

Reviewed October 13, 2026 (America/New_York). This document records project constraints and verified findings for future contributors and coding assistants.

## Architecture and boundaries

- Next.js App Router exports static HTML to `out/`. There is no application database, authentication system, mission API, or production Node server.
- Cloudflare Worker content negotiation serves generated Markdown or forwards to GitHub Pages. Preserve `Vary: Accept`, variant cache isolation, canonical redirects, HEAD behavior, conditional responses, and noindex contact cards.
- `lib/public-routes.mjs` is the route registry. `scripts/generate-agent-content.mjs` builds Markdown, sitemap and `llms.txt` from the export. Avoid separate manually maintained copies of public facts.
- Formspree processes contact submissions. Stripe processes payments externally. Formspree IDs, Stripe publishable keys and payment links are public configuration, not secret credentials. Never add secret keys to `NEXT_PUBLIC_*` variables.
- Analytics is optional and starts after consent. Do not introduce tracking before consent.
- Keep MARDE's existing design. The company is pre-prototype; concept artwork and external research must not be described as deployed products or MARDE test results.

## Verification

Use Node 22.13 or later (the current Lighthouse CLI requires Node 22.19 or later). Read the installed `node_modules/next/dist/docs/` guides before coding; their version is authoritative.

Run `npm run audit:security`, `npm run lint`, `npm run test:agent`, `npm run build`, `npm run verify:export`, and `npm run worker:check` for relevant dependency or Worker changes. Use `QA_EXPORT=1 npm run test:browser` for browser regressions. Intercept Formspree and payment traffic during tests; no real messages or payments are needed.

The agent test command names the test file explicitly because shell wildcard expansion is inconsistent on Windows and older Node installations.

## Security review

- Updated `source-map-js` to 1.2.2 and overrode `sharp` to 0.35.5 to address [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q) and [GHSA-wq5f-xc86-pv6w](https://github.com/advisories/GHSA-wq5f-xc86-pv6w). Miniflare pinned the older Sharp patch, so a root override was needed. Revisit the override when upstream dependencies adopt the patched version.
- Production dependency audit reports zero vulnerabilities after the update. This does not certify the entire website as vulnerability-free.
- The full dependency audit still reports five high-severity entries from the development-only `braces` / `micromatch` / `fast-glob` / Next.js ESLint chain. The available `braces` release is 3.0.3, which remains affected by [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). These tools currently consume repository-controlled patterns, not public request data. Recheck for a compatible upstream fix; do not force-downgrade Next.js lint tooling to clear a counter.
- Worker responses include `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin`, including assets, redirects and error responses. GitHub Pages without the Worker does not inherit these headers. Tests cover Markdown/HTML variants, HEAD and 304 responses.
- JSON-LD serialization escapes `<`; React renders editorial text. No application SQL or authenticated API was found in the reviewed architecture, so SQL-injection or authorization-test findings would need a real affected surface.
- Contact submissions time out after 30 seconds and preserve entries for retry. A timeout means delivery is unconfirmed; users should check before repeatedly resending.

## Performance baseline

Lighthouse 13.5.0 against the local production export homepage, with mobile simulated throttling: performance **90**, accessibility **100**, best practices **100**, SEO **100**. The raw report is in `tmp/lighthouse-home.json` when generated locally. These are a single lab run, not live-site or field Core Web Vitals scores.

Reported opportunities: about 27 KiB unused JavaScript, 14 KiB legacy JavaScript, 9 KiB image savings, and 370 ms estimated render-blocking savings. Framework/shared CSS is not safe to remove simply because one page's first viewport does not use it. The local server's `no-store` headers also prevent back/forward cache restoration; production variant isolation is intentional and should not be removed without cache tests.

## Optional tools

- [21st.dev](https://21st.dev/) and Mobbin provide UI components or references. Do not install components or redesign the site merely to use a tool.
- [Context7](https://context7.com/docs/resources/developer) retrieves current library documentation; it does not maintain this project's architecture or persistent memory. Local version-matched Next.js documentation remains the first source here.
- [CUAWright](https://github.com/microsoft/CUAWright) is a browser/desktop automation framework. This repo already uses Playwright scripts and regression tests; another agent framework is not required to test it.
- Graphify and voice-transcription tools are optional development workflow choices, not website runtime dependencies. This document provides reviewable, version-controlled context without a knowledge-graph service.
- The referenced Never Get Hacked skill was not found among installed skills, and no authoritative package location was established. It was not installed or executed. The security review used the installed engineering code-review skill and direct dependency/source checks; it is not an execution of that named skill's eleven-stage ladder.
