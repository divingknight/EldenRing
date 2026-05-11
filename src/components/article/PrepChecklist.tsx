"use client";

import { useState } from "react";

interface CheckItem {
  label: string;
  detail: string;
  priority: "critical" | "important" | "recommended";
}

const priorityStyles = {
  critical: { bg: "bg-red-500/10 border-red-500/30", badge: "bg-red-500/20 text-red-400", text: "CRITICAL" },
  important: { bg: "bg-yellow-500/10 border-yellow-500/30", badge: "bg-yellow-500/20 text-yellow-400", text: "IMPORTANT" },
  recommended: { bg: "bg-blue-500/10 border-blue-500/30", badge: "bg-blue-500/20 text-blue-400", text: "RECOMMENDED" },
};

export function PrepChecklist({ items, lang = "en" }: { items: CheckItem[]; lang?: "en" | "zh" }) {
  const [checked, setChecked] = useState<boolean[]>(new Array(items.length).fill(false));
  const doneCount = checked.filter(Boolean).length;

  return (
    <div className="my-6 rounded-xl border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 px-5 py-4 border-b border-border flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground">
          {lang === "zh" ? "战前准备清单" : "Pre-Fight Checklist"}
        </h3>
        <span className="text-sm font-mono text-primary">{doneCount}/{items.length}</span>
      </div>

      {/* Progress bar */}
      <div className="px-5 pt-4">
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${(doneCount / items.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-4 space-y-2">
        {items.map((item, i) => {
          const ps = priorityStyles[item.priority];
          return (
            <label
              key={i}
              className={`flex gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                checked[i]
                  ? "bg-green-500/5 border-green-500/20 opacity-60"
                  : `${ps.bg}`
              }`}
            >
              <input
                type="checkbox"
                checked={checked[i]}
                onChange={() => {
                  const next = [...checked];
                  next[i] = !next[i];
                  setChecked(next);
                }}
                className="mt-1 shrink-0 accent-primary w-4 h-4"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`font-medium text-sm ${checked[i] ? "line-through text-muted-foreground" : "text-foreground"}`}>
                    {item.label}
                  </span>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${ps.badge}`}>
                    {ps.text}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">{item.detail}</p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
}
