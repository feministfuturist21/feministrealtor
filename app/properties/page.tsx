import Link from "next/link";

export default function PropertiesPage() {
  return (
    <main className="py-20 bg-background">
      <div className="container max-w-3xl space-y-6">
        <h1 className="font-display text-4xl md:text-5xl font-semibold">Property Search</h1>
        <p className="text-muted-foreground leading-relaxed">
          The searchable listings experience is coming next. For now, you can request a curated shortlist based on your lifestyle and must-haves.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/shortlist" className="btn-primary btn-crimson-glow px-6 py-3">Get curated listings</Link>
          <Link href="/viewing" className="btn-secondary px-6 py-3">Start a conversation</Link>
        </div>
      </div>
    </main>
  );
}
