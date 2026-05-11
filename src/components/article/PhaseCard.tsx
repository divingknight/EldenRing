interface PhaseCardProps {
  phase: string;
  title: string;
  trigger: string;
  color: string;
  children: React.ReactNode;
}

export function PhaseCard({ phase, title, trigger, color, children }: PhaseCardProps) {
  return (
    <div className={`border-l-4 ${color} bg-card rounded-r-xl mb-6 overflow-hidden`}>
      <div className="px-5 py-4 border-b border-border bg-muted/50">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-1 rounded">
            {phase}
          </span>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{trigger}</p>
      </div>
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}
