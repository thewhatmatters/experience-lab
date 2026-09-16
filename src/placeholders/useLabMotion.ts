import { motionTransitionProp, type MotionDuration } from "@whatmatters/wmds";
import { useReducedMotion } from "motion/react";

/**
 * LOCAL PLACEHOLDER — page-level reveal helper.
 * WMDS exports motionTransitionProp but not a marketing whileInView pattern.
 */
export function useLabMotion(duration: MotionDuration = "medium") {
  const reduce = Boolean(useReducedMotion());

  return {
    reduce,
    transition: reduce ? { duration: 0 } : motionTransitionProp(duration),
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
}
