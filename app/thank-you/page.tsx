import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { AsciiDrone } from "../ascii-drone";
import { Eyebrow } from "../components";
import { pageMetadata } from "../metadata";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Thank You",
    description: "Confirmation that your message was submitted to MARDE.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <section className="page-hero compact confirmation-page">
      <div className="confirmation-copy">
        <Eyebrow>Message received</Eyebrow>
        <h1>Thank you.</h1>
        <p>Your message has been submitted. The MARDE team will review it as the work continues.</p>
        <Button asChild><Link href="/">Return Home</Link></Button>
      </div>
      <AsciiDrone className="not-found-drone confirmation-drone" />
    </section>
  );
}
