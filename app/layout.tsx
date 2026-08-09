import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer, Header } from "./components";

export const metadata: Metadata = { metadataBase: new URL("https://nandish-gh.github.io/marde/"), title: { default: "MARDE — Response Starts Before Arrival", template: "%s | MARDE" }, description: "MARDE is building autonomous first-response systems to help close the gap before help arrives.", openGraph: { title: "MARDE — Response Starts Before Arrival", description: "Autonomous first-response systems in development.", type: "website", siteName: "MARDE" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN; return <html lang="en"><body>{domain && <Script defer data-domain={domain} src="https://plausible.io/js/script.js" strategy="afterInteractive" />}<Header /><main>{children}</main><Footer /></body></html>; }
