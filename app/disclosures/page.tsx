export const metadata = {
  title: "Disclosures",
  description: "Transparency about affiliations, paid listings, and limitations.",
};

export default function DisclosuresPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <h1 className="font-display text-4xl font-semibold">Disclosures</h1>
      <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
        <p>
          This platform is created and operated by a licensed real estate professional.
        </p>
        <p>
          If the platform includes a directory of experts/coaches, any paid placements will be clearly labeled as sponsored.
        </p>
        <p>
          Pink Score™ is a lifestyle decision-support framework. It is not a guarantee or ranking, and it cannot capture lived experience.
        </p>
      </div>
    </main>
  );
}
