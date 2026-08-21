import type { Metadata } from "next";
import { Eyebrow } from "../components";
import { pageMetadata } from "../metadata";
import { site } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How MARDE handles information submitted through this website and its third-party services.",
  path: "/privacy",
  keywords: ["MARDE privacy policy", "website privacy"],
});

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero compact privacy-hero">
        <Eyebrow>Privacy</Eyebrow>
        <h1>Privacy Policy</h1>
        <p>How information is handled when you visit or contact MARDE through this website.</p>
      </section>

      <section className="section readable-section">
        <div className="policy-copy readable-content">
          <p className="policy-updated">Last updated: August 20, 2026</p>

          <h2>Information you choose to provide</h2>
          <p>
          MARDE may receive your name, email address, and message when you use the contact form. MARDE may also
          receive the email address you submit through the newsletter signup. These forms are processed by Formspree.
          </p>

        <h2>Donations and payments</h2>
        <p>
          Donation links take you to Stripe, which processes the transaction on its own service. MARDE&apos;s website
          does not directly collect or store your payment-card details. Stripe handles information according to its
          own privacy policy and terms.
        </p>

        <h2>Analytics and similar technologies</h2>
        <p>
          When a Google Analytics 4 measurement ID is configured, this website uses Google Analytics to understand
          aggregate site usage and selected interactions such as support, contact, signup, and Technology-page
          engagement. Google Analytics may use cookies or similar technologies under Google&apos;s policies. When no
          measurement ID is configured, the analytics script is not loaded.
        </p>
        <p>
          Campaign parameters in a URL may be stored in your browser&apos;s session storage for the current session and
          included with analytics events when analytics is configured. The site does not add those parameters to
          internal links.
        </p>

        <h2>Other third-party services</h2>
        <p>
          The site is hosted on GitHub Pages and loads typefaces from Google Fonts. Visiting linked services such as
          Instagram, Stripe, or Formspree may allow those providers to receive technical information such as your IP
          address and browser details under their own policies.
        </p>

        <h2>How information is used</h2>
        <p>
          MARDE uses voluntarily submitted information to respond to messages, provide requested updates, maintain
          the website, and manage communications you request. MARDE does not use this website to collect medical
          information.
        </p>

        <h2>Retention and your choices</h2>
        <p>
          Submitted information is kept only as long as reasonably needed for the purpose for which it was provided,
          operational records, and applicable legal obligations. You may ask about, correct, or request deletion of
          information you submitted by emailing <a href={`mailto:${site.email}`}>{site.email}</a>. Some records may
          need to be retained where required by law or for legitimate recordkeeping.
        </p>

        <h2>Policy updates</h2>
        <p>
          This policy may be updated as the website or the services it uses change. The latest version will be posted
          on this page with a revised date.
        </p>
        </div>
      </section>
    </>
  );
}
