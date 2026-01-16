export default function AboutPage() {
  return (
    <main className="py-20 bg-background">
      <div className="container max-w-3xl space-y-6">
        <h1 className="font-display text-4xl md:text-5xl font-semibold">About</h1>
        <p className="text-muted-foreground leading-relaxed">
          FeministRealtor is a women-first real estate platform built to reduce fear and decision fatigue for first-time buyers in Toronto/GTA.
        </p>
        <div className="card-elevated rounded-2xl border border-border/50 p-6 space-y-3">
          <div className="font-medium">How I show up</div>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Education and tools first — pressure never.</li>
            <li>I keep my opinions out of it: I elevate women’s voices, research, and practical frameworks.</li>
            <li>Clear disclosure, clear sources, and clear next steps.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
