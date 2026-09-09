# MARDE V2 — Session 2 handoff

SESSION: 2 — public pages, product graphics and reusable NFC contact profiles.
CURRENT BRANCH: `codex/marde-v2-production`
IMPLEMENTATION COMMIT: `7bd43f5` (subsequent documentation/QA commit records this checkpoint).

## Completed
- Rebuilt Technology, Mission, Team, Support, FAQ, Privacy, thank-you and 404 with the V2 system. Retained and verified Contact.
- Technology: four anchored subsystems, integrated architecture, operator-directed workflow and staged development/autonomy narrative.
- New schematic Air, Ground and Modules graphics based on provisional repository form studies, with explicit concept labels. Ground role glyph aligned with the wheeled schematic. No hardware dimensions, sensors, validated performance or treatment capability invented.
- Extended shared Nexus concept with Air/Ground/module/system-review fields. Added a responsive, state-linked workflow graphic. Existing integrated-system composition remains; final graphics/OG acceptance belongs to Session 3.
- Mission uses the approved founder background without an invented anecdote. Team includes five verified bios and selected credentials; Nandish portrait and consistent initials fallbacks for others.
- Five explicit profile routes use one shared profile component and data source. All are noindex/nofollow, outside primary navigation and sitemap, and omit corporate chrome. Team Connect links provide intentional access.
- Nandish: restrained technical background, prominent portrait, approved actions, scheduling dialog. Provider iframe mounts only when opened, with title, close, focus trapping/restoration and direct no-JS/failure fallback.
- New vCards for the other four members contain name, role, company and profile URL only. No invented personal email/phone. Existing Nandish vCard retained exactly.
- Support uses the approved Stripe hosted destination directly, avoiding an unnecessary embed/script. Contact remains Formspree; no submissions or bookings made during QA.
- Privacy updated for actual form, Stripe link, lazy Calendly, profile/vCard/share and optional analytics behavior. Shared FAQ expanded. llms.txt brought into line with current claims.
- Removed 27 unused legacy source/style files, obsolete CSS reconstruction script and unused Newsreader font. No legacy stylesheet ships. No dependencies added.

## Verification
- Next production build + TypeScript + static export passed: 19 generated pages/assets.
- ESLint passed. Git diff whitespace check passed after trailing-newline cleanup.
- Full built-static-export Playwright suite: **67 passed, 3 device-specific skips** against `http://127.0.0.1:3001`.
- Development suite: all functional checks passed after fixes; one stat-layout assertion sampled two boxes on separate animation frames. Corrected it to take both bounds atomically; built-export suite passes the corrected check.
- Width matrix: 320, 390, 768, 1024, 1440. Final export screenshot captures at 390, 768, 1440; development captures also at 1024. No final horizontal overflow or browser errors observed.
- Axe: no serious/critical violations on tested public pages; all five profiles passed with zero automated violations.
- Scheduler tests cover lazy loading, focus containment, Escape/close, restored focus, unmount and no-JS destination. Real Calendly iframe loaded at 390 and 1440; visual screenshots inspected, no booking attempted.
- Real Chrome loaded Technology and Nandish. Chrome extension click dispatch timed out; browser screenshots and actual scheduling inspection used Playwright. Do not claim a completed subjective wheel/trackpad or all intermediate-animation review.
- QA screenshots: `docs/qa/session2/` (development) and `docs/qa/session2-export/` (final static export). Full-page/section captures hide fixed chrome to avoid screenshot stitching artifacts; viewport captures retain it.

## Remaining / Session 3
1. Review all pages and graphics as one visual family, including small concept-label readability, mobile compositions and homepage-to-Technology graphic consistency. Existing form studies are schematic references, not approved final CAD.
2. Create the V2 social/OG image and update metadata dimensions.
3. Complete subjective smooth-scroll/cursor/normal-motion review and intermediate animation states; then reduced motion, keyboard and zoom review.
4. Run Lighthouse/performance, dependencies/security/public-asset review and final claims/SEO/integration audit. Old unreferenced concept assets and unused installed packages can be considered for removal. Do not automatically add tooling.
5. Review source formatting/maintainability and remove remaining obsolete documentation references to old CSS tooling.
6. Produce the final production-readiness report. Do not automatically begin Session 3; user starts the next session.

NEXT EXACT STEP: Read this handoff and the revised governing brief, inspect Git status, then begin Session 3 with visual/motion review and OG creation. Do not re-audit V1 or restart the homepage.

GOVERNING BRIEF: `C:/Users/mihir/.codex/attachments/9f12158e-554b-43d2-96b0-fb98bf7dbe0b/pasted-text.txt`, including graphics sections 72A–72F. Source/brand references remain the current deck and prior approved materials. Previous session history is in `docs/session1-handoff.md`.

USAGE: At checkpoint, five-hour allowance 90% used; weekly allowance 72% used (28% remaining); reserve credits 404.873191, unchanged from Session 2 start. No further feature work this session.

DEPLOYMENT: User's standing GitHub deployment authorization remains valid. Session 2 deployment status will be recorded below after workflow verification. Keep GitHub Pages + Cloudflare domain architecture unchanged.

RECOVERY: V1 remains archived at branch `archive/marde-v1-pre-rebuild-2026-09-08` and tag `marde-v1-pre-rebuild-2026-09-08`. Session 1 live implementation was `e311494314b48992863cf3fbe34725cc7d6413a2`. To restore a chosen checkpoint, on clean main use `git restore --source=<checkpoint> --staged --worktree -- .`, inspect, create a new rollback commit and push main. Never force-push.
