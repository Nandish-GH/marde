# Nandish NFC contact system — V1 implementation report

## Scope and architecture

Next.js 16.3.1, App Router, existing `output: "export"` and trailing-slash GitHub Pages deployment are preserved. No dependencies, routes for other people, deployment changes, or corporate copy changes were introduced. The existing homepage and Team page used initials placeholders, not portrait files. Only Nandish's placeholder was replaced.

## Created files

- `app/nandish/profile.module.css`: Nandish's independent dark visual presentation; centered 460px maximum width, 190px portrait, responsive action rows, focus and reduced-motion support.
- `app/site-shell.tsx`: pathname-aware boundary that omits corporate chrome, analytics, loading overlay and motion components on `/nandish`, including initial rendering.
- `components/contact/action-row.tsx`: reusable accessible action links with safe external-link behavior.
- `components/contact/share-button.tsx`: reusable native sharing, clipboard fallback, polite temporary feedback, and selectable-link fallback when clipboard permission is denied.
- `lib/nandish-profile.ts`: single profile configuration containing the supplied identity, contact details, portrait reference, URLs and sharing payload.
- `public/team/nandish-panchal.webp`: one shared optimized portrait, 840 × 988 pixels, approximately 54 KiB. Cropped from the supplied `Untitled design (4).png` without altering appearance.
- `public/brand/marde-icon-light.png`: compact transparent white icon extracted from the existing `app/icon.png`, approximately 4.4 KiB. Used in the top pill and bottom divider.
- `tests/contact.spec.ts`: responsive, accessibility, metadata, link, VCard, sharing and corporate-integration regression coverage.
- `docs/qa/nandish-contact-v1.md`: this implementation and validation report.

## Changed files

- `app/nandish/page.tsx`: replaces the empty placeholder with the finished contact card. Primary and secondary action arrays map profile URLs to installed Phosphor icons. Primary: Email, LinkedIn, Schedule, Instagram. Secondary: TikTok, Support MARDE, GitHub, Pitch Deck. Scheduling is an external link; no embed or third-party scheduling script.
- `app/layout.tsx`: supplies existing corporate chrome to the layout boundary. Corporate pages retain their original components.
- `app/content.ts`: adds optional portrait, portraitAlt and contactPageUrl fields to team data; sets those fields only for Nandish.
- `app/page.tsx`: renders Nandish's shared portrait in the existing initials slot. No digital-card link is added here.
- `app/team/page.tsx`: renders the shared portrait and a conditional accessible Contact link only when contactPageUrl is present.
- `app/styles/shared-ui.css`: constrains the portrait to its existing circular slot and styles the small Team contact link.
- `public/contacts/nandish.vcf`: clean VCard 3.0, CRLF line endings, exact requested name/company/title/phone/email/profile URL. No social or payment links.
- `public/robots.txt`: removes the `/nandish` crawl block. Existing `/contacts/` rule is preserved.

## Discovery, download and reuse

`/nandish` exports `robots: { index: false, follow: false }`, producing `noindex, nofollow`. The static `public/sitemap.xml` already excludes it and remains unchanged. Homepage and Team metadata remain indexable. There is no new global navigation/footer link.

The VCF is served directly from `public/contacts/nandish.vcf`, copied into the static export and linked with a download filename. GitHub Pages controls the response MIME type; no custom server or header configuration was introduced. Phone data is not rendered visibly on the page.

Share uses the exact requested Web Share payload. Unsupported or failed sharing falls back to clipboard; cancellation is silent. Successful copy announces “Link copied” temporarily. Clipboard denial reveals a selectable URL without alerts.

Future contact pages can use their own route and CSS/layout while reusing ActionRow and ShareButton. Add the finished route to the SiteShell standalone-page condition and set that member's optional contactPageUrl. Their colors, typography, crop, layout and action selection are independent of Nandish's CSS. No other member pages or dead buttons were created.

## Validation

- Production static export: passed.
- ESLint: passed.
- Contact browser suite: all 6 passed against development and final production export.
- Responsive checks: 375 × 812, 390 × 844, 1440 × 900; no horizontal overflow, centered desktop layout, visible actions and correct image proportions.
- Axe accessibility checks: no violations on the contact page at all three sizes.
- Existing browser regression suite: 34 passed, 2 expected device-specific skips.
- Download event, filename, HTTP success and exact VCF bytes validated.
- Native share payload and cancellation tested using browser mocks; clipboard fallback and denied-permission fallback tested.
- All supplied action hrefs and external-link security attributes verified. External account availability and recipient-device mail/contact applications are outside this automated test; physical iPhone/Android import and native share-sheet checks remain manual device checks.
- Homepage and Team portrait visually reviewed, including correction of an intrinsic image sizing issue. Other member initials, titles and corporate content preserved.
- Production screenshots are available locally in ignored `tmp/nandish-375.png`, `tmp/nandish-390.png`, `tmp/nandish-1440.png`, `tmp/home-team.png` and `tmp/team.png`.
