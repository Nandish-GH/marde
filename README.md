# MARDE website

Production website for [MARDE Inc.](https://mardeinc.com), a Delaware C-Corporation based in New Jersey. MARDE is pre-seed, pre-prototype, pre-revenue, and developing an integrated robotic emergency-response platform intended to begin physical intervention before EMS arrival.

> MARDE's Air, Ground, Nexus, and intervention-module concepts are early-stage R&D. They are not deployed products, production EMS infrastructure, or autonomous medical decision systems.

## Platform represented on the site

- **MARDE Air** — rapid aerial transport.
- **MARDE Ground** — final approach and constrained access.
- **MARDE Nexus** — human-in-the-loop command and coordination software.
- **Intervention Modules** — modular medical/intervention capabilities.

Conceptual response chain: **Dispatch → Nexus → Air → Ground → Intervention Module → EMS Arrival**.

## Public routes

| Route | Purpose |
|---|---|
| [`/`](https://mardeinc.com/) | Company overview and platform introduction |
| [`/technology/`](https://mardeinc.com/technology/) | Air, Ground, Nexus, intervention modules, roadmap, and regulatory context |
| [`/team/`](https://mardeinc.com/team/) | Current public team |
| [`/mission/`](https://mardeinc.com/mission/) | Why MARDE is being developed |
| [`/support/`](https://mardeinc.com/support/) | Donations, contact, and updates |
| [`/faq/`](https://mardeinc.com/faq/) | Current-stage questions and answers |
| [`/privacy/`](https://mardeinc.com/privacy/) | Website privacy policy |

The static export also includes a custom `404.html`, `robots.txt`, `sitemap.xml`, `llms.txt`, and a noindex `/thank-you/` route used after successful form submissions.

## Stack

- Next.js App Router, React, and TypeScript
- Tailwind CSS plus MARDE's custom CSS design system
- Anime.js and Lenis for site motion
- Formspree for contact and email-update forms
- Stripe for external donation processing
- Optional Google Analytics 4 and Google Search Console verification
- GitHub Actions, GitHub Pages, and Cloudflare DNS

The site uses `output: "export"`; it has no application API routes, SSR requirement, or production Node server.

## Local development

```bash
git clone https://github.com/Nandish-GH/marde.git
cd marde
npm ci
npm run dev
```

Production and quality checks:

```bash
npm run build
npm run lint
npx tsc --noEmit
```

The production build writes the deployable static site to `out/`.

## Environment variables

Copy `.env.example` to `.env.local` for local overrides. None of the committed values are secrets.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical production origin used for metadata |
| `NEXT_PUBLIC_STRIPE_DONATION_URL` | Public Stripe donation URL |
| `NEXT_PUBLIC_STRIPE_BUY_BUTTON_ID` | Public Stripe Buy Button identifier |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Public Stripe publishable key used by the Buy Button |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Public Formspree identifier used by both forms |
| `NEXT_PUBLIC_BASE_PATH` | Optional subpath deployment prefix; blank for `mardeinc.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional GA4 ID; no analytics script is rendered when blank |
| `GOOGLE_SITE_VERIFICATION` | Optional Search Console metadata token; owner-supplied only |

Forms retain the existing public Formspree identifier as a source-code fallback so existing deployments continue to work when the environment variable is absent. Successful submissions navigate client-side to `/thank-you/`. Do not test the production endpoint unless a test submission is explicitly authorized.

## Analytics and attribution

GA4 is initialized only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set. Current tracked interactions are `support_rnd_click`, `contact_click`, `email_signup_success`, and `technology_nexus_engagement`.

The analytics foundation recognizes `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, and `utm_term`, stores them for the browser session, and attaches them only to configured analytics events. It does not copy UTM parameters onto internal links.

## Search and discovery

The site provides canonical URLs, route-specific metadata, Open Graph and Twitter card metadata, an Organization and WebSite JSON-LD graph, `robots.txt`, and a sitemap at [mardeinc.com/sitemap.xml](https://mardeinc.com/sitemap.xml).

`llms.txt` summarizes the current public platform and stage. No `llms-full.txt` is maintained because the public site is concise and a second AI-facing copy would duplicate content without adding a distinct source of truth.

## Deployment

Pushes to `main` run `.github/workflows/deploy-pages.yml`, which installs with Node.js 22, builds the static export, uploads `out/`, and deploys it to GitHub Pages at [mardeinc.com](https://mardeinc.com).

## Contact

- General: [team@mardeinc.com](mailto:team@mardeinc.com)
- [Instagram](https://www.instagram.com/marde.inc)
- [TikTok](https://www.tiktok.com/@marde.inc)
