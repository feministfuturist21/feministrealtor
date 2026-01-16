"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { track } from "../lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

type Weights = {
  safety: number;
  transit: number;
  essentials: number;
  lifestyle: number;
  wellness: number;
  homeFit: number;
};

type Scores = {
  safety: number;
  transit: number;
  essentials: number;
  lifestyle: number;
  wellness: number;
  homeFit: number;
};

const DEFAULT_WEIGHTS: Weights = {
  safety: 30,
  transit: 20,
  essentials: 15,
  lifestyle: 15,
  wellness: 10,
  homeFit: 10,
};

const DEFAULT_SCORES: Scores = {
  safety: 6,
  transit: 6,
  essentials: 6,
  lifestyle: 6,
  wellness: 6,
  homeFit: 6,
};

const LABELS: Record<keyof Weights, string> = {
  safety: "Safety & Comfort",
  transit: "Transit & Walkability",
  essentials: "Daily Essentials",
  lifestyle: "Lifestyle & Joy",
  wellness: "Wellness & Routine",
  homeFit: "Home Fit",
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function PinkScoreCalculator() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("Toronto / GTA");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);

  const [weights, setWeights] = useState<Weights>(DEFAULT_WEIGHTS);
  const [scores, setScores] = useState<Scores>(DEFAULT_SCORES);

  const totalWeight = useMemo(() => Object.values(weights).reduce((a, b) => a + b, 0), [weights]);

  const breakdown = useMemo(() => {
    const total = totalWeight || 1;
    const items = (Object.keys(weights) as (keyof Weights)[]).map((k) => {
      const w = weights[k];
      const s = scores[k];
      const normalized = clamp(s, 0, 10) / 10; // 0..1
      const contribution = (normalized * w) / total; // 0..1
      return {
        key: k,
        label: LABELS[k],
        weight: w,
        score10: clamp(s, 0, 10),
        contribution,
      };
    });
    items.sort((a, b) => b.contribution - a.contribution);
    return items;
  }, [scores, totalWeight, weights]);

  const pinkScore = useMemo(() => {
    const sum = breakdown.reduce((acc, x) => acc + x.contribution, 0);
    return Math.round(sum * 100);
  }, [breakdown]);

  const topDrivers = useMemo(() => breakdown.slice(0, 3), [breakdown]);
  const tradeoffs = useMemo(() => {
    const asc = [...breakdown].sort((a, b) => a.score10 - b.score10);
    return asc.slice(0, 2);
  }, [breakdown]);

  const canSubmit = useMemo(() => {
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    return okEmail && address.trim().length >= 5 && consent && status !== "submitting";
  }, [address, consent, email, status]);

  function setWeight(k: keyof Weights, v: number) {
    setWeights((prev) => ({ ...prev, [k]: clamp(v, 0, 60) }));
  }

  function setScore(k: keyof Scores, v: number) {
    setScores((prev) => ({ ...prev, [k]: clamp(v, 0, 10) }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    track("pinkscore_email_submit", { pinkScore });

    try {
      const payload = {
        email: email.trim(),
        name: name.trim(),
        address: address.trim(),
        city,
        weights,
        selfScores: scores,
        result: {
          pinkScore,
          totalWeight,
          topDrivers: topDrivers.map((d) => ({ key: d.key, label: d.label, weight: d.weight, score10: d.score10 })),
          tradeoffs: tradeoffs.map((t) => ({ key: t.key, label: t.label, weight: t.weight, score10: t.score10 })),
        },
        consent,
      };

      const res = await fetch("/api/lead/pinkscore", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || "Could not submit. Please try again.");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <section className="py-14 bg-background">
        <div className="container max-w-3xl">
          <div className="card-elevated rounded-3xl border border-border/50 p-8 space-y-4">
            <div className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium">
              Scorecard requested
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-semibold">
              You’re in ✅
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              Thank you. I’ll send a Pink Scorecard summary to your email. If you want, you can also request a concierge viewing for this address.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              <Link href="/viewing" className="btn-primary btn-crimson-glow px-5 py-3">
                Request concierge viewing
              </Link>
              <Link href="/shortlist" className="btn-secondary px-5 py-3">
                Get curated listings
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              Note: Pink Score™ is decision-support only. It does not guarantee safety, value, or returns.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14 bg-background">
      <div className="container max-w-5xl">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
            Lifestyle Fit Calculator
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold">
            Score a home with <span className="text-gradient-crimson">Pink Score™</span>
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Set what matters most to you (weights), adjust the home’s fit (0–10), and we’ll generate a scorecard you can keep.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-10 grid lg:grid-cols-2 gap-6">
          {/* LEFT: Inputs */}
          <div className="card-elevated rounded-3xl border border-border/50 p-6 space-y-6">
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-semibold">1) The home</h2>

              <label className="space-y-1 block">
                <div className="text-sm font-medium">Address (required)</div>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="123 Queen St W, Toronto"
                  className="w-full rounded-2xl border px-3 py-2 bg-background"
                  required
                />
              </label>

              <label className="space-y-1 block">
                <div className="text-sm font-medium">City/region</div>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full rounded-2xl border px-3 py-2 bg-background"
                  placeholder="Toronto / GTA"
                />
              </label>

              <div className="rounded-2xl border border-border/50 p-4 text-sm text-muted-foreground">
                <div className="font-medium text-foreground mb-1">About safety</div>
                Any safety-related inputs are directional and context-dependent. Data can be delayed and can’t capture lived experience.
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-semibold">2) Your priorities (weights)</h2>
              <p className="text-sm text-muted-foreground">
                Higher weight = more important to you. Total weight: <span className="font-medium text-foreground">{totalWeight}</span>
              </p>

              {(Object.keys(weights) as (keyof Weights)[]).map((k) => (
                <Slider
                  key={k}
                  label={LABELS[k]}
                  value={weights[k]}
                  min={0}
                  max={60}
                  onChange={(v) => setWeight(k, v)}
                />
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl font-semibold">3) Home fit (0–10)</h2>
              <p className="text-sm text-muted-foreground">
                Start with your instinct, then adjust after a viewing.
              </p>

              {(Object.keys(scores) as (keyof Scores)[]).map((k) => (
                <ScoreInput
                  key={k}
                  label={LABELS[k]}
                  value={scores[k]}
                  onChange={(v) => setScore(k, v)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Results + lead capture */}
          <div className="space-y-6">
            <div className="card-elevated rounded-3xl border border-border/50 p-6 space-y-5">
              <div>
                <div className="text-sm text-muted-foreground">Pink Score™</div>
                <div className="font-display text-5xl font-semibold">{pinkScore}/100</div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border/50 p-4">
                  <div className="text-sm font-medium">Top drivers</div>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {topDrivers.map((d) => (
                      <li key={d.key}>• {d.label} (weight {d.weight}, fit {d.score10}/10)</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-border/50 p-4">
                  <div className="text-sm font-medium">Potential tradeoffs</div>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {tradeoffs.map((t) => (
                      <li key={t.key}>• {t.label} (fit {t.score10}/10)</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-border/50 p-4 text-sm text-muted-foreground">
                This is decision support only. It does not guarantee safety, value, or returns.
              </div>
            </div>

            <div className="card-elevated rounded-3xl border border-border/50 p-6 space-y-4">
              <h2 className="font-display text-2xl font-semibold">Email me my scorecard</h2>
              <p className="text-sm text-muted-foreground">
                I’ll send a clean summary and next-step options. No spam.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <label className="space-y-1 block">
                  <div className="text-sm font-medium">Email (required)</div>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    className="w-full rounded-2xl border px-3 py-2 bg-background"
                    placeholder="you@example.com"
                  />
                </label>

                <label className="space-y-1 block">
                  <div className="text-sm font-medium">Name (optional)</div>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border px-3 py-2 bg-background"
                    placeholder="First name"
                  />
                </label>
              </div>

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  I consent to receive this scorecard and related home-buying guidance emails. I can unsubscribe anytime.
                </span>
              </label>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="btn-primary btn-crimson-glow px-5 py-3 disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending..." : "Send my scorecard"}
                </button>
                <Link href="/viewing" className="btn-secondary px-5 py-3">
                  Request concierge viewing
                </Link>
              </div>

              {status === "error" && <p className="text-sm text-red-600">{error}</p>}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

function Slider(props: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="font-medium">{props.label}</div>
        <div className="text-sm text-muted-foreground">{props.value}</div>
      </div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={1}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}

function ScoreInput(props: { label: string; value: number; onChange: (v: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="font-medium">{props.label}</div>
      <input
        type="number"
        min={0}
        max={10}
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        className="w-24 rounded-xl border px-3 py-2 bg-background"
      />
    </div>
  );
}
