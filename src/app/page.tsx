import Link from "next/link";
import { GuideCard } from "@/components/GuideCard";
import { guideCategories, SITE_NAME } from "@/lib/guides";
import { YouTubeEmbed } from "@/components/article/YouTubeEmbed";

export default function Home() {
  const latestUpdates = [
    {
      title: "How to Get Legendary Weapons Fast — Farming Guide",
      href: "/guides/items/legendary-weapons",
      category: "Items & Relics",
    },
    {
      title: "How to Beat Heolstor — Full Boss Guide",
      href: "/guides/bosses/heolstor",
      category: "Boss Guides",
    },
    {
      title: "Best Builds for All 10 Nightfarers — Updated for Patch 1.03",
      href: "/guides/builds",
      category: "Builds",
    },
    {
      title: "Day 1 Optimal Routes — Maximize Your Rune Income",
      href: "/guides/walkthrough",
      category: "Walkthrough",
    },
    {
      title: "Top 10 Relics Tier List — Every Character Ranked",
      href: "/guides/items",
      category: "Items & Relics",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-primary">{SITE_NAME}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your definitive guide to Elden Ring: Nightreign — the co-op roguelike
          experience set in the Lands Between. Master every Nightfarer, conquer
          every boss, and survive the deadly three-day cycle.
        </p>
      </section>

      {/* Featured Video */}
      <section className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Video</h2>
        <YouTubeEmbed
          videoId="XxUk0H31kiE"
          title="Elden Ring Nightreign Ultimate Starter Guide"
        />
      </section>

      {/* Guide Categories Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-8 text-center">Explore Our Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideCategories.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      {/* Latest Updates */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
        <div className="space-y-4">
          {latestUpdates.map((update, i) => (
            <Link key={i} href={update.href} className="block">
              <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:bg-card-hover transition-colors">
                <div>
                  <h3 className="font-medium text-foreground">{update.title}</h3>
                  <span className="text-xs text-muted-foreground">{update.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
