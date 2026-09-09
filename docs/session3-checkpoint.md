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
