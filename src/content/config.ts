import { defineCollection, z } from "astro:content";

function removeDupAndLowerCase(array: Array<string>) {
  if (!array.length) return array;
  const lowercaseItems = array.map((str) => str.toLowerCase());
  const distinctItems = new Set(lowercaseItems);
  return Array.from(distinctItems);
}

const post = defineCollection({
  schema: z.object({
    title: z.string().max(60),
    description: z.string().min(20).max(160), //TODO: min 50 chars
    publishDate: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()).default([]).transform(removeDupAndLowerCase),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { post };
