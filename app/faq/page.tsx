import type { Metadata } from "next";
import Link from "next/link";
import { Accordion } from "../accordion";
import { Eyebrow, SplitTitle } from "../components";
import { pageMetadata } from "../metadata";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description: "Answers about MARDE's development stage, donations, timeline, and ways to get involved.",
  path: "/faq",
  keywords: ["MARDE FAQ", "MARDE development", "first-response technology questions"],
});

const questions = [
  {
    question: "When will MARDE be flying?",
    answer:
      "MARDE Air is in development and no deployment or flight timeline has been announced. Any future experimental development and operation will depend on design progress, safety work, testing, and the applicable aviation approvals.",
  },
  {
    question: "How are donations used?",
    answer:
      "Early support helps advance research and development, including components, testing preparation, and regulatory-readiness work. MARDE does not publish a specific funding target on this website.",
  },
  {
    question: "Is MARDE hiring or looking for volunteers?",
    answer:
      "MARDE does not list formal job or volunteer openings on this website. If you would like to introduce yourself or ask about ways to help, please contact the team through the Support page.",
  },
  {
    question: "What stage is MARDE at?",
    answer:
      "MARDE is pre-seed, pre-prototype, and pre-revenue. Air, Ground, Nexus, and intervention modules are early-stage concepts under development, not finished or deployed products.",
  },
] as const;

export default function FaqPage() {
  return (
    <div className="accordion-page">
      <section className="page-hero compact faq-hero">
        <Eyebrow>Frequently asked questions</Eyebrow>
        <h1>
          <SplitTitle lines={["Clear answers.", "No invented timelines."]} italicIndex={1} />
        </h1>
        <p>What MARDE is working toward, where the work stands, and how to learn more.</p>
      </section>

      <section className="section readable-section">
        <div className="faq-list readable-content">
          <Accordion items={questions} variant="page" defaultOpen="all" />
          <p className="faq-contact">
            Have another question? <Link className="text-link" href="/support">Support details</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
