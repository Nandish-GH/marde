import Link from "next/link";
import Image from "next/image";
import { Accordion } from "./accordion";
import { Arrow, DonateButton, EmailSignup, Eyebrow, SocialLinks, SplitTitle } from "./components";
import { home, statistics, team } from "./content";
import { HeroMotion } from "./hero-motion";
import { HeroVisual } from "./hero-visual";
import { HomeScrollMotion } from "./home-scroll-motion";
import { HomepageNexusPreview } from "./homepage-nexus-preview";

const homeFaqs = [
  {
    question: "What is MARDE?",
    answer:
      "MARDE is developing autonomous first-response systems intended to help close the gap between an emergency and the arrival of professional help.",
  },
  {
    question: "Is MARDE currently operational?",
    answer:
      "No. MARDE Air and MARDE Ground are early-stage concepts in design. Neither system is a finished, tested, or deployed product.",
  },
  {
    question: "What are MARDE Air and MARDE Ground?",
    answer:
      "MARDE Air is an aerial first-response concept; MARDE Ground is a modular autonomous ground-robot concept. Both are intended to complement, not replace, professional emergency response.",
  },
  {
    question: "How can I support MARDE?",
    answer:
      "You can support early R&D through a donation, follow project updates, or contact the team through the Support page.",
  },
] as const;

