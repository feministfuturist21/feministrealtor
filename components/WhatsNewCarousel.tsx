"use client";

import Image from "next/image";
import Link from "next/link";
import type { WhatsNewItem } from "../lib/whatsNew";
import { track } from "../lib/analytics";

export default function WhatsNewCarousel({ items }: { items: WhatsNewItem[] }) {
  if (!items?.length) return null;

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div className="space-y-3">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
              What’s New
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold">Fresh picks &amp; updates</h2>
            <p className="text-muted-foreground max-w-2xl">
              Curated by me. Automatically pulled from your content folder — featured first, then newest.
            </p>
          </div>

          <Link href="/properties" className="btn-secondary px-6 py-3 w-fit">
            Browse Properties
          </Link>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-3">
          {items.map((it) => (
            <Link
              key={it.id}
              href={it.href}
              className="min-w-[320px] max-w-[320px] card-elevated rounded-2xl border border-border/50 overflow-hidden"
              onClick={() => track("whatsnew_card_click", { item_id: it.id, type: it.type, href: it.href })}
            >
              <div className="relative h-44">
                <Image src={it.image} alt={it.title} fill className="object-cover" unoptimized />
                {it.badge ? (
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs bg-background/90 border border-border/50">
                    {it.badge}
                  </div>
                ) : null}
              </div>

              <div className="p-5 space-y-2">
                <div className="text-xs text-muted-foreground">
                  {it.type.toUpperCase()} • {it.date}
                </div>
                <div className="font-display text-lg font-semibold">{it.title}</div>
                {it.subtitle ? <div className="text-sm text-muted-foreground">{it.subtitle}</div> : null}

                {!!it.tags?.length && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {it.tags.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
