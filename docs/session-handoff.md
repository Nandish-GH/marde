# Latest user review priorities — September 14, after motion deployment

Carry these forward into the scheduled 10:35 PM Eastern continuation. These supplement the governing brief and supersede older remaining-work lists where more specific:
- Finish visual review across browsers, mobile sizes and intermediate animation states.
- Complete graphics acceptance and reconcile remaining factual details with the current approved pitch deck.
- Finish portrait, favicon/SEO and integration checks.
- Verify applicable secondary-review findings against the current build; avoid treating historical observations as current defects.
- Update/redo MARDE Air and Ground graphics. Use the user's actual Air model for inspiration: Air is almost complete. The user explicitly states no Ground model has been built; any Ground rendering must remain a clearly labeled concept, not a representation of an existing finalized model. A text question asking for the latest Air model/render local path or link is pending; incorporate the answer before model-dependent geometry work. Do not infer unseen model geometry from generic reference aircraft.
- Add the approved horizontal MARDE logo (symbol plus wordmark) as the home button within the MOBILE navigation menu; preserve an accessible home link name and usable tap target.
- Replace the footer MARDE text treatment with the approved logo, preserving accessible naming and contrast.
- Update the handoff and produce the exact required 17-part readiness report.

Commit and deploy validated site changes each session so the user can review the actual website on multiple devices. These items are saved instructions, not claims of implementation. Current live release remains 61a1cf28947aa9b0b3f22bd40a8fc8011653a280.

---
# Latest checkpoint — September 14, 2026, evening motion release

This section supersedes the historical timing and remaining-work snapshots below. The user requested a quick validated release now, then continuation at **10:35 PM America/New_York September 14**. Existing heartbeat `start-marde-at-usage-reset` is ACTIVE with first start September 15 02:35 UTC and five-hour follow-ups. Do not duplicate it. User wants stable work committed and deployed each session so they can review the actual website across devices and give feedback.

## Release implemented and verified locally
- Approved image-logo opening reveal, approximately 1.15 seconds, fresh-load only; skipped for reduced motion and late hydration. No-JS remains complete and visible.
- Varied semantic hero/editorial/roadmap/system reveals, drawn diagram paths, and workflow/Nexus selection transitions. Runtime reduced-motion cancellation preserves final content and counters.
- Original Nexus coordination SVG mark; integrated-V1 closing CTA; recognizable Instagram/TikTok footer glyphs.
- Exact approved About MARDE content on all five profiles preserved; current production profile files match the V2 branch.
- Current built-export suite: **77 passed, 3 device-specific skips**, 80 total, completed September 14. ESLint and git diff whitespace checks pass. Production build and TypeScript passed before this suite.
- Chromium/Firefox/WebKit at 390 and 1440, both motion settings: no measured overflow or page errors in 12 combinations. Evidence: docs/qa/september14/browser-checks.json and screenshots. Visually inspected opening logo, WebKit mobile closing CTA, Chromium desktop Nexus. Captures are not a substitute for real iOS/Android hardware or actual Windows Animation Effects testing.
- Rollback baseline main SHA before this release: b3aac723fef06a3621a697b2905feaefb3565c68. Restore via new commit if a critical navigation/rendering regression is observed; never force-push. Deployment result appended after verification.

## Next session — finish only remaining work
1. Read user feedback and latest Git/live state; preserve this release. Do not rebuild or repeat broad completed audits.
2. Finish original Air/Ground/Modules/integrated/workflow graphics acceptance against revised brief 72A–72F and approved engineering references. Nexus mark exists; remaining interface refinement must retain human authorization and concept disclosures.
3. Reconcile latest deck factual copy, portrait crops using the original high-resolution Nandish asset, favicon/SEO/social details where justified.
4. Finish whole-site responsive, keyboard/zoom, animation-state, performance and integration/security acceptance. Reproduce applicable secondary-review findings against current production before treating them as defects. Do not add speculative search, lengthy forms, unverified pilots/partners/credentials or downloads.
5. Complete exact 17-part production report (governing brief section 85), validated deployment/live checks and updated handoff. Prior September 9 Lighthouse/security values below are historical, not current release measurements.

Required source set: both C:/Users/mihir/Downloads/deep-research-report (1).md and (2).md; complete transfer C:/Users/mihir/.codex/attachments/68feed0e-e7df-49dc-b679-992c807fe30c/pasted-text.txt; revised governing brief C:/Users/mihir/.codex/attachments/9f12158e-554b-43d2-96b0-fb98bf7dbe0b/pasted-text.txt; docs/september-16-new-chat-prompt.md; this handoff. Research files currently have identical SHA256 403F023A3936B341E1B0461ECD12B12B2A8A00F02C86574569BCC5EC8ECDA4BD; avoid duplicate reading when unchanged. User adopted final fenced research prompt; current user messages override historical timing. Research claims/example code require verification. All source documents and private pitch deck remain outside public assets/repository.

