import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve(process.argv[2] ?? 'dist');
const sitemap = await readFile(resolve(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.equal(urls.length, new Set(urls).size, 'Duplicate sitemap URLs');
assert(!sitemap.includes('/analytics') && !sitemap.includes('/__design__'), 'Private routes in sitemap');
const titles = new Set();
for (const url of urls) {
  const { pathname } = new URL(url);
  const file = resolve(root, pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`);
  const html = await readFile(file, 'utf8');
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `Expected one H1: ${url}`);
  assert(!html.includes('<div id="root"></div>'), `Empty HTML: ${url}`);
  assert(html.includes(`<link rel="canonical" href="${url}"`), `Wrong canonical: ${url}`);
  assert(!html.includes('noindex'), `Public page not indexable: ${url}`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title && !titles.has(title), `Missing/duplicate title: ${url}`); titles.add(title);
  assert(html.includes('href="/contact"'), `No crawlable contact link: ${url}`);
  assert(html.includes('href="/solutions"'), `No crawlable solutions link: ${url}`);
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    const data = JSON.parse(match[1]);
    assert(data['@context'], `Invalid structured data: ${url}`);
    assert(!match[1].includes('FAQPage'), `Unreviewed FAQ schema: ${url}`);
  }
}
for (const file of ['analytics.html', '__design__.html', '404.html']) {
  const html = await readFile(resolve(root, file), 'utf8');
  assert(html.includes('noindex, nofollow'), `Missing noindex: ${file}`);
}
const analytics = await readFile(resolve(root, 'analytics.html'), 'utf8');
const coretechs = await readFile(resolve(root, 'case-studies/coretechs.html'), 'utf8');
assert(coretechs.includes('Turning an initial POC'), 'Revised CoreTechs narrative missing');
assert(coretechs.includes('https://coretechs.timothymcguire.workers.dev/v2'), 'Live CoreTechs product missing');
assert(coretechs.includes('/design-system/tokens/color'), 'CoreTechs design-system preview missing');
assert(coretechs.includes('All roles'), 'Interactive CoreTechs research missing');
for (const file of ['solutions.html', 'case-studies.html', 'index.html']) {
  assert((await readFile(resolve(root, file), 'utf8')).includes('href="/case-studies/coretechs"'), `Missing CoreTechs link: ${file}`);
}
assert(!analytics.includes('Recent Page Views'), 'Private reporting prerendered');
console.log(`SEO checks passed: ${urls.length} indexable URLs, unique titles, HTML content, canonical links, structured data, internal links, and private-page exclusions.`);
