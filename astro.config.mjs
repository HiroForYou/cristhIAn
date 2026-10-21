import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { rehypeFigures } from './src/utils/rehypeFigures.js';

const SITE = 'https://www.cristhianwiki.com';

// Last-modified date per blog post URL (frontmatter `updated`, else `date`),
// so the sitemap tells crawlers which posts changed. Read straight from the
// files because content collections aren't available inside the config.
const BLOG_DIR = new URL('./src/content/blog/', import.meta.url);
const postLastmod = new Map(
  readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .flatMap(entry => {
      const source = readFileSync(new URL(`${entry.name}/index.md`, BLOG_DIR), 'utf8');
      const field = name => source.match(new RegExp(`^${name}:\\s*['"]?([^'"\\r\\n]+)`, 'm'))?.[1];
      const value = field('updated') ?? field('date');
      const date = value && new Date(value);
      return date && !Number.isNaN(date.valueOf())
        ? [[`${SITE}/blog/${entry.name}/`, date.toISOString()]]
        : [];
    })
);
// The blog index changes whenever any post does.
if (postLastmod.size) postLastmod.set(`${SITE}/blog/`, [...postLastmod.values()].sort().at(-1));

export default defineConfig({
  site: SITE,
  integrations: [
    react(),
    sitemap({
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
