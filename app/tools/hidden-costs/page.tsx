import Link from "next/link";

export default function HiddenCostsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold">Hidden Costs Guide</h1>
        <p className="opacity-80">A simple checklist of common costs that can surprise first-time buyers.</p>
      </div>

      <div className="rounded-3xl border p-6 space-y-2">
        <ul className="space-y-2 opacity-90">
          {[
            "Condo fees + special assessments (condos)",
            "Property taxes + utilities",
            "Home insurance",
            "Closing costs (legal, land transfer, adjustments)",
            "Moving + immediate repairs",
          ].map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>
        <p className="text-sm opacity-70">Placeholder: add local calculators/links later.</p>
      </div>

      <Link href="/shortlist" className="underline opacity-80">Get curated listings</Link>
    </main>
  );
}
