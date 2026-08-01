"use client";

import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { spring } from "@/lib/motion";
import { useMagnetic } from "@/lib/motion-hooks";
import { useReducedMotion } from "framer-motion";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const preferReduced = useReducedMotion();
  const { ref, offset, onMove, onLeave } = useMagnetic<HTMLButtonElement>(
    0.35,
    !preferReduced
  );

  return (
    <motion.button
      ref={ref}
      className="icon-button fixed bottom-5 right-5 z-[999] flex h-[3rem] w-[3rem] items-center justify-center rounded-full"
      onClick={toggleTheme}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: offset.x, y: offset.y }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95, rotate: 20 }}
      transition={spring.magnetic}
      aria-label="Toggle color theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 40, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="inline-flex"
        >
          {theme === "light" ? <BsSun /> : <BsMoon />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
