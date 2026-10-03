import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const updates = defineCollection({
	loader: glob({ base: './src/content/updates', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		deck: z.string(),
		date: z.coerce.date(),
		cover: z.string(),
		coverAlt: z.string(),
		readingTime: z.string(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { updates };
