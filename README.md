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

`astro.config.mjs` is the only place that feeds Astro's `site` setting. It currently reads `SITE_URL`; leaving it unset is supported. When it is unset, the sitemap integration is disabled, but canonical/OG/hreflang tags still render because the pages fall back to the production origin `https://cebucarbon.com`.

For production, set one real origin before building, for example in the Cloudflare build environment:

```sh
SITE_URL=https://cebucarbon.com pnpm build
```

The page reads `Astro.site` first and only falls back to the hardcoded production origin so that absolute URLs are never missing in the built HTML.

## SEO entity binding

Both locale pages bind the domain meaning to the official attraction name:

- JSON-LD `TouristAttraction` (+ `LocalBusiness`) with `@id` `https://cebucarbon.com/#attraction`, `alternateName: ["Pamilihang Carbon", "Cebu City Carbon Market"]`, `image[]`, `hasMap`, `sameAs`, `geo` (`10.2914389`, `123.899131`) and `PostalAddress` (`59 M. C. Briones St, Cebu City, 6000 Cebu, PH`).
- Separate `FAQPage` JSON-LD generated from the on-page FAQ list.
- Title/description/OG tags include `Carbon Market`, `Cebu City`, `Cebu`, `Philippines`; canonical plus `hreflang` (`ceb`, `fil`, `en`, `x-default`) are emitted on every page — the set is identical (reciprocal) on `/` and `/fil/`, and `x-default` points at `/`.
- H1 is unique and contains the full name plus the city. Each section H2 carries the entity (`About`, `Location & How to Visit`, `Landmarks & Attractions Around`, `History & Significance`, `Reviews & Ratings`, `Location Map`, `FAQ`, `Sources & References`).
- The `/about` section contains the equivalence statement and the breadcrumb `Carbon Market → Cebu City → Cebu → Philippines`.

## Search Console–driven SEO

The first 39 days of Google Search Console data (2026-08-10 → 2026-09-17) showed **91 impressions, 1 click**, average position ≈ 29–43 (page 3–5) and zero rich-result impressions. The changes below are derived from that data:

| Signal in GSC | What was wrong | What the site now does |
| --- | --- | --- |
| Queries are all English (`carbon market cebu`, `carbon public market`, `carbon cebu city`) | Title/H1 led with the Cebuano/Filipino name, no exact-match English phrase | Title and H1 now lead with **Carbon Market Cebu**; descriptions carry `location`, `flower market`, `interim building`, `food section`, `jeepney routes` (title ≤ 65 chars, description ≤ 155 chars) |
| Long-tail: `carbon market flowers location`, `carbon flower market cebu`, `carbon market interim building` (5 of 33 impressions) | No page content about the market's internal zones | New **Market Zones** module (`src/components/MarketZones.astro`, `zones` in the content files): flower market, interim/temporary building, food section / Unit 2, produce & seafood, dry goods — each with "how to find / best time / tip", plus three matching FAQs feeding the `FAQPage` schema |
| `/fil/` 44 impressions, 0 clicks; risk of locale cannibalisation | Locale pages had near-identical titles | hreflang set is complete and reciprocal (`ceb`, `fil`, `en`, `x-default`); each locale has its own title/description wording |
| No rich results (`搜尋外觀` empty) | Only `TouristAttraction` + `FAQPage` | Added `BreadcrumbList` and `containsPlace` (the five zones as `Place`). Ratings stay **out** of JSON-LD (see below) |
| Mobile position 7.38 vs desktop 38.17 → mobile is the real opportunity | Fixed 520 px map iframe, no LCP hint, third-party script not pre-connected | Hero image `preload` + `fetchpriority="high"` + `decoding="async"`, `preconnect` to `googletagmanager.com`, map iframe is `320 px` on phones and `520 px` from `sm` up |

Still worth doing outside the repo: publish/refresh internal links to the new `#zones` section, submit the updated URLs in GSC, and re-check after ~28 days whether impressions for the flower-market / interim-building clusters turn into clicks.

## Google Maps rating & reviews

The rating (`4.2`) and review count (`7,580`) are shown **on the page only**. They are deliberately **not** emitted as `aggregateRating` / `Review` structured data, because third-party (Google Maps) ratings must not be claimed as our own in JSON-LD.

Every rating block carries:

- next-line note: `评分与评价数同步自谷歌地图（Google Maps）用户评价 · 2026 年 9 月 · 点击查看谷歌地图全部评价↗`
- source line: `同步自 Google 地图用户评价，同步时间 2026 年 9 月；版权归原作者与 Google 地图所有`
- button: `在谷歌地图查看全部评价` → `https://maps.app.goo.gl/F5UNUWTsDvdTbNph7`

All Google links are kept and point at the official listing.

## PWA

- `public/site.webmanifest` — installable manifest (`standalone`, `start_url`, `scope`, `id`, icons, theme colors).
- `public/sw.js` — service worker: precaches `/`, `/offline/`, manifest and key icons; network-first for navigations with cache + `/offline/` fallback; cache-first for hashed `_astro/`, image and icon assets.
- `src/pages/offline.astro` → `/offline/` offline page (`noindex`, excluded from the sitemap).
- `_headers` serves `/sw.js` and `/offline/` with `no-cache` so updates roll out immediately.

