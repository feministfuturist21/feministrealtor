import LeadFormShortlist from "../../components/LeadFormShortlist";

export default function ShortlistPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <div className="space-y-2 max-w-3xl">
        <h1 className="text-3xl font-semibold">Curated listings, built around your life.</h1>
        <p className="opacity-80">
          Share a few preferences — you’ll get a focused shortlist instead of an endless scroll.
        </p>
      </div>
      <LeadFormShortlist />
    </main>
  );
}
