import { defineCollection, z } from "astro:content";

const worksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    isPublished: z.boolean().default(true), // 公開・非公開の制御
    date: z.string().refine(val => /^\d{4}-\d{2}-\d{2}$/.test(val), {  // ISO日付形式を検証
      message: "The date must be in YYYY-MM-DD format.",
    }),
  }),
});

export const collections = {
  works: worksCollection,
};