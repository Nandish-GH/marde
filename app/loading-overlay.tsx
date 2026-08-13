"use client";

import { useEffect, useState } from "react";

type LoadingPhase = "visible" | "dark" | "exiting" | "hidden";

export function LoadingOverlay() {
  const [phase, setPhase] = useState<LoadingPhase>("visible");

  useEffect(() => {
    if (phase !== "hidden") return;

    const root = document.documentElement;
    if (root.classList.contains("marde-intro-complete")) return;

    root.classList.add("marde-intro-complete");
    window.dispatchEvent(new Event("marde:intro-complete"));
  }, [phase]);

  useEffect(() => {
    const startedAt = performance.now();
    let darkTimer: ReturnType<typeof setTimeout> | undefined;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    function beginSequence() {
      const elapsed = performance.now() - startedAt;
      darkTimer = setTimeout(() => setPhase("dark"), Math.max(0, 650 - elapsed));
      exitTimer = setTimeout(() => {
        setPhase("exiting");
        hideTimer = setTimeout(() => setPhase("hidden"), 640);
      }, Math.max(0, 1020 - elapsed));
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", beginSequence, { once: true });
    } else {
      beginSequence();
    }

    const hardStop = setTimeout(() => setPhase("hidden"), 1980);

    return () => {
      document.removeEventListener("DOMContentLoaded", beginSequence);
      clearTimeout(darkTimer);
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
      clearTimeout(hardStop);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div className="loading-overlay" data-phase={phase} aria-hidden="true">
      <div className="loading-mark">
        <span className="loading-logo" />
        <p>Response starts before arrival</p>
        <i />
      </div>
    </div>
  );
}
