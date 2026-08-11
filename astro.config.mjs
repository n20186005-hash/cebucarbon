import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site: configuredSite,
  integrations: configuredSite ? [sitemap()] : [],
  i18n: {
    defaultLocale: 'ceb',
    locales: ['ceb', 'fil'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
