interface TipBoxProps {
  type: "tip" | "warning" | "danger" | "info";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  tip: { border: "border-l-green-500", icon: "💡", defaultTitle: "Pro Tip", titleColor: "text-green-400" },
  warning: { border: "border-l-yellow-500", icon: "⚠️", defaultTitle: "Warning", titleColor: "text-yellow-400" },
  danger: { border: "border-l-red-500", icon: "🚨", defaultTitle: "Danger", titleColor: "text-red-400" },
  info: { border: "border-l-blue-500", icon: "ℹ️", defaultTitle: "Note", titleColor: "text-blue-400" },
};

export function TipBox({ type, title, children }: TipBoxProps) {
  const s = styles[type];
  return (
    <div className={`border-l-4 ${s.border} bg-muted rounded-r-lg p-4 my-4`}>
      <div className={`font-semibold mb-1 ${s.titleColor} flex items-center gap-2`}>
        <span>{s.icon}</span>
        <span>{title || s.defaultTitle}</span>
      </div>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
