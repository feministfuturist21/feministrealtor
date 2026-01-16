import Link from "next/link";

export default function DecisionScorecardPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold">Decision Scorecard</h1>
        <p className="opacity-80">
          A simple framework to compare homes (layout, light, noise risk, fees, resale) without second-guessing.
        </p>
      </div>

      <div className="rounded-3xl border p-6 space-y-3">
        <div className="font-medium">Download</div>
        <p className="text-sm opacity-80">
          This starter project ships without a PDF. To add one, place a file at <code className="border rounded px-1">public/decision-scorecard.pdf</code>.
        </p>
        <a
          className="inline-block rounded-2xl px-5 py-3 shadow-sm border font-medium"
          href="/decision-scorecard.pdf"
        >
          Download scorecard
        </a>
        <p className="text-sm opacity-70">
          If the link 404s, add the PDF as described above.
        </p>
      </div>

      <Link href="/shortlist" className="underline opacity-80">Get curated listings</Link>
    </main>
  );
}
