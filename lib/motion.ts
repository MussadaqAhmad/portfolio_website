import type { Transition, Variants } from "framer-motion";

/** Premium timing scale — Apple-keynote cadence */
export const duration = {
  fast: 0.2,
  base: 0.4,
  slow: 0.6,
  cinematic: 0.9,
} as const;

/** Cubic-bezier easings */
export const ease = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  out: [0.33, 1, 0.68, 1] as const,
};

export const spring = {
  soft: { type: "spring", stiffness: 90, damping: 18 } as const,
  gentle: { type: "spring", stiffness: 120, damping: 20 } as const,
  snappy: { type: "spring", stiffness: 260, damping: 22 } as const,
  magnetic: { type: "spring", stiffness: 180, damping: 18, mass: 0.4 } as const,
  float: { type: "spring", stiffness: 60, damping: 14 } as const,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...spring.soft, duration: duration.slow },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: "blur(4px)",
    transition: { duration: duration.base, ease: ease.out },
  },
};

export const fadeBlur: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", scale: 0.98 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
  exit: {
    opacity: 0,
    filter: "blur(6px)",
    transition: { duration: duration.base, ease: ease.out },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: spring.gentle,
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: duration.fast, ease: ease.out },
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: duration.base, ease: ease.out },
  },
};

export const maskReveal: Variants = {
  hidden: { opacity: 0, y: "40%", clipPath: "inset(0 0 100% 0)" },
  visible: {
    opacity: 1,
    y: "0%",
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
};

export const staggerContainer = (
  stagger = 0.06,
  delayChildren = 0.08
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: spring.gentle,
  },
};

export const viewportOnce = {
  once: false,
  amount: 0.25,
  margin: "-60px 0px -60px 0px",
} as const;

export const viewportEnter = {
  once: true,
  amount: 0.2,
  margin: "-40px 0px",
} as const;

export function fadeUpDelay(delay = 0): Transition {
  return { ...spring.soft, delay };
}
