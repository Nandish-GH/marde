"use client";

import { animate, createTimeline, stagger } from "animejs";
import { useEffect } from "react";

type Revertible = { revert: () => unknown };
type Seekable = Revertible & { duration: number; seek: (time: number, muteCallbacks?: boolean) => unknown };

export function HomeScrollMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const mobile = window.matchMedia("(max-width: 767px)").matches;
    const animations: Revertible[] = [];
    const intersectionObservers: IntersectionObserver[] = [];
    const heroScrollAnimations: Seekable[] = [];
    let homeNexusTimeline: Seekable | null = null;
    let initialized = false;
    let frame = 0;
    let removeScrollCoordinator = () => {};

    function initialize() {
      if (initialized) return;
      initialized = true;
      root.classList.add("home-scroll-ready");

      const hero = document.querySelector<HTMLElement>("[data-response-hero]");
      const heroCopy = hero?.querySelector<HTMLElement>(".hero-copy");
      const heroVisual = hero?.querySelector<HTMLElement>(".hero-visual-scroll");
      const heroLight = hero?.querySelector<HTMLElement>(".visual-layer-light");
      const heroPlanes = hero?.querySelector<HTMLElement>(".visual-layer-planes");
      const heroContours = hero?.querySelector<HTMLElement>(".visual-layer-contours");
      const heroRegistration = hero?.querySelector<HTMLElement>(".visual-layer-registration");
      const heroSignals = hero?.querySelector<HTMLElement>(".hero-signals");

      const addHeroScrollAnimation = (animation: Seekable) => {
        heroScrollAnimations.push(animation);
        animations.push(animation);
      };

      if (hero && heroCopy) {
        addHeroScrollAnimation(animate(heroCopy, {
          y: mobile ? -16 : -30,
          opacity: 0.86,
          ease: "linear",
          autoplay: false,
        }) as Seekable);
      }

      if (hero && heroVisual) {
        addHeroScrollAnimation(animate(heroVisual, {
          y: mobile ? 10 : 18,
          scale: mobile ? 1.008 : 1.014,
          ease: "linear",
          autoplay: false,
        }) as Seekable);
      }

      if (hero && heroLight) {
        addHeroScrollAnimation(animate(heroLight, {
          y: mobile ? 4 : 10,
          x: mobile ? 3 : 8,
          scale: mobile ? 1.008 : 1.018,
          ease: "linear",
          autoplay: false,
        }) as Seekable);
      }

      if (hero && heroPlanes) {
        addHeroScrollAnimation(animate(heroPlanes, {
          x: mobile ? -8 : -22,
          y: mobile ? 9 : 18,
          scale: mobile ? 1.009 : 1.016,
          ease: "linear",
          autoplay: false,
        }) as Seekable);
      }

      if (hero && heroContours) {
        addHeroScrollAnimation(animate(heroContours, {
          x: mobile ? -3 : -9,
          y: mobile ? 14 : 28,
          opacity: 0.38,
          ease: "linear",
          autoplay: false,
        }) as Seekable);
      }

      if (hero && heroRegistration) {
        addHeroScrollAnimation(animate(heroRegistration, {
          y: mobile ? 4 : 9,
          opacity: 0.18,
          ease: "linear",
          autoplay: false,
        }) as Seekable);
      }

      if (hero && heroSignals) {
        addHeroScrollAnimation(animate(heroSignals, {
          y: mobile ? -7 : -14,
          opacity: 0.56,
          ease: "linear",
          autoplay: false,
        }) as Seekable);
      }

      const observeOnce = (target: Element | null, play: () => Revertible, options?: IntersectionObserverInit) => {
        if (!target) return;
        const observer = new IntersectionObserver(([entry]) => {
          if (!entry?.isIntersecting) return;
          animations.push(play());
          observer.disconnect();
        }, options ?? { rootMargin: "0px 0px -14%", threshold: mobile ? 0.08 : 0.16 });
        observer.observe(target);
        intersectionObservers.push(observer);
      };

      const observeSceneActivity = (target: Element | null) => {
        if (!target) return;
        const observer = new IntersectionObserver(([entry]) => {
          target.classList.toggle("is-scene-active", Boolean(entry?.isIntersecting));
        }, { rootMargin: "30% 0px", threshold: 0 });
        observer.observe(target);
        intersectionObservers.push(observer);
      };

      observeSceneActivity(hero ?? null);

      const systemGrid = document.querySelector(".system-grid");
      observeOnce(systemGrid, () => {
        const air = systemGrid?.querySelector(".system-card.air");
        const ground = systemGrid?.querySelector(".system-card.ground");
        const timeline = createTimeline({ defaults: { ease: "out(3)" } });
        if (air) timeline.add(air, { opacity: [0, 1], x: [mobile ? -18 : -38, 0], y: [mobile ? 20 : 28, 0], duration: 760 }, 0);
        if (ground) timeline.add(ground, { opacity: [0, 1], x: [mobile ? 14 : 34, 0], y: [mobile ? 25 : 38, 0], duration: 820 }, 90);
        timeline.add(systemGrid?.querySelectorAll(".poster-registration") ?? [], { opacity: [0, 1], duration: 460, delay: stagger(70) }, 320);
        return timeline;
      });

      const homeNexus = document.querySelector<HTMLElement>(".home-nexus");
      const homeNexusStory = homeNexus?.querySelector<HTMLElement>("[data-nexus-story]");
      if (homeNexus && homeNexusStory) {
        homeNexusStory.classList.add("nexus-motion-ready");
        homeNexusTimeline = createTimeline({ autoplay: false, defaults: { ease: "out(3)" } })
          .add(homeNexus.querySelectorAll(".nexus-card-copy > :not(.system-card-cta)"), {
            opacity: [0, 1], y: [mobile ? 13 : 22, 0], duration: 430, delay: stagger(45),
          }, 0)
          .add(homeNexus.querySelectorAll(".nexus-card-copy > .system-card-cta"), {
            opacity: [0, 1], duration: 360,
          }, 180)
          .add(homeNexusStory.querySelectorAll('[data-nexus-stage="endpoints"] > *'), {
            opacity: [0, 1], y: [12, 0], duration: 400, delay: stagger(65),
          }, 100)
          .add(homeNexusStory.querySelectorAll('[data-nexus-stage="context"]'), {
            opacity: [0, 1], y: [8, 0], duration: 370, delay: stagger(50),
          }, 150)
          .add(homeNexusStory.querySelectorAll('[data-nexus-stage="inbound"] i'), {
            scale: [0, 1], opacity: [0.2, 1], duration: 360,
          }, 320)
          .add(homeNexusStory.querySelectorAll('[data-nexus-stage="core"]'), {
            opacity: [0, 1], scale: [0.96, 1], duration: 430,
          }, 470)
          .add(homeNexusStory.querySelectorAll('[data-nexus-stage="human-path"] i'), {
            scale: [0, 1], opacity: [0.2, 1], duration: 350,
          }, 630)
          .add(homeNexusStory.querySelectorAll('[data-nexus-stage="authorization"]'), {
            opacity: [0, 1], scale: [0.97, 1], duration: 430,
          }, 770)
          .add(homeNexusStory.querySelectorAll('[data-nexus-stage="authorized"] i'), {
            scale: [0, 1], opacity: [0.2, 1], duration: 320,
          }, 920)
          .add(homeNexusStory.querySelectorAll('.nexus-outcome[data-nexus-stage="authorized"]'), {
            opacity: [0, 1], y: [7, 0], duration: 340,
          }, 1030) as Seekable;
        animations.push(homeNexusTimeline);
      }

      const statSection = document.querySelector(".stat-section");
      observeOnce(statSection, () => createTimeline({ defaults: { ease: "out(3)" } })
        .add(statSection?.querySelector(".section-intro") ?? [], { opacity: [0, 1], y: [mobile ? 16 : 26, 0], duration: 620 }, 0)
        .add(statSection?.querySelector(".stats") ?? [], { opacity: [0, 1], y: [mobile ? 18 : 30, 0], duration: 680 }, 120), {
          rootMargin: "0px 0px -20%",
          threshold: mobile ? 0.12 : 0.24,
        });

      const process = document.querySelector<HTMLElement>(".process-story");
      const processRail = process?.querySelector<HTMLElement>(".process-progress-rail");
      let processRailAnimation: Seekable | null = null;
      let processSteps: HTMLElement[] = [];
      if (process && processRail) {
        processSteps = Array.from(process.querySelectorAll<HTMLElement>(".process-step"));
        processRailAnimation = animate(processRail, { scaleY: [0, 1], ease: "linear", autoplay: false }) as Seekable;
        animations.push(processRailAnimation);
        observeSceneActivity(process);
      }

      const clamp = (value: number) => Math.min(1, Math.max(0, value));
      const updateScrollStory = () => {
        frame = 0;
        if (hero) {
          const heroTop = hero.getBoundingClientRect().top + window.scrollY;
          const heroProgress = clamp((window.scrollY - heroTop) / Math.max(1, hero.offsetHeight - 1));
          heroScrollAnimations.forEach((animation) => animation.seek(animation.duration * heroProgress, true));
          window.dispatchEvent(new CustomEvent("marde:hero-progress", { detail: { progress: heroProgress } }));
        }

        if (process && processRailAnimation) {
          const processTop = process.getBoundingClientRect().top + window.scrollY;
          const processStart = processTop - window.innerHeight * 0.82;
          const processEnd = processTop + process.offsetHeight - window.innerHeight * 0.28;
          const processProgress = clamp((window.scrollY - processStart) / Math.max(1, processEnd - processStart));
          processRailAnimation.seek(processRailAnimation.duration * processProgress, true);
          const activeIndex = processProgress > 0
            ? Math.min(processSteps.length - 1, Math.floor(processProgress * processSteps.length))
            : -1;
          const scaledProcessProgress = processProgress * processSteps.length;
          processSteps.forEach((step, index) => {
            const localProgress = clamp(scaledProcessProgress - index);
            step.style.setProperty("--process-step-progress", localProgress.toFixed(3));
            step.classList.toggle("is-scroll-active", index === activeIndex);
            step.classList.toggle("is-scroll-complete", index < activeIndex || localProgress >= 1);
          });
        }

        if (homeNexus && homeNexusTimeline) {
          const nexusTop = homeNexus.getBoundingClientRect().top + window.scrollY;
          const nexusStart = nexusTop - window.innerHeight * 0.72;
          const nexusEnd = nexusTop - 72;
          const nexusProgress = clamp((window.scrollY - nexusStart) / Math.max(1, nexusEnd - nexusStart));
          homeNexusTimeline.seek(homeNexusTimeline.duration * nexusProgress, true);
        }
      };

      const requestScrollUpdate = () => {
        if (!frame) frame = window.requestAnimationFrame(updateScrollStory);
      };
      window.addEventListener("scroll", requestScrollUpdate, { passive: true });
      window.addEventListener("resize", requestScrollUpdate);
      updateScrollStory();
      removeScrollCoordinator = () => {
        window.removeEventListener("scroll", requestScrollUpdate);
        window.removeEventListener("resize", requestScrollUpdate);
        if (frame) window.cancelAnimationFrame(frame);
      };

      const teamSection = document.querySelector(".team-teaser");
      observeOnce(teamSection, () => createTimeline({ defaults: { ease: "out(3)" } })
        .add(teamSection?.querySelector(":scope > div:first-child") ?? [], { opacity: [0, 1], y: [mobile ? 18 : 28, 0], duration: 620 }, 0)
        .add(teamSection?.querySelectorAll(".team-profile") ?? [], {
          opacity: [0, 1],
          y: [mobile ? 20 : 32, 0],
          duration: 620,
          delay: stagger(mobile ? 55 : 85),
        }, 110));

      const faqSection = document.querySelector(".home-faq");
      observeOnce(faqSection, () => createTimeline({ defaults: { ease: "out(3)" } })
        .add(faqSection?.querySelector(".home-faq-heading") ?? [], {
          opacity: [0, 1],
          y: [mobile ? 14 : 22, 0],
          duration: 560,
        }, 0)
        .add(faqSection?.querySelector(".home-faq-list") ?? [], {
          opacity: [0, 1],
          y: [mobile ? 12 : 20, 0],
          duration: 620,
        }, 90));

      const closing = document.querySelector(".closing");
      observeSceneActivity(closing);
      observeOnce(closing, () => createTimeline({ defaults: { ease: "out(3)" } })
        .add(closing?.querySelector(".closing-geometry") ?? [], { opacity: [0, 1], scale: [0.97, 1], duration: 850 }, 0)
        .add(closing?.querySelectorAll(".closing-content > :where(.eyebrow, h2, p, .text-link)") ?? [], {
          opacity: [0, 1],
          y: [mobile ? 18 : 34, 0],
          duration: 650,
          delay: stagger(80),
        }, 120)
        .add(closing?.querySelector(".closing-actions") ?? [], { opacity: [0, 1], y: [20, 0], duration: 580 }, 420)
        .add(closing?.querySelector(".closing-socials") ?? [], { opacity: [0, 1], y: [16, 0], duration: 520 }, 540));
    }

    if (root.classList.contains("marde-intro-complete")) initialize();
    else window.addEventListener("marde:intro-complete", initialize, { once: true });

    return () => {
      window.removeEventListener("marde:intro-complete", initialize);
      removeScrollCoordinator();
      intersectionObservers.forEach((observer) => observer.disconnect());
      animations.forEach((animation) => animation.revert());
      document.querySelectorAll<HTMLElement>(".process-step").forEach((step) => {
        step.classList.remove("is-scroll-active", "is-scroll-complete");
        step.style.removeProperty("--process-step-progress");
      });
      document.querySelectorAll(".is-scene-active").forEach((scene) => scene.classList.remove("is-scene-active"));
      document.querySelector(".home-nexus [data-nexus-story]")?.classList.remove("nexus-motion-ready");
      root.classList.remove("home-scroll-ready");
    };
  }, []);

  return null;
}