## Visitor-facing modules

Both locale pages (`/` Cebuano, `/fil/` Filipino) share the same component set under `src/components/`, driven by the bilingual content layer in `src/data/content-ceb.ts` / `src/data/content-fil.ts` (the Filipino object is typed against `typeof ceb`, so the two languages cannot drift apart).

| Section | Component | What it adds |
| --- | --- | --- |
| `#weather` | `WeatherPanel.astro` | Current conditions + 7-day forecast, umbrella/heat advice, sunrise/sunset and peak UV |
| `#getting-here` | `TransportGuide.astro` | Airport, jeepney, tricycle, taxi/ride-hailing, provincial bus, driving & parking, walking and accessibility notes |
| `#services` | `VisitorServices.astro` | Restrooms, parking, food types, lodging, grocery/pharmacy, fuel & EV charging, ATM/payment, medical, connectivity |
| `#seasons` | `SeasonStrategy.astro` | Quarterly strategy table (climate, market supply, crowd, advice) plus the climate/supply/price analysis |
| `#itineraries` | `Itineraries.astro` | Family / photography / low-mobility routes plus half-day and full-day loops |
| `#stories` | `Stories.astro` | Origins, Parian & port history, wartime rebuild, pusô, Taboan, the 24-hour market, Sinulog |
| `#science` | `ScienceNotes.astro` | How a wet market works, food miles, food safety, waste, photo etiquette, fair dealing, visitor pledge |

### Weather data

- Fetched **server-side at build time** (`src/lib/weather.ts`) for the attraction coordinates `10.2914389, 123.899131`, timezone `Asia/Manila`.
- Cached in memory and on disk (`node_modules/.cache/cebucarbon-weather.json`, 30-minute TTL); the last good snapshot is reused if the request fails.
- The server-rendered values are re-validated in the browser on page load, so the visitor always sees current conditions even between deployments.
- No API-name, pricing or "free tier" wording appears anywhere in the page copy. The forecast block only shows values, units, a refresh timestamp, and a pointer to PAGASA for storm advisories.

### Visitor advice engine (`src/lib/weather-advice.ts`)

The forecast block is not a raw data dump — a small rule engine converts the numbers into sentences a visitor can act on:

- **One summary line**: condition, high/low, UV strength and wind strength in plain words (no "relative humidity 75%", no "irradiance").
- **Three blocks**: `出行穿搭 / 游玩安排 / 随身物品` (what to wear, how to plan, what to bring). Each block shows **only the items whose condition is met** — no umbrella line on a dry day, no sunscreen line in a downpour. Each block is capped (3 wear/plan items, 4 carry items) so the page never turns into a wall of text.
- **Risk block**: pinned above everything in red, and **hidden entirely when nothing is triggered**. It fires on thunderstorm codes, gale-force wind (≥ Beaufort 7), flood-level rainfall (≥ 25 mm), heavy rain (≥ 10 mm), extreme heat (≥ 36 °C / feels-like ≥ 41 °C) and fog.
- **Market-specific rules**: downtown Cebu is dense concrete, so heat rules push the early-morning (6–9 am) window, shade breaks and water; wet-floor rules cover market aisles, stairs and loading areas; strong wind or heavy rain postpones ferry/island trips; a large feels-like gap triggers the "muggy, slow down" advice.
- **Same rules server-side and client-side**: the engine is a pure module imported both by the component (first paint) and by the page script (refresh), so the advice can never disagree with the numbers shown. Wording lives in the bilingual content files, keyed by rule id.
- Probability is always phrased as a chance ("high chance of rain, bring a cover"), never as a certainty.

### Editorial stance

The site is an independent, non-profit educational guide. Facility coverage is written **by type** (public restroom, food court, supermarket, pharmacy, fuel station) — no merchant names, no rankings, no paid placements. Costs shown are indicative ranges only, and jeepney route numbers are deliberately avoided because downtown Cebu routes change with redevelopment work.

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
pnpm build
pnpm deploy
```

For a manual upload, upload the **contents of `dist/`** — that folder is the whole deployable site. If you upload the repository root instead, `.assetsignore` strips development-only files (`node_modules`, `src`, `scripts`, caches, VCS, editor, env and log files) so they are never shipped.

`.gitignore` additionally keeps build and editor leftovers out of version control.

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

The address is `59 M. C. Briones St, Cebu City, 6000 Cebu, Philippines` (plus code `7VRX+HM Cebu City`). Structured data includes the map coordinates, publicly listed hours, free-entry status, address, `amenityFeature` (restrooms, parking, food stalls, free admission) and FAQ schema. Ratings and review counts are page-only (see "Google Maps rating & reviews"). Carbon Market is undergoing redevelopment, so the visitor copy intentionally avoids brittle jeepney route numbers, exact parking capacities, and construction completion promises.

History content separates documented events (Spanish-era Parian, wartime destruction and rebuilding) from local tradition (the "carbon"/coal etymology and origin stories); the `#stories` section states this explicitly so readers can tell fact from legend. Seasonal guidance is based on long-term monthly climate averages for Metro Cebu (1991–2020 normals) combined with normal market operating patterns, and the page tells visitors to use the forecast block — not the monthly table — for day-of decisions.

The Google Maps embed uses Cebuano (`hl=ceb`).
