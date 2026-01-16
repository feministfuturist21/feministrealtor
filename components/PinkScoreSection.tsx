import Link from "next/link";
import { Shield, MapPin, ShoppingBasket, Heart, Dumbbell, Home } from "lucide-react";

const categories = [
  {
    icon: Shield,
    title: "Safety & Comfort",
    description: "Safety signals, lighting, and day-to-day comfort.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: MapPin,
    title: "Transit & Walkability",
    description: "TTC/GO access and frictionless daily movement.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: ShoppingBasket,
    title: "Daily Essentials",
    description: "Groceries, pharmacy, coffee, and basics nearby.",
    color: "text-crimson-light",
    bgColor: "bg-crimson-light/10",
  },
  {
    icon: Heart,
    title: "Lifestyle & Joy",
    description: "Parks, cafés, dining, culture, and third places.",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
  {
    icon: Dumbbell,
    title: "Wellness & Routine",
    description: "Gyms, studios, trails, and wellness support.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Home,
    title: "Home Fit",
    description: "WFH setup, layout flow, noise, storage, and vibe.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

export default function PinkScoreSection() {
  return (
    <section id="pink-score" className="py-24 bg-gradient-hero relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-light/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-crimson-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Lifestyle Decision Tool
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            The <span className="text-gradient-crimson">Pink Score™</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A women-first framework to evaluate how well a home fits your real life in Toronto/GTA —
            safety, transit, essentials, wellness, and the space itself.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="card-elevated p-6 rounded-2xl border border-border/50 group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${category.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className={`w-6 h-6 ${category.color}`} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{category.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Pink Score™ is a decision-support tool — not a guarantee or ranking. You can adjust priorities based on your
            lifestyle and comfort level.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/pink-score/calculator" className="btn-primary btn-crimson-glow px-5 py-3">
              Score a home
            </Link>
            <Link href="/pink-score" className="btn-secondary px-5 py-3">
              Explore Pink Score™
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
