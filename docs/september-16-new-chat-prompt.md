# MARDE website — new-chat continuation prompt

Prepared September 9, 2026, before the 9:30 PM session. That session must refresh the checkpoint and remaining-work section below before stopping. The user will review this prompt and schedule a new chat for September 16, 2026, or after the weekly usage reset. This document does not itself schedule or start work.

---

Continue the MARDE Inc. website remodel in this new chat. Carry forward the completed V2 work and the latest saved handoff. Do not rebuild from scratch again or spend the session re-auditing completed work. Prioritize a polished, original, serious robotics website and spend most available capacity implementing and visually verifying meaningful improvements.

## Workspace and first steps

- Local project: `C:/Users/mihir/Downloads/mardeweb`.
- Repository: https://github.com/Nandish-GH/marde
- Live site: https://mardeinc.com
- Working branch: `codex/marde-v2-production`; production branch: `main`.
- Original Codex task: `01a082d4-e052-7262-8f28-64b089dd59b1`. Read its latest turns through the task tools if available and necessary; the new chat must also be able to proceed from the files below.
- Read `AGENTS.md`, `docs/session-handoff.md`, recent Git commits/status and any final production-readiness report first. Preserve uncommitted work. The newest verified handoff and Git state supersede historical snapshots in this prompt.
- Check actual weekly and five-hour usage/reset times before substantial work. September 16 is the user's intended date, not proof that capacity has reset. Use included capacity first; existing credits are a reserve for safe completion/checkpointing. Do not buy credits or redeem usage resets. If capacity is still unavailable, save the state and report the actual reset information rather than burning the reserve waiting.

## Governing instructions and source hierarchy

The revised V2 master prompt governs implementation and graphics acceptance. Read it fully before deciding the remaining scope:

`C:/Users/mihir/.codex/attachments/9f12158e-554b-43d2-96b0-fb98bf7dbe0b/pasted-text.txt`

In particular, retain sections 72A–72F on the complete original graphics family and section 85's 17-part production-readiness report. The user explicitly incorporated this brief as instructions; other documents remain references unless expressly adopted. Current user directions override earlier conflicting text.

Additional sources:

- `C:/Users/mihir/Downloads/MARDE_Astra_V2_FULL_REBUILD_FINAL_GitHubPages_Cloudflare.txt` — original V2 brief; revised attachment above governs conflicts.
- `C:/Users/mihir/Downloads/MARDE_Astra_Final_Production_Master_Prompt_v3_MAX_DETAIL.txt` — factual/brand reference.
- `C:/Users/mihir/Downloads/MARDE Pitch Deck Final.pdf` — current factual/brand reference. Do not upload the private PDF or publish private fundraising terms.
- `C:/Users/mihir/.codex/attachments/0908bb86-3857-4cef-8ab7-07e26ead2cb7/pasted-text.txt` — original rebuild/context reference.
- `C:/Users/mihir/.codex/attachments/458d26ad-2c58-4161-9533-95e2fd996084/pasted-text.txt` — earlier user-supplied Session 1 handoff.
- Repository notes: `docs/session1-handoff.md`, `docs/session2-handoff.md`, `docs/session3-checkpoint.md`, `docs/session-handoff.md`, `docs/v2-design-system.md`, `docs/v2-design-research.md`, and any later readiness report.

If a referenced source is unavailable, check the repository and original task for its saved contents. Do not invent missing requirements or treat the older document as equivalent without disclosing the gap.

## Design references and supplied assets

Use all these official references for principles, with focused research rather than copying or prolonged planning:

- Apple: https://www.apple.com/iphone/ — scroll choreography, typography, product storytelling.
- Anduril: https://www.anduril.com/ — serious autonomy/deep-tech presentation.
- Zipline: https://www.zipline.com/ — medical/logistics robotics storytelling.
- Airbound: https://www.airbound.com/ — visual direction and hardware communication.
- Figure: https://www.figure.ai/ — polished robotics presentation.
- Varda: https://www.varda.com/ or Saronic: https://www.saronic.com/ — aerospace/hardware visual language.

MARDE must keep its own identity. Do not clone typography, graphics, interactions, layouts or page structure. The established V2 family uses graphite technical scenes, warm editorial surfaces, restrained blue, Space Grotesk/Inter/IBM Plex Mono and original schematic artwork. Improve clarity and execution rather than introducing a disconnected redesign.

Supplied originals are in `C:/Users/mihir/Downloads/`: `marde-logo-light.png`, `marde-logo-dark.png`, `output-onlinetools.png`, `mardetrans (2026_02_20 03_15_44 UTC).png`, `mardetransblack.png`, `MARDE (2).png`, `marde.png`, and `Untitled design (4).png`. The last is the supplied Nandish portrait. Prefer approved optimized repository assets when suitable. Do not fabricate other team portraits or present schematic hardware as finalized CAD or photography.

## Verified company and product boundaries

MARDE is a Delaware C-Corporation based in New Jersey, pre-seed, pre-prototype and pre-revenue. Do not invent pilots, LOIs, approvals, validated performance or clinical capabilities. Air addresses distance; Ground addresses access; Nexus coordinates with human control; Modules extend capability. V1 is human-in-the-loop/operator-directed. Higher autonomy and medical interventions require future development, evidence and appropriate regulatory pathways.

