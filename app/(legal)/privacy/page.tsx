export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <h1 className="text-3xl font-semibold">Privacy Policy (Starter)</h1>

      <section className="rounded-3xl border p-6 space-y-3">
        <h2 className="text-xl font-semibold">What we collect</h2>
        <ul className="space-y-2 opacity-90">
          <li>• Information you submit in forms (e.g., email, preferences, viewing requests).</li>
          <li>• Basic analytics data (pages visited, referral source) if enabled.</li>
        </ul>
      </section>

      <section className="rounded-3xl border p-6 space-y-3">
        <h2 className="text-xl font-semibold">How we use your information</h2>
        <ul className="space-y-2 opacity-90">
          <li>• To respond to your requests and send relevant listings or updates.</li>
          <li>• To improve the site experience and content quality.</li>
          <li>• To send emails only when you consent, with unsubscribe available.</li>
        </ul>
      </section>

      <section className="rounded-3xl border p-6 space-y-3">
        <h2 className="text-xl font-semibold">Your choices</h2>
        <ul className="space-y-2 opacity-90">
          <li>• You can unsubscribe from emails at any time.</li>
          <li>• You can request access, correction, or deletion of your information.</li>
        </ul>
      </section>

      <p className="text-sm opacity-70">
        Replace this entire page with your final policy and have it reviewed for your jurisdiction and business model.
      </p>
    </main>
  );
}
