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

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link href="/" className="brand">
            <Mark /> <span>MARDE</span>
          </Link>
          <p>Response starts before arrival.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
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
        </nav>
        <div className="footer-support">
          <DonateButton />
          <p className="copyright">© {new Date().getFullYear()} MARDE, Inc.</p>
        </div>
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
