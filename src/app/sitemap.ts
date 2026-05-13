import type { MetadataRoute } from "next";
import { guideCategories, SITE_URL } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const guidePages = guideCategories.map((cat) => ({
    url: `${SITE_URL}/guides/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const subPages = [
    { path: "/guides/bosses/heolstor", priority: 0.9 },
    { path: "/guides/items/legendary-weapons", priority: 0.9 },
    { path: "/guides/builds/tier-list", priority: 0.9 },
  ].map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...guidePages,
    ...subPages,
  ];
}
