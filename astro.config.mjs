import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { rehypeFigures } from './src/utils/rehypeFigures.js';

const SITE = 'https://www.cristhianwiki.com';

// Last-modified date per blog post URL (frontmatter `updated`, else `date`),
// so the sitemap tells crawlers which posts changed. Read straight from the
// files because content collections aren't available inside the config.
// Each post has an English `index.md` and a Spanish `index.es.md` (served
// under /es/blog/...), dated independently.
const BLOG_DIR = new URL('./src/content/blog/', import.meta.url);
const LOCALES = [
  { file: 'index.md', prefix: '' },
  { file: 'index.es.md', prefix: '/es' },
];
const postLastmod = new Map(
  readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .flatMap(entry =>
      LOCALES.flatMap(({ file, prefix }) => {
        const path = new URL(`${entry.name}/${file}`, BLOG_DIR);
        if (!existsSync(path)) return [];
        const source = readFileSync(path, 'utf8');
        const field = name => source.match(new RegExp(`^${name}:\\s*['"]?([^'"\\r\\n]+)`, 'm'))?.[1];
        const value = field('updated') ?? field('date');
        const date = value && new Date(value);
        return date && !Number.isNaN(date.valueOf())
          ? [[`${SITE}${prefix}/blog/${entry.name}/`, date.toISOString()]]
          : [];
      })
    )
);
// Each blog index changes whenever any of its posts does.
for (const { prefix } of LOCALES) {
  const dates = [...postLastmod]
    .filter(([url]) => url.startsWith(`${SITE}${prefix}/blog/`))
    .map(([, date]) => date);
  if (dates.length) postLastmod.set(`${SITE}${prefix}/blog/`, dates.sort().at(-1));
}

export default defineConfig({
  site: SITE,
  integrations: [
    react(),
    sitemap({
      // Adds the hreflang alternates to every URL ("/x/" ⇄ "/es/x/").
      i18n: { defaultLocale: 'en', locales: { en: 'en', es: 'es' } },
      serialize(item) {
        const lastmod = postLastmod.get(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  markdown: {
    rehypePlugins: [rehypeFigures],
    // Both themes are emitted as CSS variables; the post page picks one
    // from the site's data-mode so code blocks follow the light/dark toggle.
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark-dimmed' },
      defaultColor: false,
    },
  },
});
