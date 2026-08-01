"use client";

import { motion, useReducedMotion } from "framer-motion";
import { clsx } from "clsx";
import { duration, ease, spring, viewportEnter } from "@/lib/motion";

type SectionHeaderProps = {
  /** Small accent label above the title. */
  eyebrow: string;
  /** Bold lead-in of the two-part title. */
  title: string;
  /** Lighter tail of the two-part title. */
  tagline: string;
  /** Optional supporting paragraph below the title. */
  children?: React.ReactNode;
  className?: string;
};

const wordVariants = {
  hidden: { y: "110%", opacity: 0, filter: "blur(4px)" },
  visible: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: spring.gentle,
  },
};

export default function SectionHeader({
  eyebrow,
  title,
  tagline,
  children,
  className,
}: SectionHeaderProps) {
  const preferReduced = useReducedMotion();

  const parts = [
    ...title.split(" ").map((word) => ({ word, tail: false })),
    { word: "—", tail: true },
    ...tagline.split(" ").map((word) => ({ word, tail: true })),
  ];

  const heading = preferReduced ? (
    <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
      <span className="section-title-lead">{title}</span>{" "}
      <span className="section-title-tail">— {tagline}</span>
    </h2>
  ) : (
    <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
      <span className="sr-only">{`${title} — ${tagline}`}</span>
      <motion.span
        aria-hidden
        className="inline-flex flex-wrap justify-center gap-x-[0.3em]"
        initial="hidden"
        whileInView="visible"
        viewport={viewportEnter}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.045 } },
        }}
      >
        {parts.map(({ word, tail }, i) => (
          <span
            key={`${word}-${i}`}
            className="-mb-[0.15em] inline-block overflow-hidden pb-[0.15em]"
          >
            <motion.span
              className={clsx(
                "inline-block",
                tail ? "section-title-tail" : "section-title-lead"
              )}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </h2>
  );

  return (
    <div
      className={clsx(
        "mb-10 flex flex-col items-center text-center sm:mb-14",
        className
      )}
    >
      <motion.span
        className="section-eyebrow mb-4"
        initial={preferReduced ? undefined : { opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportEnter}
        transition={{ duration: duration.base, ease: ease.outExpo }}
      >
        {eyebrow}
      </motion.span>

      {heading}

      {children ? (
        <motion.p
          className="text-secondary mt-5 max-w-2xl text-[0.95rem] leading-relaxed sm:text-base"
          initial={
            preferReduced ? undefined : { opacity: 0, y: 20, filter: "blur(4px)" }
          }
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={viewportEnter}
          transition={{ duration: duration.slow, ease: ease.outExpo, delay: 0.1 }}
        >
          {children}
        </motion.p>
      ) : null}
    </div>
  );
}
