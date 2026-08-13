"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const revealSelector = [
  ".hero-copy > .eyebrow",
  ".hero-copy > h1",
  ".hero-copy > p",
  ".hero-copy > .actions",
  ".hero-graphic",
  ".page-hero > .eyebrow",
  ".page-hero > h1",
  ".page-hero > p",
  ".page-hero > .text-link",
  ".page-hero > .button",
  ".not-found-copy > .eyebrow",
  ".not-found-copy > h1",
  ".not-found-copy > p",
  ".not-found-copy > .actions",
  ".confirmation-copy",
  ".section-intro",
  ".section-heading",
  ".stats",
  ".system-grid",
  ".process-intro",
  ".process-step",
  ".team-teaser > div",
  ".home-faq-heading",
  ".home-faq-list",
  ".closing-content > .eyebrow",
  ".closing-content > h2",
  ".closing-content > p",
  ".closing-content > .text-link",
  ".closing-content > .closing-actions",
  ".tech-block",
  ".roadmap > div",
  ".phase-list article",
  ".regulatory > .eyebrow",
  ".regulatory > h2",
  ".regulatory > div",
  ".regulatory > p",
  ".story > div",
  ".mission-statement > *",
  ".funding > div",
  ".member",
  ".support-grid article",
  ".newsletter > *",
  ".accordion-page .accordion-item",
  ".accordion-page .faq-contact",
  ".policy-copy",
].join(",");

