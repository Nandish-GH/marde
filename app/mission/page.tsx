import type { Metadata } from "next";
import { DonateButton, Eyebrow, SplitTitle } from "../components";
import { pageMetadata } from "../metadata";
import { mission } from "../content";
import { Section } from "../../components/layout";
import { PageHero } from "../page-hero";

export const metadata: Metadata = pageMetadata({
  title: "MARDE Mission | Building Faster Robotic Emergency Response",
  description: "Learn why MARDE is developing robotic emergency-response systems intended to reduce the gap between emergency dispatch and useful action at the scene.",
  path: "/mission",
});

export default function MissionPage() {
  const { hero, story, statement, funding, regulatory } = mission;

  return (
    <div className="mission-page">
      <PageHero eyebrow={hero.eyebrow} title={hero.title} body={hero.body} italicIndex={1} className="mission-hero" />

      <section className="story">
        <div>
          <Eyebrow>{story.eyebrow}</Eyebrow>
          <h2>
            <SplitTitle lines={story.title} italicIndex={1} />
          </h2>
        </div>
        <div>
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="mission-statement">
        <Eyebrow>{statement.eyebrow}</Eyebrow>
        <h2>{statement.body}</h2>
      </section>

      <Section className="funding">
        <div>
          <Eyebrow>{funding.eyebrow}</Eyebrow>
          <h2>
            <SplitTitle lines={funding.title} italicIndex={1} />
          </h2>
        </div>
        <div className="fund-list">
          {funding.items.map(([label, text]) => (
            <p key={label}>
              <b>{label}</b> {text}
            </p>
          ))}
          <DonateButton />
        </div>
      </Section>

      <section className="regulatory small">
        <Eyebrow>{regulatory.eyebrow}</Eyebrow>
        <h2>
          <SplitTitle lines={regulatory.title} italicIndex={1} />
        </h2>
        <p>{regulatory.body}</p>
      </section>
    </div>
  );
}
