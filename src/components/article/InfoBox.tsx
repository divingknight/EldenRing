interface InfoBoxProps {
  items: { label: string; value: string; icon?: string }[];
}

export function InfoBox({ items }: InfoBoxProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
      {items.map((item) => (
        <div key={item.label} className="bg-card border border-border rounded-xl p-4 text-center">
          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
          <div className="text-sm font-semibold text-foreground">{item.value}</div>
        </div>
      ))}
    </div>
  );
}
