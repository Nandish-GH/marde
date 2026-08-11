import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, SplitTitle } from "../components";
import { pageMetadata } from "../metadata";
import { technology } from "../content";

export const metadata: Metadata = pageMetadata({
  title: "Technology",
  description: "MARDE Air and MARDE Ground are first-response concepts in design.",
  path: "/technology",
  keywords: ["emergency response robotics", "autonomous aerial response", "ground robot concept"],
});

export default function TechnologyPage() {
  const { hero, air, ground, phases, roadmap, regulatory } = technology;

  return (
    <>
      <section className="page-hero">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1>
          <SplitTitle lines={hero.title} italicIndex={1} />
        </h1>
        <p>{hero.body}</p>
      </section>

      <section className="tech-block air-block">
        <div className="tech-visual" role="img" aria-label="Abstract diagram of the MARDE Air concept, currently in design">
          <span aria-hidden="true">01</span>
          <div className="tech-drone" aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </div>
          <p>
            MARDE AIR
            <br />
            CONCEPTUAL SYSTEM
          </p>
        </div>
        <div className="tech-copy">
          <Eyebrow>{air.eyebrow}</Eyebrow>
          <h2>{air.title}</h2>
          <p>{air.body}</p>
          <div className="status">
            Status <b>{air.status}</b>
          </div>
          <p className="detail">{air.regulatory}</p>
          <p className="detail mt-[-8px]"><Link className="text-link" href="/mission">Why we&apos;re building this <span aria-hidden="true">↗</span></Link></p>
        </div>
      </section>

      <section className="tech-block ground-block">
        <div className="tech-copy">
          <Eyebrow>{ground.eyebrow}</Eyebrow>
          <h2>
            <SplitTitle lines={ground.title} italicIndex={1} />
          </h2>
          <p>{ground.body}</p>
          <div className="status">
            Status <b>{ground.status}</b>
          </div>
          <p className="detail">{ground.detail}</p>
        </div>
        <div className="tech-visual ground-visual" role="img" aria-label="Abstract diagram of the MARDE Ground modular concept, currently in design">
          <span aria-hidden="true">02</span>
          <div className="tech-rover" aria-hidden="true">
            <i />
            <i />
          </div>
          <p>
            MARDE GROUND
            <br />
            MODULAR CONCEPT
          </p>
        </div>
      </section>

      <section className="section roadmap">
        <div>
          <Eyebrow>{roadmap.eyebrow}</Eyebrow>
          <h2>
            <SplitTitle lines={roadmap.title} italicIndex={1} />
          </h2>
          <p>{roadmap.body}</p>
        </div>
        <div className="phase-list">
          {phases.map(([code, title, text]) => (
            <article key={code}>
              <b>{code}</b>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="regulatory">
        <Eyebrow>{regulatory.eyebrow}</Eyebrow>
        <h2>
          <SplitTitle lines={regulatory.title} italicIndex={1} />
        </h2>
        <div>
          <p>
            <b>FAA</b> {regulatory.faa}
          </p>
          <p>
            <b>FDA</b> {regulatory.fda}
          </p>
        </div>
      </section>
    </>
  );
}
