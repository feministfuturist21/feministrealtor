import Link from "next/link";

export const metadata = {
  title: "Real Estate Resources",
  description: "Evergreen buyer education: process, offers, conditions, and calm decision-making.",
};

const CARDS = [
  { title: "First-time buyer flow", desc: "Steps from pre-approval to closing — with checklists.", href: "/how-it-works" },
  { title: "Offers & conditions", desc: "Plain language on conditions, financing, inspection, status certificate, and timelines.", href: "/insights" },
  { title: "Neighborhood fit", desc: "How to evaluate daily ease (transit, groceries, noise, safety) beyond the listing.", href: "/pink-score" },
];

export default function RealEstateResourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="max-w-3xl space-y-3">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
          Resources
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold">Real Estate Resources</h1>
        <p className="text-muted-foreground leading-relaxed">
          Guides for first-time buyers in Ontario — written to reduce overwhelm and help you move with clarity.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-6">
        {CARDS.map((c) => (
          <div key={c.title} className="card-elevated rounded-2xl border border-border/50 p-6 space-y-2">
            <div className="font-display text-2xl font-semibold">{c.title}</div>
            <p className="text-muted-foreground">{c.desc}</p>
            <Link href={c.href} className="text-primary hover:underline text-sm">
              Open →
            </Link>
          </div>
        ))}
      </div>

      <Link href="/shortlist" className="btn-primary btn-crimson-glow px-6 py-3 w-fit">
        Get curated listings
      </Link>

      <p className="text-xs text-muted-foreground">
        Educational content only. Real estate decisions are contextual; always verify details and use professional advice.
      </p>
    </main>
  );
}
