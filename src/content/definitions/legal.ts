import { defineCollection } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export const legal = defineCollection({
    name: "legal",
    directory: "./legal",
    include: "**/*.mdx",
    schema: (z) => ({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        date: z.coerce.date(),
        published: z.boolean(),
    }),
    transform: async (legal, ctx) => {
        const mdx = await compileMDX(ctx, legal, {
            rehypePlugins: [rehypeSlug],
            remarkPlugins: [remarkGfm],
        });

        return {
            ...legal,
            content: {
                mdx,
                raw: legal.content,
            },
            url: `/legal/${legal.slug}`,
        };
    },
});
