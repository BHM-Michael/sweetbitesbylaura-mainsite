import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    modifiedDate: z.coerce.date().optional(),
    author: z.string().default('Laura'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
