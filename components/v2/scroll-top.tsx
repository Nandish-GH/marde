"use client";

import { useEffect, useRef } from "react";
import { ArrowUp } from "@phosphor-icons/react";
import s from "./scroll-top.module.css";

export function ScrollTop() {
  const control = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const update = () => { if (control.current) control.current.hidden = window.scrollY < 500; };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <a ref={control} hidden className={s.control} href="#main-content" aria-label="Scroll to top" onClick={() => {
    document.getElementById("main-content")?.focus({ preventScroll: true });
  }}><ArrowUp size={20} aria-hidden="true" /><span>Top</span></a>;
}
