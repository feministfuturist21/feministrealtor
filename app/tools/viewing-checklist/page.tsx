import Link from "next/link";

export default function ViewingChecklistPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold">Viewing Checklist</h1>
        <p className="opacity-80">What to notice in 10 minutes so you don’t miss the things that matter.</p>
      </div>

      <div className="rounded-3xl border p-6 space-y-3">
        <ul className="list-disc pl-5 space-y-2 opacity-90">
          <li>Light, layout, and flow (does it match your day-to-day?)</li>
          <li>Noise risk (street, elevators, mechanical rooms)</li>
          <li>Storage, laundry, and “invisible” comfort factors</li>
          <li>Building health: fees, reserve fund, special assessment signals</li>
          <li>Resale fundamentals: transit, schools, livability</li>
        </ul>
        <p className="text-sm opacity-70">This is a starter list — expand it as your process matures.</p>
      </div>

      <Link href="/viewing" className="underline opacity-80">Request a concierge viewing</Link>
    </main>
  );
}
