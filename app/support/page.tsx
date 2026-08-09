import type { Metadata } from "next";
import { ContactForm, DonateButton, EmailSignup, Eyebrow, SplitTitle } from "../components";
import { pageMetadata } from "../metadata";
import { site, support } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Support",
  description: "Support MARDE's early research and development.",
  path: "/support",
});

export default function SupportPage() {
  const { hero, donate, contact, follow, newsletter } = support;

  return (
    <>
      <section className="page-hero compact">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1>
          <SplitTitle lines={hero.title} italicIndex={1} />
        </h1>
        <p>{hero.body}</p>
        <DonateButton />
      </section>

      <section className="support-grid">
        <article>
          <Eyebrow>{donate.eyebrow}</Eyebrow>
          <h2>{donate.title}</h2>
          <p>{donate.body}</p>
          <DonateButton />
        </article>
        <article>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2>{contact.title}</h2>
          <p>{contact.body}</p>
          <ContactForm />
          <a className="text-link contact-email" href={`mailto:${site.email}`}>
            {site.email} ↗
          </a>
        </article>
        <article>
          <Eyebrow>{follow.eyebrow}</Eyebrow>
          <h2>{follow.title}</h2>
          <p>{follow.body}</p>
          <a className="text-link" href={site.instagram} target="_blank" rel="noreferrer">
            {site.instagramHandle} ↗
          </a>
        </article>
      </section>

      <section className="newsletter">
        <Eyebrow>{newsletter.eyebrow}</Eyebrow>
        <h2>{newsletter.title}</h2>
        <p>{newsletter.body}</p>
        <EmailSignup />
      </section>
    </>
  );
}
