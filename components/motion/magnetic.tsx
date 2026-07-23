"use client";

import { motion, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/motion";
import { useMagnetic } from "@/lib/motion-hooks";
import { clsx } from "clsx";

type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  as?: "div" | "span";
};

export default function Magnetic({
  children,
  className,
  strength = 0.3,
  as = "div",
}: MagneticProps) {
  const preferReduced = useReducedMotion();
  const { ref, offset, onMove, onLeave } = useMagnetic<HTMLDivElement>(
    strength,
    !preferReduced
  );
  const Component = motion[as];

  return (
    <Component
      ref={ref}
      className={clsx("inline-flex will-change-transform", className)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={spring.magnetic}
    >
      {children}
    </Component>
  );
}
