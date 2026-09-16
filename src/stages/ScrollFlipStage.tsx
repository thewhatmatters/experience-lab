import { cn } from "@whatmatters/wmds";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { flipHold, mission } from "../content";
import { LabFilm } from "./LabFilm";
import { scrub } from "./scrub";

/**
 * LOCAL PLACEHOLDER — Motion stand-in for GSAP Flip + ScrollTrigger pin.
 *
 * Phases (scroll-reversible):
 * 1. Inset media in the mission / name band
 * 2. Scrubbed morph to full viewport (width + position eased)
 * 3. Pinned full-bleed hold with center line + labels
 * 4. Release as a full-width in-flow block (does not shrink back to a card)
 */
export function ScrollFlipStage() {
  const reduce = Boolean(useReducedMotion());
  const trackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const expand = useTransform(scrollYProgress, (value) => scrub(value, 0, 0.34));
  const insetTop = useTransform(expand, [0, 1], ["22%", "0%"]);
  const insetX = useTransform(expand, [0, 1], ["7vw", "0vw"]);
  const insetBottom = useTransform(expand, [0, 1], ["8%", "0%"]);
  const radius = useTransform(expand, [0, 1], [4, 0]);
  const frameBorder = useTransform(expand, [0, 0.85], ["rgba(255,255,255,0.16)", "rgba(255,255,255,0)"]);

  const copyOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.16], [0, -28]);
  const copyVisibility = useTransform(scrollYProgress, (value) => (value > 0.16 ? "hidden" : "visible"));
  const overlayOpacity = useTransform(scrollYProgress, [0.2, 0.34], [0, 1]);

  if (reduce) {
    return (
      <section id="mission" className="col-span-full">
        <MissionCopy />
        <div className="lab-bleed relative h-svh overflow-hidden">
          <LabFilm label="Placeholder campus night film" wash="night" />
          <HoldOverlay />
        </div>
      </section>
    );
  }

  return (
    <section id="mission" ref={trackRef} className="col-span-full h-[400svh]">
      <div className="lab-bleed sticky top-0 h-svh overflow-hidden bg-body">
        <motion.div
          className="absolute overflow-hidden border will-change-[inset,border-radius]"
          style={{
            top: insetTop,
            left: insetX,
            right: insetX,
            bottom: insetBottom,
            borderRadius: radius,
            borderColor: frameBorder,
          }}
        >
          <LabFilm label="Placeholder campus night film" wash="night" />
          <motion.div className="absolute inset-0" style={{ opacity: overlayOpacity }}>
            <HoldOverlay />
          </motion.div>
        </motion.div>

        <motion.div className="absolute inset-0 z-10" style={{ opacity: copyOpacity, y: copyY, visibility: copyVisibility }}>
          <MissionCopy overlay />
        </motion.div>
      </div>
    </section>
  );
}

function MissionCopy({ overlay = false }: { overlay?: boolean }) {
  return (
    <div className={cn("grid-page", overlay && "h-full pt-[calc(var(--leading-base)*5)]")} style={{ paddingBlock: overlay ? 0 : undefined }}>
      <div className={cn("band", overlay ? "items-start" : "py-[calc(var(--leading-base)*8)]")}>
        <div className="col-span-full lg:col-span-4">
          <p className={cn("type-heading-6", overlay ? "text-white/70" : "text-muted")}>{mission.eyebrow}</p>
          <h2 className={cn("type-display-2 mt-4", overlay ? "text-white" : "text-fg")}>{mission.title}</h2>
        </div>
        <div className="col-span-full lg:col-span-4">
          <p className={cn("type-body", overlay ? "text-white/90" : "text-fg")}>{mission.body}</p>
        </div>
        <div className={cn("col-span-full lg:col-span-4", overlay && "max-lg:hidden")}>
          <p className={cn("type-supporting", overlay ? "text-white/70" : "text-muted")}>{mission.aside}</p>
        </div>
      </div>
    </div>
  );
}

function HoldOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 text-white" aria-hidden="true">
      <div className="absolute top-1/2 right-[6vw] left-[6vw] h-px -translate-y-1/2 bg-white/80" />
      <div className="absolute top-1/2 left-[6vw] max-w-xs -translate-y-1/2 pr-8">
        <p className="type-heading-3 text-white">{flipHold.name}</p>
        <p className="type-code mt-2 text-white/80">{flipHold.pronunciation}</p>
      </div>
      <div className="absolute top-1/2 right-[6vw] max-w-md -translate-y-1/2 pl-8 text-right">
        <p className="type-body text-white/90">{flipHold.definition}</p>
      </div>
    </div>
  );
}
