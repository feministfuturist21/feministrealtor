import Link from "next/link";
import { Crown, Key, ShieldCheck } from "lucide-react";
import PinkScoreSection from "../components/PinkScoreSection";
import WhatsNewCarousel from "../components/WhatsNewCarousel";
import { getWhatsNewItems } from "../lib/whatsNew";

const ARTICLE_CARDS = [
  {
    tag: "First-Time Buyers",
    title: "Your Complete Guide to Buying Your First Home in Ontario",
    desc: "A step-by-step walkthrough of the process, tailored for women buying independently.",
    read: "8 min read",
    href: "/insights",
  },
  {
    tag: "Investment",
    title: "Building Generational Wealth Through Real Estate",
    desc: "Plain-language fundamentals on long-term wealth building in Canada.",
    read: "6 min read",
    href: "/insights",
  },
  {
    tag: "Community",
    title: "Finding Your Neighborhood: Beyond the Listing",
    desc: "What listings won’t tell you—how to evaluate fit, comfort, and daily ease.",
    read: "5 min read",
    href: "/insights",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "For the first time in my home search, I felt truly heard. No rushed decisions, no pressure—just thoughtful guidance.",
    name: "Sarah M.",
    meta: "First-Time Buyer • Toronto",
  },
  {
    quote:
      "The Pink Score framework helped me see properties differently. I wasn’t just comparing square footage—I was comparing quality of life.",
    name: "Dr. Priya K.",
    meta: "First-Time Buyer • Mississauga",
  },
  {
    quote:
      "Scheduling viewings was calm and discreet. I felt supported without feeling sold to.",
    name: "Jessica L.",
    meta: "Buyer • Oakville",
  },
];

