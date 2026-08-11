import Link from "next/link";
import { Arrow, DonateButton, EmailSignup, Eyebrow, SplitTitle } from "./components";
import { home, statistics, team } from "./content";

export default function Home() {
  const { hero, problem, solution, teamTeaser, closing } = home;

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1>
            {hero.headline[0]}
            <br />
            <em>{hero.headline[1]}</em> {hero.headline[2]}
          </h1>
          <p>{hero.subhead}</p>
          <div className="actions">
            <DonateButton label={hero.primaryCta} />
            <Link className="button button-quiet" href={hero.secondaryHref}>
              {hero.secondaryCta} <Arrow />
            </Link>
          </div>
        </div>
        <div className="hero-graphic" aria-label="Abstract technical diagram">
          <div className="orb" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="cross x1">+</div>
          <div className="cross x2">+</div>
          <p>
            01 / FIRST RESPONSE
            <br />
            SYSTEMS IN DESIGN
          </p>
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
              <strong>{stat.value}</strong>
              <p>{stat.label}</p>
              <a href={stat.href} target="_blank" rel="noreferrer">
                Source: {stat.source} ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section solution">
        <div className="section-heading">
          <Eyebrow>{solution.eyebrow}</Eyebrow>
          <h2>
            <SplitTitle lines={solution.title} />
          </h2>
        </div>
        <div className="system-grid">
          <Link href="/technology" className="system-card air">
            <div className="card-code">{solution.air.code}</div>
            <div className="drone-line" />
            <h3>{solution.air.name}</h3>
            <p>{solution.air.body}</p>
            <span>
              {solution.air.link} <Arrow />
            </span>
          </Link>
          <Link href="/technology" className="system-card ground">
            <div className="card-code">{solution.ground.code}</div>
            <div className="rover-line" />
            <h3>{solution.ground.name}</h3>
            <p>{solution.ground.body}</p>
            <span>
              {solution.ground.link} <Arrow />
            </span>
          </Link>
        </div>
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
            <div key={member.name}>
              <b>{member.initials}</b>
              <span>
                {member.name}
                <small>{member.title}</small>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="closing">
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
          <DonateButton />
        </div>
      </section>
    </>
  );
}
