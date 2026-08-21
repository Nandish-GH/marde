import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Eyebrow, SplitTitle } from "../components";
import { pageMetadata } from "../metadata";
import { technology } from "../content";
import { NexusArchitecture } from "../nexus-architecture";

export const metadata: Metadata = pageMetadata({
  title: "Technology",
  description: "MARDE's early-stage platform brings together Air, Ground, intervention modules, and human-in-the-loop Nexus coordination.",
  path: "/technology",
  keywords: ["emergency response robotics", "human-in-the-loop coordination", "aerial response concept", "ground robot concept"],
});

export default function TechnologyPage() {
  const { hero, air, ground, nexus, phases, roadmap, regulatory } = technology;

  return (
    <div className="technology-page">
      <section className="page-hero technology-hero">
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1>
          <SplitTitle lines={hero.title} italicIndex={1} />
        </h1>
        <p>{hero.body}</p>
        <Link className="text-link page-inline-link" href="/mission">Why we&apos;re building this</Link>
      </section>

      <section className="tech-block air-block" id="air">
        <div className="tech-visual tech-air-visual">
          <span>01</span>
          <div className="tech-illustration air-poster">
            <Image
              src="/illustrations/marde-air-concept.svg"
              alt="MARDE Air aerial system design concept"
              width="800"
              height="520"
            />
            <span className="poster-registration" aria-hidden="true" />
          </div>
          <p>
            MARDE AIR
            <br />
            CONCEPTUAL SYSTEM
          </p>
        </div>
        <div className="tech-copy">
          <Eyebrow>
            <span className="system-name-inline">
              <strong>MARDE</strong> <em>Air</em>
            </span>
          </Eyebrow>
          <h2>{air.title}</h2>
          <p>{air.body}</p>
          <div className="status">
            Status <b>{air.status}</b>
          </div>
          <p className="detail">{air.regulatory}</p>
        </div>
      </section>

      <section className="tech-block ground-block" id="ground">
        <div className="tech-copy">
          <Eyebrow>
            <span className="system-name-inline">
              <strong>MARDE</strong> <em>Ground</em>
            </span>
          </Eyebrow>
          <h2>
            <SplitTitle lines={ground.title} italicIndex={1} />
          </h2>
          <p>{ground.body}</p>
          <div className="status">
            Status <b>{ground.status}</b>
          </div>
          <p className="detail">{ground.detail}</p>
        </div>
        <div className="tech-visual ground-visual">
          <span>02</span>
          <div className="tech-illustration ground-poster">
            <Image
              src="/illustrations/marde-ground-concept.svg"
              alt="MARDE Ground robotic ground system design concept"
              width="800"
              height="520"
            />
            <span className="poster-registration" aria-hidden="true" />
          </div>
          <p>
            MARDE GROUND
            <br />
            MODULAR CONCEPT
          </p>
        </div>
      </section>

      <section className="tech-block nexus-tech-block" id="nexus" aria-labelledby="nexus-title">
        <div className="nexus-tech-intro tech-copy">
          <Eyebrow>
            <span className="system-name-inline">
              <strong>MARDE</strong> <em>Nexus</em>
            </span>
          </Eyebrow>
          <h2 id="nexus-title">
            <SplitTitle lines={nexus.title} italicIndex={1} />
          </h2>
          <p>{nexus.intro}</p>
          <p>{nexus.workflow}</p>
          <p className="nexus-authority-copy">{nexus.authority}</p>
        </div>

        <div className="tech-visual nexus-tech-visual">
          <span>03</span>
          <NexusArchitecture />
          <p>
            MARDE NEXUS
            <br />
            COORDINATION CONCEPT
          </p>
        </div>

        <div className="nexus-capabilities" aria-label="Proposed MARDE Nexus capabilities">
          <div className="nexus-capabilities-heading">
            <p className="eyebrow"><span />Proposed workflow</p>
            <h3>Information moves faster.<br /><em>People retain authority.</em></h3>
          </div>
          <ol>
            {nexus.capabilities.map(([code, label, body]) => (
              <li key={code}>
                <span>{code}</span>
                <div>
                  <h4>{label}</h4>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
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
            <article key={code} tabIndex={0}>
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
    </div>
  );
}
