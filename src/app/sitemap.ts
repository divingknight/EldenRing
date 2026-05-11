import type { MetadataRoute } from "next";
import { guideCategories, SITE_URL } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const guidePages = guideCategories.map((cat) => ({
    url: `${SITE_URL}/guides/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...guidePages,
  ];
}
