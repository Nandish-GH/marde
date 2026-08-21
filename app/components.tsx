import Link from "next/link";
import { nav, site } from "./content";

export { ContactForm, EmailSignup } from "./forms";

export function DonateButton({ className = "", label = "Support MARDE" }: { className?: string; label?: string }) {
  return (
    <a className={`button button-accent ${className}`} href={site.donateUrl} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`closing-socials ${className}`.trim()} aria-label="Follow MARDE on social media">
      <a className="social-link social-instagram" href={site.instagram} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="instagram-icon-gradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F77737" />
              <stop offset="0.52" stopColor="#E1306C" />
              <stop offset="1" stopColor="#833AB4" />
            </linearGradient>
          </defs>
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="url(#instagram-icon-gradient)" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4.1" fill="none" stroke="url(#instagram-icon-gradient)" strokeWidth="1.8" />
          <circle cx="17.4" cy="6.7" r="1.1" fill="#E1306C" />
        </svg>
        <span>Instagram</span>
      </a>
      <a className="social-link social-tiktok" href={site.tiktok} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path className="tiktok-echo tiktok-cyan" d="M14.5 4v10.2a4.6 4.6 0 1 1-3.2-4.4M14.5 4c.5 2.4 2 3.8 4.5 4.2" />
          <path className="tiktok-echo tiktok-pink" d="M14.5 4v10.2a4.6 4.6 0 1 1-3.2-4.4M14.5 4c.5 2.4 2 3.8 4.5 4.2" />
          <path className="tiktok-main" d="M14.5 4v10.2a4.6 4.6 0 1 1-3.2-4.4M14.5 4c.5 2.4 2 3.8 4.5 4.2" />
        </svg>
        <span>TikTok</span>
      </a>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <Link href="/" className="footer-logo" aria-label="MARDE home">
            <span aria-hidden="true" />
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
          <span className="footer-contact-links">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={site.tiktok} target="_blank" rel="noreferrer">TikTok</a>
          </span>
        </nav>
        <div className="footer-support">
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
