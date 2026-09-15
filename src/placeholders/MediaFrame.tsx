import { cn } from "@whatmatters/wmds";

const washes = {
  slate:
    "linear-gradient(128deg, color-mix(in srgb, var(--color-background-muted) 70%, var(--color-primary)) 0%, var(--color-background-surface) 48%, color-mix(in srgb, var(--color-info) 35%, var(--color-background-body)) 100%)",
  ember:
    "linear-gradient(150deg, color-mix(in srgb, var(--color-warning) 28%, var(--color-background-body)) 0%, var(--color-background-muted) 42%, color-mix(in srgb, var(--color-primary) 40%, black) 100%)",
  tide: "linear-gradient(160deg, color-mix(in srgb, var(--color-info) 32%, var(--color-background-body)) 0%, var(--color-background-surface) 50%, color-mix(in srgb, var(--color-accent) 22%, var(--color-background-muted)) 100%)",
  field:
    "linear-gradient(118deg, color-mix(in srgb, var(--color-success) 18%, var(--color-background-muted)) 0%, var(--color-background-body) 46%, color-mix(in srgb, var(--color-primary) 24%, var(--color-background-surface)) 100%)",
} as const;

export type MediaWash = keyof typeof washes;

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
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_srgb,var(--color-background-body)_35%,transparent),transparent_42%)]" />
        <p className="type-code absolute right-4 bottom-3 text-fg/80">{caption ?? "Placeholder media"}</p>
      </div>
    </figure>
  );
}
