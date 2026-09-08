# MARDE V2 — Session 1 handoff

SESSION: 1 — archive, design foundation, homepage; Contact added so the new navigation has a usable destination.

CURRENT BRANCH: `codex/marde-v2-production`

CURRENT COMMIT: Deployed implementation `e311494314b48992863cf3fbe34725cc7d6413a2` (following checkpoint `ac0e2d2`). A later documentation-only commit on this branch records the deployment; use `git log -1` for its hash.

COMPLETED:
- Archived V1 commit `f953fbbb0f33118b1b2e07c165ac54a61bd40ba6` locally and on GitHub as branch `archive/marde-v1-pre-rebuild-2026-09-08` and annotated tag `marde-v1-pre-rebuild-2026-09-08`.
- New charcoal/paper/blue identity, shared header/mobile dialog/footer, original conceptual system diagrams and complete homepage narrative.
- Response Gap, equal Air/Ground/Nexus/Modules links, interactive six-step workflow, three Nexus concept modes, access illustration, development roadmap, team preview, shared FAQ and contact/support close.
- Correct CARES response definitions and direct annual-report citation. Factual references: V2 prompt and current pitch deck; no speculative hardware specs or securities terms published.
- Precision plus cursor; event-driven Lenis desktop smoothing; fresh-document opening reveal; stats/entry motion; runtime reduced-motion support.
- Contact with category, native validation, intercepted-test failure/retry/success, email fallback, Formspree and no-JS POST fallback. Shared FAQ migrated to one data source. Modules target added to Technology.

FILES CHANGED: `components/v2/`, `lib/content/v2.ts`, root layout/page/styles/shell, Contact, FAQ data, Technology Modules anchor, sitemap, test configuration and tests, capture/static-server scripts, design notes. Old interior styles are explicitly scoped in `app/legacy.css` pending Session 2. V1 screenshots are under `docs/v1-reference/`; QA captures under `docs/qa/v2/`, never in public assets.

TESTS/CHECKS RUN:
- V1 baseline build passed before replacement.
- V2 Next build including TypeScript and static export passed (15 generated pages/assets).
- ESLint passed; ignored existing untracked temporary inspection scripts via `tmp/**`.
- Full development Playwright suite: 57 passed, 3 device-specific skips.
- Built-export V2 suite: 6 passed.
- Automated overflow/stat/link checks at 320, 390, 768, 1024, 1440; screenshot review at 390, 768, 1440.
- Homepage/Contact and representative interior axe scans: no serious/critical violations after contrast corrections.
- Keyboard menu close/focus restore, FAQ, Nexus and workflow state, no-JS homepage, dynamic reduced motion, native text cursor, vCard/share and preserved profile destinations checked.
- Form requests intercepted locally; no real messages, payments or appointments.

KNOWN ISSUES / LIMITATIONS:
- This is the Session 1 foundation, not the finished three-session V2. Interior pages retain V1 composition and scoped CSS until Session 2. The temporary scoped legacy CSS still contributes to the shared stylesheet; split/remove it during migration.
- Only Nandish has a supplied standalone portrait; other team previews intentionally use initials.
- Chrome extension opened the local page and exposed content, but CDP screenshot capture timed out; visual review used Playwright-generated screenshots. Manual subjective wheel/trackpad review remains for Session 2/3. Automated interaction checks are not a substitute for that review.
- Full Lighthouse, broader security/performance work, final OG, complete NFC system and scheduling dialog belong to subsequent sessions. Existing Nandish profile is preserved.
- Research was time-boxed, with mostly primary-page content review; do not claim exhaustive visual study of every reference.

INCOMPLETE WORK: Session 2 main pages and NFC profiles, followed by Session 3 polish/accessibility/performance/security. Do not restart the homepage or re-audit V1.

NEXT EXACT STEP: Inspect Git status/latest commits and this handoff, then rebuild Technology using the new `components/v2/` system, preserving the four target anchors and verified factual content. Propagate the design through Mission, Team, Support, FAQ, Privacy and profiles; remove each corresponding legacy dependency as it is replaced.

NEXT SESSION: 2 — complete public site and NFC experience. User starts the next session; the one-time automation is paused.

IMPORTANT CONTEXT: The V2 prompt in Downloads governs. The user explicitly authorized GitHub deployment after initially requesting no deployment; that latest authorization supersedes older document restrictions. Preserve GitHub Pages + Cloudflare DNS architecture. Do not change DNS. Reserve credits are authorized for safe completion/checkpointing, not unrelated work. No new features near quota limits.

DEPLOYMENT: Live and verified at https://mardeinc.com/. Commit `e311494314b48992863cf3fbe34725cc7d6413a2` was pushed to `main` and deployed successfully by the existing GitHub Pages workflow: https://github.com/Nandish-GH/marde/actions/runs/34291937037. Chrome confirmed the public V2 homepage, including the new Contact navigation, four-part architecture, corrected CARES figures, response sequence and Nexus concepts. Direct HTTPS requests to the homepage, Contact and Technology returned 200; www redirected to the apex domain. Cloudflare DNS was unchanged. This final handoff update is pushed to `codex/marde-v2-production` only, avoiding an unnecessary second deployment.

USAGE HANDOFF: At final deployment verification, the five-hour allowance was 99% used and the weekly allowance 58% used (42% remaining). Reported reserve balance was 437.713712 credits, down from 474.543512 at session start; reserve use was limited to completing verification, deployment and checkpointing. Stop here and let the user start Session 2 after capacity is available.

ROLLBACK: Preserve history. On a clean `main` matching the deployment, create a new rollback commit restoring the V1 tree: `git restore --source=marde-v1-pre-rebuild-2026-09-08 --staged --worktree -- .`, then `git commit -m "Restore MARDE V1"` and `git push origin main`. This triggers the existing Pages workflow. Review the restored tree before pushing; never force-push. The archive branch/tag remains available independently.
