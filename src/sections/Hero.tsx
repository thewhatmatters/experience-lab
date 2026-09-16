import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { hero } from "../content";
import { VesselMark } from "../placeholders/VesselMark";

/** LOCAL PLACEHOLDER — full-bleed header: split title, vessel between the words, parallax. */
export function Hero() {
  const reduce = Boolean(useReducedMotion());
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const vesselY = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const ledeY = useTransform(scrollYProgress, [0, 1], [0, 36]);

  return (
    <section
      ref={ref}
      className="lab-bleed relative h-svh min-h-[54rem] overflow-hidden text-white"
      style={{ backgroundImage: "linear-gradient(var(--lab-sky-start), var(--lab-sky-end))" }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(180deg, var(--lab-sky-overlay) 50%, transparent)",
          opacity: 0.72,
        }}
      />

      <motion.div
        className="absolute inset-[-8%] z-[1] flex items-center justify-center text-white"
        style={{ y: reduce ? 0 : vesselY }}
      >
        <VesselMark className="relative h-[min(82vh,44rem)] w-auto text-white" />
      </motion.div>

      <motion.div
        className="absolute inset-x-[6vw] top-[18%] z-10"
        style={{ y: reduce ? 0 : titleY }}
      >
        <h1 className="lab-hero text-white">
          <span className="block">{hero.display[0]}</span>
          <span className="mt-[0.04em] flex items-baseline justify-between gap-8">
            <span>{hero.display[1]}</span>
            <span>{hero.display[2]}</span>
          </span>
        </h1>
      </motion.div>

      <motion.div
        className="absolute bottom-[calc(var(--leading-base)*5)] left-[6vw] z-10 flex max-w-xs gap-6"
        style={{ y: reduce ? 0 : ledeY }}
      >
        <span className="mt-1 h-28 w-px shrink-0 bg-[var(--lab-lede)]/40" aria-hidden="true" />
        <p className="type-body text-[var(--lab-lede)]">{hero.lede}</p>
      </motion.div>
    </section>
  );
}
