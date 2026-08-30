# MARDE Homepage Design QA

## Comparison target

- Source visual truth: design reference provided during the reconstruction session (not committed to this repository).
- Rendered implementation: `docs/qa/operational-relay-homepage/desktop-1440-full.png`
- Focused implementation evidence:
  - `docs/qa/operational-relay-homepage/desktop-1440-hero.png`
  - `docs/qa/operational-relay-homepage/desktop-1440-nexus.png`
  - `docs/qa/operational-relay-homepage/mobile-390-hero.png`
  - `docs/qa/operational-relay-homepage/mobile-390-nexus.png`
- Source pixels: 786 × 2002.
- Implementation pixels: 1440 × 5484 at a 1440 × 1000 CSS viewport, device scale factor 1.
- Responsive evidence: 320, 390, 430, 768, 1024, 1280, and 1440 CSS-pixel widths.
- State: static homepage, default theme, no homepage motion, menu closed, FAQ collapsed.
- Normalization: full-page images were viewed together in one comparison input and judged by relative section proportions rather than raw pixel equality because the source is a compact visual board rather than a 1:1 browser capture.

## Findings

No actionable P0, P1, or P2 findings remain.

- Fonts and typography: the final hero uses Archivo in a heavy uppercase treatment; editorial sections use the existing MARDE serif display face, Inter body text, and IBM Plex Mono metadata. Hierarchy and wrapping remain coherent at all captured widths. The source hero is more condensed; this is retained as a P3 opportunity rather than adding another font family at this checkpoint.
- Spacing and layout rhythm: the final page preserves the split relay hero and status strip, then shifts into a lighter editorial rhythm. Section padding was tightened after the first comparison. The implementation remains intentionally more spacious than the compact source board, consistent with the approved Option 2 direction.
- Colors and tokens: warm off-white, near-black, operational dark teal, thin neutral rules, and restrained red align with the source. Small-label and dark-surface red contrast was corrected and the axe pass is clean.
- Image quality and asset fidelity: existing approved Air and Ground concept artwork is retained. The initial generic module icon was replaced with a dedicated generated line-art intervention-module asset. Nexus uses the existing map texture and library icons; no new handcrafted SVG artwork was introduced.
- Copy and content: implementation copy is drawn from approved repository content and approved company-stage facts. Unsupported mockup specifications and claims were not carried over.
- Responsiveness: no horizontal overflow was found across the tested breakpoint set. The relay, company strip, product family, Nexus interface, roadmap, team, FAQ, CTA, and footer all collapse without overlap or clipping.
- Behavior and accessibility: the Radix mobile navigation opens as a modal, Escape closes it, focus returns to the trigger, the FAQ remains keyboard-operable, reduced-motion behavior is native, and no serious or critical axe violations remain.
- Console: a clean browser session reported no warnings or errors after the static-export image configuration fix.

## Comparison history

### Pass 1

- P2 typography: the homepage hero inherited the legacy serif display family and did not match the selected technical hero direction.
  - Fix: scoped the hero headline to Archivo, weight 700, while preserving the editorial serif for the rest of the page.
- P2 spacing: reconstructed editorial sections were substantially taller than the reference board and weakened the intended visual cadence.
  - Fix: reduced shared section and Nexus vertical padding, tightened the system heading gap, and normalized product visual height.
- P2 image fidelity: Intervention Modules used a generic first-aid icon instead of a product-level illustration.
  - Fix: generated and installed `public/illustrations/marde-intervention-module.jpg`, matching the approved neutral engineering-line-art direction without specifications or claims. The delivery asset was resized and compressed to 61 KB.
- P2 accessibility: multiple 8–10px metadata labels and red-on-dark status labels failed WCAG AA contrast.
  - Fix: darkened light-surface metadata and brightened operational red on dark surfaces. Focused axe rerun passed on desktop and mobile.

### Pass 2

- Evidence: the post-fix source and `desktop-1440-full.png` were opened together; focused hero and Nexus captures were also inspected.
- Result: selected composition, section ordering, visual language, product hierarchy, Nexus contrast, typography hierarchy, and responsive behavior align with the approved hybrid direction. Remaining differences are intentional content-safety and editorial-spacing choices or P3 polish.

## Primary interactions tested

- Desktop and mobile navigation links render and preserve existing routes.
- Mobile menu opens, closes with its close control, closes with Escape, and restores focus.
- Homepage FAQ accordion remains accessible.
- Homepage Nexus anchor and `/technology/#nexus` target remain intact.
- Email signup and donation controls remain wired to their existing integrations; no submission was performed.

## Follow-up polish

- P3: consider a carefully evaluated condensed display face for the hero only if the additional font cost is approved.
- P3: consider a dedicated first-party Nexus map illustration in a later visual phase; the current texture-and-status composition is complete and factual but deliberately restrained.

final result: passed
