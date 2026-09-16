import {
  motion,
  type MotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { capabilities, systems } from "../content";
import { scrub } from "./scrub";

/**
 * LOCAL PLACEHOLDER — pinned assembly scrub.
 * Scroll progress drives separated plant parts → one elevation. Labels step with progress.
 */
export function ReactorScrub() {
  const reduce = Boolean(useReducedMotion());
  const trackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const assemble = useTransform(scrollYProgress, (value) => scrub(value, 0, 0.82));
  const roofY = useTransform(assemble, [0, 1], [-78, 0]);
  const leftX = useTransform(assemble, [0, 1], [-96, 0]);
  const rightX = useTransform(assemble, [0, 1], [96, 0]);
  const plinthY = useTransform(assemble, [0, 1], [56, 0]);
  const coreScale = useTransform(assemble, [0, 1], [0.52, 1]);
  const vesselScale = useTransform(assemble, [0, 1], [0.86, 1]);
  const collarScale = useTransform(assemble, [0, 1], [1.28, 1]);
  const collarOpacity = useTransform(assemble, [0.15, 0.7], [0.15, 1]);

  const [active, setActive] = useState(reduce ? capabilities.length - 1 : 0);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (reduce) return;
    const next = Math.min(capabilities.length - 1, Math.floor(value * capabilities.length));
    setActive(next);
  });

  const stage = (
    <div className="lab-bleed relative h-svh overflow-hidden border-y border-border bg-body">
      <div className="grid-page h-full" style={{ paddingBlock: 0 }}>
        <div className="band h-full items-center">
          <div className="col-span-full lg:col-span-4">
            <p className="type-heading-6 text-muted">{systems.eyebrow}</p>
            <h2 className="type-display-2 mt-4 text-fg">{systems.title}</h2>
            <p className="type-body mt-6 max-w-md text-muted">{systems.body}</p>
            <div className="mt-10 min-h-36" aria-live="polite">
              <p className="type-code text-muted">{String(active + 1).padStart(2, "0")}</p>
              <h3 className="type-heading-2 mt-3 text-fg">{capabilities[active].title}</h3>
              <p className="type-supporting mt-3 max-w-sm text-muted">{capabilities[active].body}</p>
            </div>
          </div>
          <div className="col-span-full lg:col-span-8">
            <PlantMark
              roofY={reduce ? 0 : roofY}
              leftX={reduce ? 0 : leftX}
              rightX={reduce ? 0 : rightX}
              plinthY={reduce ? 0 : plinthY}
              coreScale={reduce ? 1 : coreScale}
              vesselScale={reduce ? 1 : vesselScale}
              collarScale={reduce ? 1 : collarScale}
              collarOpacity={reduce ? 1 : collarOpacity}
            />
          </div>
        </div>
      </div>
    </div>
  );

  if (reduce) {
    return (
      <section id="systems" className="col-span-full">
        {stage}
      </section>
    );
  }

  return (
    <section id="systems" ref={trackRef} className="col-span-full h-[280svh]">
      <div className="sticky top-0 h-svh overflow-hidden">{stage}</div>
    </section>
  );
}

function PlantMark({
  roofY,
  leftX,
  rightX,
  plinthY,
  coreScale,
  vesselScale,
  collarScale,
  collarOpacity,
}: {
  roofY: number | MotionValue<number>;
  leftX: number | MotionValue<number>;
  rightX: number | MotionValue<number>;
  plinthY: number | MotionValue<number>;
  coreScale: number | MotionValue<number>;
  vesselScale: number | MotionValue<number>;
  collarScale: number | MotionValue<number>;
  collarOpacity: number | MotionValue<number>;
}) {
  return (
    <svg
      viewBox="0 0 640 520"
      className="mx-auto h-auto w-full max-w-3xl text-fg"
      role="img"
      aria-label="Placeholder plant assembly — parts join as you scroll"
    >
      <motion.g style={{ y: plinthY }}>
        <rect x="120" y="430" width="400" height="18" fill="currentColor" opacity="0.22" />
        <rect x="168" y="412" width="304" height="12" fill="currentColor" opacity="0.38" />
      </motion.g>

      <motion.g style={{ x: leftX }}>
        <rect x="86" y="168" width="22" height="236" fill="var(--color-info)" opacity="0.85" />
        <rect x="78" y="148" width="38" height="22" fill="currentColor" opacity="0.55" />
        <rect x="78" y="400" width="38" height="16" fill="currentColor" opacity="0.4" />
      </motion.g>

      <motion.g style={{ x: rightX }}>
        <rect x="532" y="168" width="22" height="236" fill="var(--color-warning)" opacity="0.8" />
        <rect x="524" y="148" width="38" height="22" fill="currentColor" opacity="0.55" />
        <rect x="524" y="400" width="38" height="16" fill="currentColor" opacity="0.4" />
      </motion.g>

      <motion.g style={{ scale: vesselScale, transformOrigin: "320px 280px" }}>
        <rect
          x="214"
          y="142"
          width="212"
          height="268"
          rx="8"
          fill="color-mix(in srgb, var(--color-background-surface) 70%, var(--color-primary))"
          stroke="var(--color-border)"
          strokeWidth="1.5"
        />
        <motion.g style={{ scale: coreScale, transformOrigin: "320px 276px" }}>
          <circle cx="320" cy="276" r="58" fill="color-mix(in srgb, var(--color-primary) 55%, black)" />
          <circle cx="320" cy="276" r="28" fill="var(--color-warning)" opacity="0.9" />
        </motion.g>
        <motion.ellipse
          cx="320"
          cy="276"
          rx="92"
          ry="118"
          fill="none"
          stroke="var(--color-info)"
          strokeWidth="1.25"
          style={{ scale: collarScale, opacity: collarOpacity, transformOrigin: "320px 276px" }}
        />
      </motion.g>

      <motion.g style={{ y: roofY }}>
        <rect x="188" y="108" width="264" height="16" fill="currentColor" opacity="0.82" />
        <rect x="248" y="86" width="144" height="22" fill="currentColor" opacity="0.5" />
      </motion.g>
    </svg>
  );
}
