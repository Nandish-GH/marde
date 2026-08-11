"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "./content";

function normalizePathname(pathname: string) {
  if (pathname === "/") return pathname;
  return pathname.replace(/\/$/, "");
}

export function Header() {
  const pathname = normalizePathname(usePathname());
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="header-logo" aria-label="MARDE home">
          <span aria-hidden="true" />
        </Link>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? "Close main navigation" : "Open main navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav id="main-navigation" className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
          {nav.map(([label, href]) => {
            const current = pathname === href;
            const className = [href === "/support" ? "nav-support" : "", current ? "nav-current" : ""]
              .filter(Boolean)
              .join(" ");

            return (
              <Link
                key={href}
                href={href}
                className={className || undefined}
                aria-current={current ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
