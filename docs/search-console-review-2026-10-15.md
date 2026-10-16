# Search Console and October V1 content review

Reviewed October 15, 2026 in the signed-in mardeinc.com domain property. Google report dates differ from the review date.

## Observed Search Console status

- Overview: 20 total web search clicks; 16 indexed and 11 excluded URLs; 18 HTTPS URLs and zero non-HTTPS issues.
- Page indexing report, last updated October 11: three intentional redirects, two intentional noindex exclusions, three crawled but not indexed, three discovered but not indexed.
- Crawled but not indexed examples: `/research/aviation-pathway/`, `/research/final-access/`, `/technology/modules/`. All show October 13 crawl dates. They were previously in the discovered queue; crawling is progress, not an indexing guarantee.
- Remaining discovered examples: `/research/human-oversight/`, `/technology/air/`, `/technology/ground/`. Validation is already started. No duplicate validation or repeated indexing request was submitted in this review.
- Sitemap: Success; submitted and last read October 13; 22 discovered URLs.
- Security issues and manual actions: both show No issues detected.
- Core Web Vitals, last updated October 13: insufficient usage data for both mobile and desktop. This is neither a measured pass nor a field-performance failure.

The remaining six content exclusions require Google's indexing decision. Preserve canonical redirects and deliberate contact-card noindex policies. No report supports removing them merely to reduce excluded-page counts.

## Content revision

Reviewed the one-page October update brief and all 12 pages of the master roadmap, with visual checks of the brief and the master decision/public-copy page. These are internal source documents, not independent test reports or instructions to perform outreach, purchases, flight tests or account changes.

Published scope is limited to factual design direction: outdoor training AED/tourniquet delivery, scene video and two-way communication, human-authorized dispensing, proposed hover lowering and recovery by a landed Air platform. Stair climbing, indoor entry and direct robotic treatment are deferred from V1. The earlier aircraft artwork is labeled as under review. No dimensions, sensor counts, aircraft architecture or performance targets are represented as final.

The updates page records the October 15 design revision and staged work: supply sizing and Ground mass, dispenser bench tests, outdoor Ground/basic Nexus, fixed-rig tether tests, then aircraft sizing and permitted integration. Informal EMS discussions are attributed as founder-reported. No institutional partner, endorsement, completed hardware, clinical validation or flight approval is implied.

Internal budgets, provisional fundraising targets, named interview contacts and unverified roster changes were not copied to the public site. Existing layout, navigation and styling are preserved. Shared metadata, visible content, FAQ schema, generated Markdown and llms.txt are kept aligned. Only revised page dates change; research publication dates remain intact.

## Verification and rollback

Export validation adds assertions for V1 scope, deferred capabilities, training equipment, the dated update and the non-final aircraft caption. Standard agent, schema, link, sitemap, TypeScript and lint checks remain required. Production deployment must pass the existing GitHub Actions build/browser/export checks and public HTML/Markdown verification.

If published representations disagree, links fail, or the new copy implies deployed or clinically validated capability, restore the prior release and investigate. The previous production code release is `c655da1a1308c85a854ac27cefcb870289d97b30`.
