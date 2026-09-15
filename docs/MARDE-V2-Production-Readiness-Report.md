# MARDE V2 Production Readiness Report

September 14–15, 2026 · scheduled 10:35 PM Eastern finalization session

## 1. Executive Summary

The V2 implementation is ready for the user's live, multi-device review, subject to the explicit testing limits in section 15. This pass replaces the generic Air illustration with a presentation derived from the user's Blender model, refreshes Ground and Modules as matching concept studies, adds the horizontal home logo inside mobile navigation, replaces footer lettering with the approved logo, improves portrait crops and search icons, and corrects utility-page metadata. The preceding release delivered the logo opening, richer motion, Nexus mark, interaction transitions and integrated-V1 closing CTA.

Final local build/TypeScript/lint pass. Browser suite: **80 passed, 4 device-specific skips**. Additional acceptance: **137 checks, no reported layout/page errors**. Local compressed mobile Lighthouse: **94 performance / 100 accessibility / 100 best practices / 100 SEO**, LCP **3.2 seconds**. These are laboratory observations, not field guarantees or accessibility certification. Deployment evidence is recorded in section 16.

Facts were reconciled against the supplied current deck, approved structured content and latest user corrections. The deck's 6.4-minute EMS label is not propagated: the previously verified CARES distinction remains 6.4 minutes first responder and 7.6 minutes EMS; 50.2% unwitnessed arrests remains externally attributed. The latest user statement that Ground has no built model overrides the deck's older Air/Ground-CAD statement. No validated performance, approvals, deployments, treatment capability or new partner claims were added.

## 2. Legacy Preservation

V1 remains preserved in branch `archive/marde-v1-pre-rebuild-2026-09-08` and tag `marde-v1-pre-rebuild-2026-09-08`, SHA `f953fbbb0f33118b1b2e07c165ac54a61bd40ba6`. Preservation was not repeated. The supplied Blender original was opened in a separate background process with automatic script execution disabled and never saved. Private deck, source prompts, research reports and model files are absent from the public export.

## 3. V2 Git State

Repository: https://github.com/Nandish-GH/marde . Working branch: `codex/marde-v2-production`; publishing branch: `main`. Pre-release main and rollback checkpoint: `61a1cf28947aa9b0b3f22bd40a8fc8011653a280`. Latest previous instruction-only checkpoint: `cefe9f4`. Release/deployment SHAs are recorded in section 16 after CI completes. Stable implementation and QA evidence are committed; release notes may be a subsequent documentation-only commit on V2.

Approved About MARDE profile files are unchanged. No force-push, hosting migration or Cloudflare change is part of this release.

## 4. Design System

