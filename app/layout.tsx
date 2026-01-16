import type { Metadata } from "next";
import Script from "next/script";
import "../styles/globals.css";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "GTA First-Home Clarity",
  description:
    "Buy your first GTA home with clarity — curated listings, decision tools, and zero-pressure guidance.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Uses env var if provided; falls back to your current GA4 Measurement ID for convenience.
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-2682RY52HH";
  return (
    <html lang="en">
      <head>
        {gaId ? (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${gaId}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body className="min-h-screen bg-background text-foreground font-body">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
