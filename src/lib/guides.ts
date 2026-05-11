export interface GuideCategory {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const SITE_NAME = "Nightreign Guide";
export const SITE_DESCRIPTION = "Your ultimate Elden Ring: Nightreign guide — Nightfarer builds, boss strategies, relic tier lists, and tips to conquer every Nightlord.";
export const SITE_URL = "https://yourdomain.com";

export const guideCategories: GuideCategory[] = [
  {
    slug: "beginner",
    title: "Beginner's Guide",
    description: "New to Nightreign? Learn the 3-day cycle, Nightfarer basics, co-op mechanics, and how to survive your first expedition.",
    icon: "📖",
    color: "from-green-500/20 to-green-600/5",
  },
  {
    slug: "builds",
    title: "Builds & Classes",
    description: "Optimized builds for all 10 Nightfarers — best weapons, relics, stat priorities, and playstyle guides for every class.",
    icon: "⚔️",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    slug: "walkthrough",
    title: "Walkthrough",
    description: "Day-by-day expedition walkthrough. Optimal routes, rune farming, Church locations, and how to reach the Nightlord prepared.",
    icon: "🗺️",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    slug: "items",
    title: "Items & Relics",
    description: "Complete relic tier list, best weapons by class, crafting materials, and where to find every key item in the Limveld.",
    icon: "🛡️",
    color: "from-yellow-500/20 to-yellow-600/5",
  },
  {
    slug: "bosses",
    title: "Boss Guides",
    description: "Phase-by-phase strategies for all Nightlords — Tricephalos, Maris, Gnoster, Caligo, and the final boss Heolstor.",
    icon: "👹",
    color: "from-red-500/20 to-red-600/5",
  },
  {
    slug: "tips",
    title: "Tips & Tricks",
    description: "Advanced techniques, hidden mechanics, rune farming routes, and pro strategies from veteran Nightfarers.",
    icon: "💡",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
];

export const sidebarLinks = guideCategories.map((cat) => ({
  href: `/guides/${cat.slug}`,
  label: cat.title,
  icon: cat.icon,
}));
