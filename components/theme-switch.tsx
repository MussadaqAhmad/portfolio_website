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
      className="fixed bottom-5 right-5 z-[999] flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 text-gray-800 shadow-2xl backdrop-blur-[0.5rem] dark:border-white/[0.06] dark:bg-[#151515] dark:text-[#F5F5F5] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
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
