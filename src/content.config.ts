import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const products = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/content/products",
    }),

    schema: z.object({
        title: z.string(),
        text: z.string(),
        icon: z.string(),
    }),
});

export const collections = {
    products,
};