"use client";

import { createTimeline, stagger } from "animejs";
import { useEffect } from "react";

type Seekable = {
  duration: number;
  revert: () => unknown;
  seek: (time: number, muteCallbacks?: boolean) => unknown;
};

export function NexusMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const section = document.querySelector<HTMLElement>(".nexus-tech-block");
    const story = section?.querySelector<HTMLElement>("[data-nexus-story]");
    if (!section || !story) return;

    let initialized = false;
    let frame = 0;
    let timeline: Seekable | null = null;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    function initialize() {
      if (initialized) return;
      initialized = true;
      story?.classList.add("nexus-motion-ready");

      timeline = createTimeline({ autoplay: false, defaults: { ease: "out(3)" } })
        .add(story?.querySelectorAll('[data-nexus-stage="endpoints"] > *') ?? [], {
          opacity: [0, 1], y: [14, 0], duration: 440, delay: stagger(70),
        }, 0)
        .add(story?.querySelectorAll('[data-nexus-stage="context"]') ?? [], {
          opacity: [0, 1], y: [10, 0], duration: 420, delay: stagger(55),
        }, 70)
        .add(story?.querySelectorAll('[data-nexus-stage="inbound"] i') ?? [], {
          scale: [0, 1], opacity: [0.2, 1], duration: 430,
        }, 260)
        .add(story?.querySelectorAll('[data-nexus-stage="core"]') ?? [], {
          opacity: [0, 1], scale: [0.96, 1], duration: 480,
        }, 440)
        .add(story?.querySelectorAll('[data-nexus-stage="human-path"] i') ?? [], {
          scale: [0, 1], opacity: [0.2, 1], duration: 430,
        }, 620)
        .add(story?.querySelectorAll('[data-nexus-stage="authorization"]') ?? [], {
          opacity: [0, 1], scale: [0.97, 1], duration: 480,
        }, 790)
        .add(story?.querySelectorAll('[data-nexus-stage="authorized"] i') ?? [], {
          scale: [0, 1], opacity: [0.2, 1], duration: 360,
        }, 970)
        .add(story?.querySelectorAll('.nexus-outcome[data-nexus-stage="authorized"]') ?? [], {
          opacity: [0, 1], y: [8, 0], duration: 390,
        }, 1090) as Seekable;

      update();
      window.addEventListener("scroll", requestUpdate, { passive: true });
      window.addEventListener("resize", requestUpdate);
    }

    function update() {
      frame = 0;
      if (!timeline || !section) return;
      const top = section.getBoundingClientRect().top + window.scrollY;
      const start = top - window.innerHeight * 0.68;
      const end = top - 72;
      const progress = clamp((window.scrollY - start) / Math.max(1, end - start));
      timeline.seek(timeline.duration * progress, true);
    }

    function requestUpdate() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }

    if (root.classList.contains("marde-intro-complete")) initialize();
    else window.addEventListener("marde:intro-complete", initialize, { once: true });

    return () => {
      window.removeEventListener("marde:intro-complete", initialize);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
      timeline?.revert();
      story.classList.remove("nexus-motion-ready");
    };
  }, []);

  return null;
}
