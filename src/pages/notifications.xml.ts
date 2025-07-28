import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import notifications from "../content/notifications.json";

export async function GET(context) {
    const date = new Date();
    const year = date.getFullYear();

    return rss({
        title: "zielinus.xyz notifications",
        description: "Notifications from the zielinus.xyz website",
        site: context.site,
        customData: `<language>en</language>\n<copyright>Copyright ${year} Zielin0. Licensed under CC BY 4.0</copyright>`,
        items: notifications.notifications.map((notif, idx) => ({
            title: notif.title,
            description: notif.description,
            pubDate: notif.date,
            author: "Zielin0",
            customData: `<guid isPermaLink=\"false\">${notif.title.toLowerCase().replaceAll(" ", "_")}-${idx.toString().padStart(4, "0")}</guid>`
        })),
    });
}

