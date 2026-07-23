"use client";

import { motion, useReducedMotion } from "framer-motion";
import { duration, ease, spring, viewportEnter } from "@/lib/motion";

type TextRevealProps = {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  mode?: "words" | "lines" | "blur";
  delay?: number;
};

export default function TextReveal({
  children,
  className,
  as = "h2",
  mode = "words",
  delay = 0,
}: TextRevealProps) {
  const preferReduced = useReducedMotion();
  const Tag = motion[as];
  const words = children.split(" ");

  if (preferReduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  if (mode === "blur") {
    return (
      <Tag
        className={className}
        initial={{ opacity: 0, filter: "blur(12px)", y: 16 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={viewportEnter}
        transition={{ duration: duration.slow, ease: ease.outExpo, delay }}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Tag className={className} aria-label={children}>
      <span className="sr-only">{children}</span>
      <motion.span
        className="inline-flex flex-wrap justify-center gap-x-[0.3em]"
        aria-hidden
        initial="hidden"
        whileInView="visible"
        viewport={viewportEnter}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.045,
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em]">
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "110%", opacity: 0, filter: "blur(4px)" },
                visible: {
                  y: "0%",
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: spring.gentle,
                },
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
