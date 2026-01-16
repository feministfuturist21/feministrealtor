import Link from "next/link";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}) {
  const base = "rounded-2xl px-5 py-3 border font-medium text-center inline-block";
  const styles =
    variant === "primary"
      ? "shadow-sm"
      : variant === "secondary"
        ? "shadow-sm opacity-95"
        : "opacity-80";

  return (
    <Link className={`${base} ${styles}`} href={href}>
      {children}
    </Link>
  );
}