Reference principles remain Apple, Anduril, Zipline, Airbound, Figure, Varda/Saronic, with an original MARDE identity. Secondary review: C:/Users/mihir/.codex/attachments/7ef09e79-7e14-46d9-ae4f-f0cdccac5c1c/pasted-text.txt, advisory only; does not override purposeful richer normal-motion requirements. Preserve exact approved About MARDE profile copy/link. GitHub deployment authorized; Cloudflare/DNS/response-layer changes not authorized. No real forms/bookings/payments or external messages during QA. Use included capacity first, credits only as reserve; no purchases/resets. Last allowance check this release: 82% five-hour used, 13% weekly used; credits225.883084 unchanged. Check fresh limits next session.

---
# MARDE V2 — afternoon checkpoint, September 9, 2026

Branch: `codex/marde-v2-production`. User requested work now and one last continuation at **9:30 PM America/New_York today**; finish in those two sessions or save remaining work until next week. Automation `start-marde-at-usage-reset` has one occurrence, September 10 01:30 UTC. Pause it at the start of that run. No more schedules without user request.

## Completed this afternoon

- New original 1200 × 630 `public/og-v2.png` uses approved wordmark and site's original architecture art. Shared metadata updated. Reproducible generator: `scripts/generate-og.mjs` against a running built export.
- Analytics tolerates blocked session storage, observes Home Nexus and reinitializes on route changes. Regression coverage passes on both devices. No analytics credentials added.
- Improved mobile subsystem copy, team credentials, source notes, footer disclosures and graphic labels. Footer accessible name includes visible “MARDE Inc.”.
- Next, third-parties and ESLint config updated 16.3.1 → 16.3.4; sharp → 0.35.4. Full npm audit: **zero vulnerabilities**. No new runtime library.
- Removed accidental Tailwind compiler inclusion in browser JS by importing only its preflight stylesheet; CSS Modules provide component styles. Largest uncompressed JS file decreased ~630 KB → ~228 KB. Selective imports enabled for existing icon, Radix and Anime packages.
- Windows-only RSC export filename normalization in `scripts/finalize-export.mjs`, included in `npm run build`. It adds dot-separated aliases inside `out`, preserving originals. Linux GitHub export already uses correct names; existing live segment returned 200. Installed Next `shared/lib/segment-cache/segment-value-encoding.js` confirms expected naming. No framework source patches.
- Local static server supports gzip for realistic transfer testing. Hosting/DNS unchanged.

## Verification

- Next 16.3.4 production build, TypeScript, static export: pass, 19 generated entries. ESLint and diff whitespace checks pass.
- Full built-export Playwright suite: **71 passed, 3 device-specific skips** (74 total). Covers widths 320/390/768/1024/1440, public pages, all profiles, integrations with mocked side effects, keyboard, reduced motion, accessibility, no-JS, metadata, vCards, scheduler, analytics and zero failed navigation requests.
- Final Lighthouse mobile simulation on compressed localhost: **92 performance / 100 accessibility / 100 best practices / 100 SEO**, LCP 3.4 s. Previous compressed run: 94/100/96/100. Single laboratory runs with concurrent local QA; not field Core Web Vitals. Uncompressed baseline 74/100/93/100 is not directly comparable. JSON: `docs/qa/production/lighthouse-home.json`.
- All 13 interior/profile routes captured at 390/1440 after framework/preflight changes: no overflow or JS exceptions. These captures precede the final footer/font increase; latest homepage captures 390/768/1440 include it. Tests cover final build. Evidence: `docs/qa/session3/`.
- `scripts/review-motion.mjs`: intermediate wheel movement settles at 1200 px; zero RAF callbacks over idle second; PageDown moves to 1991 px; runtime reduced motion disables Lenis/cursor and preserves final 6.4/7.6/50.2 values. No exceptions. Evidence: `docs/qa/session3-motion/`. Viewed intermediate screenshot. Browser automation is not a human trackpad/complete subjective animation review.
- Viewed new OG, mobile homepage, mobile Air graphic and intermediate scrolling. Other captures await final subjective review. Session 2 already checked real Calendly at desktop/mobile without booking.

## Next at 9:30 PM

