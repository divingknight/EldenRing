interface WeaknessRow {
  type: string;
  icon: string;
  p1: string;
  p2: string;
  status: "strong" | "effective" | "neutral" | "weak" | "immune";
}

const data: WeaknessRow[] = [
  { type: "Holy", icon: "✦", p1: "+35%", p2: "+20%", status: "strong" },
  { type: "Fire", icon: "🔥", p1: "+20%", p2: "+20%", status: "effective" },
  { type: "Lightning", icon: "⚡", p1: "—", p2: "+20%", status: "effective" },
  { type: "Pierce", icon: "🗡", p1: "+10%", p2: "+15%", status: "effective" },
  { type: "Slash", icon: "⚔", p1: "+15%", p2: "-10%", status: "neutral" },
  { type: "Strike", icon: "🔨", p1: "-10%", p2: "+10%", status: "neutral" },
  { type: "Scarlet Rot", icon: "🦠", p1: "✓", p2: "✓", status: "effective" },
  { type: "Sleep", icon: "💤", p1: "✓", p2: "✓", status: "neutral" },
  { type: "Poison", icon: "☠", p1: "✕", p2: "✕", status: "immune" },
  { type: "Bleed", icon: "🩸", p1: "✕", p2: "✕", status: "immune" },
  { type: "Frostbite", icon: "❄", p1: "✕", p2: "✕", status: "immune" },
];

const statusColors = {
  strong: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  effective: "bg-green-500/15 text-green-300 border-green-500/20",
  neutral: "bg-gray-500/10 text-gray-300 border-gray-500/20",
  weak: "bg-orange-500/15 text-orange-300 border-orange-500/20",
  immune: "bg-red-500/15 text-red-400 border-red-500/20",
};

const valColors: Record<string, string> = {
  "+35%": "text-yellow-300 font-bold",
  "+20%": "text-green-300",
  "+15%": "text-green-400",
  "+10%": "text-green-400",
  "-10%": "text-red-400",
  "✓": "text-green-400",
  "✕": "text-red-400 font-bold",
  "—": "text-gray-500",
};

export function WeaknessChart({ lang = "en" }: { lang?: "en" | "zh" }) {
  const labels = lang === "zh"
    ? { title: "弱点 & 免疫速查图", p1: "一阶段", p2: "二阶段", best: "最优选择", avoid: "完全免疫" }
    : { title: "Weakness & Immunity Quick Chart", p1: "Phase 1", p2: "Phase 2", best: "BEST CHOICE", avoid: "IMMUNE" };

  return (
    <div className="my-6 rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 px-5 py-4 border-b border-border">
        <h3 className="text-lg font-bold text-foreground">{labels.title}</h3>
      </div>

      {/* Best choice highlight */}
      <div className="bg-yellow-500/10 border-b border-yellow-500/20 px-5 py-3 flex items-center gap-3">
        <span className="text-2xl">✦</span>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-yellow-400">{labels.best}</span>
          <div className="text-sm text-foreground font-semibold">
            Holy — {lang === "zh" ? "一阶段 +35%, 二阶段 +20%" : "Phase 1 +35%, Phase 2 +20%"}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="px-4 py-2.5 text-left font-semibold text-muted-foreground w-[40%]">
                {lang === "zh" ? "伤害类型" : "Damage Type"}
              </th>
              <th className="px-4 py-2.5 text-center font-semibold text-muted-foreground">{labels.p1}</th>
              <th className="px-4 py-2.5 text-center font-semibold text-muted-foreground">{labels.p2}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.type} className={`border-t border-border/50 ${statusColors[row.status]}`}>
                <td className="px-4 py-2.5 font-medium flex items-center gap-2">
                  <span className="text-base">{row.icon}</span>
                  <span>{row.type}</span>
                  {row.status === "immune" && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-red-500/30 text-red-300 px-1.5 py-0.5 rounded ml-auto">
                      {labels.avoid}
                    </span>
                  )}
                </td>
                <td className={`px-4 py-2.5 text-center font-mono text-sm ${valColors[row.p1] || ""}`}>{row.p1}</td>
                <td className={`px-4 py-2.5 text-center font-mono text-sm ${valColors[row.p2] || ""}`}>{row.p2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
