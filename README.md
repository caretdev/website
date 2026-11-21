# CaretDev website — Astro static starter

A complete static redesign concept for CaretDev. Pages: home, IRIS CDC / early access, open source, services, insights, about, contact, privacy and 404.

**This project does not touch the existing WordPress installation or domain DNS.** It also does not create a GitHub repository automatically.

## Run locally

Requires Node.js 20.3+ (22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:4321. For a production build:

```bash
npm run build
npm run preview
```

## Publish a temporary GitHub Pages preview

1. Create a public GitHub repository in the `caretdev` organisation, for example `website`.
2. Push all project files to the repository's `main` branch.
3. In Settings > Pages, set **Build and deployment** source to **GitHub Actions**.
4. The included `.github/workflows/pages.yml` workflow deploys to `https://caretdev.github.io/website/` (assuming the repository is named `website`).
5. Leave `caretdev.com` DNS unchanged while evaluating.

GitHub Pages has service-use restrictions for some commercial purposes. If you prefer, deploy the identical repo on Cloudflare Pages instead, which also avoids any domain cutover until you are ready.

## Deploy to Cloudflare Pages

1. Connect the GitHub repository in Cloudflare Workers & Pages.
2. Framework preset: Astro; build command `npm run build`; output directory `dist`.
3. Keep `BASE_PATH` unset and optionally set `SITE_URL=https://<temporary-preview-hostname>` for canonical URLs when configured later.
4. Use the provider's temporary `pages.dev` domain. Change production DNS only after review.

## Before switching caretdev.com

- Check text, claims, compatibility, external links and current brand assets.
- Replace the **email draft** early access form with a dedicated protected backend if you want reliable submissions. Right now it intentionally opens a mailto draft, sending nothing until the visitor sends the email.
- Have your privacy/legal text reviewed against actual handling practices.
- Audit WordPress URLs and configure redirects for existing pages if their paths change.
- Update `SITE_URL`, hosting configuration and optionally `robots.txt` before going live.
- Confirm company email DNS records (MX, SPF, DKIM, DMARC) will not be affected by the website cutover.
- Do **not** enable a custom `CNAME` or replace DNS until explicitly ready.

## Configuration

- `src/data/site.ts`: open-source repositories and services.
- `src/styles/global.css`: visual style and responsive layout.
- `src/layouts/Layout.astro`: shared layout and navigation.
- `BASE_PATH`: default `/`, set to `/website/` for GitHub project preview.
- `SITE_URL`: defaults to `https://caretdev.com` (change for preview when SEO metadata matters).

The logo is a new illustrative wordmark, not a verified copy of the existing CaretDev logo. Fonts are served by Google Fonts; remove the font import for a fully self-hosted setup.

## Form privacy and functionality

The Early Access form is frontend-only. Submitting validates required fields and opens an email client with a prepared message addressed to `info@caretdev.com`. It does not silently submit, store, or send data. This is suitable to inspect the concept, not a finished commercial lead-capture workflow.
