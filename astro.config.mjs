import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The public site URL is configured in exactly one place: Astro's `site` field.
// Leave SITE_URL unset during development; canonical/OG/sitemap gracefully degrade.
const configuredSite = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site: configuredSite,
  integrations: configuredSite ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
