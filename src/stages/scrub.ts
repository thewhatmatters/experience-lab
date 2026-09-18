/** Map a progress value onto 0–1 within [start, end], then ease. */
export function scrub(value: number, start: number, end: number, ease: (t: number) => number = easeSpatial) {
  const t = Math.min(1, Math.max(0, (value - start) / (end - start)));
  return ease(t);
}

/** Approximates WMDS / Astryx standard ease (cubic-bezier 0.24, 1, 0.4, 1). */
export function easeSpatial(t: number) {
  return 1 - (1 - t) ** 3;
}
