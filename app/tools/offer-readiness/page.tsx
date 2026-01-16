import Link from "next/link";

export default function OfferReadinessPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold">Offer Readiness Timeline</h1>
        <p className="opacity-80">A calm overview of what happens before and after an offer — so nothing surprises you.</p>
      </div>

      <div className="rounded-3xl border p-6 space-y-2">
        <ul className="space-y-2 opacity-90">
          {[
            "Pre-approval / affordability clarity",
            "Shortlist + view strategically",
            "Offer strategy (terms, conditions)",
            "Inspection / status review (as applicable)",
            "Firm up + closing prep",
          ].map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>
        <p className="text-sm opacity-70">Placeholder: expand into a full guide later.</p>
      </div>

      <Link href="/viewing" className="underline opacity-80">Request a concierge viewing</Link>
    </main>
  );
}
