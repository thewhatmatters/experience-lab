import type { ReactNode } from "react";
import { cn } from "@whatmatters/wmds";

/** Page layout only — copies the WMDS grid-page + band spine. Not a new molecule. */
export function PageSection({
  id,
  children,
  className,
  pad = "default",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  pad?: "default" | "hero" | "compact";
}) {
  const padClass =
    pad === "hero" ? "py-0" : pad === "compact" ? "py-[calc(var(--leading-base)*4)]" : "py-[calc(var(--leading-base)*8)]";

  return (
    <section id={id} className={cn("band", padClass, className)}>
      {children}
    </section>
  );
}
