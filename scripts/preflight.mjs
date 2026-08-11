import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const badTokens = ['example.com', 'localhost', 'chrome-extension://'];
const textExt = new Set(['.html', '.xml', '.js', '.mjs', '.css', '.json', '.txt', '.svg']);
const configuredSite = process.env.SITE_URL?.trim();

function walk(dir) {
  if (!existsSync(dir)) return [];
  const out = [];
  for (const name of readdirSync(dir)) {
    const file = join(dir, name);
    const stat = statSync(file);
    if (stat.isDirectory()) out.push(...walk(file));
    else out.push(file);
  }
  return out;
}

const workspace = join(root, 'pnpm-workspace.yaml');
if (existsSync(workspace)) {
  const text = readFileSync(workspace, 'utf8');
  if (!/packages:\s*\n\s*-\s*['"]?\.['"]?/.test(text)) {
    throw new Error("pnpm-workspace.yaml exists but does not include packages: ['.']");
  }
}

const dist = join(root, 'dist');
if (!existsSync(dist)) throw new Error('dist/ is missing; run pnpm build first.');

for (const file of walk(dist)) {
  if (!textExt.has(extname(file))) continue;
  const text = readFileSync(file, 'utf8');
  for (const token of badTokens) {
    if (text.includes(token)) throw new Error(`Forbidden token ${token} found in ${file}`);
  }
}

const sitemapFiles = walk(dist).filter((file) => /(?:^|[/\\])sitemap(?:-index|-\d+)?\.xml$/i.test(file));
if (configuredSite) {
  let expectedOrigin;
  try {
    expectedOrigin = new URL(configuredSite).origin;
  } catch {
    throw new Error('SITE_URL must be a valid absolute production origin.');
  }
  if (!sitemapFiles.length) throw new Error('SITE_URL is set but no sitemap was generated.');

  for (const file of sitemapFiles) {
    const text = readFileSync(file, 'utf8');
    if (/<lastmod>/i.test(text)) throw new Error(`Unexpected lastmod found in ${file}`);
    const locations = [...text.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => match[1].trim());
    for (const location of locations) {
      let url;
      try {
        url = new URL(location);
      } catch {
        throw new Error(`Non-absolute sitemap URL ${location} in ${file}`);
      }
      if (url.origin !== expectedOrigin) {
        throw new Error(`Sitemap URL origin ${url.origin} does not match SITE_URL origin ${expectedOrigin}`);
      }
    }
  }
} else if (sitemapFiles.length) {
  throw new Error('Sitemap exists even though SITE_URL is empty; conditional sitemap configuration failed.');
}

console.log('Preflight checks passed.');
