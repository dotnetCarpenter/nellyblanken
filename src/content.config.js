// 1. Import utilities from `astro:content`
import { defineCollection, reference } from 'astro:content';

// 2. Import loader(s)
import { file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const projects = defineCollection({
  loader: file('./src/content/projects.json'),
//   loader: glob({ base: './src/content/projects', pattern: '**/*.{json,jsonc}' }),
  schema: ({ image }) => z.object({
    id: z.string(),
    title: z.string(),
    year: z.number(),
    posterImage: image(),
    images: z.array(image()),
    description: z.string(),
    materials: z.array(z.string()),
    dimensions: z.optional(z.string()),
    length: z.optional(z.number()),
    sponsors: z.optional(z.array(reference('sponsor'))), // TODO: create a new type for sponsors (name + logo)
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const sponsor = defineCollection({
    schema: z.object({
        name: z.string(),
        logo: z.string(),
    }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { projects, sponsor };