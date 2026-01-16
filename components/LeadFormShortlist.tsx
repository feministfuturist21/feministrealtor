"use client";

import { useMemo, useState } from "react";
import { track } from "../lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

const DEFAULT_CHIPS = [
  "Work-from-home friendly",
  "Hosting-friendly layout",
  "Bright / natural light",
  "Quiet street / building",
  "Gym + wellness nearby",
  "Condo",
  "Freehold",
  "Parking",
];

export default function LeadFormShortlist() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");
  const [area, setArea] = useState("");
  const [timeline, setTimeline] = useState("3–6 months");
  const [chips, setChips] = useState<string[]>([]);

  const canSubmit = useMemo(() => {
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    return okEmail && status !== "submitting";
  }, [email, status]);

  function toggleChip(chip: string) {
    setChips((prev) => (prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    track("shortlist_submit");

    try {
      const res = await fetch("/api/lead/shortlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, name, budget, area, timeline, chips }),
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
      <div className="rounded-3xl border p-6 space-y-2">
        <div className="text-lg font-semibold">You’re in ✅</div>
        <p className="opacity-80">
          Thank you. I’ll send a focused shortlist based on your must-haves. You stay in control — no pressure.
        </p>
        <p className="text-sm opacity-70">
          Tip: if you want viewings soon, you can also use the Concierge Viewing request.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border p-6 space-y-5">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Get curated listings</h2>
        <p className="opacity-80">Tell me what you want — I’ll send a clean shortlist. No spam.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="space-y-1">
          <div className="text-sm font-medium">Email (required)</div>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
            className="w-full rounded-2xl border px-3 py-2"
            placeholder="you@example.com"
          />
        </label>

        <label className="space-y-1">
          <div className="text-sm font-medium">Name (optional)</div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-2xl border px-3 py-2"
            placeholder="First name"
          />
        </label>

        <label className="space-y-1">
          <div className="text-sm font-medium">Budget range (optional)</div>
          <input
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full rounded-2xl border px-3 py-2"
            placeholder="$650k–$900k"
          />
        </label>

        <label className="space-y-1">
          <div className="text-sm font-medium">Preferred areas (optional)</div>
          <input
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full rounded-2xl border px-3 py-2"
            placeholder="Downtown, Leslieville, Mississauga..."
          />
        </label>

        <label className="space-y-1">
          <div className="text-sm font-medium">Timeline</div>
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full rounded-2xl border px-3 py-2"
          >
            {[
              "0–4 weeks",
              "1–2 months",
              "3–6 months",
              "6–12 months",
              "Just exploring",
            ].map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="space-y-2">
        <div className="text-sm font-medium">Lifestyle filters</div>
        <div className="flex flex-wrap gap-2">
          {DEFAULT_CHIPS.map((chip) => {
            const active = chips.includes(chip);
            return (
              <button
                key={chip}
                type="button"
                onClick={() => toggleChip(chip)}
                className={
                  "rounded-full border px-3 py-1 text-sm " +
                  (active ? "opacity-100" : "opacity-70")
                }
                aria-pressed={active}
              >
                {chip}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full md:w-auto rounded-2xl px-5 py-3 shadow-sm border font-medium disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Build my shortlist"}
        </button>

        <p className="text-sm opacity-70">
          By submitting, you agree to receive email from this platform. You can unsubscribe anytime.
        </p>

        {status === "error" && (
          <p className="text-sm text-red-600">{error}</p>
        )}
      </div>
    </form>
  );
}
