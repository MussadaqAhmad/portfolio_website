"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function ScrollProgress() {
  const preferReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: preferReduced ? 400 : 90,
    damping: preferReduced ? 40 : 22,
    mass: preferReduced ? 0.2 : 0.35,
    restDelta: 0.0005,
  });

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.02, 1],
    [0, 0.85, 1]
  );

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[1100]"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    >
      <div className="scroll-progress-track relative h-[3px] w-full overflow-visible">
        <motion.div
          className="relative h-full origin-left"
          style={{ scaleX }}
        >
          <div className="scroll-progress-bar absolute inset-0" />
          <motion.div
            className="scroll-progress-glow"
            style={{ opacity: glowOpacity }}
          />
          <motion.div
            className="scroll-progress-tip absolute right-0 top-1/2"
            style={{ opacity: glowOpacity }}
          />
        </motion.div>
      </div>
    </div>
  );
}
