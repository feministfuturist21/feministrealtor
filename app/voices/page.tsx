import Link from "next/link";

export default function VoicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold">Women’s Voices (Curated)</h1>
        <p className="opacity-80">Perspectives shared with permission. Edited for clarity. Sources linked where applicable.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {[1,2,3,4].map((i) => (
          <article key={i} className="rounded-2xl border p-4 space-y-2">
            <p className="opacity-90">“A short excerpt placeholder. Replace with real curated content.”</p>
            <div className="text-sm opacity-75">— [Name/Handle] (used with permission)</div>
            <div className="text-sm opacity-80">Editor note: why this matters (1 line).</div>
          </article>
        ))}
      </div>

      <p className="text-sm opacity-70">
        Tip: keep your role as editor/curator. Avoid “my take” hot takes. Let outcomes and sources lead.
      </p>

      <Link href="/shortlist" className="underline opacity-80">Get curated listings</Link>
    </main>
  );
}
