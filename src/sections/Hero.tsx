import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { hero } from "../content";
import { VesselMark } from "../placeholders/VesselMark";

/** LOCAL PLACEHOLDER — full-bleed header with parallax vessel + display type. */
export function Hero() {
  const reduce = Boolean(useReducedMotion());
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const vesselY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const ledeY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={ref}
      className="lab-bleed relative h-[120svh] overflow-hidden bg-[color-mix(in_srgb,var(--color-info)_28%,var(--color-background-muted))]"
    >
      <motion.div
        className="absolute inset-[-12%] flex items-center justify-center text-white"
        style={{ y: reduce ? 0 : vesselY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--color-info) 42%, #d7e6f4) 0%, color-mix(in srgb, var(--color-background-muted) 40%, #f3efe8) 100%)",
          }}
        />
        <VesselMark className="relative h-[min(72vh,36rem)] w-auto text-white" />
      </motion.div>

      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center px-[6vw]"
        style={{ y: reduce ? 0 : titleY }}
      >
        <h1 className="lab-hero text-center text-white">
          {hero.display[0]}
          <br />
          {hero.display[1]}
        </h1>
      </motion.div>

      <motion.p
        className="type-body absolute bottom-[calc(var(--leading-base)*6)] left-[6vw] z-10 max-w-xs text-white"
        style={{ y: reduce ? 0 : ledeY }}
      >
        {hero.lede}
      </motion.p>
    </section>
  );
}
