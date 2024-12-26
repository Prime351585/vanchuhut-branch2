import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.date(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string()),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      readingTime: z.number().optional(),
      metaTitle: z.string().optional(),
      metaDescription: z.string().optional(),
      faqs: z.array(z.object({
        question: z.string(),
        answer: z.string()
      })).optional()
    }),
  }),
};
