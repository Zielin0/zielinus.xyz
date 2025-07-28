import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const blog = (await getCollection("blog")).sort((a, b) => b.data.published.localeCompare(a.data.published));

    const date = new Date();
    const year = date.getFullYear();

    return rss({
        title: "Zielin0's Blog",
        description: "A collection of articles written by Zielin0",
        site: context.site,
        customData: `<language>en</language>\n<copyright>Copyright ${year} Zielin0. Licensed under CC BY 4.0`,
        items: blog.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.published,
            link: `/blog/${post.data.slug}`,
            author: "Zielin0",
        })),
    });
}

