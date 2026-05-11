"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { guideCategories } from "@/lib/guides";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const results = query.trim()
    ? guideCategories.filter(
        (cat) =>
          cat.title.toLowerCase().includes(query.toLowerCase()) ||
          cat.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="relative">
      <div className="relative">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search guides..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary text-sm"
        />
      </div>
      {showResults && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg overflow-hidden z-50">
          {results.map((cat) => (
            <button
              key={cat.slug}
              onMouseDown={() => {
                router.push(`/guides/${cat.slug}`);
                setQuery("");
              }}
              className="w-full text-left px-4 py-3 hover:bg-muted transition-colors flex items-center gap-3"
            >
              <span>{cat.icon}</span>
              <div>
                <div className="text-sm font-medium text-foreground">{cat.title}</div>
                <div className="text-xs text-muted-foreground line-clamp-1">{cat.description}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
