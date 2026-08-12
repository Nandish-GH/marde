"use client";

import { useId, useState } from "react";

type AccordionItem = Readonly<{
  question: string;
  answer: string;
}>;

type AccordionProps = {
  items: readonly AccordionItem[];
  variant: "home" | "page";
  className?: string;
  defaultOpen?: readonly number[] | "all";
  single?: boolean;
};

export function Accordion({
  items,
  variant,
  className = "",
  defaultOpen = [],
  single = false,
}: AccordionProps) {
  const instanceId = useId().replace(/:/g, "");
  const [openItems, setOpenItems] = useState<Set<number>>(
    () => new Set(defaultOpen === "all" ? items.map((_, index) => index) : defaultOpen),
  );

  function toggleItem(index: number) {
    setOpenItems((current) => {
      const next = single ? new Set<number>() : new Set(current);

      if (!current.has(index)) {
        next.add(index);
      } else if (!single) {
        next.delete(index);
      }

      return next;
    });
  }

  return (
    <div className={`accordion accordion-${variant} ${className}`.trim()}>
      {items.map(({ question, answer }, index) => {
        const open = openItems.has(index);
        const triggerId = `${instanceId}-trigger-${index}`;
        const panelId = `${instanceId}-panel-${index}`;

        return (
          <article className={`accordion-item${open ? " is-open" : ""}`} key={question}>
            <button
              id={triggerId}
              className="accordion-trigger"
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => toggleItem(index)}
            >
              <span>{question}</span>
              <i aria-hidden="true">+</i>
            </button>
            <div
              id={panelId}
              className="accordion-panel"
              role="region"
              aria-labelledby={triggerId}
              aria-hidden={!open}
            >
              <div className="accordion-panel-inner">
                <p>{answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
