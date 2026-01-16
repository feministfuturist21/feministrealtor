import Link from "next/link";

export const metadata = {
  title: "Money & Policy",
  description: "Evergreen explainers on rates, mortgages, GICs, and policies — written to be useful.",
};

export default function MoneyResourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="max-w-3xl space-y-3">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
          Resources
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold">Money &amp; Policy</h1>
        <p className="text-muted-foreground leading-relaxed">
          This section will host clean explainers on mortgage rules, Bank of Canada decisions, GIC rates, and how changes affect women.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-6">
        {[
          { title: "Mortgage basics", desc: "Plain-language guide: fixed vs variable, term vs amortization, qualification.", href: "/insights" },
          { title: "Rate watch", desc: "Short updates when policy changes — with sources.", href: "/news" },
          { title: "Calculators", desc: "Mortgage payment, affordability, closing costs (coming soon).", href: "/pink-score/calculator" },
        ].map((c) => (
          <div key={c.title} className="card-elevated rounded-2xl border border-border/50 p-6 space-y-2">
            <div className="font-display text-2xl font-semibold">{c.title}</div>
            <p className="text-muted-foreground">{c.desc}</p>
            <Link href={c.href} className="text-primary hover:underline text-sm">Open →</Link>
          </div>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        Educational content only — not financial advice. Always verify with official sources and your licensed advisors.
      </p>
    </main>
  );
}
