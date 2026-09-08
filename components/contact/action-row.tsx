import type { ComponentType } from "react";

export type ContactAction = { label: string; href: string; icon: ComponentType<{ size?: number; "aria-hidden"?: boolean }> };

export function ActionRow({ actions, className }: { actions: ContactAction[]; className?: string }) {
  return <ul className={className}>
    {actions.map(({ label, href, icon: Icon }) => <li key={label}>
      <a href={href} {...(href.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        <span><Icon size={24} aria-hidden={true} /></span>
        {label}
      </a>
    </li>)}
  </ul>;
}
