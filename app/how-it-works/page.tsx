import Link from "next/link";

export const metadata = {
  title: "How It Works",
  description:
    "A calm, women-first process: lifestyle -> curated shortlist -> viewings -> decisions with Pink Score.",
};

const STEPS = [
  {
    title: "Tell us your lifestyle + dealbreakers",
    desc: "Work-from-home, hosting, light, quiet, transit, gyms, groceries — what matters for your daily ease.",
  },
  {
    title: "Receive a curated shortlist (not 100 links)",
    desc: "Focused options aligned to your priorities. You can adjust filters and pace anytime.",
  },
  {
    title: "Tour calmly with a repeatable decision system",
    desc: "We use Pink Score™ to compare homes across safety, transit, essentials, wellness, lifestyle, and home fit.",
  },
  {
    title: "Decide on your timeline — zero pressure",
    desc: "We’ll outline tradeoffs and next steps. You stay in control.",
  },
];

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      <header className="max-w-3xl space-y-3">
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
          Process
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-semibold">How it works</h1>
        <p className="text-muted-foreground leading-relaxed">
          A calm, women-first approach designed to reduce decision fatigue and keep you in control.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-6">
        {STEPS.map((s, idx) => (
          <div key={s.title} className="card-elevated rounded-2xl border border-border/50 p-6 space-y-3">
            <div className="text-sm text-muted-foreground">Step {idx + 1}</div>
            <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
            <p className="text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </section>

      <section className="card-elevated rounded-2xl border border-border/50 p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-2">
            <h2 className="font-display text-3xl font-semibold">Start with a shortlist</h2>
            <p className="text-muted-foreground">
              If you’re 3–6 months out (or even just exploring), the fastest way to reduce overwhelm is a curated shortlist.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
            <Link href="/shortlist" className="btn-primary btn-crimson-glow px-6 py-3">
              Get curated listings
            </Link>
            <Link href="/viewing" className="btn-secondary px-6 py-3">
              Request concierge viewing
            </Link>
          </div>
        </div>
      </section>

      <p className="text-xs text-muted-foreground">
        Note: This platform provides decision support and education. It does not guarantee safety, value, or outcomes.
      </p>
    </main>
  );
}
