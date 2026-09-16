import { backgroundPatternDotGridClasses, cn } from "@whatmatters/wmds";
import { washes, type MediaWash } from "../placeholders/washes";

/**
 * LOCAL PLACEHOLDER — continuous cinematic fill (gradient + dot-grid, or muted loop).
 * Playback is live, never frame-scrubbed. Size comes from the parent box.
 */
export function LabFilm({
  label,
  wash = "night",
  src,
  poster,
  caption,
  className,
}: {
  label: string;
  wash?: MediaWash;
  src?: string;
  poster?: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} data-placeholder="media">
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
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_38%,color-mix(in_srgb,var(--color-warning)_24%,transparent),transparent_56%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.46),transparent_42%,rgba(0,0,0,0.16))]" />
      {caption ? <p className="type-code absolute right-4 bottom-3 text-white/80">{caption}</p> : null}
    </div>
  );
}