Retained graphite/charcoal, warm paper, restrained technical blue, Space Grotesk headings, Inter body copy and IBM Plex Mono annotations. References are principles from [Apple](https://www.apple.com/iphone/), [Anduril](https://www.anduril.com/), [Zipline](https://www.zipline.com/), [Airbound](https://www.airbound.com/), [Figure](https://www.figure.ai/) and [Varda](https://www.varda.com/)/[Saronic](https://www.saronic.com/). No company layout, artwork or interaction sequence was cloned. This session focused on implementation using prior reference research, rather than claiming fresh full audits of all reference sites.

Graphics acceptance against brief 72A–72F:

| Asset | Implemented treatment and factual boundary |
| --- | --- |
| Air | Model-derived engineering concept from `MardeAirMain2.blend`, the most recently saved supplied local Air file. Wings, lift rotors, tail and payload structure come from that source. Construction volumes, scale figures and archived iterations excluded. Caption explicitly states current engineering concept. No dimensions/performance published. |
| Ground | New compact wheeled mobility/payload study derived from the existing conceptual role illustration. No completed Ground CAD is claimed. No stairs, sensors, manipulators or demonstrated access capability depicted. |
| Modules | Matching exploded payload/interface study. No autonomous medical treatment shown. |
| Nexus | Original coordination SVG mark plus existing refined human-authorization concept interface, route context, Air/Ground/Module review and system-health review. No live mission or patient data. |
| Integrated system | Original connected Air/Ground/Nexus/Modules composition; Air role glyph updated to include wings/tail. Intentionally schematic rather than a second CAD view. |
| Response workflow | Existing six-stage dispatch → Nexus → Air → Ground → Modules → EMS handoff, with responsive arrangement and state transitions from the preceding release. |
| Social preview | Regenerated 1200×630 image using the updated original system artwork and approved horizontal brand. |

All share color, concept labeling, technical framing and motion treatment. Large product studies use 640/1440-wide WebP sources and HTML captions rather than tiny baked-in text. Ground/Modules shapes remain provisional visual communication for user review. The Blender rendering process adds no browser 3D runtime.

## 5. Pages Built

Home, Technology, Mission, Team, Support, FAQ, Privacy, Contact, thank-you, custom 404, and `/nandish/`, `/snehi/`, `/aanya/`, `/arjun/`, `/saathvika/` are implemented. Final export reports 19 entries including icon routes and not-found infrastructure.

New mobile-menu logo is an accessible home link that closes the dialog. Footer brand is now the approved horizontal logo. Home/Mission use optimized editorial portrait derivatives; Team uses a dedicated square crop. The existing profile portrait and exact About MARDE content/link remain unchanged. No portraits were invented for other members.

## 6. Tools / Dependencies

Next 16.3.4, React 19.2.8, TypeScript 6.0.3, CSS Modules, Lenis 1.3.26, Anime.js 4.5, Radix and existing Phosphor icons. Blender 5.2.1 rendered the source model and concept studies offline; Sharp produced optimized WebP/PNG/ICO assets. No new runtime dependency was installed.

Original portrait: 1086×1448. Editorial exports: 480×600 and 800×1000; Team crop: 440×440; original profile derivative preserved. Product images are approximately 16–51 KB each. Reproduction scripts: `scripts/render-product-studies.py`, `scripts/prepare-september-assets.mjs`, `scripts/generate-og.mjs`. The private Air model and portrait source must exist locally when regenerating derivatives.

## 7. Motion System

The preceding release's actual-logo opening lasts approximately 1.15 seconds on an eligible fresh load/reload. It does not replay on corporate client navigation; reduced motion and late hydration skip it. HTML/CSS begin complete and visible, with the decorative curtain hidden until eligible JavaScript starts it. No-JS users do not see a loading obstruction.

Normal mode includes staggered hero/editorial entrances, roadmap movement, system/portrait reveals, diagram drawing, counters, interaction transitions, hover/tap feedback and finite system-node activation. Native Web Animations are canceled during cleanup/preference changes; Anime.js counters settle at final values. New product figures participate in the existing semantic reveal system.

Lenis is restricted to fine-pointer normal-motion conditions. It wakes for input and stops its RAF loop when idle. The cursor is decorative, disabled for touch/reduced motion and yields to native text editing. Latest instrumented scroll samples progressed 411 → 1072 → 1199 → 1200 px; zero RAF callbacks were observed over an idle second. PageDown advanced to 1991 px. Runtime reduced motion disabled smoothing/cursor and preserved final 6.4/7.6/50.2 values. No page exceptions recorded.

Tested browser engines: Chromium, Firefox, WebKit; installed Windows Chrome and Edge received keyboard/navigation/runtime reduced-motion smoke checks in fresh automated browser contexts. Intermediate frames were captured and inspected across the two release sessions. Real Windows Animation Effects toggling was not available through enabled native controls; media-query emulation is explicitly not a claim that the OS toggle was tested. No physical iOS/Android or manual trackpad/display-refresh-rate acceptance is claimed.

## 8. Responsive QA

Additional acceptance covers all 15 routes at 320, 390, 768, 1024 and 1440 in Chromium and 390/1440 in Firefox/WebKit: 135 route checks plus two installed-browser channel checks. No document overflow, unexpected route status, missing/duplicate H1 or page exception was reported. Normal-motion product/menu/footer screenshots were captured in all three engines at 390/1440. Whole-page captures exist at 390/1440; mobile top/middle comparison sheets and changed desktop/product frames were visually reviewed.

844×390 landscape and 720×450 reflow checks passed. The latter approximates the CSS viewport of a 1440-wide display at 200% zoom; it is not native browser/OS zoom testing. Existing suite includes additional 375px contact-card coverage. `acceptance.json` predates the final two utility metadata corrections; `final-smoke.json` and the final browser suite verify those corrections. Layout markup did not change between these checks.

## 9. Accessibility

Final suite includes axe checks on representative corporate pages, keyboard navigation, modal Escape/focus trap/focus restoration, accordion state, form errors/fallback, approved accessible profile links, reduced-motion and no-JS behavior. No serious/critical automated axe violations were reported by those tests. Landmark/H1 checks cover all 15 routes in the additional matrix.

New raster studies have descriptive alt text and visible concept captions. Decorative registration SVGs are hidden from assistive technology. Menu home link has a clear accessible name; footer logo retains “MARDE Inc. home.” Important meaning is present without color or animation. Test success does not establish full WCAG conformance, screen-reader usability or real-device completeness.

## 10. Performance

Local compressed static-export Lighthouse mobile simulation: 94/100/100/100, LCP 3.2 s. Prior September 9 lab result was 92/100/100/100 with LCP 3.4 s; this is contextual, not a controlled field improvement claim. Evidence: `docs/qa/september15/lighthouse-home.json`. No new heavy client boundary, WebGL, perpetual animation loop or eager scheduler load was added. Responsive images avoid sending the largest product/portrait source to every device.

The production-build console still reports one unused-preload warning for Contact-page CSS fetched ahead of navigation. The identified chunk contains Contact styles; navigation and assets work. It is documented as a nonblocking prefetch observation, not concealed or “fixed” by removing valid framework behavior. Live Lighthouse reached 97/100/100/100 with LCP 2.5 seconds; see section 16 for conditions and evidence.

## 11. SEO / Social

Home title remains `MARDE | Emergency Response Robotics Before EMS Arrival`. Its previous description listed Air/Ground/Nexus/Modules; the final description is “MARDE is developing an integrated emergency-response robotics platform designed to extend response capability into the critical minutes before EMS arrives.” Contact title changed from `Contact MARDE | Emergency-Response Robotics` to `Contact MARDE | EMS, Research & Partnerships`; its truthful existing description remains. Other public-page titles/descriptions remain specific and are recorded in `acceptance.json`.

Thank-you and 404 previously inherited a second `| MARDE`; both now use absolute titles and route-specific descriptions. They remain noindex. Profiles retain noindex and are omitted from the sitemap; robots does not block profile HTML from exposing that directive. Public sitemap contains the eight canonical corporate routes including Contact. There is one checked-in sitemap source, not a duplicate generated route. No invented last-modified dates were added.

Canonical URLs retain HTTPS apex and trailing slashes. Organization/WebSite JSON-LD uses approved company, website, logo, email and corporate social fields; no speculative MedicalOrganization/Product claims or fake reviews were added. New small-size drone/medical glyph: ICO includes 16/32/48 PNG entries, square PNG is 512px, Apple icon is 180px; source SVG is available. Final icon links return 200. Updated 1200×630 OG image is shared by OG/Twitter metadata. No promise of exact Google snippets, rich results or instantaneous favicon changes is made.

Owner follow-up: inspect Home in Google Search Console, request recrawl if appropriate, and submit/verify `https://mardeinc.com/sitemap.xml`. Search Console access/verification and actual indexed-result refresh were not performed. Optional site search, breadcrumb/FAQ schema expansion and long forms are not release requirements and were not added merely because the secondary review suggested them.

## 12. Integrations

Regression coverage preserves Formspree inquiry categories, organization field, validation and visible email fallback; Stripe destination and non-equity/non-charitable-support framing; lazy Calendly dialog, direct fallback, Escape/focus behavior; vCards; Web Share/clipboard fallback; exact contact/profile links; optional analytics resilience to blocked session storage and route changes. No real submission, booking, payment or message was sent. Third-party end-to-end delivery is consequently not certified by these tests.

The secondary review's contact categories, direct email fallback and internal exploration links already exist in the current implementation. Its reported overflow was not reproduced in the final matrix. The remaining prefetch warning is described in section 10. Partner credentials, pilots, downloadable technical briefs and validation evidence were not fabricated.

## 13. Security

Current full npm audit: zero reported vulnerabilities across 494 dependencies. Targeted scan found zero private deck/model/prompt/environment/key/map files in public/export assets, zero tracked non-example environment files, and no targeted private-key/live-Stripe-key/GitHub-token signatures in application/public sources. This is a proportional static-site check, not penetration testing or proof that no secret could ever exist.

Existing JSON-LD serializes approved data and escapes `<`. Profile/company contact destinations are intentionally public approved fields. The project stays a static GitHub Pages export. No credentials, invasive analytics or server-only API features were introduced. Cloudflare/DNS/CSP/HTTP-header changes are outside this release and require separate explicit authorization.

## 14. Exact Test Commands

Run from `C:/Users/mihir/Downloads/mardeweb` in PowerShell. Bundled Node avoids the older system npm launcher.

```powershell
$mardeNode = 'C:/Users/mihir/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
& $mardeNode node_modules/next/dist/bin/next build
& $mardeNode scripts/finalize-export.mjs
& $mardeNode node_modules/eslint/bin/eslint.js .
git diff --check
& $mardeNode scripts/serve-export.mjs
# Run subsequent commands in a second terminal while the export server is active.
$env:QA_BASE_URL = 'http://127.0.0.1:3001'
& $mardeNode node_modules/@playwright/test/cli.js test
& $mardeNode scripts/accept-september-release.mjs
& $mardeNode 'C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js' audit --json
& $mardeNode tmp/review-september-motion.mjs
& $mardeNode tmp/september-extra-checks.mjs
& $mardeNode tmp/lighthouse-september15.mjs
```

The `tmp` runners are retained in this local workspace; the motion runner is the existing `scripts/review-motion.mjs` with its evidence destination changed to this release. Lighthouse uses the pre-existing cached installation referenced by that runner. Exact browser output is saved as `docs/qa/september15/test-results.txt`. Initial 78 passes/two outdated portrait expectations were superseded by the corrected final **80 passes / four skips**, not hidden as application failures. TypeScript is part of `next build`.

## 15. Known Limitations

- User review on physical devices remains welcome. No physical iOS/Android, macOS Safari, native Windows Animation Effects toggle, manual trackpad, 120Hz or constrained hardware acceptance was available. WebKit is engine coverage, not an iPhone test.
- Air uses the newest saved local reference found; if a newer unsaved Blender scene exists, the user can supply it. Ground and Modules remain illustrative design intent, not new engineering deliverables or tested products.
- The nonblocking Contact CSS prefetch warning remains. No other release-blocking defect was reproduced in the performed checks.
- Lab scores are not field Core Web Vitals. Screen-reader certification, external service delivery and search-index freshness are not established.
- Private deck has older factual labels described in section 1; it was not modified or published. The website follows latest explicit user instructions and previously verified attribution.

## 16. Deployment Status

**DEPLOYED AND VERIFIED.** Implementation/V2 release and production main SHA: `4311ae186e68643af36f20be33062f01ac317fa9`. GitHub Pages build and deployment succeeded: https://github.com/Nandish-GH/marde/actions/runs/34922977978 . Subsequent documentation-only commits record final evidence on V2 without triggering a redundant deployment.

Public verification completed 27 checks with no reported issues: all eight corporate routes, thank-you and all five profiles return 200; approved About MARDE tagline remains exact on all five profiles; mobile-menu home logo navigates and closes correctly; footer logo exists; Air/Ground/Modules assets, favicon/PNG/Apple icons, OG image, robots and sitemap return 200. HTTP apex and HTTPS www both resolve to `https://mardeinc.com/` through existing configuration. Evidence: `docs/qa/september15/live-verification.json`.

Live mobile Lighthouse on `https://mardeinc.com/`: **97 performance / 100 accessibility / 100 best practices / 100 SEO**, LCP **2.5 seconds**. This is one simulated laboratory run from this Windows environment after deployment, not a field metric or guarantee. Evidence: `docs/qa/september15/lighthouse-live.json`.

Rollback checkpoint remains `61a1cf28947aa9b0b3f22bd40a8fc8011653a280`; use a new reviewed revert/restore commit and normal push if a critical regression is found. No rollback was needed. Implementation scope and final report are complete; scheduled implementation runs are being stopped pending concrete user feedback. Search Console and physical-device review remain owner follow-ups, not hidden implementation tasks.

## 17. Production Cutover Steps

1. Commit the validated code, assets and evidence to V2; push normally. Confirm no competing main changes.
2. Fast-forward main to the validated commit through the existing GitHub Pages workflow. Do not force-push or change hosting/DNS.
3. Verify the exact commit's build/deploy result, all corporate routes and five profiles, new graphics/icons/OG, noindex/canonical behavior and mobile-menu home navigation on the public domain.
4. Append deployment/live evidence to section 16 and update the handoff; commit/push the documentation checkpoint.
5. Pause repeated implementation wakeups after this requested scope is complete; resume for concrete user feedback rather than inventing additional work.
6. If a critical rendering/navigation regression requires rollback, create a reviewed restore commit from the recorded pre-release SHA and push normally. Never reset/force-push production. Search Console recrawl is an owner follow-up, not a prerequisite to publishing.
