import { cn } from "../lib/utils";
import { Eyebrow, SplitTitle } from "./components";
import type React from "react";

type PageHeroProps = {
  eyebrow: string;
  title: readonly string[];
  body: string;
  italicIndex?: number;
  compact?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, body, italicIndex, compact = false, className, children }: PageHeroProps) {
  return (
    <section className={cn("page-hero", compact && "compact", className)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1><SplitTitle lines={[...title]} italicIndex={italicIndex} /></h1>
      <p>{body}</p>
      {children}
    </section>
  );
}
