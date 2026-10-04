# Website review and implemented improvements

October 4, 2026. Reviewed the local MARDE app and its production static export.

## Plan and result

Preserve the existing editorial identity and technical artwork. Improve wayfinding, contact-page density, and interaction feedback. Address applicable privacy issues without inventing business policies or adding irrelevant account gates.

1. Homepage introduction — healthy. Preserved its clear concept-stage language and existing artwork; added a restrained blue atmosphere and clearer emphasis on “before.” Evidence: `tmp/feel-audit/01-home-before.png` and `04-home-after-desktop.png`.
2. Homepage exploration — improved. A new three-link section navigation makes the system, workflow, and development plan directly accessible. Native anchors support keyboard use and work without JavaScript. System-card focus now receives the same visual emphasis as hover. Evidence: `05-system-after.png`.
3. Contact journey — improved. A lengthy institutional note previously delayed the mobile form. Moved the detail into a native expandable disclosure, kept the emergency/sensitive-data warning visible, and gave the form a distinct panel with input feedback. Evidence: `02-contact-before.png` and `03-contact-after.png`.
4. Mobile navigation — healthy. Added current-page highlighting; verified the Contact link exposes `aria-current="page"`, Escape closes the menu, and the existing dialog manages focus.
5. Analytics choices — improved. When configured, Google Analytics and campaign attribution now load only after affirmative opt-in. Essential-only and allow controls have equal prominence. Preferences can be reopened; withdrawal clears first-party GA cookies and session attribution, disables analytics, and reloads when the saved preference is available. No configured ID means no banner or SDK.

## Six-risk review

| Risk | Repository evidence and action |
| --- | --- |
| Children’s data | No signup or account system. Contact is an institutional inquiry form. No birthdate collection or age gate added. COPPA applicability depends on audience and actual knowledge; an age checkbox alone would not establish compliance. [FTC guidance](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions). |
| Google-hosted fonts | Already uses `next/font/google`, which downloads at build time and serves font files with this site. The installed Next.js font guide confirms this removes visitor requests to Google Fonts. |
| Session replay | No replay library or keystroke recorder found in app, components, or declared dependencies. |
| Marketing email | No marketing sender or email templates in this repository. Formspree inquiry handling is separate from a newsletter. Before marketing, verify sender identity, a valid postal address, an unsubscribe mechanism and timely suppression with the actual email platform. [FTC CAN-SPAM guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business). |
| Subscription renewal | No subscription checkout in app code. Support opens a hosted Stripe payment link. Its live pricing/recurrence/refund settings were not audited; verify those in Stripe before changing claims or adding renewal copy. |
| User uploads / DMCA | No public upload feature found. Registration is an operational step if the business needs the relevant safe harbor, rather than a generic cure for copyrighted site assets. Instructions below. |

## Remaining items from the 20-point checklist

Privacy policy and a deletion-request email already exist; updated the analytics description. Inquiry form collects name, email, message, inquiry type, and optional organization, with no automatic newsletter enrollment. No fabricated reviews or unexplained performance promises found in the reviewed homepage; it distinguishes external research from MARDE results. Business identity and concept-stage disclosures are visible. Existing alt text, semantic controls, skip link, focus styles, reduced-motion support and native form validation remain in place.

Terms, refund rules, retention periods and a public business address need the company’s actual policies and approved details. Do not generate invented guarantees or addresses. The hosted payment flow needs its own operational review. Keep an asset-rights register for product graphics, portraits, logo and fonts; ownership and releases cannot be proven from files alone. Full accessibility compliance requires broader assistive-technology and contrast testing; this review verifies a focused set of layout and keyboard behaviors.

## DMCA registration walkthrough, if needed

1. Use the [Copyright Office directory and help](https://www.copyright.gov/dmca-directory/faq.html) to create an authorized registration account.
2. Prepare the company’s legal name, physical address, alternate names/domains, and authorized contact information.
3. Choose the designated agent and provide its name/title, organization, mailing address, phone and email.
4. Submit the designation and pay the currently listed $6 fee. Publish the required agent information on the website.
5. Renew before the three-year expiry and keep the record accurate. Counsel should also establish takedown handling and the other conditions for the relevant safe harbor; registration alone is insufficient.

No registration, payment, external email, deployment or legal agreement was performed.

## Validation and limits

Production static export, lint, TypeScript and 25 existing content-negotiation tests passed. Export verification passed for 27 routes. Reviewed desktop and mobile rendering in the in-app browser. In a temporary production build with a test analytics ID, verified zero Google scripts initially, zero after rejection, one after acceptance, and zero after withdrawal/reload. Verified expandable contact detail, mobile active-page navigation and Escape dismissal. No real contact submission or payment was made.

The full Playwright/axe suite has not been run for this change. The existing analytics regression test was updated to expect no tracking before consent, including blocked-storage conditions. Screenshots show the current audit only; this is a scoped UX and code-risk review, not a legal opinion or a compliance certification. The social-media post’s maximum-penalty figures are not treated as guaranteed per-user liabilities.

Design references reviewed: [React Bits](https://reactbits.dev/get-started/index), [Lenis](https://lenis.dev/), and [Dark Design](https://www.dark.design/). Existing Lenis and motion conventions were retained; no additional animation SDK was introduced. The invoked web-search skill’s `infsh` CLI was unavailable, so browsing used the built-in web tool.
