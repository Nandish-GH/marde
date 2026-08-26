import * as React from "react";
import { cn } from "../lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & { as?: "section" | "div" };

export function Section({ as: Component = "section", className, ...props }: SectionProps) {
  return <Component className={cn("section", className)} {...props} />;
}
