import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Cristhian Wiki'),
    tags: z.array(z.string()).default([]),
    excerpt: z.string().optional(),
  }),
});

export const collections = { blog };
