# Search visibility follow-up: 22 October 2026

## Evidence and interpretation

The owner supplied a Google validation notice stating that three pages passed validation for “Discovered - currently not indexed.” This is evidence for that validation group; the notice does not identify the URLs or establish the current indexing status of every route. No Search Console account state was inspected in this session.

The supplied AI Search Helpers PDF reports 31/100 visibility and 100/100 agent readiness. It lists nine prompts, but its analysis describes eight answered prompts; the ninth is marked “Not mentioned.” ChatGPT is reported to mention MARDE on two narrow New Jersey queries, with no Claude mentions. These are observations from that execution, not a reproducible universal recommendation rate. The report explicitly says backlink, review and community checks could not be completed. Absence of corroboration in that run is not proof that no profiles or links exist.

Several recommendations overlap existing work: four dedicated platform pages, six sourced research articles, 20 visible FAQs with matching schema, Article/Person markup and an updates page. Do not duplicate those pages, add inappropriate Product/Service offers, or invent engineering progress, reviews or partnerships to satisfy a scanner. Cargo airlines and leading aerial-mobility providers are poor comparison categories for MARDE's pre-prototype research stage.

## Changes

- Shortened the shared company description to 144 characters while retaining New Jersey, AED/tourniquet delivery, the pre-prototype stage and no deployed systems.
- Replaced selected vague homepage headings with explicit emergency-response, teleoperated Ground and V1 development subjects. Preserved the existing typography, diagrams and page structure.
- Linked the four platform summaries to their standalone pages and exposed the drone-AED evidence and EMS evaluation guide directly from the homepage.
- Clarified the outdoor Ground objective and deferred indoor/stair access. Fixed the missing target of the final-access section's aria-labelledby.
- Changed four system verb labels from headings to styled paragraphs.
- Added an accessible, script-free preferred-source invitation in the footer. On 22 October the Google source-preferences UI returned an unchecked mardeinc.com result. No account preference was changed. The link opens Google's own selection UI and makes no claim of endorsement or guaranteed rankings.
- Updated only the substantive homepage revision date. Added exported-image alt checks, description-length checks and direct-link checks to existing verification.

## Remaining external work

The live HTML GET response had no Content-Encoding despite an Accept-Encoding: gzip, br request. It returned Cache-Control: no-store, no-transform. The Worker intentionally preserves no-transform to prevent CDN email rewriting from creating broken internal links. Do not remove it casually to chase compression scores. Resolve compression at the origin/edge while preserving HTML integrity, Markdown negotiation and variant isolation; this release does not change production CDN settings.

Search Console monitoring remains owner-operated: review the validation group's URLs, inspect remaining excluded URLs and compare impressions/clicks after recrawling. Maintain real company profiles and earn relevant independent references using the existing outreach kit. No outreach, listing changes, subscriptions or paid tools were used.

The linked design guide recommends intentional visual direction and avoiding generic defaults. This release refines MARDE's existing design rather than introducing a template or installing the guide's suggested packages. The linked latent-spaces/brag repository creates promotional launch videos; it is not an SEO fix. No plugin was installed and no video was generated from a bare reference link.

Sources: https://developers.google.com/search/docs/appearance/preferred-sources ; https://www.askglitch.com/guides/how-to-make-ai-websites-not-look-ai ; https://github.com/latent-spaces/brag .

## Validation

Production build (including TypeScript) and lint passed. Export verification passed across 27 routes, including image alt attributes, metadata, internal links, anchors, FAQ/schema parity, Markdown and sitemap. All 27 content-negotiation unit tests and all 12 discovery browser tests passed. Browser tests cover desktop/mobile overflow, research markup, preferred-source link and serious/critical accessibility checks. The desktop footer and revised architecture heading were also inspected visually. These are local checks; no production deployment or new AI visibility score was produced.
