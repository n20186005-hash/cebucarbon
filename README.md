# Pamilihang Carbon — Cebu visitor guide

Single-page, unofficial visitor guide for **Carbon Market, Cebu City**. The public-facing page is written in Cebuano and uses a visual system inspired by market price tags, woven *puso* rice, produce colors, and downtown market signage rather than a generic tourism template.

## Stack

- Astro 7.2.0 + TypeScript 6.0.3
- Tailwind CSS 4.3.3 through `@tailwindcss/vite` 4.3.3
- `@astrojs/check` 0.9.10
- `@astrojs/sitemap` 3.7.3, enabled only when `site` has a real value
- Wrangler 4.114.0 / Cloudflare Workers Static Assets
- pnpm 9.15.9, pinned by `packageManager`
- Node.js 24.18.0, pinned by `engines` and `.node-version`

No database, login, CMS, or server-side application runtime is used.

## Site URL — one source of truth

`astro.config.mjs` is the only place that feeds Astro's `site` setting. It currently reads `SITE_URL`; leaving it unset is supported. When it is unset, absolute canonical/OG image/OG URL tags are omitted and the sitemap integration is disabled.

For production, set one real origin before building, for example in the Cloudflare build environment:

```sh
SITE_URL=<YOUR_REAL_PRODUCTION_ORIGIN> pnpm build
```

The page itself reads `Astro.site`; it does not duplicate the public origin.

## Local development

```sh
corepack enable
corepack prepare pnpm@9.15.9 --activate
pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

The repository intentionally has no `pnpm-workspace.yaml` because it is a single-package project. The root `.npmrc` contains `only-built-dependencies=esbuild` as requested.

## Build and preflight

```sh
rm -rf node_modules
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
```

`pnpm build` runs Astro and then `scripts/preflight.mjs`. The preflight rejects `example.com`, `localhost`, and `chrome-extension://` from text build artifacts, checks any generated sitemap for those tokens, and rejects `<lastmod>` because no content freshness date is fabricated. If `SITE_URL` is set, it also requires a sitemap to exist.

## Cloudflare Worker deployment

The project is a static-generated Astro site deployed through a Cloudflare **asset-only Worker**. `wrangler.jsonc` points Workers Static Assets at `./dist/`; no SSR adapter, Worker application script, database, or bindings are required.

```sh
pnpm deploy
```

## Analytics

GA4 measurement ID: `G-HXM22WWPKP`. Only the standard Google tag script is included.

## Real-photo sources

The website stores its selected attraction photos locally under `public/images/`, so normal page rendering does not hotlink them. Original source pages/owners used during research:

- `carbon-market-hero.jpg` — Megawide Construction Corporation, Carbon Market redevelopment material
- `carbon-market-night.jpg` — Chill and Travel, Carbon Market Cebu article
- `carbon-market-aerial.jpg` — Suroy.ph, Carbon Market Cebu article
- `carbon-market-produce-night.jpg` — PH Radio Travel Book, Carbon Market Cebu article

These are real photographs, not generated images. **Before commercial publication, confirm that your intended reuse is permitted by each original rights holder or replace any photo for which you do not hold the necessary license.** Photo credit text is also included in the page footer.

## Content notes

The address is `59 M. C. Briones St, Cebu City, 6000 Cebu, Philippines`. Structured data includes the map coordinates, publicly listed hours, rating value, free-entry status, address, and FAQ schema. Carbon Market is undergoing redevelopment, so the visitor copy intentionally avoids brittle jeepney route numbers, exact parking capacities, and construction completion promises.

The Google Maps embed uses Cebuano (`hl=ceb`).
