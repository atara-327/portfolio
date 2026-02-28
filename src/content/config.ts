import { defineCollection, z } from "astro:content";

const worksCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    year: z.number().optional(),
    tags: z.array(z.string()).default([]),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  works: worksCollection,
};
