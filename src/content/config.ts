import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// English files are `index.md` / `name.md`; their Spanish versions sit next
// to them as `index.es.md` / `name.es.md`, so relative image paths work in
// both. Ids come out as "slug" and "es/slug" (see src/utils/content.js).
const localizedId = ({ entry }: { entry: string }) => {
  const slug = entry.replace(/(\.es)?\.md$/, '').replace(/\/index$/, '');
  return entry.endsWith('.es.md') ? `es/${slug}` : slug;
};

const blog = defineCollection({
  loader: glob({ pattern: '*/index*.md', base: './src/content/blog', generateId: localizedId }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      // Set when a post is meaningfully revised; feeds dateModified for search engines.
      updated: z.coerce.date().optional(),
      author: z.string().default('Cristhian Wiki'),
      tags: z.array(z.string()).default([]),
      excerpt: z.string().optional(),
      // Search-result overrides for when the title or excerpt runs past what
      // Google shows (~60 and ~155 chars). The page itself keeps the originals.
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      // Thumbnail for the blog index; usually one of the post's own images.
      cover: image().optional(),
    }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/caseStudies', generateId: localizedId }),
  schema: z.object({
    order: z.number().default(0),
    title: z.string(),
    excerpt: z.string(),
    iframe: z.string(),
    demo: z.string(),
    src: z.string(),
    info: z.object({
      idea: z.string(),
      tech: z.array(z.string()),
      links: z.array(z.tuple([z.string(), z.string()])).default([]),
    }),
  }),
});

export const collections = { blog, caseStudies };
