interface Attack {
  name: string;
  description: string;
  dodge: string;
  danger: "Low" | "Medium" | "High" | "Lethal";
}

const dangerColors = {
  Low: "text-green-400",
  Medium: "text-yellow-400",
  High: "text-orange-400",
  Lethal: "text-red-400 font-bold",
};

export function AttackTable({ attacks }: { attacks: Attack[] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted">
            <th className="px-3 py-2.5 text-left font-semibold border border-border">Attack</th>
            <th className="px-3 py-2.5 text-left font-semibold border border-border hidden sm:table-cell">Description</th>
            <th className="px-3 py-2.5 text-left font-semibold border border-border">How to Dodge</th>
            <th className="px-3 py-2.5 text-center font-semibold border border-border w-20">Danger</th>
          </tr>
        </thead>
        <tbody>
          {attacks.map((atk) => (
            <tr key={atk.name} className="hover:bg-muted/50 transition-colors">
              <td className="px-3 py-2.5 border border-border font-medium text-foreground whitespace-nowrap">{atk.name}</td>
              <td className="px-3 py-2.5 border border-border text-muted-foreground hidden sm:table-cell">{atk.description}</td>
              <td className="px-3 py-2.5 border border-border text-muted-foreground">{atk.dodge}</td>
              <td className={`px-3 py-2.5 border border-border text-center ${dangerColors[atk.danger]}`}>{atk.danger}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
