import { defineCollection, z } from "astro:content";

const worksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
    isPublished: z.boolean().default(true),
    date: z.date(),
  }),
});

export const collections = {
  works: worksCollection,
};