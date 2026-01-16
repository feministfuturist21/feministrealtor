import LeadFormViewing from "../../components/LeadFormViewing";

export default function ViewingPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <div className="space-y-2 max-w-3xl">
        <h1 className="text-3xl font-semibold">Concierge viewings, without sales energy.</h1>
        <p className="opacity-80">
          If you have a few homes in mind, share the links (or describe what you want). We’ll schedule viewings and keep it calm and practical.
        </p>
      </div>
      <LeadFormViewing />
    </main>
  );
}
