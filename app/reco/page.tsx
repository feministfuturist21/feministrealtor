export default function RecoPage() {
  return (
    <main className="py-20 bg-background">
      <div className="container max-w-3xl space-y-6">
        <h1 className="font-display text-4xl md:text-5xl font-semibold">RECO Information</h1>
        <p className="text-muted-foreground leading-relaxed">
          This page is a placeholder for required and helpful information related to RECO (Real Estate Council of Ontario), consumer rights, and disclosure best practices.
        </p>
        <div className="card-elevated rounded-2xl border border-border/50 p-6 text-sm text-muted-foreground space-y-2">
          <div className="font-medium text-foreground">Suggested content</div>
          <ul className="list-disc pl-5 space-y-1">
            <li>How representation works in Ontario (buyer vs seller representation).</li>
            <li>Disclosure basics and how you protect client trust.</li>
            <li>Links to official RECO consumer resources.</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
