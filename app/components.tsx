import Link from "next/link";
import { nav, site } from "./content";

export function Mark() {
  return (
    <span className="mark brand-mark relative inline-block overflow-hidden rounded-sm">
      <img
        src="/brand/marde-drone-logo.png"
        alt="Drone carrying a medical payload"
        className="absolute left-1/2 top-1/2 h-[230%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </span>
  );
}

export function DonateButton({ className = "", label = "Support Our R&D" }: { className?: string; label?: string }) {
  return (
    <a className={`button button-primary ${className}`} href={site.donateUrl} target="_blank" rel="noreferrer">
      {label} <span aria-hidden="true">↗</span>
    </a>
  );
}

export function Header() {
  return (
    <header className="header">
      <Link href="/" className="brand">
        <Mark /> <span>MARDE</span>
      </Link>
      <nav aria-label="Main navigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href} className={href === "/support" ? "nav-support" : undefined}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link href="/" className="block w-fit">
          <span className="relative block h-14 w-40 overflow-hidden">
            <img
              src="/brand/marde-wordmark.png"
              alt="MARDE wordmark with a drone carrying a medical payload"
              className="absolute left-1/2 top-1/2 h-[550%] max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
            />
          </span>
        </Link>
        <p>Response starts before arrival.</p>
      </div>
      <div className="footer-links">
        {nav.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
        <Link href="/faq">FAQ</Link>
        <Link href="/privacy">Privacy</Link>
        <a href={site.instagram} target="_blank" rel="noreferrer">
          Instagram ↗
        </a>
      </div>
      <div>
        <DonateButton />
        <p className="copyright">© {new Date().getFullYear()} MARDE, Inc.</p>
      </div>
    </footer>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}

export function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

export function EmailSignup({ compact = false }: { compact?: boolean }) {
  return (
    <form className={`signup-form ${compact ? "compact" : ""}`} action="/api/subscribe" method="POST">
      <label className="sr-only" htmlFor="newsletter-email">Email</label>
      <input id="newsletter-email" type="email" name="email" placeholder="you@example.com" required autoComplete="email" />
      <button type="submit" className="button button-primary">Follow our progress</button>
      <p className="mt-1 w-full text-[11px] text-[#5d717b]">By signing up, you agree to our <Link className="underline underline-offset-2" href="/privacy">Privacy Policy</Link>.</p>
    </form>
  );
}

export function ContactForm() {
  if (!site.formspreeContact) {
    return (
      <a className="text-link" href={`mailto:${site.email}`}>
        {site.email} ↗
      </a>
    );
  }

  return (
    <form className="contact-form" action={`https://formspree.io/f/${site.formspreeContact}`} method="POST">
      <label htmlFor="contact-name">Name</label>
      <input id="contact-name" type="text" name="name" required autoComplete="name" />
      <label htmlFor="contact-email">Email</label>
      <input id="contact-email" type="email" name="email" required autoComplete="email" />
      <label htmlFor="contact-message">Message</label>
      <textarea id="contact-message" name="message" rows={4} required />
      <button type="submit" className="button button-primary">Send message</button>
    </form>
  );
}

export function SplitTitle({ lines, italicIndex }: { lines: string[]; italicIndex?: number }) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={line}>
          {index > 0 && <br />}
          {index === italicIndex ? <em>{line}</em> : line}
        </span>
      ))}
    </>
  );
}
