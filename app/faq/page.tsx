import { faqs as questions } from "../../lib/content/v2";
import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "../accordion";
import { pageMetadata } from "../metadata";
import { Section } from "../../components/layout";
import { PageHero } from "../page-hero";

export const metadata: Metadata = pageMetadata({
  title: "MARDE FAQ | Emergency Response Robotics",
  description: "Answers about MARDE's emergency-response robotics platform, technology, development stage, operations, and planned Air, Ground, Nexus, and intervention systems.",
  path: "/faq",
});



export default function FaqPage() {
  return (
    <div className="accordion-page">
      <PageHero
        eyebrow="Frequently asked questions"
        title={["Clear answers.", "No invented timelines."]}
        body="What MARDE is working toward, where the work stands, and how to learn more."
        italicIndex={1}
        compact
        className="faq-hero"
      />

      <Section className="readable-section">
        <div className="faq-list readable-content">
          <Accordion items={questions} variant="page" defaultOpen="all" />
          <p className="faq-contact">
            Have another question? <Link className="text-link" href="/support/">Support details</Link>
          </p>
        </div>
      </Section>
    </div>
  );
}
