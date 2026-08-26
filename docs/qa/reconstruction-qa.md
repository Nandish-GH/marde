# MARDE frontend reconstruction QA

Date: 2026-08-25  
Scope: approved Phases 0–5 only

## Result

The frontend has been reconstructed around shared tokens, UI primitives, page-level compositions, and focused CSS modules while preserving the existing routes, navigation, MARDE visual direction, integrations, and locked Nexus experiences. No Phase 6 concepts, deployment, or release operations were performed.

## Verification

- Production build: pass; 11 application routes statically prerendered
- TypeScript (`tsc --noEmit`): pass
- ESLint: pass
- Playwright: 29 passed, 1 intentionally skipped desktop-only duplicate of the mobile-navigation case
- axe: no serious or critical violations on representative desktop and mobile pages; Stripe's third-party buy-button shadow DOM is excluded as documented below
- npm audit: 0 known vulnerabilities
- Lighthouse on the production export: Performance 98, Accessibility 100, Best Practices 100, SEO 100
- Lighthouse lab metrics: FCP 1.1 s, LCP 2.4 s, Speed Index 1.6 s, TBT 10 ms, CLS 0
- `git diff --check`: pass

## Visual regression classification

Protected and visually checked:

- Homepage Nexus preview
- Technology Nexus at `/technology/#nexus`
- Human Authorization treatment and information hierarchy
- Desktop and mobile route layouts
- Existing navigation labels, links, CTAs, forms, metadata, and public integration surfaces

Intentional differences:

- Normalized typography, container behavior, spacing, fields, buttons, focus states, and mobile navigation behavior
- Stronger contrast for a small number of muted labels and FAQ copy
- Accessible reduced-motion behavior now renders all content immediately and uses native scrolling
- Factual qualifications for development status, autonomy, regulatory status, CARES terminology, and Nexus workflow language
- Unverified biographies and founder-story claims are withheld rather than presented as established facts
- Privacy copy reflects self-hosted font delivery and the current review date

## CSS, JavaScript, and fonts

- Baseline `globals.css`: 6,918 lines / 162,344 bytes
- Rebuilt global entry: 7 lines; six focused stylesheets plus the entry total 150,315 bytes
- Rebuild analysis removed 136 unused rules and 101 earlier duplicate declarations; unused keyframes and superseded global generations were also removed
- Baseline built CSS: 128,995 bytes; rebuilt CSS: 137,190 bytes. The production increase reflects the explicit shared component and accessibility contracts retained after dead-code removal
- Current production JavaScript: 17 files / 1,399,663 bytes
- External runtime Google Fonts imports were removed. Four existing families remain, delivered by `next/font` as 28 subset/weight files totaling 471,816 bytes
- `.next/static` changed from 1,463,979 to 2,041,395 bytes, chiefly because font files are now bundled locally and Radix primitives are included
- Static export changed from 3,763,601 to 4,395,539 bytes for the same reasons

## Architecture changes

- Canonical design tokens and global element behavior live in `app/styles/foundation.css`
- Shared/page/motion/Nexus rules are separated by responsibility rather than by legacy generation
- Reusable `Button`, fields, Radix accordion, and Radix mobile dialog preserve MARDE styling
- Shared `Section`, `PageHero`, and `SystemStatus` are limited to stable repeated patterns
- Site configuration and integration fallbacks are centralized and repeated analytics events are typed
- Pages remain static/server-first compositions; client code is limited to behavior that requires it
- The CSS rebuild script is repeatable and reports eliminated rules/declarations
- Playwright protects routes, overflow, Nexus, mobile navigation, accordion state, SEO, integrations, reduced motion, and accessibility

## Owner verification and known limitations

- Confirm the live Stripe donation URL, buy-button ID, publishable key, and Formspree form ID before release. Automated QA verifies the integration surfaces but did not submit live payments or forms.
- Stripe's injected buy-button iframe currently has no title inside third-party shadow DOM. The site-level axe run excludes only `stripe-buy-button`; this must be monitored with Stripe because the host page cannot set that iframe attribute.
- Have the appropriate domain owners approve medical, aviation, FDA, CARES, and regulatory wording before release.
- Supply verified team biographies and any founder narrative before restoring those claims.
- The local runtime is Node 20.17.0 while the current package metadata requests Node 20.19.0 or newer; builds pass, but the release environment should be upgraded.

## QA artifacts

- `before/homepage-desktop.png`
- `before/homepage-mobile.png`
- `before/technology-nexus-desktop.png`
- `before/technology-nexus-mobile.png`
- `after/homepage-desktop.png`
- `after/homepage-mobile.png`
- `after/technology-nexus-desktop.png`
- `after/technology-nexus-mobile.png`
- `lighthouse-home.json`
