import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.enum(['fiction', 'essay', 'screenplay', 'review', 'personal', 'opinion', 'humor', 'list', 'poetry']),
    description: z.string(),
    genre: z.string(),
    audience: z.string(),
    originalUrl: z.string().optional(),
    source: z.enum(['blog', 'manuscript']),
    readTime: z.string().optional(),
    penName: z.string().optional(),
  }),
});

export const collections = { blog };
