import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-charcoal text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-3">
        <div className="space-y-3">
          <div className="font-display text-xl font-semibold">FeministRealtor</div>
          <p className="text-sm text-white/80 max-w-sm">
            Empowering women to make confident real estate decisions through education,
            community, and tools designed with your life in mind.
          </p>
          <div className="text-sm text-white/70">
            [Your Name], [Title/Designation], [Brokerage Name] • [RECO #]
            <br />
            [Brokerage Address] • [Email] • [Phone]
          </div>
        </div>

        <div className="space-y-3">
          <div className="font-medium">Explore</div>
          <div className="grid gap-2 text-sm text-white/80">
            <Link href="/shortlist" className="hover:text-white">Get curated listings</Link>
            <Link href="/how-it-works" className="hover:text-white">How it works</Link>
            <Link href="/pink-score" className="hover:text-white">Pink Score™</Link>
            <Link href="/insights" className="hover:text-white">Education Hub</Link>
            <Link href="/resources/money" className="hover:text-white">Money &amp; Policy</Link>
            <Link href="/news" className="hover:text-white">Feminist News</Link>
            <Link href="/experts" className="hover:text-white">Experts &amp; Coaches</Link>
            <Link href="/properties" className="hover:text-white">Property Search</Link>
            <Link href="/voices" className="hover:text-white">Success Stories</Link>
          </div>
        </div>

        <div className="space-y-3">
          <div className="font-medium">Legal &amp; Trust</div>
          <div className="grid gap-2 text-sm text-white/80">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            <Link href="/disclosures" className="hover:text-white">Ethics &amp; Disclosures</Link>
            <Link href="/reco" className="hover:text-white">RECO Information</Link>
          </div>
        </div>

        <div className="md:col-span-3 border-t border-white/10 pt-6 text-xs text-white/60 space-y-3">
          <p>
            Important Notice: The content on this website is for educational and informational purposes only and does not constitute financial,
            legal, or professional real estate advice. Pink Score™ is a decision-support framework and does not guarantee property values,
            safety, or investment returns. Always consult qualified professionals for specific advice.
          </p>
          <p>© {new Date().getFullYear()} FeministRealtor.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
