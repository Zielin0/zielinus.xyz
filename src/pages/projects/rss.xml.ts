import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const projects = (await getCollection("projects")).sort((a, b) => b.data.updated.localeCompare(a.data.updated));

    const date = new Date();
    const year = date.getFullYear();

    return rss({
        title: "Zielin0's Projects",
        description: "A collection of projects made by Zielin0",
        site: context.site,
        customData: `<language>en</language>\n<copyright>Copyright ${year} Zielin0. Licensed under CC BY 4.0`,
        items: projects.map((project) => ({
            title: project.data.title,
            description: `${project.data.description}. Languages: ${project.data.languages.join(", ")}.`,
            pubDate: project.data.published,
            link: `/projects/${project.data.name}`,
            author: "Zielin0",
        })),
    });
}

