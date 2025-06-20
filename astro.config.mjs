// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

import { remarkReadingTime } from "./src/read_time.ts";

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [expressiveCode({ themes: ["kanagawa-wave"] }), mdx()],
});