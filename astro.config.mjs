// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

import { remarkReadingTime } from "./src/read_time.ts";

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [expressiveCode({ themes: ["kanagawa-wave"] })],
});
=======
  integrations: [expressiveCode({themes: ['dracula']}), mdx()]
});

>>>>>>> master
