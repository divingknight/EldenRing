interface Phase {
  phase: string;
  name: string;
  trigger: string;
  hp: string;
  color: string;
  danger: number; // 1-5
  keyMechanic: string;
}

const phases: Phase[] = [
  { phase: "P1", name: "Shape of Night", trigger: "Fight Start", hp: "Bar 1: 100%→60%", color: "bg-green-500", danger: 2, keyMechanic: "Slow melee — conserve resources" },
  { phase: "P2", name: "Greatsword", trigger: "Bar 1 ≤ 60%", hp: "Bar 1: 60%→0%", color: "bg-yellow-500", danger: 3, keyMechanic: "Sky slam + ground explosions" },
  { phase: "P3", name: "Moonlight", trigger: "Bar 2 Starts", hp: "Bar 2: 100%→60%", color: "bg-purple-500", danger: 4, keyMechanic: "Homing projectiles + Cover of Darkness" },
  { phase: "P4", name: "Eruption", trigger: "Bar 2 ≤ 60%", hp: "Bar 2: 60%→0%", color: "bg-red-500", danger: 5, keyMechanic: "Elemental fissures + Final Slam" },
];

export function PhaseTimeline({ lang = "en" }: { lang?: "en" | "zh" }) {
  const labels = lang === "zh"
    ? ["夜之形态", "巨剑觉醒", "月光大剑", "大地裂变"]
    : undefined;

  return (
    <div className="my-6 rounded-xl border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-purple-900/40 to-red-900/40 px-5 py-4 border-b border-border">
        <h3 className="text-lg font-bold text-foreground">
          {lang === "zh" ? "阶段时间线总览" : "Phase Timeline Overview"}
        </h3>
      </div>

      {/* Visual bar */}
      <div className="px-5 py-4">
        <div className="flex rounded-full overflow-hidden h-4 mb-4">
          <div className="bg-green-500 w-[20%]" title="Phase 1" />
          <div className="bg-yellow-500 w-[20%]" title="Phase 2" />
          <div className="bg-purple-500 w-[30%]" title="Phase 3" />
          <div className="bg-red-500 w-[30%]" title="Phase 4" />
        </div>
        <div className="flex text-[10px] text-muted-foreground uppercase tracking-wider">
          <div className="w-[20%]">P1</div>
          <div className="w-[20%]">P2</div>
          <div className="w-[30%]">P3</div>
          <div className="w-[30%]">P4</div>
        </div>
      </div>

      {/* Phase cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border border-t border-border">
        {phases.map((p, i) => (
          <div key={p.phase} className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-3 h-3 rounded-full ${p.color}`} />
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{p.phase}</span>
            </div>
            <div className="font-bold text-foreground text-sm mb-1">
              {labels ? labels[i] : p.name}
            </div>
            <div className="text-xs text-muted-foreground mb-2">{p.trigger}</div>
            <div className="text-xs text-muted-foreground mb-2">{p.hp}</div>

            {/* Danger meter */}
            <div className="flex items-center gap-1 mb-2">
              <span className="text-[10px] text-muted-foreground mr-1">
                {lang === "zh" ? "危险" : "Danger"}:
              </span>
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`w-2.5 h-2.5 rounded-sm ${n <= p.danger ? p.color : "bg-muted"}`}
                />
              ))}
            </div>

            <div className="text-[11px] text-primary leading-tight">{p.keyMechanic}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
