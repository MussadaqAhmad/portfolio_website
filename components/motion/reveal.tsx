"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import {
  fadeBlur,
  fadeUp,
  scaleIn,
  slideUp,
  viewportEnter,
  viewportOnce,
} from "@/lib/motion";
import { clsx } from "clsx";

const presets = {
  fadeUp,
  fadeBlur,
  scaleIn,
  slideUp,
} as const;

type Preset = keyof typeof presets;

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  preset?: Preset;
  once?: boolean;
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

export default function Reveal({
  preset = "fadeUp",
  once = true,
  delay = 0,
  className,
  children,
  ...rest
}: RevealProps) {
  const preferReduced = useReducedMotion();

  if (preferReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={clsx(className)}
      variants={presets[preset]}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={once ? viewportEnter : viewportOnce}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
