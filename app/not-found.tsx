import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { AsciiDrone } from "./ascii-drone";
import { Eyebrow } from "./components";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="page-hero compact not-found-page">
      <div className="not-found-copy">
        <Eyebrow>404 · Page not found</Eyebrow>
        <h1>This page isn&apos;t here.</h1>
        <p>The address may have changed, or the page may no longer exist.</p>
        <div className="actions">
          <Button asChild><Link href="/">Return Home</Link></Button>
          <Button asChild variant="quiet"><Link href="/support">Explore Support</Link></Button>
        </div>
      </div>
      <AsciiDrone />
    </section>
  );
}
