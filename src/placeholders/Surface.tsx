import { cn } from "@whatmatters/wmds";
import type { ReactNode } from "react";

/** Full-bleed section surface — paper / ice / ink, close to the reference band colors. */
export function Surface({
  id,
  tone = "paper",
  children,
  className,
  as: Tag = "section",
}: {
  id?: string;
  tone?: "paper" | "ice" | "ink";
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
}) {
  const theme = tone === "ink" ? "dark" : undefined;
  const toneClass =
    tone === "ink"
      ? "bg-[var(--lab-ink)] text-fg"
      : tone === "ice"
        ? "bg-[var(--lab-duck)] text-fg"
        : "bg-body text-fg";

  return (
    <Tag
      id={id}
      data-theme={theme}
      className={cn("col-span-full lab-bleed", toneClass, className)}
    >
      {children}
    </Tag>
  );
}
