# MARDE brand discoverability

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
