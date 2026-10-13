"use client";

import { useEffect, useRef } from "react";
import { ArrowUp } from "@phosphor-icons/react";
import s from "./scroll-top.module.css";

export function ScrollTop() {
  const control = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const update = () => {
      const link = control.current;
      if (!link) return;
      const visible = window.scrollY >= 500;
      if (link.dataset.visible === String(visible)) return;
      link.dataset.visible = String(visible);
      link.setAttribute("aria-hidden", String(!visible));
      link.tabIndex = visible ? 0 : -1;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <a ref={control} data-visible="false" aria-hidden="true" tabIndex={-1} className={s.control} href="#main-content" aria-label="Scroll to top" onClick={() => {
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }}><ArrowUp size={20} weight="light" aria-hidden="true" /><span>Top</span></a>;
}
