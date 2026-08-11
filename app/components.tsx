import Link from "next/link";
import { nav, site } from "./content";

export { ContactForm, EmailSignup } from "./forms";

export function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      <i />
      <i />
      <i />
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
        <Link href="/" className="brand">
          <Mark /> <span>MARDE</span>
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
        <Link href="/privacy">Privacy Policy</Link>
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
