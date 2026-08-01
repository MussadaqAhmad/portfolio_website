"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { duration, ease, fadeUpDelay } from "@/lib/motion";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function SectionDivider() {
  const preferReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { scrollY } = useScroll();
  const fade = useTransform(scrollY, [0, 180], [1, 0]);
  const drift = useTransform(scrollY, [0, 180], [0, 24]);

  return (
    <motion.div
      ref={ref}
      style={preferReduced ? undefined : { opacity: fade, y: drift }}
      className="my-16 flex flex-col items-center sm:my-24"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={fadeUpDelay(0.55)}
    >
      <Link
        href="#about"
        onClick={() => {
          setActiveSection("About");
          setTimeOfLastClick(Date.now());
        }}
        className="group flex flex-col items-center gap-3 outline-none"
        aria-label="Scroll to explore About section"
      >
        <span className="text-muted font-display text-[0.7rem] font-semibold uppercase tracking-widest transition-colors group-hover:text-gray-800 dark:group-hover:text-white">
          Scroll to explore
        </span>

        <span className="icon-button relative flex h-14 w-7 items-start justify-center rounded-full pt-2 transition">
          <motion.span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]"
            animate={
              preferReduced
                ? undefined
                : { y: [0, 18, 0], opacity: [1, 0.35, 1] }
            }
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
          />
        </span>

        <motion.span
          aria-hidden
          className="text-faint flex flex-col items-center gap-0.5"
          animate={preferReduced ? undefined : { y: [0, 4, 0] }}
          transition={{
            duration: 1.6,
            ease: ease.inOut,
            repeat: Infinity,
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="opacity-70 transition group-hover:opacity-100"
          >
            <path
              d="M2 5l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </Link>

      {!preferReduced && (
        <motion.div
          aria-hidden
          className="mt-4 h-12 w-px overflow-hidden bg-gradient-to-b from-[rgba(var(--accent-rgb),0.35)] via-[rgba(var(--accent-rgb),0.15)] to-transparent"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: duration.slow, ease: ease.outExpo, delay: 0.7 }}
        >
          <motion.div
            className="h-full w-full bg-gradient-to-b from-transparent via-[var(--accent)] to-transparent"
            animate={{ y: ["-100%", "100%"] }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
