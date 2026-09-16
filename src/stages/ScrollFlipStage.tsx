import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { flipHold, mission } from "../content";
import { LabFilm } from "./LabFilm";
import { scrub } from "./scrub";

/**
 * LOCAL PLACEHOLDER — Motion stand-in for GSAP Flip + ScrollTrigger pin.
 * Origin: rounded inset in the white mission band. Target: full viewport, then in-flow release.
 */
export function ScrollFlipStage() {
  const reduce = Boolean(useReducedMotion());
  const trackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const expand = useTransform(scrollYProgress, (value) => scrub(value, 0, 0.36));
  const insetTop = useTransform(expand, [0, 1], ["18%", "0%"]);
  const insetLeft = useTransform(expand, [0, 1], ["36vw", "0vw"]);
  const insetRight = useTransform(expand, [0, 1], ["6vw", "0vw"]);
  const insetBottom = useTransform(expand, [0, 1], ["10%", "0%"]);
  const radius = useTransform(expand, [0, 1], [16, 0]);

  const copyOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const copyVisibility = useTransform(scrollYProgress, (value) => (value > 0.2 ? "hidden" : "visible"));
  const overlayOpacity = useTransform(scrollYProgress, [0.28, 0.4], [0, 1]);

  if (reduce) {
    return (
      <section id="flip" className="col-span-full">
        <div className="lab-bleed relative h-svh overflow-hidden bg-body">
          <LabFilm label="Placeholder campus film" wash="night" />
          <HoldOverlay />
        </div>
      </section>
    );
  }

  return (
    <section id="flip" ref={trackRef} className="col-span-full h-[400svh]">
      <div className="lab-bleed sticky top-0 h-svh overflow-hidden bg-body">
        <motion.div
          className="pointer-events-none absolute top-[18%] left-[6vw] z-10 max-w-[26vw]"
          style={{ opacity: copyOpacity, visibility: copyVisibility }}
        >
          <p className="type-body text-fg">{mission.aside}</p>
        </motion.div>

        <motion.div
          className="absolute overflow-hidden will-change-[inset,border-radius]"
          style={{
            top: insetTop,
            left: insetLeft,
            right: insetRight,
            bottom: insetBottom,
            borderRadius: radius,
          }}
        >
          <LabFilm label="Placeholder campus film" wash="night" />
          <motion.div className="absolute inset-0" style={{ opacity: overlayOpacity }}>
            <HoldOverlay />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function HoldOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 text-white" aria-hidden="true">
      <div className="absolute top-1/2 right-[6vw] left-[6vw] h-px -translate-y-1/2 bg-white/85" />
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
