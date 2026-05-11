interface Member {
  icon: string;
  name: string;
  role: string;
  color: string;
  skills: string[];
  reason: string;
}

interface TeamCompCardProps {
  tag: string;
  tagColor: string;
  title: string;
  members: Member[];
  note?: string;
}

export function TeamCompCard({ tag, tagColor, title, members, note }: TeamCompCardProps) {
  return (
    <div className="rounded-xl border border-border overflow-hidden mb-5">
      <div className="bg-gradient-to-r from-muted to-card px-5 py-4 border-b border-border">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded ${tagColor}`}>{tag}</span>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
        </div>
      </div>

      {/* Members row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
        {members.map((m) => (
          <div key={m.name} className="p-4">
            <div className={`text-3xl mb-2`}>{m.icon}</div>
            <div className="font-bold text-foreground">{m.name}</div>
            <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${m.color}`}>{m.role}</div>
            <p className="text-xs text-muted-foreground mb-2">{m.reason}</p>
            <div className="flex flex-wrap gap-1">
              {m.skills.map((s) => (
                <span key={s} className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Flow arrows */}
      <div className="bg-muted/30 px-5 py-3 border-t border-border">
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{members[0]?.icon} {members[0]?.name}</span>
          <span className="text-primary">→ holds aggro →</span>
          <span className="font-semibold text-foreground">{members[1]?.icon} {members[1]?.name}</span>
          <span className="text-primary">→ covers →</span>
          <span className="font-semibold text-foreground">{members[2]?.icon} {members[2]?.name}</span>
        </div>
      </div>

      {note && (
        <div className="bg-primary/5 px-5 py-2.5 border-t border-border text-xs text-muted-foreground">
          💡 {note}
        </div>
      )}
    </div>
  );
}
