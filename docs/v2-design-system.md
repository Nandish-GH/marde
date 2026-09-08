# MARDE V2 design system

Warm paper `#f4f3ee`; ink `#15191f`; graphite `#111418`; functional blue `#2b61ca`; light blue `#8fbaff`. Muted light/dark text uses separate tokens. Warm atmosphere is restricted to the closing scene.

Space Grotesk leads the new editorial/system typography; Inter handles body/UI; IBM Plex Mono identifies sections and concepts. Newsreader remains loaded temporarily for V1 interior compatibility. Body text is never mono. Layout uses fluid headings, 5.5vw desktop gutters (1440px content cap), 32px tablet, 22px mobile, 18px narrow mobile.

Composition: charcoal introduction → paper response gap → soft system comparison → paper workflow → graphite Nexus → paper access/development → soft team → paper questions → atmospheric close. Thin rules, small corners, few surfaces. Original SVG diagrams describe roles, not finalized engineering geometry.

Motion: short fresh-document CSS push; hero route draw; stat count with stable layout; section-specific entry motion; controlled desktop Lenis smoothing driven only while scrolling; native touch/keyboard. No cursor idle RAF. Precision plus inverts against light and dark surfaces. Native editing cursors remain available. Reduced motion disables opening, smoothing, counters, and custom cursor; preference changes are observed at runtime.

Primary CTA: Explore the Technology. Secondary: Contact MARDE. Support remains contextual. Four system links have the same semantic whole-panel interaction. Mobile workflow becomes a compact two-column selection followed by a readable detail panel; Nexus stacks map/context above operator controls.

Implementation: `components/v2/` uses CSS Modules; `lib/content/v2.ts` centralizes homepage facts, team contributions, and shared FAQ. `app/globals.css` contains the new base/tokens only. V1 interior styles are temporarily scoped to `.legacy` in `app/legacy.css`; remove this adapter as the corresponding pages migrate in Session 2. V1 is recoverable from archive branch/tag and is never duplicated as public reference assets.
