import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    affiliateLinks: z.array(z.string()).optional(),
  }),
});

const airlines = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    type: z.enum(['국적기', '국내 LCC', '해외 LCC']),
    carryOnDims: z.string(),
    carryOnWeightKg: z.number(),
    carryOnWeightNote: z.string().optional(),
    personalItemDims: z.string().optional(),
    sourceUrl: z.string(),
    lastVerified: z.date(),
  }),
});

export const collections = { posts, airlines };
