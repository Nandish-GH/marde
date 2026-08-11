import type { Metadata } from "next";
import { Eyebrow } from "../components";
import { pageMetadata } from "../metadata";
import { site } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How MARDE handles website, email signup, donation, and analytics information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero compact legal-hero">
        <Eyebrow>Privacy policy</Eyebrow>
        <h1>
          Your information,
          <br />
          <em>handled carefully.</em>
        </h1>
        <p>Effective August 11, 2026</p>
      </section>
      <article className="mx-auto max-w-[830px] px-6 py-20 text-[#5d717b] md:px-0 md:py-28">
        <p className="mb-12 text-[19px]">This policy explains how MARDE, Inc. handles information collected through mardeinc.com.</p>
        <h2 className="mb-3 mt-10 text-[34px] text-[#102b39]">Email signups</h2>
        <p>When you submit your email address to follow MARDE’s progress, we store it to send occasional updates about our R&amp;D work. You may ask us to remove your email at any time by contacting <a className="font-bold text-[#102b39] underline underline-offset-3" href={`mailto:${site.email}`}>{site.email}</a>.</p>
        <h2 className="mb-3 mt-10 text-[34px] text-[#102b39]">Donations</h2>
        <p>Donations are processed by Stripe through its hosted donation page. MARDE does not collect or store payment-card information on this website. Stripe’s handling of payment information is governed by its own privacy policy.</p>
        <h2 className="mb-3 mt-10 text-[34px] text-[#102b39]">Analytics</h2>
        <p>MARDE may use Cloudflare Web Analytics to understand aggregate website activity, such as page visits and referral sources. Cloudflare Web Analytics is configured through Cloudflare Pages and does not require MARDE to add a separate third-party analytics script to this site.</p>
        <h2 className="mb-3 mt-10 text-[34px] text-[#102b39]">How we use information</h2>
        <p>We use submitted information to respond to messages, maintain the requested email updates, operate the website, and understand aggregate website use. We do not sell personal information.</p>
        <h2 className="mb-3 mt-10 text-[34px] text-[#102b39]">Changes and contact</h2>
        <p>We may update this policy as the site and its services evolve. Questions about this policy can be sent to <a className="font-bold text-[#102b39] underline underline-offset-3" href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </article>
    </>
  );
}
