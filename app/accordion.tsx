"use client";

import { Accordion as AccordionPrimitive } from "radix-ui";
import { cn } from "../lib/utils";

type AccordionItem = Readonly<{ question: string; answer: string }>;
type AccordionProps = {
  items: readonly AccordionItem[];
  variant: "home" | "page";
  className?: string;
  defaultOpen?: readonly number[] | "all";
  single?: boolean;
};

function AccordionItems({ items }: { items: readonly AccordionItem[] }) {
  return items.map(({ question, answer }, index) => (
    <AccordionPrimitive.Item className="accordion-item" key={question} value={String(index)}>
      <AccordionPrimitive.Header asChild>
        <h3>
          <AccordionPrimitive.Trigger className="accordion-trigger">
            <span>{question}</span><i aria-hidden="true">+</i>
          </AccordionPrimitive.Trigger>
        </h3>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content className="accordion-panel">
        <div className="accordion-panel-inner"><p>{answer}</p></div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  ));
}

export function Accordion({ items, variant, className, defaultOpen = [], single = false }: AccordionProps) {
  const defaults = (defaultOpen === "all" ? items.map((_, index) => index) : defaultOpen).map(String);
  const rootClassName = cn("accordion", `accordion-${variant}`, className);
  if (single) {
    return (
      <AccordionPrimitive.Root type="single" collapsible defaultValue={defaults[0]} className={rootClassName}>
        <AccordionItems items={items} />
      </AccordionPrimitive.Root>
    );
  }
  return (
    <AccordionPrimitive.Root type="multiple" defaultValue={defaults} className={rootClassName}>
      <AccordionItems items={items} />
    </AccordionPrimitive.Root>
  );
}
