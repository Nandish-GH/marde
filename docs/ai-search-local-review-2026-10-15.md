# Local AI Search Helpers evidence review

October 15, 2026. Offline source and exported-artifact review. No API calls, browser sessions, development server or fresh search requests were used. October 13 deployment and Search Console findings below are historical saved evidence, not new live verification.

## Outcome

The existing export passes the website checks available locally. Public recommendation visibility remains unmeasured by this review. The historical 23/100 visibility score is not replaced by a fabricated number.

Executed today:

- `node --test tests/agent/negotiation.test.mjs`: 27 passed, zero failed. Tests use mocked origin responses; these are not public endpoint probes.
- `node scripts/verify-agent-export.mjs`: passed for 27 exported routes, schema, internal links, anchors, FAQ, trust pages, Markdown, sitemap and llms.txt. This validates the existing export, not a newly rebuilt or deployed release.

## What the scanner actually measures

The local copy's `src/lib/crawl.ts` reads homepage metadata, headings, JSON-LD types, text and the root sitemap. `scan.ts` supplies the first 8,000 characters of extracted homepage text to a model. It does not deeply crawl each research article. Google Autocomplete supplies possible query phrases; this is not measured search volume or proof of commercial intent.

The model profiles the business, chooses up to eight buying questions, answers them with web search, performs a branded presence sweep and composes nine factor scores. The `overall_score` field is model output constrained to 0–100; there is no prescribed weighting or deterministic aggregation formula in this pipeline. The agent-readiness result is fetched separately. Technical readiness does not establish recommendation visibility.

## Nine-factor assessment

| Factor | Supported finding | Limit |
| --- | --- | --- |
| Domain authority | Saved verification records a Crunchbase identity link alongside Instagram and TikTok in Organization `sameAs`. | Linking a profile is not a backlink audit or an independent endorsement. No new authority measurement. |
| Search visibility | Saved October 13 Search Console review records 16 indexed submitted URLs and six pending. | Historical indexing is not current assistant recommendation frequency. |
| Reddit/Quora | No verified mention inventory in the local evidence. | Unknown, not a measured zero. |
| Content depth | Four platform pages and six sourced research articles are recorded; export content/link checks pass. | A homepage-only excerpt underrepresents this depth. Real build evidence still depends on engineering progress. |
| Structure/extractability | Export schema checks pass. Saved crawl identifies Organization, WebSite and FAQPage; research pages carry Article markup and citations. | This is not a fresh Google rich-result validation. |
| Freshness | Saved sitemap revision is October 13; research and development-status pages have truthful dates. | Do not reset dates without substantive changes. |
| FAQ | Saved verification identifies 20 FAQ answers, with four on the homepage; local FAQ validation passes. | More questions should follow actual partner needs, not score inflation. |
| Reviews | MARDE is pre-prototype with no deployed systems. Customer-review expectations do not fit its current stage. | Do not invent reviews or treat not-applicable evidence as a technical defect. |
| Speed | Recorded local Lighthouse baseline is 90 performance and 100 accessibility, best practices and SEO. | Not rerun today; not field performance. Saved Search Console report had insufficient field data. |

## Interpretation of the supplied Claude report

Its two answers are evidence only for those two prompts in that execution, with unverified model configuration and source coverage. They do not establish universal brand absence. Its statement that no third-party evidence exists conflicts with the previously verified Crunchbase profile. Its recommendations to add FAQ schema and citable research overlap work already present and passing local checks.

Its strongest observation is methodological: consumer purchasing and local-provider questions are a poor fit for a pre-prototype robotics developer. Preserve such questions if comparing against the original baseline, but assess emerging-company discovery, research citations and potential partnership relevance separately. Do not describe MARDE as equipment currently available to buy.

## Remaining actions

1. Publish real dated build logs, demonstration evidence and evaluation requirements when available. No invented milestones or performance claims.
2. Maintain consistent verified company listings and seek legitimate relevant editorial or academic references. Account changes and external outreach need owner credentials or explicit messaging authorization. Do not create a Wikidata entry solely for promotion; eligibility has not been established.
3. For a later visibility measurement, freeze the questions before testing, retain raw answers and sources, and distinguish brand recognition, unbranded discovery and actual recommendations. Keep original-baseline questions separate from research/partnership questions. No new visibility score can be recovered from source parsing alone.

No production website files or visual design were changed for this review.