export default function Home() {
  const { hero, problem, solution, process: processStory, teamTeaser, closing } = home;

  return (
    <>
      <section className="hero" data-response-hero>
        <HeroMotion />
        <HomeScrollMotion />
        <div className="hero-copy">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1>
            <span className="hero-line"><span className="hero-word">{hero.headline[0]}</span></span>
            <br />
            <span className="hero-line"><em className="hero-word">{hero.headline[1]}</em> <span className="hero-word">{hero.headline[2]}</span></span>
          </h1>
          <p className="hero-summary">{hero.subhead}</p>
          <div className="actions">
            <Link className="button button-accent button-primary" href="/support/">
              {hero.primaryCta}
            </Link>
            <Link className="button button-quiet" href={hero.secondaryHref}>
              {hero.secondaryCta} <Arrow />
            </Link>
          </div>
          <div className="hero-signals" aria-label="MARDE priorities">
            <article>
              <span className="signal-icon signal-clock" aria-hidden="true" />
              <div>
                <strong>Minutes Matter</strong>
                <p>Act in the critical early window.</p>
              </div>
            </article>
            <article>
              <span className="signal-icon signal-response" aria-hidden="true">+</span>
              <div>
                <strong>Autonomous First Response</strong>
                <p>Designed to deliver emergency capability before traditional responders arrive.</p>
              </div>
            </article>
            <article>
              <span className="signal-icon signal-reliable" aria-hidden="true">✓</span>
              <div>
                <strong>Built for Real-World Reliability</strong>
                <p>Safe, secure, and designed for emergency operations.</p>
              </div>
            </article>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="section solution">
        <div className="section-heading">
          <Eyebrow>{solution.eyebrow}</Eyebrow>
          <h2>
            <SplitTitle lines={solution.title} />
          </h2>
        </div>
        <div className="system-grid">
          <Link href="/technology/#air" className="system-card air">
            <div className="card-code">{solution.air.code}</div>
            <div className="system-poster air-poster">
              <Image
                src="/illustrations/marde-air-concept.svg"
                alt="MARDE Air aerial system design concept"
                width="800"
                height="520"
              />
              <span className="poster-registration" aria-hidden="true" />
            </div>
            <h3 className="system-name">
              <span>MARDE</span> <em>Air</em>
            </h3>
            <p>{solution.air.body}</p>
            <span className="system-card-cta">
              {solution.air.link} <Arrow />
            </span>
          </Link>
          <Link href="/technology/#ground" className="system-card ground">
            <div className="card-code">{solution.ground.code}</div>
            <div className="system-poster ground-poster">
              <Image
                src="/illustrations/marde-ground-concept.svg"
                alt="MARDE Ground robotic ground system design concept"
                width="800"
                height="520"
              />
              <span className="poster-registration" aria-hidden="true" />
            </div>
            <h3 className="system-name">
              <span>MARDE</span> <em>Ground</em>
            </h3>
            <p>{solution.ground.body}</p>
            <span className="system-card-cta">
              {solution.ground.link} <Arrow />
            </span>
          </Link>
          <article className="system-card nexus-card home-nexus" id="home-nexus">
            <div className="nexus-card-copy">
              <p className="card-code">{solution.nexus.code.replace("MARDE ", "")}</p>
              <div className="system-name nexus-card-name" aria-label={solution.nexus.name}>
                <span>MARDE</span> <em>Nexus</em>
              </div>
              <h3>
                <span>{solution.nexus.title[0]}</span>
                <br />
                <em>{solution.nexus.title[1]}</em>
              </h3>
              <p>{solution.nexus.body}</p>
              <Link className="system-card-cta" href="/technology/#nexus">
                {solution.nexus.link} <Arrow />
              </Link>
            </div>
            <HomepageNexusPreview />
          </article>
        </div>
      </section>

      <section className="section stat-section">
        <div className="section-intro">
          <Eyebrow>{problem.eyebrow}</Eyebrow>
          <h2>
            <SplitTitle lines={problem.title} />
          </h2>
          <p>{problem.body}</p>
        </div>
        <div className="stats">
          {statistics.map((stat) => (
            <article className="stat" key={stat.value}>
              <strong>
                <span className="sr-only">{stat.value}</span>
                <span aria-hidden="true" data-count-up={stat.value}>
                  {stat.value}
                </span>
              </strong>
              <p>{stat.label}</p>
              <a href={stat.href} target="_blank" rel="noreferrer">
                Source: {stat.source}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-story" aria-labelledby="process-story-title">
        <div className="process-intro">
          <Eyebrow>{processStory.eyebrow}</Eyebrow>
          <h2 id="process-story-title">{processStory.title}</h2>
          <p>{processStory.body}</p>
          <span className="process-intro-rule" aria-hidden="true" />
        </div>
        <ol className="process-flow">
          <li className="process-progress-rail" aria-hidden="true" />
          {processStory.steps.map((step) => (
            <li className="process-step" key={step.code} tabIndex={0}>
              <span className="process-number">{step.code}</span>
              <div className="process-step-copy">
                <p className="process-code">{step.code} / RESPONSE PATH</p>
                <h3>{step.label}</h3>
                <p>{step.body}</p>
              </div>
              <span className="process-marker" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>

      <section className="section team-teaser">
        <div>
          <Eyebrow>{teamTeaser.eyebrow}</Eyebrow>
          <h2>
            <SplitTitle lines={teamTeaser.title} />
          </h2>
          <Link href="/team" className="text-link">
            {teamTeaser.link} <Arrow />
          </Link>
        </div>
        <div className="initials">
          {team.slice(0, 5).map((member) => (
            <article className="team-profile" key={member.name} tabIndex={0}>
              <b aria-hidden="true">{member.initials}</b>
              <span>
                {member.name}
                <small>{member.title}</small>
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section home-faq">
        <div className="section-heading home-faq-heading">
          <Eyebrow>Frequently asked questions</Eyebrow>
          <h2>Questions, answered.</h2>
          <Link href="/faq" className="text-link">
            Read all FAQs <Arrow />
          </Link>
        </div>
        <Accordion items={homeFaqs} variant="home" className="home-faq-list" defaultOpen={[0]} single />
      </section>

      <section className="closing">
        <div className="closing-geometry" aria-hidden="true">
          <span className="closing-orbit closing-orbit-one" />
          <span className="closing-orbit closing-orbit-two" />
          <span className="closing-node closing-node-one" />
          <span className="closing-node closing-node-two" />
          <span className="closing-node closing-node-three" />
        </div>
        <div className="closing-content">
          <Eyebrow>{closing.eyebrow}</Eyebrow>
          <h2>
            Help us build the
            <br />
            <em>next first response.</em>
          </h2>
          <p>{closing.body}</p>
          <Link href="/faq" className="text-link closing-faq">
            Read frequently asked questions <Arrow />
          </Link>
          <div className="closing-actions">
            <EmailSignup compact />
            <DonateButton label={"Contribute to R&D"} />
          </div>
          <SocialLinks />
        </div>
      </section>
    </>
  );
}
