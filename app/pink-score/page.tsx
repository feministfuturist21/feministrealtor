import Link from "next/link";
import PinkScoreSection from "../../components/PinkScoreSection";

export default function PinkScorePage() {
  return (
    <main>
      <PinkScoreSection />

      <section className="py-16 bg-background">
        <div className="container max-w-4xl space-y-6">
          <h1 className="font-display text-4xl md:text-5xl font-semibold">What Pink Score™ measures</h1>
          <p className="text-muted-foreground leading-relaxed">
            Pink Score™ is a lifestyle-fit lens for a single woman buying in Toronto/GTA. It helps you compare homes using
            what matters in real life — comfort, transit, daily essentials, wellness, and how the space supports you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/pink-score/calculator" className="btn-primary btn-crimson-glow px-5 py-3">
              Score a home
            </Link>
            <Link href="/viewing" className="btn-secondary px-5 py-3">
              Request concierge viewing
            </Link>
          </div>

          <div className="card-elevated rounded-2xl border border-border/50 p-6 text-sm text-muted-foreground">
            <div className="font-medium text-foreground mb-1">Important note</div>
            Pink Score™ is a decision-support tool — not a guarantee or ranking. Any safety-related inputs are directional,
            context-dependent, and can’t capture lived experience.
          </div>
        </div>
      </section>
    </main>
  );
}
