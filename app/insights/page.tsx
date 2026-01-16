import Link from "next/link";

export default function InsightsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-semibold">Policy & Money (Evergreen)</h1>
        <p className="opacity-80">
          This lane is designed for sourced, dated, evergreen notes: bank policies, mortgage rules, and practical money topics.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-3">
        {[
          { title: "Bank rate update", desc: "What changed + why it matters.", href: "#" },
          { title: "Mortgage rules", desc: "Plain language explainer.", href: "#" },
          { title: "GIC rates basics", desc: "How to think about rates and safety.", href: "#" },
        ].map((x) => (
          <div key={x.title} className="rounded-2xl border p-4 space-y-2">
            <div className="font-medium">{x.title}</div>
            <div className="text-sm opacity-75">Published: [date] • Updated: [date]</div>
            <div className="text-sm opacity-80">{x.desc}</div>
            <Link className="text-sm underline opacity-80" href={x.href}>Read</Link>
          </div>
        ))}
      </div>

      <p className="text-sm opacity-70">
        Tip: later we can back this with MDX files or a headless CMS, with automatic “last updated” stamps.
      </p>
    </main>
  );
}
