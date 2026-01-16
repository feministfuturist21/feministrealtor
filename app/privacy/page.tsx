export const metadata = {
  title: "Privacy",
  description: "How we handle your data and lead submissions.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 space-y-6">
      <h1 className="font-display text-4xl font-semibold">Privacy</h1>
      <div className="max-w-3xl space-y-4 text-muted-foreground leading-relaxed">
        <p>
          This is an MVP privacy notice. It will be expanded as the platform grows.
        </p>
        <p>
          We collect the information you submit in forms (such as email, name, and preferences) to respond to your request.
          We do not sell your personal information.
        </p>
        <p>
          Analytics: the site may use Google Analytics to understand traffic and improve the experience. You can use browser
          settings or extensions to limit tracking.
        </p>
        <p>
          If you want your information removed, contact the site owner.
        </p>
      </div>
    </main>
  );
}
