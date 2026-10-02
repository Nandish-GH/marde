# Implementation verification — October 1, 2026

Published to GitHub Pages and the Cloudflare Worker on October 1, 2026 (October 2 UTC). No third-party profile or outreach message has been published.

## Delivered

- Cloudflare Worker for weighted HTML/Markdown negotiation, Markdown 404s, 406 responses, HEAD, canonical redirects, independent validators and cache isolation.
- Markdown extracted from exported HTML for 27 public pages, with explicit index.md files and discovery Link headers.
- A single public-route registry producing 22 sitemap entries and protocol-formatted llms.txt guidance.
- About, EMS requirements, four platform detail pages, research library, six sourced articles and a factual development-status page.
- Twenty visible FAQ answers, Organization contact/address fields, founder linkage, Person schema and article/concept schema.
- Preserved existing forms, donation destinations, profile discovery restrictions, technology anchors, navigation and motion behavior.
- Matching origin/Worker deployment artifacts and an origin release-ID gate before Worker activation.
- Company profile brief, three unsent editorial pitches and a 90-day observation protocol.

Articles contain approximately 1,214–1,277 words in exported article text; platform pages satisfy the 600–900-word target. Articles use MARDE Inc. as the explicit organizational author and distinguish proposed exercises from external findings and MARDE results. No fabricated engineering update was published.

## Passed checks

| Check | Result |
| --- | --- |
| ESLint | Passed |
| TypeScript | Passed |
| Production static build | Passed on Next.js 16.3.8 |
| Worker tests | 25 passed |
| Playwright desktop/mobile | 88 passed; 4 device-specific skips |
| Export verification | 27 routes; schema, links, anchors, FAQ parity, article lengths, trust-page lengths, sitemap, robots and llms.txt passed |
| Local edge/origin HTTP verification | 86 checks passed: all page variants, explicit Markdown files, discovery files and both 404 variants |
| Production HTTP verification | 86 checks passed across every public route and machine-readable file; additional quality-value, wildcard, 406, HEAD, conditional-validator, redirect and file-bypass checks passed |
| Production browser regression | 88 passed; 4 device-specific skips, with mocked submissions |
| Wrangler deployment | Worker version ca423031-b9f9-4317-ab7b-4e72be46112b activated after matching origin release 3ad3a55cfbe59c59bba71c8290ef28cacb3e260e36e6c6b0c2dd44ef3602a9a0 |
| npm dependency audit | Zero vulnerabilities after compatible patch updates |
| Git whitespace checks | Passed |

Browser regression coverage includes intercepted contact-form success/failure, navigation, profile sharing/downloads, scheduling, responsive layout, keyboard focus, reduced motion, no-JavaScript fallback and serious/critical accessibility checks. No real form submissions occurred. About desktop and Air mobile screenshots were inspected and retain the existing visual system.

Local and production curl evidence:

- `/`, Accept text/markdown: 200, text/markdown; charset=utf-8, Vary: Accept, a nonempty Markdown body and a Markdown-specific ETag.
- `/`, Accept text/html: 200, text/html, Vary includes Accept, original HTML content.
- `/__ora-verification-missing`, Accept text/markdown: 404, text/markdown; charset=utf-8, Vary: Accept, explanatory Markdown linking llms.txt, sitemap.xml and contact.

## Production observations and remaining work

The public homepage now returns Markdown for Accept: text/markdown, with Content-Type: text/markdown; charset=utf-8 and Vary: Accept. The nonexistent path returns HTTP 404 with an explanatory Markdown body and links to llms.txt, sitemap.xml and Contact. Browser requests retain HTML. HTTP apex and HTTPS www redirect directly to HTTPS apex.

The four existing GitHub Pages apex A records and www CNAME are proxied through Cloudflare. Mail records were preserved. Worker routes mardeinc.com/* and www.mardeinc.com/* are active; workers.dev and preview URLs are disabled. No paid plan was enabled. With explicit owner approval, a token limited to this account's Workers Scripts edit and mardeinc.com's Workers Routes edit/Zone read was created and stored in encrypted GitHub Actions secrets alongside the account ID. CLOUDFLARE_AGENT_ENABLED=true enables synchronized subsequent deployments. The temporary local credential copy was removed.

The fresh [Is Agentic report](https://is-agentic.com/scan/mardeinc.com), snapshot October 2, 2026 at 00:44 UTC (October 1 local), reports 100/100 under its inferred Docs & content classification: 6/6 essential checks and 6/6 recommended checks pass. This is an observed technical-readiness snapshot, not a guarantee of branded search rankings or AI citations. No search ranking or AI citation improvement is claimed. Search Console access, verified directory accounts, any fuller public business address and authorization to send editorial pitches remain owner dependencies. Google Business Profile eligibility is not established by the current public facts.
