// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

import { remarkReadingTime } from "./src/read_time.ts";

import mdx from '@astrojs/mdx';

import { visit } from "unist-util-visit";

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [remarkReadingTime],
    },
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        expressiveCode({ themes: ["kanagawa-wave"] }),
        mdx({
            rehypePlugins: [
                () => {
                    return (tree) => {
                        visit(tree, "element", (node) => {
                            if (
                                node.tagName === "a" &&
                                node.properties?.href &&
                                node.properties?.href.toString().startsWith("http") &&
                                !node.properties.href.toString().includes("zielinus.xyz")
                            ) {
                                node.properties["target"] = "_blank";
                            }
                        });
                    };
                },
            ],
        }),
    ],
});
