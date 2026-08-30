import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Inter, Newsreader, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { Footer } from "./components";
import { site } from "./content";
import { Header } from "./site-header";
import { LegacyExperience } from "./legacy-experience";
import { canonicalSiteUrl, socialImage } from "./metadata";
import { AnalyticsFoundation } from "./analytics";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-newsreader", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-space-grotesk", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });
const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-ibm-plex-mono", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-archivo", display: "swap" });

const googleAnalyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(canonicalSiteUrl),
  title: {
    default: "MARDE | Emergency Response Robotics Before EMS Arrival",
    template: "%s | MARDE",
  },
  description:
    "MARDE is developing an integrated emergency-response robotics platform combining aerial transport, ground access, command software, and modular intervention capabilities.",
  applicationName: site.name,
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
  openGraph: {
    title: "MARDE | Emergency Response Robotics Before EMS Arrival",
    description: "MARDE is developing an integrated emergency-response robotics platform combining aerial transport, ground access, command software, and modular intervention capabilities.",
    url: canonicalSiteUrl,
    type: "website",
    siteName: site.name,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "MARDE | Emergency Response Robotics Before EMS Arrival",
    description: "MARDE is developing an integrated emergency-response robotics platform combining aerial transport, ground access, command software, and modular intervention capabilities.",
    images: [{ url: socialImage.url, alt: socialImage.alt }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} ${archivo.variable}`}>
      <body>
        <noscript><style>{".loading-overlay{display:none!important}"}</style></noscript>
        <LegacyExperience />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Header />
        <AnalyticsFoundation />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        {googleAnalyticsId ? <GoogleAnalytics gaId={googleAnalyticsId} /> : null}
      </body>
    </html>
  );
}
