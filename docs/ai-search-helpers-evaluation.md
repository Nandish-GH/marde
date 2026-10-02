# MARDE evaluation using AI Search Helpers

Evaluated October 1, 2026, America/New_York. Target: https://mardeinc.com/.

## Website follow-up

After this evaluation, the homepage was updated to expose Organization and WebSite as individually typed JSON-LD documents with the same stable identifiers, plus FAQPage matching its four existing accordion answers. This is semantically equivalent identity data in a form compatible with the supplied scanner's simpler parser. A visible research/development summary now links directly to the research library, EMS requirements and development status. Browser and export tests cover the new links, schema types and exact FAQ answer parity. The evidence below describes the pre-fix evaluation; it should not be interpreted as the current schema layout.

Indexing, independent company profiles, earned mentions and documented engineering progress remain external work. The scan's model-backed buying-query comparison still needs API access; no replacement numeric visibility score has been fabricated.

## Outcome

MARDE's public content and machine-readable access now provide a substantially better foundation for AI retrieval. The main unresolved visibility work is independent recognition, refreshed indexing, and evidence of real development progress. No new AI Search Helpers numeric score was generated: its complete scoring pipeline requires Anthropic API access, which is not configured locally. The existing 18/100 visibility report remains the historical baseline. The separate Is Agentic 100/100 snapshot measures technical agent readiness, not whether assistants recommend MARDE.

This evaluation uses the nine factors defined in [AI Search Helpers' scan engine](https://github.com/kjagsadvisors/aisearchhelpers/blob/1e49b3ae81f865c59c44511af4091c674a1134c8/src/lib/scan.ts), with fresh public HTTP observations and a limited web-presence check. It is a framework-based evaluation, not an execution of the repository's model-backed scan. No email, newsletter subscription, paid API call, account creation, or website modification was made.

## Evidence collected

- All 22 indexable editorial routes returned HTTP 200 to the scanner's published AISearchHelpersBot user agent and HTML Accept header.
- Every inspected editorial route included a title and canonical URL.
- Homepage JSON-LD contains Organization and WebSite inside an @graph.
- The public FAQ contains FAQPage with 20 questions; all answers were already verified as visible and matching the schema during the release checks.
- Six research article pages contain approximately 1,260–1,320 words of main content, including headings and related links. These counts differ from article-only counts in the deployment report.
- sitemap.xml, robots.txt and llms.txt returned HTTP 200. Sitemap lists 22 editorial URLs, with revision dates; its newest lastmod is 2026-10-01.
- Observed response-header times for the 22 requests were 101–245 ms from this computer. These are single-session network observations, not a global performance benchmark or Core Web Vitals assessment.
- Four focused search queries used MARDE/robotics, the exact domain excluding the domain itself, MARDE Inc./robotics, and the exact domain with Reddit/Quora. The returned results included the official domain with an older cached homepage. No relevant independent company coverage was verified from those returned results. This limited search is not proof that none exists and does not measure backlink counts.

## Nine-factor assessment

| Repository factor | Current evidence | Next action |
| --- | --- | --- |
| Domain Authority Signals | No referring-domain inventory or authority measurement is available. Limited searches did not establish independent coverage. | Claim factual company profiles and eligible ecosystem listings; obtain earned coverage through the prepared, owner-authorized pitches. Track actual referring domains rather than inventing an authority score. |
| Search Visibility | The official domain surfaced for a focused branded/category query, but the returned cached content predates the latest release. The eight original buying queries were not re-run through Claude/GPT-4o. | Verify the new URLs in Search Console and submit the sitemap. Re-run the same eight unique questions with named models and saved answers once the site is recrawled. |
| Reddit & Quora Presence | No relevant organic company discussion was verified in the limited returned results. | Participate when the team can add substantive expertise, disclose affiliation, and avoid fabricated mentions or repetitive promotion. No posts have been sent. |
| Content Depth | Four platform detail pages, EMS requirements content and six sourced research articles now exist. Development status and external evidence are separated. | Strengthen articles with documented engineering observations as they become available. Do not add invented payload, range, latency, clinical performance or regulatory approvals. |
| Structure & Extractability | Canonicals, server-rendered content, Organization/WebSite, Person, FAQPage and article/concept schema are present where applicable; Markdown and recovery paths passed production verification. | Preserve these checks in CI. Treat the scanner's missing @graph support as a scanner limitation, not evidence that MARDE has no schema. |
| Content Freshness | Dated research and an honest development-status page are published; sitemap dates describe content revisions. | Publish updates when there is documented progress and revise only changed routes' lastmod. A schedule alone is not evidence of progress. |
| FAQ & Question Coverage | /faq/ has 20 substantive, openly visible answers and matching FAQPage. Homepage retains four accordion questions. | Use real requirements conversations to identify further unanswered questions. Evaluate the FAQ page directly rather than assuming homepage question count represents the entire site. |
| Review Platform Presence | MARDE is pre-prototype and pre-revenue. Verified customer reviews, deployed service availability and business-listing eligibility are not established. | Use legitimate company identity profiles now. Add reviews only from real eligible experiences. Check Google Business Profile eligibility before publishing a listing. |
| Page Speed | Public HTML is reachable with low observed network response times in this session; desktop/mobile regression checks passed. | Obtain Lighthouse/field Core Web Vitals separately before asserting performance scores. Track image and interaction costs as content grows. |

## Limitations in the supplied scanner

1. Its [crawler](https://github.com/kjagsadvisors/aisearchhelpers/blob/1e49b3ae81f865c59c44511af4091c674a1134c8/src/lib/crawl.ts) reads root @type values but does not traverse @graph. Reproducing that extraction against the live homepage yields anw empty schema-type list; traversing the graph finds Organization and WebSite. The site's existing graph should not be flattened just to satisfy this parser.
2. It crawls the homepage and sitemap, rather than fetching every linked editorial page. Its composition can therefore overlook the detailed FAQ, platform pages, team schemas and research library unless web search has already indexed them.
3. Its profile and buying-question prompts assume purchasable services. MARDE should be evaluated as an emerging developer suitable for research and requirements conversations, not represented as an available EMS supplier.
4. Its hosted route automatically invokes newsletter enrollment after email submission; the visible form disclosed the keeran.ai newsletter and offered no opt-out. The requested address was not submitted because the owner declined newsletter enrollment.
5. Hosted reports can be cached for seven days. A report obtained immediately after deployment may not reflect the new website.
6. The nine numeric factors are composed by a model from available evidence, rather than calculated as a deterministic benchmark. Missing API access, unmeasured backlinks, incomplete searches and stale indexed pages must remain explicit limitations.

## Priorities

1. Confirm indexing and canonical selection for the 22 editorial URLs through Search Console; submit https://mardeinc.com/sitemap.xml and check the last crawl dates.
2. Establish verified independent company identity and earned mentions using [the prepared visibility kit](visibility-outreach-kit.md). Account access and explicit outreach authorization remain owner dependencies.
3. Record genuine V1 development evidence and re-evaluate the same eight unique original prompts after recrawling. Save model names, dates, citations and full answers. No ranking or citation increase is promised.

To execute the actual scanner without newsletter enrollment, run its engine locally with an existing Anthropic API key, local-only storage, no newsletter/email/CRM credentials, and an agreed API spending limit. Those credentials and spending permission have not been supplied. Optional OpenRouter access is needed to reproduce the original second assistant rather than presenting a Claude-only run as a two-assistant comparison.