export function SiteMotion() {
  const pathname = usePathname();
  const cursorPointRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const cursorTrailRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let cancelled = false;
    let menuOpen = document.documentElement.classList.contains("mobile-menu-open");
    let lenis: import("lenis").default | undefined;

    async function initializeLenis() {
      if (cancelled || !finePointer.matches || lenis) return;

      if (!document.documentElement.classList.contains("marde-intro-complete")) {
        return;
      }

      try {
        const { default: Lenis } = await import("lenis");
        if (cancelled || !finePointer.matches) return;

        lenis = new Lenis({
          autoRaf: true,
          smoothWheel: true,
          lerp: 0.16,
          wheelMultiplier: 1,
          syncTouch: false,
          anchors: true,
          stopInertiaOnNavigate: true,
          overscroll: true,
          allowNestedScroll: false,
          autoResize: true,
          respectReducedMotion: false,
        });
        if (menuOpen) lenis.stop();
      } catch {
        lenis = undefined;
      }
    }

    function handleIntroComplete() {
      if (finePointer.matches) void initializeLenis();
    }

    function handleMenuState(event: Event) {
      menuOpen = Boolean((event as CustomEvent<{ open?: boolean }>).detail?.open);
      if (menuOpen) {
        lenis?.stop();
      } else {
        lenis?.start();
      }
    }

    function syncLenisMode() {
      if (finePointer.matches) {
        void initializeLenis();
        return;
      }

      lenis?.destroy();
      lenis = undefined;
    }

    syncLenisMode();
    finePointer.addEventListener("change", syncLenisMode);
    window.addEventListener("marde:intro-complete", handleIntroComplete);
    window.addEventListener("marde:menu-state", handleMenuState);

    return () => {
      cancelled = true;
      lenis?.destroy();
      finePointer.removeEventListener("change", syncLenisMode);
      window.removeEventListener("marde:intro-complete", handleIntroComplete);
      window.removeEventListener("marde:menu-state", handleMenuState);
    };
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const root = document.documentElement;
    if (!cursorPointRef.current || !cursorRingRef.current) return;

    const point = cursorPointRef.current;
    const ring = cursorRingRef.current;
    const trails = cursorTrailRefs.current.filter((trail): trail is HTMLDivElement => Boolean(trail));
    const hero = document.querySelector<HTMLElement>(".hero");

    let removeActiveCursor = () => {};

    function syncCursorMode() {
      removeActiveCursor();
      root.classList.remove("custom-cursor-ready");

      if (!finePointer.matches) return;

      let frame = 0;
      let visible = false;
      let ringX = 0;
      let ringY = 0;
      let targetX = 0;
      let targetY = 0;
      let heroX = 0;
      let heroY = 0;
      let targetHeroX = 0;
      let targetHeroY = 0;
      const trailPositions = trails.map(() => ({ x: 0, y: 0 }));

      root.classList.add("custom-cursor-ready");

      function renderRing() {
        ringX += (targetX - ringX) * 0.11;
        ringY += (targetY - ringY) * 0.11;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

        let trailTargetX = targetX;
        let trailTargetY = targetY;
        trails.forEach((trail, index) => {
          const position = trailPositions[index];
          const easing = root.classList.contains("custom-cursor-interactive")
            ? [0.42, 0.28, 0.18][index]
            : [0.35, 0.2, 0.12][index];
          position.x += (trailTargetX - position.x) * easing;
          position.y += (trailTargetY - position.y) * easing;
          trail.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
          trailTargetX = position.x;
          trailTargetY = position.y;
        });

        if (hero) {
          heroX += (targetHeroX - heroX) * 0.075;
          heroY += (targetHeroY - heroY) * 0.075;
          hero.style.setProperty("--hero-pointer-x", `${heroX}px`);
          hero.style.setProperty("--hero-pointer-y", `${heroY}px`);
        }

        frame = window.requestAnimationFrame(renderRing);
      }

      function showCursor(event: PointerEvent) {
        targetX = event.clientX;
        targetY = event.clientY;
        point.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

        if (hero) {
          const bounds = hero.getBoundingClientRect();
          const withinHero = event.clientY >= bounds.top && event.clientY <= bounds.bottom;
          targetHeroX = withinHero ? ((event.clientX - (bounds.left + bounds.width / 2)) / bounds.width) * 24 : 0;
          targetHeroY = withinHero ? ((event.clientY - (bounds.top + bounds.height / 2)) / bounds.height) * 20 : 0;
        }

        if (!visible) {
          visible = true;
          ringX = targetX;
          ringY = targetY;
          ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
          trails.forEach((trail, index) => {
            trailPositions[index] = { x: targetX, y: targetY };
            trail.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
          });
          root.classList.add("custom-cursor-visible");
          frame = window.requestAnimationFrame(renderRing);
        }
      }

      function updateCursorState(event: PointerEvent) {
        const target = event.target instanceof Element ? event.target : null;
        const nativeField = target?.closest(
          'input:not([type="button"]):not([type="submit"]):not([type="reset"]), textarea, select, [contenteditable]:not([contenteditable="false"])',
        );
        const interactive = target?.closest(
          'a, button, select, [role="button"], [tabindex]:not([tabindex="-1"])',
        );
        const darkSurface = target?.closest(".footer, .closing");

        root.classList.toggle("custom-cursor-interactive", Boolean(interactive && !nativeField));
        root.classList.toggle("custom-cursor-native-field", Boolean(nativeField));
        root.classList.toggle("custom-cursor-dark-surface", Boolean(darkSurface));
      }

      function hideCursor() {
        visible = false;
        root.classList.remove(
          "custom-cursor-visible",
          "custom-cursor-interactive",
          "custom-cursor-native-field",
          "custom-cursor-pressed",
          "custom-cursor-dark-surface",
        );
        window.cancelAnimationFrame(frame);
        frame = 0;
        if (hero) {
          hero.style.setProperty("--hero-pointer-x", "0px");
          hero.style.setProperty("--hero-pointer-y", "0px");
        }
      }

      function pressCursor(event: PointerEvent) {
        root.classList.add("custom-cursor-pressed");

        const pulse = document.createElement("span");
        pulse.className = "cursor-click-pulse";
        pulse.style.left = `${event.clientX}px`;
        pulse.style.top = `${event.clientY}px`;
        pulse.setAttribute("aria-hidden", "true");
        document.body.appendChild(pulse);
        pulse.addEventListener("animationend", () => pulse.remove(), { once: true });
        window.setTimeout(() => pulse.remove(), 500);
      }

      function releaseCursor() {
        root.classList.remove("custom-cursor-pressed");
      }

      window.addEventListener("pointermove", showCursor, { passive: true });
      document.addEventListener("pointerover", updateCursorState, { passive: true });
      document.addEventListener("pointerdown", pressCursor, { passive: true });
      window.addEventListener("pointerup", releaseCursor, { passive: true });
      document.documentElement.addEventListener("mouseleave", hideCursor);
      window.addEventListener("blur", hideCursor);

      removeActiveCursor = () => {
        hideCursor();
        document.querySelectorAll(".cursor-click-pulse").forEach((pulse) => pulse.remove());
        window.removeEventListener("pointermove", showCursor);
        document.removeEventListener("pointerover", updateCursorState);
        document.removeEventListener("pointerdown", pressCursor);
        window.removeEventListener("pointerup", releaseCursor);
        document.documentElement.removeEventListener("mouseleave", hideCursor);
        window.removeEventListener("blur", hideCursor);
      };
    }

    syncCursorMode();
    finePointer.addEventListener("change", syncCursorMode);

    return () => {
      removeActiveCursor();
      root.classList.remove("custom-cursor-ready");
      finePointer.removeEventListener("change", syncCursorMode);
    };
  }, [pathname]);

  useEffect(() => {
    const counters = Array.from(document.querySelectorAll<HTMLElement>("[data-count-up]"));
    const animations = new Map<HTMLElement, number>();
    const delays = new Map<HTMLElement, ReturnType<typeof setTimeout>>();
    const counterOrder = new Map(counters.map((counter, index) => [counter, index]));
    const visibleCounters = new Set<HTMLElement>();
    const startedCounters = new Set<HTMLElement>();
    let introComplete = document.documentElement.classList.contains("marde-intro-complete");

    function animateCounter(element: HTMLElement) {
      const finalValue = element.dataset.countUp ?? element.textContent ?? "";
      const match = finalValue.match(/^(\d+(?:\.\d+)?)(.*)$/);
      if (!match) return;

      const target = Number(match[1]);
      const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
      const suffix = match[2];
      const duration = 1650;
      let lastRendered = "";

      function beginAnimation() {
        delays.delete(element);
        const startedAt = performance.now();

        function frame(now: number) {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          const rendered = `${(target * eased).toFixed(decimals)}${suffix}`;
          if (rendered !== lastRendered) {
            element.textContent = rendered;
            lastRendered = rendered;
          }

          if (progress < 1) {
            animations.set(element, window.requestAnimationFrame(frame));
            return;
          }

          element.textContent = finalValue;
          animations.delete(element);
        }

        animations.set(element, window.requestAnimationFrame(frame));
      }

      element.textContent = `${(0).toFixed(decimals)}${suffix}`;
      const delay = (counterOrder.get(element) ?? 0) * 100;
      delays.set(element, setTimeout(beginAnimation, delay));
    }

    function maybeStartCounter(element: HTMLElement) {
      if (!introComplete || !visibleCounters.has(element) || startedCounters.has(element)) return;
      startedCounters.add(element);
      observer.unobserve(element);
      animateCounter(element);
    }

    function handleIntroComplete() {
      introComplete = true;
      visibleCounters.forEach(maybeStartCounter);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            visibleCounters.add(element);
            maybeStartCounter(element);
          } else {
            visibleCounters.delete(element);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.35 },
    );

    counters.forEach((counter) => observer.observe(counter));
    window.addEventListener("marde:intro-complete", handleIntroComplete);

    return () => {
      observer.disconnect();
      window.removeEventListener("marde:intro-complete", handleIntroComplete);
      delays.forEach((delay) => clearTimeout(delay));
      animations.forEach((frame) => window.cancelAnimationFrame(frame));
      counters.forEach((counter) => {
        counter.textContent = counter.dataset.countUp ?? counter.textContent;
      });
    };
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    let frame = 0;
    let observing = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    root.classList.add("motion-enhanced");
    elements.forEach((element) => element.classList.add("reveal-ready"));

    function startObserving() {
      if (observing) return;
      observing = true;
      frame = window.requestAnimationFrame(() => {
        elements.forEach((element) => observer.observe(element));
      });
    }

    if (root.classList.contains("marde-intro-complete")) {
      startObserving();
    } else {
      window.addEventListener("marde:intro-complete", startObserving, { once: true });
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("marde:intro-complete", startObserving);
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("reveal-ready", "is-revealed"));
      root.classList.remove("motion-enhanced");
    };
  }, [pathname]);

  return (
    <>
      <div ref={cursorPointRef} className="custom-cursor custom-cursor-point" aria-hidden="true">
        <span />
        <span />
      </div>
      <div ref={cursorRingRef} className="custom-cursor custom-cursor-ring" aria-hidden="true">
        <span />
      </div>
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          ref={(element) => {
            cursorTrailRefs.current[index] = element;
          }}
          className={`custom-cursor custom-cursor-trail custom-cursor-trail-${index + 1}`}
          aria-hidden="true"
        >
          <span />
          <span />
        </div>
      ))}
    </>
  );
}
