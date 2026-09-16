import { backgroundPatternDotGridClasses, cn } from "@whatmatters/wmds";
import { washes, type MediaWash } from "./washes";

export type { MediaWash };

/**
 * LOCAL PLACEHOLDER — architectural media frame.
 * WMDS has no figure / video / marketing media organism. Drop a muted loop on `src` later.
 */
export function MediaFrame({
  label,
  caption,
  wash = "slate",
  ratio = "16 / 9",
  src,
  poster,
  className,
}: {
  label: string;
  caption?: string;
  wash?: MediaWash;
  ratio?: string;
  src?: string;
  poster?: string;
  className?: string;
}) {
  return (
    <figure className={cn("min-w-0", className)} data-placeholder="media">
      <div
        className="relative overflow-hidden border border-border bg-muted-surface"
        style={{ aspectRatio: ratio }}
      >
        {src ? (
          <video
            className="absolute inset-0 size-full object-cover"
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            autoPlay
            aria-label={label}
          />
        ) : (
          <div
            className="lab-media-wash absolute inset-0"
            style={{ backgroundImage: washes[wash] }}
            role="img"
            aria-label={label}
          />
        )}
        <div
          className={cn(backgroundPatternDotGridClasses, "pointer-events-none absolute inset-0")}
          style={{ backgroundColor: "transparent" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_srgb,var(--color-background-body)_28%,transparent),transparent_46%)]" />
        <p className="type-code absolute right-4 bottom-3 text-fg">{caption ?? "Placeholder media"}</p>
      </div>
    </figure>
  );
}
