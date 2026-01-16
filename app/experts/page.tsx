import Link from "next/link";

export const metadata = {
  title: "Experts & Coaches",
  description: "A women-recommended directory of coaches and experts. Free to list now; monetization later with transparent disclosure.",
};

export default function ExpertsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="max-w-3xl space-y-3">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
          Directory
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold">Experts &amp; Coaches</h1>
        <p className="text-muted-foreground leading-relaxed">
          A curated directory of professionals women recommend — mortgage, finance, career, coaching, legal, and wellbeing.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-elevated rounded-2xl border border-border/50 p-6 space-y-2">
          <div className="font-medium">Free to list (for now)</div>
          <p className="text-muted-foreground">
            This directory starts as a community resource. If we add paid placements later, they will be clearly labeled.
          </p>
        </div>
        <div className="card-elevated rounded-2xl border border-border/50 p-6 space-y-2">
          <div className="font-medium">Want to be listed?</div>
          <p className="text-muted-foreground">Send your details and a short bio. We’ll add you with transparent tags.</p>
          <Link href="/about" className="text-primary hover:underline text-sm">See selection criteria →</Link>
        </div>
      </div>

      <div className="card-elevated rounded-2xl border border-border/50 p-6">
        <div className="text-sm text-muted-foreground">Next up</div>
        <div className="font-display text-2xl font-semibold">Filterable directory</div>
        <p className="text-muted-foreground mt-2">
          Categories, tags, city filters, and disclosures. (We’ll wire this once you start adding profiles.)
        </p>
      </div>

      <Link href="/shortlist" className="btn-primary btn-crimson-glow px-6 py-3 w-fit">Get curated listings</Link>
    </main>
  );
}
