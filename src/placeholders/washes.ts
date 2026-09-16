export const washes = {
  slate:
    "linear-gradient(128deg, color-mix(in srgb, var(--color-primary) 42%, var(--color-background-muted)) 0%, color-mix(in srgb, var(--color-info) 28%, var(--color-background-surface)) 48%, color-mix(in srgb, var(--color-primary) 18%, var(--color-background-body)) 100%)",
  ember:
    "linear-gradient(150deg, color-mix(in srgb, var(--color-warning) 46%, var(--color-background-muted)) 0%, color-mix(in srgb, var(--color-primary) 30%, var(--color-background-surface)) 46%, color-mix(in srgb, var(--color-warning) 16%, var(--color-background-body)) 100%)",
  tide: "linear-gradient(160deg, color-mix(in srgb, var(--color-info) 48%, var(--color-background-muted)) 0%, color-mix(in srgb, var(--color-accent) 24%, var(--color-background-surface)) 50%, color-mix(in srgb, var(--color-info) 18%, var(--color-background-body)) 100%)",
  field:
    "linear-gradient(118deg, color-mix(in srgb, var(--color-success) 36%, var(--color-background-muted)) 0%, color-mix(in srgb, var(--color-primary) 22%, var(--color-background-surface)) 46%, color-mix(in srgb, var(--color-success) 14%, var(--color-background-body)) 100%)",
  night:
    "linear-gradient(158deg, color-mix(in srgb, var(--color-warning) 42%, #1c140a) 0%, color-mix(in srgb, var(--color-primary) 36%, #141820) 38%, color-mix(in srgb, var(--color-info) 28%, #0a0c10) 72%, #07080b 100%)",
} as const;

export type MediaWash = keyof typeof washes;
