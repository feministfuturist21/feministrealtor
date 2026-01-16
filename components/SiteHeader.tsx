import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-gradient-hero/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/brand/logo.png" alt="FeministRealtor" width={42} height={42} className="rounded-xl" />
          <span className="font-display text-xl font-semibold tracking-tight">FeministRealtor</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/shortlist" className="hover:text-foreground transition-colors">Start Here</Link>
          <Link href="/properties" className="hover:text-foreground transition-colors">Properties</Link>
          <Link href="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
          <Link href="/insights" className="hover:text-foreground transition-colors">Learn</Link>
          <Link href="/resources/money" className="hover:text-foreground transition-colors">Money &amp; Policy</Link>
          <Link href="/experts" className="hover:text-foreground transition-colors">Experts</Link>
          <Link href="/pink-score" className="hover:text-foreground transition-colors">Pink Score™</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/viewing" className="btn-primary btn-crimson-glow px-4 py-2 text-sm">
            Request Viewing
          </Link>
        </div>
      </div>
    </header>
  );
}
