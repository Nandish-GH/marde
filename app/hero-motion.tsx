"use client";

import { createTimeline, stagger } from "animejs";
import { useEffect, useRef } from "react";

export function HeroMotion() {
  const started = useRef(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-response-hero]");
    if (!hero || started.current) return;

    const animations: Array<{ revert: () => unknown }> = [];
    let removeVisibility = () => {};

    function begin() {
      if (started.current) return;
      started.current = true;
      hero?.classList.add("anime-hero-ready");

      const eyebrow = hero?.querySelector(".hero-copy > .eyebrow") ?? [];
      const words = hero?.querySelectorAll(".hero-word") ?? [];
      const summary = hero?.querySelector(".hero-summary") ?? [];
      const actions = hero?.querySelector(".hero-copy > .actions") ?? [];
      const signalItems = hero?.querySelectorAll(".hero-signals article") ?? [];
      const lightElements = hero?.querySelectorAll(".visual-layer-light > span") ?? [];
      const corridorPlanes = hero?.querySelectorAll(":where(.corridor-plane, .cropped-aperture)") ?? [];
      const corridorEdges = hero?.querySelectorAll(".corridor-edge") ?? [];
      const contourElements = hero?.querySelectorAll(":where(.contour-field, .distance-rule)") ?? [];
      const registrationElements = hero?.querySelectorAll(".visual-layer-registration > span") ?? [];

      const intro = createTimeline({ defaults: { ease: "out(4)" } })
        .add(eyebrow, { opacity: [0, 1], y: [9, 0], duration: 340 }, 0)
        .add(words, { opacity: [0, 1], y: [42, 0], duration: 640, delay: stagger(52) }, 65)
        .add(summary, { opacity: [0, 1], y: [15, 0], duration: 440 }, 235)
        .add(actions, { opacity: [0, 1], y: [13, 0], duration: 430 }, 315)
        .add(signalItems, { opacity: [0, 1], y: [10, 0], duration: 430, delay: stagger(48) }, 405)
        .add(lightElements, { opacity: [0, 1], duration: 620, delay: stagger(45) }, 150)
        .add(corridorPlanes, { opacity: [0, 1], x: [34, 0], duration: 720, delay: stagger(55) }, 255)
        .add(corridorEdges, { opacity: [0, 1], scaleX: [0, 1], duration: 590, delay: stagger(70) }, 330)
        .add(contourElements, { opacity: [0, 1], y: [12, 0], duration: 560, delay: stagger(45) }, 365)
        .add(registrationElements, { opacity: [0, 1], scaleX: [0, 1], duration: 460, delay: stagger(70) }, 445);
      animations.push(intro);

      const handleVisibility = () => {
        animations.forEach((animation) => document.hidden ? (animation as { pause?: () => void }).pause?.() : (animation as { play?: () => void }).play?.());
      };
      document.addEventListener("visibilitychange", handleVisibility);
      removeVisibility = () => document.removeEventListener("visibilitychange", handleVisibility);
    }

    if (document.documentElement.classList.contains("marde-intro-complete")) {
      begin();
    } else {
      window.addEventListener("marde:intro-complete", begin, { once: true });
    }

    return () => {
      window.removeEventListener("marde:intro-complete", begin);
      removeVisibility();
      animations.forEach((animation) => animation.revert());
      hero.classList.remove("anime-hero-ready");
      started.current = false;
    };
  }, []);

  return null;
}