export default function HomePage() {
  const whatsNew = getWhatsNewItems(8);
  return (
    <main className="space-y-0">
      {/* HERO */}
      <section className="py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-gold-light/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-crimson-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-soft">
              <span className="inline-block w-2 h-2 rounded-full bg-primary" />
              Empowering Women in Ontario Real Estate
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight text-foreground">
              Curated GTA listings for women buying with <span className="text-gradient-crimson">clarity</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Shortlists built around your lifestyle, calm concierge viewings, and a decision system that reduces overwhelm.
            </p>

            <p className="text-sm text-muted-foreground max-w-3xl mx-auto">
              Over time, this becomes a women-first hub for money/policy updates, experts, and evidence-based resources.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shortlist" className="btn-primary btn-crimson-glow px-6 py-3">
                Get curated listings →
              </Link>
              <Link href="/viewing" className="btn-secondary px-6 py-3">
                Request concierge viewing
              </Link>
            </div>

            <div className="pt-8 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-3 text-sm text-muted-foreground">
                <Crown className="w-4 h-4 text-gold" /> Women-First Approach
              </div>
              <div className="flex items-center justify-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-3 text-sm text-muted-foreground">
                <Key className="w-4 h-4 text-primary" /> Unlock Opportunities
              </div>
              <div className="flex items-center justify-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-3 text-sm text-muted-foreground">
                <ShieldCheck className="w-4 h-4 text-accent" /> RECO Licensed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
            <div className="space-y-3">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                How it works
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold">A calm, repeatable process</h2>
              <p className="text-muted-foreground max-w-2xl">
                Lifestyle first → curated shortlist → viewings → decisions with Pink Score™. You stay in control.
              </p>
            </div>
            <Link href="/how-it-works" className="btn-secondary px-6 py-3 w-fit">
              See the full process
            </Link>
          </div>

	          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
	            {[
	              {
	                title: "1) Share your lifestyle",
	                desc: "WFH, hosting, light, quiet, gym, groceries, transit — you set priorities.",
	                href: "/shortlist",
	              },
	              {
	                title: "2) Get a curated shortlist",
	                desc: "Focused options aligned to you — not 100 links and not endless scrolling.",
	                href: "/properties",
	              },
	              {
	                title: "3) Tour calmly",
	                desc: "Concierge viewings on your timeline. No pressure, no rushed decisions.",
	                href: "/viewing",
	              },
	              {
	                title: "4) Decide with Pink Score™",
	                desc: "Compare homes across safety, transit, essentials, wellness, lifestyle, and home fit.",
	                href: "/pink-score/calculator",
	              },
	            ].map((s) => (
	              <div key={s.title} className="card-elevated rounded-2xl border border-border/50 p-6 space-y-3">
	                <div className="font-display text-2xl font-semibold">{s.title}</div>
	                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
	                <Link href={s.href} className="text-primary hover:underline text-sm">
	                  Open →
	                </Link>
	              </div>
	            ))}
	          </div>
	        </div>
	      </section>

	      {/* WHAT'S NEW */}
	      <WhatsNewCarousel items={whatsNew} />

      {/* KNOWLEDGE */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
            <div className="space-y-3">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Learn &amp; Grow
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold">Knowledge Is Power</h2>
              <p className="text-muted-foreground max-w-2xl">
                Jargon-free education designed to reduce fear and support calm, informed decisions.
              </p>
            </div>
            <Link href="/insights" className="btn-secondary px-6 py-3 w-fit">
              View All Articles
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {ARTICLE_CARDS.map((a) => (
              <div key={a.title} className="card-elevated rounded-2xl border border-border/50 p-6 space-y-4">
                <div className="text-xs text-muted-foreground">{a.tag}</div>
                <h3 className="font-display text-2xl font-semibold leading-tight">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                <div className="flex items-center justify-between pt-2 text-sm text-muted-foreground">
                  <span>{a.read}</span>
                  <Link href={a.href} className="text-primary hover:underline">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

	      {/* PINK SCORE (TOOL) */}
	      <PinkScoreSection />

      {/* ALLY */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="card-elevated rounded-2xl border border-border/50 p-8">
              <div className="text-sm text-muted-foreground mb-2">Your Ally</div>
              <div className="font-display text-2xl font-semibold">[Your Name]</div>
              <div className="text-sm text-muted-foreground">M.Sc • MBA • RECO Licensed</div>
              <div className="mt-6 text-sm text-muted-foreground">
                “Empowering women to build wealth and security through real estate — with calm guidance and zero pressure.”
              </div>
            </div>

            <div className="space-y-5">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Your Trusted Ally
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold">
                A Genuine Partner in <span className="text-gradient-crimson">Your Journey</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                This isn’t about sales pressure. It’s about providing the tools and support you need to make confident decisions on your timeline.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="card-elevated rounded-2xl border border-border/50 p-6">
                  <div className="font-medium">No Pressure</div>
                  <div className="text-sm text-muted-foreground">Your timeline, your decisions.</div>
                </div>
                <div className="card-elevated rounded-2xl border border-border/50 p-6">
                  <div className="font-medium">Genuine Care</div>
                  <div className="text-sm text-muted-foreground">Your success is the priority.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Real Stories
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-semibold">Women Building Futures</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Authentic journeys from women who found their path to homeownership — calm, practical, and empowering.
          </p>

          <div className="grid lg:grid-cols-3 gap-6 mt-12 text-left">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card-elevated rounded-2xl border border-border/50 p-8 space-y-6">
                <div className="text-lg leading-relaxed">“{t.quote}”</div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.meta}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-6">Testimonials shared with consent. Names may be changed for privacy.</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <div className="card-elevated rounded-3xl border border-border/50 p-10 md:p-14 text-center max-w-4xl mx-auto">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Begin Your Journey
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold">
              Ready to Start a <span className="text-gradient-gold">Conversation</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              No pressure, no obligation. Just a supportive discussion about your goals, questions, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/viewing" className="btn-primary btn-crimson-glow px-6 py-3">
                Start a Conversation
              </Link>
              <Link href="/shortlist" className="btn-secondary px-6 py-3">
                Send a Message
              </Link>
            </div>
            <div className="mt-8 text-sm text-muted-foreground flex flex-col sm:flex-row gap-4 justify-center">
              <span>Available Mon–Sat, 9am–7pm</span>
              <span className="hidden sm:inline">•</span>
              <span>Response within 24 hours</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
