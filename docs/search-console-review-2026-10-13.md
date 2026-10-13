# Search Console review — October 13, 2026

Reviewed the signed-in mardeinc.com domain property. Dates below are Search Console report dates, not a claim that Google has processed this release immediately.

| Report | Observed evidence | Disposition |
| --- | --- | --- |
| Page indexing | October 8: 16 indexed, 11 not indexed across all known URLs. Submitted-page filter: 16 indexed, six not indexed. | The six public pages are pending Google indexing; all seven earlier indexing requests and the sitemap submission were accepted. Do not repeatedly resubmit them. |
| Page with redirect | Three URLs: HTTP apex, HTTP www, HTTPS www. Earlier validation failed in September. | Intentional permanent redirects to HTTPS apex. Live one-hop checks pass. Do not remove redirects or request indexing of duplicate origins merely to clear this category. |
| Excluded by noindex | `/nandish/` and `/saathvika/`. | Intentional contact-card exclusions. Preserve noindex and sitemap exclusion. No false fix validation was submitted. |
| Discovered, not indexed | Air, Ground, Modules, aviation-pathway, final-access and human-oversight. | Public, linked, canonical, HTTP 200 pages. Already queued for indexing. Google decides indexing; a successful fetch is not an indexing guarantee. |
| Sitemaps | sitemap.xml submitted and read October 13; Success; 22 discovered pages. | No sitemap processing error. |
| HTTPS | October 10: zero non-HTTPS URLs, 12 HTTPS URLs; no issues detected in 90 days. | No HTTPS fix required. |
| Core Web Vitals | October 11: insufficient mobile and desktop usage data in the past 90 days. | No reported field failure. The absence of data is not a passing field score or a code defect. |
| Security issues | No issues detected. | No security issue reported by Search Console. |
| Manual actions | No issues detected. | No manual action or reconsideration request needed. |
| Removals | Temporary removals, outdated content and SafeSearch filtering: no requests in six months. | No active removal found in those reports. |
| Robots | Settings: all files valid. | Public pages remain crawlable; contact downloads intentionally restricted. |
| Search generative AI control | Settings: Include. | No exclusion observed; no preference changed. |
| Crawl stats | October 11: 1.16K requests, 77 ms average response, 95% HTTP 200; apex and www hosts report No problems. | No current host-health failure. |
| Historical DNS failures | Two requests; visible example is HTTP homepage on August 9. | Both hosts resolve now and canonical redirect checks pass. No evidence supporting a DNS change. |
| Historical favicon 404 | August 9 and 11 examples. | favicon.ico now returns HTTP 200. |
| Email-protection 404 | October 3 example: `/cdn-cgi/l/email-protection`. Public email links still pointed at that path during the review. | Actionable CDN rewrite issue; fixed as described below. Historical 404 records will remain until Google's reports refresh. |

## Email-link fix

Cloudflare Scrape Shield rewrote normal public email anchors into `/cdn-cgi/l/email-protection` links. The target returned 404 to a direct crawler request. Human visitors could rely on an injected decoder script, but crawlers and visitors without JavaScript saw the substituted link.

The static export now wraps public body content in Cloudflare's documented `<!--email_off-->` / `<!--/email_off-->` exclusion markers before uploading it to the origin. The comments have no visual effect and cover both email anchors and plain-text addresses. HTML responses also carry `Cache-Control: no-transform`. Header and Worker subrequest options alone did not stop rewriting on the actual production route, so the live verifier caught those attempts and the exclusion was moved into the origin HTML. Asset bypass, Markdown negotiation, variant cache isolation and indexing directives are preserved.

Tests cover complete export exclusion markers, navigation/hydration, HTML transformation directives, HEAD/error responses, normal cache behavior and mailto preservation. The production verifier now checks every registered HTML route for the header and absence of broken Cloudflare email links. No visual redesign was made.

Protocol references: [Cloudflare Request options](https://developers.cloudflare.com/workers/runtime-apis/request/), [email obfuscation](https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/), [Google Page indexing guidance](https://support.google.com/webmasters/answer/7440203).

## Verified deployment

Release `c655da1a1308c85a854ac27cefcb870289d97b30` completed successfully in [GitHub Actions](https://github.com/Nandish-GH/marde/actions/runs/38484633381). The live release marker matches that commit. All 27 registered routes pass HTML/Markdown and email-rewrite checks, all 27 Markdown aliases pass, discovery files and 404 variants pass, and the three canonical redirects remain correct. Additional checks pass for the thank-you page and favicon. The homepage returns the direct team mailto link with zero email-protection links. Cloudflare consumes the exclusion comments when serving the response; their absence in the final HTML is expected.

Local build, lint, export tests, 27 agent tests and desktop/mobile navigation checks passed. CI's full required checks and production verification also passed. No visual design or indexing-policy changes were needed. Screenshot `tmp/gsc-submitted-pages-review.png` records the submitted-page filter and its six outstanding URLs; it is not evidence that Google has indexed them yet.

The code defect is fixed. Historical crawl records and Google's six pending indexing decisions remain visible until the reports refresh. There is no legitimate way to erase those by changing intentional redirects or noindex policies.
