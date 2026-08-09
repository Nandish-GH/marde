import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer, Header } from "./components";
import { site } from "./content";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `MARDE — ${site.tagline}`,
    template: "%s | MARDE",
  },
  description:
    "MARDE is building autonomous first-response systems to help close the gap before help arrives.",
  openGraph: {
    title: `MARDE — ${site.tagline}`,
    description: "Autonomous first-response systems in development.",
    type: "website",
    siteName: site.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: `MARDE — ${site.tagline}`,
    description: "Autonomous first-response systems in development.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="en">
      <body>
        {domain && (
          <Script defer data-domain={domain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />
        )}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
