# MARDE website

Next.js App Router site for MARDE.

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

For the production custom domain, set in `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://mardeinc.com
```

The live MARDE Stripe donation link is configured as the fallback. Override with `NEXT_PUBLIC_STRIPE_DONATION_URL` if needed.

`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is optional. When set, the site loads Plausible's analytics script.

## Forms

Contact and newsletter forms use [Formspree](https://formspree.io). Create two forms, then set:

```env
NEXT_PUBLIC_FORMSPREE_CONTACT=your_contact_form_id
NEXT_PUBLIC_FORMSPREE_NEWSLETTER=your_newsletter_form_id
```

Without these, the contact section falls back to `hello@marde.inc` and the newsletter section links to Instagram.

## Content editing

All copy lives in `app/content.ts`. Page components read from that file so you can edit text without touching JSX.

## GitHub Pages deployment

Pushing to `main` builds and deploys the static site to `https://mardeinc.com`. The `public/CNAME` file associates this GitHub Pages deployment with the custom domain. In the GitHub repository's **Settings → Pages**, select **GitHub Actions** as the source if it is not already selected.

## Vercel deployment

1. Push this folder to a Git repository.
2. Import the repository into Vercel (framework preset: Next.js).
3. Add environment variables from `.env.example` (leave `NEXT_PUBLIC_BASE_PATH` unset).
4. Connect `mardeinc.com`, or the domain chosen for MARDE.

The sitemap is generated at `/sitemap.xml` and robots rules at `/robots.txt`.

## Pre-launch checklist

- No page implies a working/tested prototype
- No page names a confirmed EMS partner
- No page states specific funding/investor terms
- Regulatory language says Part 47 + SAC-EC, never Part 107 alone
- Team titles match spec
- Stats cite CARES 2024 Metrics Summary (verified May 2025)
- Donate button links to live Stripe page
- Instagram link is @marde.inc
