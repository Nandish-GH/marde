"use client";

import { useRive } from "@rive-app/react-webgl2";
import type { StateMachineInput } from "@rive-app/webgl2";
import { useEffect, useRef } from "react";

export type HeroRiveInputNames = {
  active?: string;
  introComplete?: string;
  pointerX?: string;
  pointerY?: string;
  scrollProgress?: string;
};

type HeroRiveRuntimeProps = {
  inputNames?: HeroRiveInputNames;
  onError: () => void;
  onReady: () => void;
  src: string;
  stateMachine?: string;
};

export function HeroRiveRuntime({ inputNames, onError, onReady, src, stateMachine }: HeroRiveRuntimeProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const { rive, RiveComponent } = useRive(
    {
      src,
      stateMachines: stateMachine,
      autoplay: true,
      onLoad: onReady,
      onLoadError: onError,
    },
    { useOffscreenRenderer: true },
  );

  useEffect(() => {
    if (!rive || !stateMachine || !inputNames) return;

    const inputs = new Map<string, StateMachineInput>(
      rive.stateMachineInputs(stateMachine).map((input) => [input.name, input]),
    );
    const namedInput = (name?: string) => name ? inputs.get(name) : undefined;
    const activeInput = namedInput(inputNames.active);
    const introInput = namedInput(inputNames.introComplete);
    const pointerXInput = namedInput(inputNames.pointerX);
    const pointerYInput = namedInput(inputNames.pointerY);
    const scrollInput = namedInput(inputNames.scrollProgress);
    const rootElement = rootRef.current;

    const setBoolean = (input: StateMachineInput | undefined, value: boolean) => {
      if (input && typeof input.value === "boolean") input.value = value;
    };
    const setNumber = (input: StateMachineInput | undefined, value: number) => {
      if (input && typeof input.value === "number") input.value = value;
    };

    setBoolean(introInput, document.documentElement.classList.contains("marde-intro-complete"));

    const handleIntro = () => setBoolean(introInput, true);
    const handleProgress = (event: Event) => {
      const progress = (event as CustomEvent<{ progress?: number }>).detail?.progress ?? 0;
      setNumber(scrollInput, Math.max(0, Math.min(1, progress)));
    };
    const handlePointer = (event: PointerEvent) => {
      const bounds = rootRef.current?.getBoundingClientRect();
      if (!bounds) return;
      setNumber(pointerXInput, Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width)));
      setNumber(pointerYInput, Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height)));
    };

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      const active = Boolean(entry?.isIntersecting);
      setBoolean(activeInput, active);
      if (active) rive.play(stateMachine);
      else rive.pause(stateMachine);
    }, { rootMargin: "25% 0px", threshold: 0 });

    if (rootElement) visibilityObserver.observe(rootElement);
    window.addEventListener("marde:intro-complete", handleIntro);
    window.addEventListener("marde:hero-progress", handleProgress);
    rootElement?.addEventListener("pointermove", handlePointer, { passive: true });

    return () => {
      visibilityObserver.disconnect();
      window.removeEventListener("marde:intro-complete", handleIntro);
      window.removeEventListener("marde:hero-progress", handleProgress);
      rootElement?.removeEventListener("pointermove", handlePointer);
    };
  }, [inputNames, rive, stateMachine]);

  return (
    <div ref={rootRef} className="hero-rive-canvas" aria-hidden="true">
      <RiveComponent />
    </div>
  );
}
