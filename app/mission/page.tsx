import type { Metadata } from "next";
import { DonateButton, Eyebrow, SplitTitle } from "../components";
import { pageMetadata } from "../metadata";
import { mission } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Mission",
  description: "Why MARDE is building for the gap before emergency help arrives.",
  path: "/mission",
  keywords: ["emergency response mission", "EMS response time", "first response systems"],
});

export default function MissionPage() {
  const { hero, story, statement, funding, regulatory } = mission;

  return (
    <div className="mission-page">
      <section className="page-hero mission-hero">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1>
          <SplitTitle lines={hero.title} italicIndex={1} />
        </h1>
        <p>{hero.body}</p>
      </section>

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

      <section className="section funding">
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
      </section>

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
