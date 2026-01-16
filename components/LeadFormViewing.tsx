"use client";

import { useMemo, useState } from "react";
import { track } from "../lib/analytics";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadFormViewing() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredTimes, setPreferredTimes] = useState("");
  const [mustHaves, setMustHaves] = useState("");
  const [dealbreakers, setDealbreakers] = useState("");
  const [links, setLinks] = useState("");

  const canSubmit = useMemo(() => {
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    return okEmail && status !== "submitting";
  }, [email, status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    track("viewing_request_submit");

    try {
      const res = await fetch("/api/lead/viewing", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, name, phone, preferredTimes, mustHaves, dealbreakers, links }),
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
        <div className="text-lg font-semibold">Request received ✅</div>
        <p className="opacity-80">
          Thank you. I’ll reply with suggested viewing options and a calm next-step plan.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border p-6 space-y-5">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold">Request a concierge viewing</h2>
        <p className="opacity-80">
          Low pressure. You choose the pace. Share links if you have them — or just describe what you want.
        </p>
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
          <div className="text-sm font-medium">Phone (optional)</div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-2xl border px-3 py-2"
            placeholder="(416) 555-1234"
          />
        </label>

        <label className="space-y-1">
          <div className="text-sm font-medium">Preferred times (optional)</div>
          <input
            value={preferredTimes}
            onChange={(e) => setPreferredTimes(e.target.value)}
            className="w-full rounded-2xl border px-3 py-2"
            placeholder="Weeknights after 6, Sat morning..."
          />
        </label>
      </div>

      <label className="space-y-1 block">
        <div className="text-sm font-medium">Links (optional)</div>
        <textarea
          value={links}
          onChange={(e) => setLinks(e.target.value)}
          className="w-full rounded-2xl border px-3 py-2 min-h-24"
          placeholder="Paste MLS links, Realtor.ca links, or addresses (one per line)."
        />
      </label>

      <div className="grid md:grid-cols-2 gap-4">
        <label className="space-y-1 block">
          <div className="text-sm font-medium">Must-haves (optional)</div>
          <textarea
            value={mustHaves}
            onChange={(e) => setMustHaves(e.target.value)}
            className="w-full rounded-2xl border px-3 py-2 min-h-24"
            placeholder="WFH nook, bright living room, gym nearby..."
          />
        </label>

        <label className="space-y-1 block">
          <div className="text-sm font-medium">Dealbreakers (optional)</div>
          <textarea
            value={dealbreakers}
            onChange={(e) => setDealbreakers(e.target.value)}
            className="w-full rounded-2xl border px-3 py-2 min-h-24"
            placeholder="No basement bedrooms, no noisy streets..."
          />
        </label>
      </div>

      <div className="space-y-2">
        <button
          type="submit"
          disabled={!canSubmit}
          className="w-full md:w-auto rounded-2xl px-5 py-3 shadow-sm border font-medium disabled:opacity-50"
        >
          {status === "submitting" ? "Sending…" : "Request viewing"}
        </button>

        <p className="text-sm opacity-70">
          By submitting, you agree to be contacted about your request. You can opt out anytime.
        </p>

        {status === "error" && <p className="text-sm text-red-600">{error}</p>}
      </div>
    </form>
  );
}
