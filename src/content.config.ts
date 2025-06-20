import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        tags: z.array(z.string()),
        updated: z.string(),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: ["**/*.md", "**/*.mdx"], base: "src/content/projects" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        status: z.enum(["Finished", "In Development", "Abandoned"]),
        languages: z.array(z.string()),
        source: z.string(),
        updated: z.string(),
        isPublic: z.boolean(),
    }),
});

export const collections = { blog, projects };

