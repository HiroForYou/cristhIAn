import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      // Set when a post is meaningfully revised; feeds dateModified for search engines.
      updated: z.coerce.date().optional(),
      author: z.string().default('Cristhian Wiki'),
      tags: z.array(z.string()).default([]),
      excerpt: z.string().optional(),
      // Thumbnail for the blog index; usually one of the post's own images.
      cover: image().optional(),
    }),
});

const caseStudies = defineCollection({
  type: 'content',
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
