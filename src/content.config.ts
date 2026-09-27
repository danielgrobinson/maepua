import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		date: z.coerce.date(),
		cover: z.string(),
		coverAlt: z.string(),
		category: z.string(),
		featured: z.boolean().default(false),
		tags: z.array(z.string()).default([]),
	}),
});

const articles = defineCollection({
	loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
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

export const collections = { projects, articles };
