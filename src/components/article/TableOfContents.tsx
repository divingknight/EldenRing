"use client";

import { useState } from "react";

interface TOCItem {
  id: string;
  label: string;
  level?: number;
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="mb-8 border border-border rounded-xl bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-foreground hover:bg-muted transition-colors"
      >
        <span>Table of Contents</span>
        <svg
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <ol className="px-5 pb-4 space-y-1.5 list-none">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`text-sm hover:text-primary transition-colors ${
                  item.level === 3
                    ? "pl-6 text-muted-foreground"
                    : "text-foreground font-medium"
                }`}
              >
                {item.level !== 3 && <span className="text-primary mr-2">{i + 1}.</span>}
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      )}
    </nav>
  );
}
