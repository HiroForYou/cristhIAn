import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { rehypeFigures } from './src/utils/rehypeFigures.js';

export default defineConfig({
  site: 'https://www.cristhianwiki.com',
  integrations: [react(), sitemap()],
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
