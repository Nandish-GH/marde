import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import { Footer, Header } from "./components";
import { site } from "./content";
import { MobileSupportCta } from "./mobile-support-cta";
import { StructuredData } from "./structured-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `MARDE — ${site.tagline}`,
    template: "%s | MARDE",
  },
  description:
    "MARDE is building autonomous first-response systems to help close the gap before help arrives.",
  applicationName: site.name,
  keywords: [
    "MARDE",
    "emergency response technology",
    "autonomous first response",
    "EMS innovation",
    "robotics in development",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
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
  return (
    <html lang="en">
      <body>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileSupportCta />
      </body>
    </html>
  );
}
