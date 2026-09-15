import { motion } from "motion/react";
import type { ReactNode } from "react";
import { useLabMotion } from "./useLabMotion";

/** LOCAL PLACEHOLDER — restrained scroll reveal. Not a WMDS atom. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const motionTokens = useLabMotion("medium");

  return (
    <motion.div
      className={className}
      initial={motionTokens.hidden}
      whileInView={motionTokens.visible}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ ...motionTokens.transition, delay: motionTokens.reduce ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}
