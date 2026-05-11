import Link from "next/link";
import type { GuideCategory } from "@/lib/guides";

export function GuideCard({ guide }: { guide: GuideCategory }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block rounded-xl border border-border bg-card hover:bg-card-hover hover:border-primary/30 transition-all duration-200"
    >
      <div className={`p-6 bg-gradient-to-br ${guide.color} rounded-xl`}>
        <div className="text-4xl mb-4">{guide.icon}</div>
        <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {guide.title}
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {guide.description}
        </p>
        <div className="mt-4 flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Read guide</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
