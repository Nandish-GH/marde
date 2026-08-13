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
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const restoreMenuFocusRef = useRef(false);

  useEffect(() => {
    function updateScrollState() {
      setScrolled(window.scrollY > 12);
    }

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const computedPaddingRight = Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0;

    root.classList.add("mobile-menu-open");
    root.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${computedPaddingRight + scrollbarWidth}px`;
    window.dispatchEvent(new CustomEvent("marde:menu-state", { detail: { open: true } }));

    const focusTimer = window.setTimeout(() => {
      menuPanelRef.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();
    }, 80);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        restoreMenuFocusRef.current = true;
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const links = Array.from(menuPanelRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []);
      const focusable = [menuButtonRef.current, ...links].filter(
        (element): element is HTMLButtonElement | HTMLAnchorElement => Boolean(element?.offsetParent),
      );
      if (!focusable.length) return;

      const currentIndex = focusable.findIndex((element) => element === document.activeElement);
      if (currentIndex === -1) {
        event.preventDefault();
        focusable[0].focus();
        return;
      }

      if (event.shiftKey && currentIndex === 0) {
        event.preventDefault();
        focusable.at(-1)?.focus();
      } else if (!event.shiftKey && currentIndex === focusable.length - 1) {
        event.preventDefault();
        focusable[0].focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      root.classList.remove("mobile-menu-open");
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
      body.style.paddingRight = previousBodyPaddingRight;
      window.dispatchEvent(new CustomEvent("marde:menu-state", { detail: { open: false } }));
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen || !restoreMenuFocusRef.current) return;
    restoreMenuFocusRef.current = false;
    const focusFrame = window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    return () => window.cancelAnimationFrame(focusFrame);
  }, [menuOpen]);

  function closeMenu(restoreFocus: boolean) {
    restoreMenuFocusRef.current = restoreFocus;
    setMenuOpen(false);
  }

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}${menuOpen ? " has-open-menu" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="header-logo" aria-label="MARDE home">
          <span aria-hidden="true" />
        </Link>
        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-panel"
          aria-label={menuOpen ? "Close main navigation" : "Open main navigation"}
          onClick={() => (menuOpen ? closeMenu(true) : setMenuOpen(true))}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <button
          className={`mobile-nav-backdrop${menuOpen ? " is-open" : ""}`}
          type="button"
          tabIndex={-1}
          aria-label="Close main navigation"
          onClick={() => closeMenu(true)}
        />
        <div
          ref={menuPanelRef}
          id="mobile-navigation-panel"
          className={`mobile-nav-panel${menuOpen ? " is-open" : ""}`}
          role={menuOpen ? "dialog" : undefined}
          aria-modal={menuOpen ? true : undefined}
          aria-label={menuOpen ? "Main navigation" : undefined}
          data-lenis-prevent
        >
          <div className="mobile-nav-heading">
            <Link
              href="/"
              className="mobile-nav-home"
              aria-label="MARDE home"
              aria-current={pathname === "/" ? "page" : undefined}
              onClick={() => closeMenu(false)}
            >
              <span aria-hidden="true" />
            </Link>
            <small aria-hidden="true">MARDE / SITE INDEX</small>
          </div>
          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <div className="nav-links">
              {nav.map(([label, href], index) => {
                const current = pathname === href;
                const className = [
                  href === "/" ? "nav-home" : "",
                  href === "/support" ? "nav-support" : "",
                  current ? "nav-current" : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <Link
                    key={href}
                    href={href}
                    className={className || undefined}
                    aria-current={current ? "page" : undefined}
                    onClick={() => closeMenu(false)}
                  >
                    <span className="nav-rail-point" aria-hidden="true" />
                    <span className="nav-index" aria-hidden="true">{String(index).padStart(2, "0")}</span>
                    <span className="nav-label">{label}</span>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
