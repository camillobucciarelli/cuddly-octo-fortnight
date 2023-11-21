import {defineCollection, z} from 'astro:content';
const definitionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
  }),
});
export const collections = {
  'definitions': definitionsCollection,
};