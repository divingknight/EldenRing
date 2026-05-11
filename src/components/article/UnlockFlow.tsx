const bosses = [
  { name: "Tricephalos", sub: "三头王", icon: "🐉", color: "border-green-500 bg-green-500/10" },
  { name: "Maris", sub: "玛丽丝 / Augur", icon: "🌊", color: "border-blue-500 bg-blue-500/10" },
  { name: "Gnoster", sub: "诺斯特 / Sentient Pest", icon: "🪲", color: "border-yellow-500 bg-yellow-500/10" },
  { name: "Caligo", sub: "卡利戈 / Fissure in Fog", icon: "🌫", color: "border-purple-500 bg-purple-500/10" },
];

export function UnlockFlow({ lang = "en" }: { lang?: "en" | "zh" }) {
  return (
    <div className="my-6 rounded-xl border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-green-900/30 to-purple-900/30 px-5 py-4 border-b border-border">
        <h3 className="text-lg font-bold text-foreground">
          {lang === "zh" ? "解锁流程" : "Unlock Path"}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          {lang === "zh"
            ? "以任意顺序击败全部4个夜王 → 解锁夜之面相远征"
            : "Defeat all 4 Nightlords in any order → Night Aspect unlocks"}
        </p>
      </div>

      <div className="p-5">
        {/* Boss grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {bosses.map((b) => (
            <div key={b.name} className={`rounded-xl border-2 ${b.color} p-4 text-center`}>
              <div className="text-3xl mb-2">{b.icon}</div>
              <div className="font-bold text-foreground text-sm">{b.name}</div>
              <div className="text-[10px] text-muted-foreground">{b.sub}</div>
            </div>
          ))}
        </div>

        {/* Arrow + result */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-8 h-0.5 bg-border" />
            <span className="text-xs">+</span>
            <div className="w-8 h-0.5 bg-border" />
            <span className="text-xs">+</span>
            <div className="w-8 h-0.5 bg-border" />
            <span className="text-xs">+</span>
            <div className="w-8 h-0.5 bg-border" />
          </div>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <div className="rounded-xl border-2 border-red-500 bg-red-500/10 px-6 py-4 text-center">
            <div className="text-3xl mb-2">👹</div>
            <div className="font-bold text-foreground">Heolstor the Nightlord</div>
            <div className="text-xs text-red-400 font-semibold">
              {lang === "zh" ? "夜之面相 — 最终Boss" : "Night Aspect — Final Boss"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
