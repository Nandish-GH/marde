import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Eyebrow } from "../components";
import { pageMetadata } from "../metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Thank You",
    description: "Thank you for following MARDE's progress.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="page-hero compact min-h-[calc(100vh-76px)]">
      <Eyebrow>Thank you</Eyebrow>
      <h1>
        You&apos;re on the
        <br />
        <em>list.</em>
      </h1>
      <p>We&apos;ll share occasional updates as MARDE&apos;s R&amp;D work progresses.</p>
      <Link className="button button-primary" href="/">
        Back to Home <Arrow />
      </Link>
    </section>
  );
}