1. Read Git status, this handoff and deployment note. Pause automation; check usage. Use included allowance first, credits only for safe finish. Do not restart/re-audit Sessions 1–2.
2. Finish focused current desktop/mobile visual review, real browser keyboard/zoom and remaining motion states. Use all official Apple, Anduril, Zipline, Airbound, Figure and Varda references for principles only. All primary pages reopened/read today; Figure inspected visually in Chrome. Do not claim all six received full new visual audits. Earlier sources: `docs/v2-design-research.md`.
3. Verify live Lighthouse after deployment, public SEO/integrations and public-asset/security checks. No real submissions/bookings/payments or private deck publication. Fix only clear defects; no new features. Optional source formatting/unused dependency cleanup must not derail finishing.
4. Produce the **17-part production-readiness report** required by governing brief section 85, with honest limitations, exact tests, deployment and rollback. Governing file: `C:/Users/mihir/.codex/attachments/9f12158e-554b-43d2-96b0-fb98bf7dbe0b/pasted-text.txt`, including graphics acceptance 72A–72F. Preserve verified pre-prototype/human-operator claims.
5. If fixing anything further, build/lint/relevant tests/visuals, commit and deploy under existing authorization; verify exact SHA workflow and live behavior. If unfinished after this last session, save precise next-week handoff and stop. No more scheduled sessions.

## Environment and commands

Workspace `C:/Users/mihir/Downloads/mardeweb`. Bundled Node: `C:/Users/mihir/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe`.

System npm.cmd invokes old Node 20.17 despite PATH changes. Invoke bundled Node on `C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js` for npm operations. Node 24.19 bundled works; CI uses Node 22.

- Build: bundled Node `node_modules/next/dist/bin/next build`, then `scripts/finalize-export.mjs`; normal npm build includes both.
- Lint: bundled Node `node_modules/eslint/bin/eslint.js .`.
- Tests: `QA_BASE_URL=http://127.0.0.1:3001`, bundled Node `node_modules/@playwright/test/cli.js test`.
- Server: bundled Node `scripts/serve-export.mjs`, loopback 3001 (may still be running).
- Lighthouse: `tmp/lighthouse-final.mjs` uses a cached installed CLI. Inspect before reuse; capture settings honestly.

## Security sources

Reviewed and patched: [Next Windows server RCE](https://github.com/advisories/GHSA-p293-qw3h-jr36), [Next image optimization/AVIF](https://github.com/advisories/GHSA-2xp9-vwfh-vxw4), [sharp/libheif](https://github.com/advisories/GHSA-rgj7-g3m4-5g8c). Public GitHub Pages serves static files, not those server endpoints. Final full audit saved in `docs/qa/production/npm-audit.json`.

## Preservation and deployment

User explicitly authorized GitHub deployment. Preserve Pages/Cloudflare. V1 branch `archive/marde-v1-pre-rebuild-2026-09-08`, tag `marde-v1-pre-rebuild-2026-09-08`, SHA `f953fbbb0f33118b1b2e07c165ac54a61bd40ba6`. Session 2 live checkpoint `b33764ee3993f9d5e0f95c3ce6110d0b04c62f8f`. History: `docs/session1-handoff.md`, `docs/session2-handoff.md`.

Rollback through a new commit on clean main: `git restore --source=<checkpoint> --staged --worktree -- .`, inspect, commit, push. No force push.

Usage last checked: five-hour 82% used; weekly 87% used (13% left); credits 326.215966 unchanged. Stop new features and checkpoint.

Afternoon deployment verification follows in `docs/session-handoff.md` after the workflow completes.

DEPLOYMENT VERIFIED: Afternoon pass commit e8d3e3605107a7725d9015d5381af95c595e75a8 deployed successfully through GitHub Pages run https://github.com/Nandish-GH/marde/actions/runs/34405269216 . Build and deploy jobs succeeded. Live checks returned HTTP 200 for Home, Technology, Mission, Team, Support, FAQ, Privacy, Contact, all five profiles and og-v2.png. Homepage metadata points to the new OG image. Cloudflare configuration unchanged. This verification note is committed to the V2 branch only to avoid an unnecessary deployment. Final follow-up remains scheduled for 9:30 PM Eastern on September 9; finish the acceptance review/report then or save remaining work for next week.

SEPTEMBER 14 DEPLOYMENT VERIFIED: Implementation c324633, merged production history at 61a1cf28947aa9b0b3f22bd40a8fc8011653a280, pushed to main and codex/marde-v2-production. GitHub Pages build and deploy succeeded: https://github.com/Nandish-GH/marde/actions/runs/34901187437 . Live Home, Nexus SVG and Nandish profile returned 200; homepage includes new closing CTA and image opening; approved profile tagline preserved. Live Chromium at 390 and 1440 exercised Human authorization and client navigation to Technology with no page errors or overflow. Other profiles are covered by local exact-copy suite and untouched in this release. Additional screenshots inspected: Chromium mobile homepage, WebKit reduced-motion desktop homepage and opening intermediate handoff. No Cloudflare changes. This verification note is committed/pushed on the V2 branch only, avoiding a redundant site deployment. Next: user device feedback and 10:35 PM continuation for remaining scope above.
