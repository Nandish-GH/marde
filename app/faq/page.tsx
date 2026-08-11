import type { Metadata } from "next";
import { Eyebrow } from "../components";
import { pageMetadata } from "../metadata";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description: "Answers to common questions about MARDE and its first-response concepts in development.",
  path: "/faq",
  keywords: ["MARDE FAQ", "emergency response technology questions", "first response systems in development"],
});

const questions = [
  {
    question: "When will MARDE be flying?",
    answer: "MARDE Air is in design, and we do not have a public flight timeline. Future experimental development will depend on careful design work, testing preparation, and the applicable FAA pathway, including Part 47 registration and a Special Airworthiness Certificate in the Experimental Category (SAC-EC).",
  },
  {
    question: "How are donations used?",
    answer: "Early support goes toward R&D work such as component costs, testing preparation, and regulatory-readiness work. MARDE does not publish specific funding figures on this site.",
  },
  {
    question: "Is MARDE hiring or looking for volunteers?",
    answer: "MARDE is not currently announcing open roles or volunteer positions. If you would like to start a conversation, please use the Support page to contact the team.",
  },
  {
    question: "What stage is MARDE at?",
    answer: "MARDE is an incorporated Delaware C-Corporation. Its first-response concepts are in development and in design; MARDE does not yet have a working prototype, signed partnerships, or a closed funding round.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="page-hero compact">
        <Eyebrow>FAQ</Eyebrow>
        <h1>
          Clear answers,
          <br />
          <em>early on.</em>
        </h1>
        <p>What we are building, where the work stands, and how to stay connected.</p>
      </section>
      <section className="mx-auto max-w-[830px] px-6 py-10 md:px-0 md:py-16" aria-label="Frequently asked questions">
        {questions.map(({ question, answer }) => (
          <article className="border-b border-[#d4e0e1] py-8" key={question}>
            <h2 className="mb-4 text-[clamp(30px,3.5vw,45px)] text-[#102b39]">{question}</h2>
            <p className="max-w-[690px] text-[16px] text-[#5d717b]">{answer}</p>
          </article>
        ))}
      </section>
    </>
  );
}
