# MARDE brand discoverability

Release status: the October 13 changes have been deployed and verified. See [release and Search Console record](release-2026-10-13.md) for the accepted sitemap submission and seven indexing requests. Earlier references below to pending deployment are historical; bare-brand ranking remains unproven.

## October 13, 2026 follow-up

The supplied AI Search Helpers report records **23/100 visibility** and **100/100 Is Agentic readiness**. These are different measurements; this change does not claim an increased score or resolved ranking.

A fresh unqualified `MARDE` query still did not return the official domain in the supplied search sample. A separate exact legal-name/domain query surfaced the [MARDE Crunchbase profile](https://www.crunchbase.com/organization/marde). The public profile identifies MARDE Inc., links to https://mardeinc.com/, names Nandish Panchal and other team members, and gives team@mardeinc.com. This establishes that the profile describes the same organization; it does not establish owner account control or press endorsement.

The homepage Organization `sameAs` now includes that verified profile alongside the existing Instagram and TikTok URLs. The existing WebSite preferred name, Organization legal name, canonical IDs, contact details, interface and product behavior are preserved. Browser and export tests assert the exact identity links. This uses Google's Organization `sameAs` guidance rather than inventing a discovery protocol or publishing unverified addresses, telephone numbers or listings.

Live baseline verification passed for all 27 registered routes in HTML and Markdown, all 27 explicit Markdown aliases, robots.txt, sitemap.xml, llms.txt, both 404 representations, and the three HTTP/www canonical redirects. Each canonical redirect reaches HTTPS apex in one hop. The new schema link remains local until deployment; existing public endpoint checks do not demonstrate that this local update is live.

The report's proposed dedicated platform pages and six full research articles already exist in this checkout and passed live endpoint checks. The scanner's model-backed buying queries focus on available suppliers and rentals; MARDE is pre-prototype, so the site must not claim that it sells deployed systems, offers robot rentals, or provides operational EMS services to improve recommendations. The [scan implementation](https://github.com/kjagsadvisors/aisearchhelpers/blob/main/src/lib/scan.ts) uses model-backed answers and separately retrieves agent-readiness evidence. No authenticated re-scan was performed and no new numeric score was generated.

Remaining actions: review and claim the existing Crunchbase profile with owner credentials rather than creating a duplicate; locate and verify LinkedIn Company, Wellfound and F6S listings; keep the legal name, domain, approved location and team email consistent. Confirm Search Console canonical selection and branded impressions after deployment and recrawl. Send the existing outreach drafts only with explicit owner authorization. The bare-brand failure stays open until a new measured result demonstrates that the official domain is discoverable.

The October 1 findings below are historical; their statement that only two social identity links were verified is superseded by this follow-up.

Checked October 1, 2026 (America/New_York). This records a brand-discoverability follow-up, not a new Is Agentic score or a guaranteed ranking.

## Findings and changes

- A bare `MARDE` web query did not return the company in the results supplied in this session. Unrelated dictionary definitions and names dominate those results. A separate descriptive company query returned https://mardeinc.com/. This is evidence of a disambiguation/ranking problem, not proof that the domain is absent from all indexes. Engine, geography and index freshness can change results.
- The existing site already has a canonical apex URL, crawlable homepage, WebSite/Organization schema, contact details, public trust pages, sitemap, robots.txt and llms.txt. Search Console accepted the sitemap and homepage/FAQ/research indexing requests earlier in this session. Repeated requests do not improve crawl priority.
- Organization `name` now consistently uses `MARDE Inc.`, matching the visible footer and company brief, with `MARDE` as the alternate brand. WebSite retains `MARDE` as the preferred site name and `MARDE Inc.` as its alternative. Both use the same canonical URL and linked entity IDs. No new brand, street address, telephone or third-party endorsement was invented.
- Live HTTP apex, HTTP www and HTTPS www each already redirect permanently in one hop to https://mardeinc.com/. No redirect behavior was changed. New release checks detect future redirect chains, canonical/indexing regressions and disagreement between the homepage's metadata, schema and visible company identity.
- The existing visual design, interactions and forms are unchanged. Export/browser tests cover identity schema. `npm run verify:public` now also checks live identity and redirects after deployment.

## External work

Use the factual [visibility kit](visibility-outreach-kit.md) for LinkedIn Company, Crunchbase, Wellfound and F6S. First locate and claim an existing listing if one exists. Keep the name `MARDE Inc.`, website https://mardeinc.com/, location `New Jersey, USA`, and contact team@mardeinc.com consistent. There is no approved public telephone or street address; do not fabricate either to fill NAP fields. Existing Instagram and TikTok links remain the only verified social URLs in Organization `sameAs`.

Publishing or claiming company profiles requires owner accounts and any platform-required verification. Add their public URLs to `sameAs` only after verification. Google Business Profile eligibility remains unestablished; do not create a storefront or service-area listing without qualifying real-world operations. Outreach drafts are prepared but unsent; sending them needs explicit owner authorization. Independent press/editorial decisions and search-engine rankings cannot be implemented through a website patch.

Measure the exact unqualified `MARDE` query and `MARDE Inc.` separately, recording engine, date, locale, returned domain and position. Review Search Console branded impressions and canonical selection after Google recrawls. Keep the current failure open until a fresh audit or recorded bare-brand result demonstrates improvement.

## Protocol references

- [Google site-name guidance](https://developers.google.com/search/docs/appearance/site-names): one existing homepage WebSite node, consistent preferred name, factual alternate name and canonical URL.
- [Google Organization guidance](https://developers.google.com/search/docs/appearance/structured-data/organization): factual identity and verified profile links.
- [Google Business Profile eligibility](https://support.google.com/business/answer/13763036): eligibility must be established before listing.
