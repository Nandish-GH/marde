# MARDE website design and release QA

**Review date:** August 20, 2026

**Build reviewed:** Current pre-commit working tree after the owner-review pass

**Result:** Pass, with the verification limits documented below

## Scope

This record preserves current visual and interaction evidence for the production-ready MARDE website. The review was observational: it did not alter the approved homepage Nexus, Technology Nexus, Air, Ground, site copy, metadata, analytics, SEO, or regulatory language.

The screenshots were regenerated from the current local build. The former `tmp/` captures were comparison-oriented development artifacts and are not used as current release evidence.

## Current screenshot evidence

| File | Route and viewport | Evidence captured |
| --- | --- | --- |
| `homepage-desktop.png` | `/`, 1440 × 1000 | Current desktop homepage hero and navigation |
| `homepage-mobile-390.png` | `/`, 390 × 1200 | Current mobile homepage hero and collapsed navigation |
| `nexus-homepage-desktop.png` | `/#home-nexus`, 1440 × 1000 | Approved homepage Nexus preview in its desktop composition |
| `nexus-homepage-mobile.png` | `/#home-nexus`, 390 × 1400 | Approved homepage Nexus preview in its mobile composition |
| `technology-desktop.png` | `/technology/`, 1440 × 1000 | Current Technology page introduction and Air transition |
| `technology-mobile-390.png` | `/technology/`, 390 × 1400 | Current mobile Technology introduction and Air section |
| `nexus-technology-desktop.png` | `/technology/#nexus`, 1440 × 1000 | Approved full Nexus interface in its desktop layout |
| `nexus-technology-mobile.png` | `/technology/#nexus`, 390 × 1400 | Approved full Nexus interface scaled for mobile |

## Homepage

- Desktop and 390 px mobile states were visually reviewed from the current build.
- The homepage Nexus preview retains its approved composition, hierarchy, labeling, and restrained technical styling.
- At both captured widths, `document.documentElement.scrollWidth` equaled `clientWidth`; no horizontal overflow was detected.

## Technology

- Desktop and 390 px mobile states were visually reviewed from the current build.
- The approved full Nexus interface remains a single coordinated system view and is fully represented in the focused desktop and mobile evidence.
- Air and the page introduction remain visually consistent with the approved design.
- At both captured widths, `document.documentElement.scrollWidth` equaled `clientWidth`; no horizontal overflow was detected.

## Navigation

- The mobile menu opened and closed successfully at 390 px.
- Opening set `aria-expanded="true"`, exposed an `aria-modal="true"` dialog, moved focus to the first navigation link, and locked document scrolling.
- Closing removed the visible dialog, restored scroll behavior, set `aria-expanded="false"`, and returned focus to the menu button.
- The focus-trap implementation handles Tab, Shift+Tab, and Escape in `app/site-header.tsx`; the runtime check confirmed focus placement and restoration at the modal boundaries.

## Forms

- The Support page rendered one contact form and one email-signup form with no duplicate element IDs.
- Contact fields expose three required controls; email signup exposes one required email control.
- A blank contact submission was blocked by native required-field validation.
- Both forms include polite live submission status regions, disabled/loading button states, Formspree field and general error components, and success redirects to `/thank-you/`.
- No production form submission was sent during this review, so live Formspree success and server-error responses were not exercised.

## FAQ

- All four homepage FAQ triggers exposed valid `aria-expanded` and `aria-controls` relationships.
- Each controlled panel referenced its trigger with `aria-labelledby`.
- Activating the second item changed the single-open state from the first item to the second item as expected.

## Technical verification

| Check | Result |
| --- | --- |
| Production build (`npm run build`) | Pass |
| TypeScript (`npm exec tsc -- --noEmit`) | Pass |
| ESLint (`npm run lint`) | Pass |
| Whitespace/error markers (`git diff --check`) | Pass |
| Internal route review | Pass; current internal destinations resolved in the local build |
| Browser console | No errors observed while reviewing the captured homepage, Technology, Support, and FAQ states |
| Responsive/overflow | Pass at the captured 1440 px and 390 px widths; additional current 1280 px checks also showed no horizontal overflow |

## Verification limits

- Screenshots are Chromium-based local-build evidence, not an exhaustive cross-browser certification.
- Production form delivery was intentionally not triggered.
- The screenshot set documents the key release states without retaining duplicate breakpoint captures.
