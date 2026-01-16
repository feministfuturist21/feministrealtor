export const metadata = {
  title: "Terms",
  description: "Terms of use for the FeministRealtor platform.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <h1 className="font-display text-4xl font-semibold">Terms</h1>
      <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
        <p>
          This platform provides education and decision support. It does not guarantee outcomes.
        </p>
        <p>
          Any calculators, frameworks (including Pink Score™), and content are informational and not legal, financial, or real estate advice.
        </p>
        <p>
          You are responsible for verifying information and making your own decisions.
        </p>
        <p>
          These terms will be expanded as the platform grows.
        </p>
      </div>
    </main>
  );
}
