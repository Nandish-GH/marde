# MARDE website

Next.js App Router site for MARDE.

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

The live MARDE Stripe donation link is already configured as the fallback. You may override it with `NEXT_PUBLIC_STRIPE_DONATION_URL` in `.env.local` or your hosting environment.

`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is optional. When set, the site loads Plausible's script; when omitted, no analytics script is loaded.

## GitHub Pages deployment

Pushing to `main` builds and deploys the static site to `https://nandish-gh.github.io/marde/`. In the GitHub repository’s **Settings → Pages**, select **GitHub Actions** as the source if it is not already selected.

The GitHub Pages build uses `/marde` as its base path. Before moving to a custom domain, update `basePath`, `assetPrefix`, `metadataBase`, the sitemap, and robots URL in the project.

## Vercel deployment

1. Push this folder to a Git repository.
2. Import the repository into Vercel (framework preset: Next.js).
3. Add the environment variables above in Vercel.
4. Connect `marde.inc`, or the domain chosen for MARDE.

The sitemap is generated at `/sitemap.xml` and robots rules at `/robots.txt`.
