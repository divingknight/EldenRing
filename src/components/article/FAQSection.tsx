"use client";

import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

export function FAQSection({ items, title = "FAQ" }: { items: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mb-8">
      <h2 id="faq" className="text-2xl font-bold mb-4 pb-2 border-b border-border">{title}</h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted transition-colors"
            >
              <span className="font-medium text-foreground text-sm pr-4">{item.q}</span>
              <svg
                className={`w-4 h-4 shrink-0 transition-transform text-muted-foreground ${openIndex === i ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
