import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { capabilities, systems } from "../content";
import { Surface } from "../placeholders/Surface";
import { VesselMark } from "../placeholders/VesselMark";
import { scrub } from "./scrub";

/**
 * LOCAL PLACEHOLDER — pinned assembly scrub on the ice systems band.
 * Scroll drives separated rods → assembled vessel. Labels step with progress.
 */
export function ReactorScrub() {
  const reduce = Boolean(useReducedMotion());
  const trackRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const assemble = useTransform(scrollYProgress, (value) => scrub(value, 0.06, 0.88));
  const rodY = useTransform(assemble, [0, 1], [-90, 0]);
  const vesselY = useTransform(assemble, [0, 1], [80, 0]);
  const vesselScale = useTransform(assemble, [0, 1], [0.82, 1]);

  const [active, setActive] = useState(reduce ? capabilities.length - 1 : 0);
  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (reduce) return;
    const next = Math.min(capabilities.length - 1, Math.floor(value * capabilities.length));
    setActive(next);
  });

  const intro = (
    <div className="grid-page pt-[calc(var(--leading-base)*8)]">
      <div className="band items-start">
        <p className="type-heading-6 col-span-full text-muted lg:col-span-3">{systems.eyebrow}</p>
        <p className="type-heading-2 col-span-full text-fg lg:col-span-8 lg:col-start-5">{systems.body}</p>
        <div className="col-span-full mt-10 flex flex-wrap items-end justify-between gap-6">
          <p className="type-code text-muted">{systems.badge}</p>
          <dl className="flex flex-wrap gap-x-10 gap-y-2">
            {systems.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="type-supporting text-muted">{spec.label}</dt>
                <dd className="type-heading-5 text-fg">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );

  const stage = (
    <div className="relative h-[calc(100svh-8rem)] overflow-hidden">
      <div className="grid-page h-full">
        <div className="band h-full items-center">
          <div className="col-span-full lg:col-span-3">
            <p className="type-heading-4 text-fg">{capabilities[active === 0 || active === 2 ? active : 0].title}</p>
            <p className="type-supporting mt-3 text-muted">
              {capabilities[active === 0 || active === 2 ? active : 0].body}
            </p>
          </div>
          <div className="col-span-full flex justify-center lg:col-span-6">
            <motion.div
              className="text-fg"
              style={{ y: reduce ? 0 : vesselY, scale: reduce ? 1 : vesselScale }}
            >
              <motion.div style={{ y: reduce ? 0 : rodY }}>
                <VesselMark className="h-[min(56vh,28rem)] w-auto" />
              </motion.div>
            </motion.div>
          </div>
          <div className="col-span-full text-right lg:col-span-3">
            <p className="type-heading-4 text-fg">{capabilities[active === 1 || active === 3 ? active : 1].title}</p>
            <p className="type-supporting mt-3 text-muted">
              {capabilities[active === 1 || active === 3 ? active : 1].body}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  if (reduce) {
    return (
      <Surface id="systems" tone="ice">
        {intro}
        {stage}
      </Surface>
    );
  }

  return (
    <section id="systems" ref={trackRef} className="col-span-full h-[280svh]">
      <Surface as="div" tone="ice" className="sticky top-0 h-svh overflow-hidden">
        {intro}
        {stage}
      </Surface>
    </section>
  );
}
