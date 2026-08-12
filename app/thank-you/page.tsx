import type { Metadata } from "next";
import Link from "next/link";
import { AsciiDrone } from "../ascii-drone";
import { Eyebrow } from "../components";
import { pageMetadata } from "../metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Thank You",
    description: "Confirmation that your message was submitted to MARDE.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="page-hero compact confirmation-page">
      <div className="confirmation-copy">
        <Eyebrow>Message received</Eyebrow>
        <h1>Thank you.</h1>
        <p>Your message has been submitted. The MARDE team will review it as the work continues.</p>
        <Link className="button button-primary" href="/">Return Home</Link>
      </div>
      <AsciiDrone className="not-found-drone confirmation-drone" />
    </section>
  );
}
