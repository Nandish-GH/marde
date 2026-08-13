"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";
import { useState } from "react";
import type { HeroRiveInputNames } from "./hero-rive-runtime";

const HeroRiveRuntime = dynamic(
  () => import("./hero-rive-runtime").then((module) => module.HeroRiveRuntime),
  { ssr: false },
);

type HeroRiveProps = {
  assetSrc?: string | null;
  children: ReactNode;
  inputNames?: HeroRiveInputNames;
  stateMachine?: string;
};

export function HeroRive({ assetSrc, children, inputNames, stateMachine }: HeroRiveProps) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const hasRive = Boolean(assetSrc && !failed);

  return (
    <div className={`hero-visual-stage${ready ? " rive-is-ready" : ""}`}>
      <div className="hero-static-fallback">{children}</div>
      {hasRive && assetSrc ? (
        <HeroRiveRuntime
          src={assetSrc}
          stateMachine={stateMachine}
          inputNames={inputNames}
          onReady={() => setReady(true)}
          onError={() => {
            setFailed(true);
            setReady(false);
          }}
        />
      ) : null}
    </div>
  );
}
