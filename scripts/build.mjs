import { build, createServer } from 'vite';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';

const args = process.argv.slice(2);
const outIndex = args.indexOf('--outDir');
const outDir = resolve(outIndex >= 0 ? args[outIndex + 1] : 'dist');
await build({ build: { outDir } });
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false, watch: null }, optimizeDeps: { noDiscovery: true, include: [] }, appType: 'custom' });
const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
try {
  const { render, pageToPath, getPageMeta, isPrivatePage, canonicalPage, SITE_URL, schemaForPage } = await server.ssrLoadModule('/src/entry-server.tsx');
  const template = await readFile(resolve(outDir, 'index.html'), 'utf8');
  const pages = [...Object.entries(pageToPath), ['not-found', '/404']];
  for (const [page, path] of pages) {
    const meta = getPageMeta(page);
    const robots = isPrivatePage(page) ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';
    const head = `<title>${escape(meta.title)}</title>
<meta name="description" content="${escape(meta.description)}" />
<link rel="canonical" href="${SITE_URL}${meta.path}" />
<meta name="robots" content="${robots}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Timothy McGuire" />
<meta property="og:title" content="${escape(meta.title)}" />
<meta property="og:description" content="${escape(meta.description)}" />
<meta property="og:url" content="${SITE_URL}${meta.path}" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="${escape(meta.title)}" />
<meta name="twitter:description" content="${escape(meta.description)}" />
<script id="page-schema" type="application/ld+json">${JSON.stringify(schemaForPage(page)).replace(/</g, '\\u003c')}</script>`;
    const html = template.replace(/<!-- SEO:start -->[\s\S]*?<!-- SEO:end -->/, head)
      .replace('<div id="root"></div>', () => `<div id="root">${render(path)}</div>`);
    if (!html.includes('<h1')) throw new Error(`Missing rendered heading: ${path}`);
    const file = resolve(outDir, path === '/' ? 'index.html' : `${path.slice(1)}.html`);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, html);
  }
  const publicPages = Object.entries(pageToPath).filter(([page]) => !isPrivatePage(page) && !canonicalPage[page]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${publicPages.map(([, path]) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')}\n</urlset>\n`;
  await writeFile(resolve(outDir, 'sitemap.xml'), sitemap);
  console.log(`Generated ${pages.length} HTML pages and ${publicPages.length} sitemap entries.`);
} finally { await server.close(); }
