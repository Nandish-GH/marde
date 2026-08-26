"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "radix-ui";
import { useEffect, useState } from "react";
import { nav } from "../lib/site-config";
import { cn } from "../lib/utils";

function normalizePathname(pathname: string) {
  return pathname === "/" ? pathname : pathname.replace(/\/$/, "");
}

function NavigationLinks({ pathname, close }: { pathname: string; close?: () => void }) {
  return nav.map(([label, href], index) => {
    const current = pathname === href;
    return (
      <Link
        key={href}
        href={href}
        className={cn(href === "/" && "nav-home", href === "/support" && "nav-support", current && "nav-current")}
        aria-current={current ? "page" : undefined}
        onClick={close}
      >
        <span className="nav-rail-point" aria-hidden="true" />
        <span className="nav-index" aria-hidden="true">{String(index).padStart(2, "0")}</span>
        <span className="nav-label">{label}</span>
      </Link>
    );
  });
}

export function Header() {
  const pathname = normalizePathname(usePathname());
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("mobile-menu-open", menuOpen);
    window.dispatchEvent(new CustomEvent("marde:menu-state", { detail: { open: menuOpen } }));
    return () => document.documentElement.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  return (
    <header className={cn("header", scrolled && "is-scrolled", menuOpen && "has-open-menu")}>
      <div className="header-inner">
        <Link href="/" className="header-logo" aria-label="MARDE home"><span aria-hidden="true" /></Link>
        <nav className="main-nav desktop-nav" aria-label="Main navigation">
          <div className="nav-links"><NavigationLinks pathname={pathname} /></div>
        </nav>
        <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
          <Dialog.Trigger asChild>
            <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close main navigation" : "Open main navigation"}>
              <span aria-hidden="true" /><span aria-hidden="true" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="mobile-nav-backdrop is-open" />
            <Dialog.Content id="mobile-navigation-panel" className="mobile-nav-panel is-open" aria-describedby={undefined} data-lenis-prevent>
              <Dialog.Title className="sr-only">Main navigation</Dialog.Title>
              <div className="mobile-nav-heading">
                <Link href="/" className="mobile-nav-home" aria-label="MARDE home" onClick={() => setMenuOpen(false)}><span aria-hidden="true" /></Link>
                <small aria-hidden="true">MARDE / SITE INDEX</small>
                <Dialog.Close asChild><button className="mobile-nav-close" type="button" aria-label="Close main navigation">×</button></Dialog.Close>
              </div>
              <nav className="main-nav mobile-main-nav is-open" aria-label="Main navigation">
                <div className="nav-links"><NavigationLinks pathname={pathname} close={() => setMenuOpen(false)} /></div>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
