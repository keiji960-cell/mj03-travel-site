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
    // [가장 긴 변, 중간 변, 가장 짧은 변] cm — 항공사마다 표기 순서가 달라 항상 내림차순으로 정규화해서 저장
    dimsCm: z.tuple([z.number(), z.number(), z.number()]),
    carryOnWeightKg: z.number(),
    // 무료로 실을 수 없는 항공사(예: 라이언에어 — Priority 옵션 구매 필요)
    freeCarryOn: z.boolean().default(true),
    weightNote: z.string().optional(),
    personalItemDims: z.string().optional(),
    // 규정 자체(크기·무게)로는 안 드러나는 함정(예: 유료 옵션, 초과요금 배율)
    trapNote: z.string().optional(),
    sourceUrl: z.string(),
    lastVerified: z.date(),
  }),
});

export const collections = { posts, airlines };
