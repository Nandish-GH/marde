"use client";

import { useEffect, useState } from "react";

type LoadingPhase = "visible" | "exiting" | "hidden";

export function LoadingOverlay() {
  const [phase, setPhase] = useState<LoadingPhase>("visible");

  useEffect(() => {
    const startedAt = performance.now();
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    function beginExit() {
      const minimumHold = 420;
      const remaining = Math.max(0, minimumHold - (performance.now() - startedAt));
      exitTimer = setTimeout(() => {
        setPhase("exiting");
        hideTimer = setTimeout(() => setPhase("hidden"), 380);
      }, remaining);
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", beginExit, { once: true });
    } else {
      beginExit();
    }

    const hardStop = setTimeout(() => setPhase("hidden"), 1100);

    return () => {
      document.removeEventListener("DOMContentLoaded", beginExit);
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
        <p>MARDE</p>
        <i />
      </div>
    </div>
  );
}
