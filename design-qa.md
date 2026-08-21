# Homepage Nexus preview design QA

## Comparison target

- Product brief: `C:/Users/mihir/.codex/attachments/31351ebe-4ca4-4b85-9d90-f00ee3646a3f/pasted-text.txt`.
- Approved visual source of truth: `tmp/nexus-1440.png` and `tmp/nexus-390.png` from `/technology/#nexus`.
- Homepage baseline: `tmp/home-nexus-before-1440.png` and `tmp/home-nexus-before-390.png`.
- Homepage implementation: `tmp/home-nexus-after-1440.png` and `tmp/home-nexus-after-390.png`.
- Technology regression implementation: `tmp/technology-nexus-after-1440.png` and `tmp/technology-nexus-after-390.png`.
- State: light theme, intro animation settled, homepage Nexus aligned to the same card position, Technology anchor aligned beneath the 72px fixed header.
- Browser capture density: 1 CSS pixel per image pixel. Desktop scrollbar produced a one-pixel baseline width variance (1425px before, 1424px after); comparisons use the common visible content area.

## Full-view evidence

- Desktop before/after: `tmp/qa-home-desktop.png` at a 1440 × 1100 CSS viewport. Source pixels: 1425 × 1089. Implementation pixels: 1424 × 1100.
- Mobile before/after: `tmp/qa-home-mobile.png` at a 390 × 1200 CSS viewport. Both captures: 374 × 1200 pixels.
- Technology desktop regression: `tmp/qa-technology-desktop.png` at a 1440 × 1000 CSS viewport. Both captures: 1424 × 999 pixels.
- Technology mobile regression: `tmp/qa-technology-mobile.png`, normalized to the first 1800 pixels of matching 390 × 2200 CSS captures. Both source files: 374 × 2200 pixels.

## Focused evidence

- `tmp/qa-home-desktop-focus.png` isolates the full-console baseline and the simplified preview. It confirms that the map, asset state, and human authorization retain the approved visual language while Mission, Activity, and System Status are removed from the homepage.
- A separate mobile focus crop was not needed: the 374px-wide full-view comparison renders the labels at readable native density and clearly shows the responsive content order.

## Findings

- No actionable P0, P1, or P2 differences remain.
- Fonts and typography: the existing MARDE display, body, and mono families are preserved. The homepage headline remains 34–46px across the matrix while the preview header is 11px and technical asset labels are at least 7px.
- Spacing and layout: desktop retains the editorial split, but the preview is now a 517px product illustration rather than a full-height application. Mobile follows copy → map → assets → authorization without Activity or System Status.
- Colors and tokens: the approved pale mint, slate, teal-line, green-ready, and amber-authorization tokens are reused.
- Image quality: the same optimized fictional map texture is reused without scaling artifacts or a new visual treatment.
- Copy and content: the short approved homepage positioning copy is unchanged. All preview states remain explicitly simulated, conceptual, and human-authorized.
- Icons: the same Phosphor line-icon family used by the approved full console is reused.
- Interaction and accessibility: the teaser is semantic content rather than a nested full-card link; the explicit CTA is keyboard-focusable and routes to the detailed experience.

## Comparison history

1. P1 baseline: the homepage directly rendered the full Technology console. Homepage card heading rules enlarged nested panel titles and the complete Mission, Activity, and System Status content overwhelmed the page. Fixed by introducing `HomepageNexusPreview` and rendering only map, assets, and authorization.
2. P2 first responsive pass: compact asset labels measured 6px and the mobile preview retained unnecessary side margins. Fixed by raising labels to 7px and widening the mobile preview. Post-fix evidence is `tmp/home-nexus-after-390.png` and the requested 320–1536 matrix.
3. Technology regression pass: compared approved desktop/mobile captures with post-change captures. The composition, content, responsive behavior, typography, and approved full console remain visually unchanged.

## Interaction and viewport verification

- CTA click tested in the in-app browser: `/technology/#nexus` loaded, `location.hash` became `#nexus`, the full console rendered, and the target settled 72px below the fixed header.
- Homepage checked at 320, 375, 390, 430, 768, 1024, 1280, 1440, and 1536px.
- Technology checked at 390, 768, and 1440px.
- Document scroll width equaled document client width at every tested homepage size and at the Technology regression sizes.
- No visible runtime or hydration error was observed during the browser-rendered QA journey; the browser harness did not expose a standalone console-log export.

final result: passed
