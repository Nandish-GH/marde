import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Footer } from "./components";
import { site } from "./content";
import { StructuredData } from "./structured-data";
import { Header } from "./site-header";
import { SiteMotion } from "./site-motion";
import { LoadingOverlay } from "./loading-overlay";
import { canonicalSiteUrl, socialImage } from "./metadata";
import { AnalyticsFoundation } from "./analytics";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(canonicalSiteUrl),
  title: {
    default: `MARDE | ${site.tagline}`,
    template: "%s | MARDE",
  },
  description:
    "MARDE is developing an early-stage robotic emergency-response platform spanning Air, Ground, intervention modules, and human-in-the-loop coordination.",
  applicationName: site.name,
  keywords: [
    "MARDE",
    "emergency response technology",
    "robotic emergency response",
    "human-in-the-loop coordination",
    "EMS innovation",
    "robotics in development",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
  openGraph: {
    title: `MARDE | ${site.tagline}`,
    description: "An integrated robotic emergency-response platform in early-stage development.",
    url: canonicalSiteUrl,
    type: "website",
    siteName: site.name,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `MARDE | ${site.tagline}`,
    description: "An integrated robotic emergency-response platform in early-stage development.",
    images: [{ url: socialImage.url, alt: socialImage.alt }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <noscript><style>{".loading-overlay{display:none!important}"}</style></noscript>
        <LoadingOverlay />
        <StructuredData />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <AnalyticsFoundation />
        <SiteMotion />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        {googleAnalyticsId ? <GoogleAnalytics gaId={googleAnalyticsId} /> : null}
      </body>
    </html>
  );
}