CARES 2024 figures are 6.4-minute median first-responder response, 7.6-minute median EMS response and 50.2% unwitnessed arrests. These are external registry findings, not MARDE results. The annual report page 37 governs the first-responder/EMS distinction. Preserve existing source links and caveats.

Use approved structured content in `lib/content/v2.ts`, `lib/content/profiles.ts`, `lib/site-config.ts` and `lib/nandish-profile.ts`. Other team vCards intentionally contain only approved name, role, company and profile URL. Do not invent personal contact details. Support is not an equity investment or a promised tax-deductible charitable donation.

## Historical checkpoint — refresh after the September 9 evening session

As of the afternoon deployment, September 9:

- Live implementation SHA: `e8d3e3605107a7725d9015d5381af95c595e75a8`.
- Successful workflow: https://github.com/Nandish-GH/marde/actions/runs/34405269216
- Documentation checkpoint: `0beb6b1` on the V2 branch; later commits may supersede it.
- Home, Technology, Mission, Team, Support, FAQ, Privacy, Contact, thank-you/404 and five reusable profiles (`/nandish/`, `/snehi/`, `/aanya/`, `/arjun/`, `/saathvika/`) implemented. Original Air/Ground/Modules graphics, integrated architecture, Nexus concept interactions, scheduling dialog, vCards and share behavior present.
- New `og-v2.png`, mobile readability improvements, resilient optional analytics, patched dependencies and smaller browser bundle deployed. Legacy source/styles removed in Session 2.
- Built-export suite: 71 passed, 3 device-specific skips. Build/TypeScript/lint pass. Full npm audit: zero vulnerabilities at that checkpoint.
- Local compressed mobile Lighthouse: 92 performance / 100 accessibility / 100 best practices / 100 SEO, LCP 3.4 s. Laboratory results, not field metrics. Do not assume they remain current.
- Automated motion review: smooth wheel settling, working PageDown, no idle RAF activity, runtime reduced motion disabling smoothing/cursor and retaining final values.
- QA evidence under `docs/qa/session2-export/`, `docs/qa/session3/`, `docs/qa/session3-motion/`, `docs/qa/production/`.

Before the evening session, remaining work was focused visual consistency review, real browser keyboard/zoom and remaining motion states, live performance/SEO/integration/public-asset checks, and the final 17-part readiness report. The evening session must replace this paragraph with what actually remains. If it completes V2 acceptance, use its report and the user's review to target the next meaningful refinements; do not claim unfinished work simply to justify another session or restart completed features.

## Implementation and validation

Read relevant installed Next documentation under `node_modules/next/dist/docs/` before code changes, as AGENTS.md requires. Current checkpoint uses Next 16.3.4/React 19, CSS Modules, Lenis, Anime.js and Radix. Avoid unnecessary libraries or speculative upgrades; check relevant current advisories when doing security work.

Windows bundled Node: `C:/Users/mihir/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe`. System npm.cmd invokes outdated Node even with PATH prepended. For npm operations, run bundled Node with `C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js`. CI uses Node 22.

Build with `next build` then `scripts/finalize-export.mjs`; both are in `npm run build`. The finalizer normalizes Windows RSC segment filenames without altering originals; Linux output is already correct. Local static server: `scripts/serve-export.mjs`, loopback port 3001. Test with `QA_BASE_URL=http://127.0.0.1:3001` and Playwright CLI; lint with ESLint. Use the saved scripts/commands in the latest handoff and avoid relying on stale running processes.

Check the actual built static output, desktop/mobile layouts, keyboard, reduced motion, no-JS fallbacks, accessible forms/dialogs, metadata/canonical/sitemap/robots and profile noindex. Visually inspect screenshots, not just automated assertions. Distinguish measured evidence from subjective judgment. Do not send real forms, book meetings, make payments or send messages to others during QA.

## Deployment, preservation and handoff

The user explicitly authorized GitHub deployment after initially saying not to deploy. After relevant tests and visual checks pass, commit/push the V2 branch and deploy through the existing `main` GitHub Pages workflow; verify exact SHA, workflow success and live routes. Keep Cloudflare/domain settings unchanged. No additional deployment confirmation is needed within this scope.

V1 is preserved in branch `archive/marde-v1-pre-rebuild-2026-09-08` and tag `marde-v1-pre-rebuild-2026-09-08`, SHA `f953fbbb0f33118b1b2e07c165ac54a61bd40ba6`. Do not repeat preservation or rewrite history. Roll back through a new reviewed restore commit, never force push.

Check capacity periodically. Before it runs low, stop starting features, finish safe validation, save all work, commit/push stable changes and update `docs/session-handoff.md` plus this continuation prompt with exact commit/deployment status, tests, unresolved issues and the next action. Do this early enough that exhaustion cannot erase the handoff. If not safe to deploy, preserve the branch and explain the concrete remaining issue.

The user will review and schedule this new-chat prompt. Do not create further chats, schedules or recurring runs without a new request. Report completed improvements clearly and keep any remaining limitations honest.
