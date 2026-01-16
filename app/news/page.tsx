import Link from "next/link";

export const metadata = {
  title: "Feminist News & Studies",
  description: "Evidence-first articles, reports, and updates that impact women — curated and evergreen.",
};

export default function NewsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="max-w-3xl space-y-3">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
          Feminist News
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold">Feminist News &amp; Studies</h1>
        <p className="text-muted-foreground leading-relaxed">
          Curated, sourced, and written to be useful — not performative. This section will expand over time.
        </p>
      </header>

      <div className="card-elevated rounded-2xl border border-border/50 p-6 space-y-2">
        <div className="font-medium">Coming soon</div>
        <p className="text-muted-foreground">
          We’ll publish evergreen explainers and curated updates on women’s representation, workplace benefits, and major cases — with sources.
        </p>
        <Link href="/shortlist" className="text-primary hover:underline text-sm">Start with real estate (curated listings) →</Link>
      </div>
    </main>
  );
}
