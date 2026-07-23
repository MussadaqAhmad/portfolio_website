"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { duration, ease } from "@/lib/motion";

export default function SectionDivider() {
  const preferReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.3, 1, 0.2]);

  return (
    <motion.div
      ref={ref}
      className="relative my-24 hidden h-16 w-1 overflow-hidden rounded-full bg-gray-200 sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 40, scaleY: 0.5 }}
      animate={{ opacity: 1, y: 0, scaleY: 1 }}
      transition={{ duration: duration.slow, ease: ease.outExpo, delay: 0.2 }}
      style={preferReduced ? undefined : { scaleY, opacity }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-400 to-transparent dark:via-white/50"
        animate={
          preferReduced
            ? undefined
            : { y: ["-100%", "100%"] }
        }
        transition={{
          duration: 2.4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.6,
        }}
      />
    </motion.div>
  );
}
