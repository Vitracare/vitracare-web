// Submits every URL in public/sitemap.xml to the IndexNow API (Bing, Yandex, Seznam,
// Naver...) so they re-crawl new/changed pages faster than waiting for their own
// schedule. Not needed for Google (which doesn't support IndexNow) or for AI crawlers
// (GPTBot/ClaudeBot/PerplexityBot don't use it either) — this is specifically a
// Bing/Copilot freshness lever. No backend exists to auto-trigger this on publish since
// the site is static, so run it manually after a deploy that adds/changes pages:
//
//   node scripts/indexnow-submit.mjs
//
// Key file lives at public/<key>.txt (served at https://vitracare.be/<key>.txt), which
// IndexNow uses to confirm this submission is authorized for the domain.

import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const KEY = 'b45185515dac6355d3224d52101e07ba';
const HOST = 'vitracare.be';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function main() {
  const sitemapXml = await readFile(join(root, 'public', 'sitemap.xml'), 'utf-8');
  const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  if (urls.length === 0) {
    console.error('No URLs found in sitemap.xml — aborting.');
    process.exit(1);
  }

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    }),
  });

  console.log(`IndexNow responded: ${res.status} ${res.statusText}`);
  if (res.status !== 200 && res.status !== 202) {
    const text = await res.text().catch(() => '');
    console.error('Unexpected response body:', text);
    process.exit(1);
  }
  console.log('Done.');
}

main();
