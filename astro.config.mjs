import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// For a github.io/project preview, build with BASE_PATH=/project-name.
// For Cloudflare Pages or a custom domain, leave BASE_PATH unset.
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://caretdev.com';
export default defineConfig({site, base, output:'static', trailingSlash:'always', integrations:[sitemap()]});
