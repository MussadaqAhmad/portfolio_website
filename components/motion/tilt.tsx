"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/motion";
import { useElementPointer } from "@/lib/motion-hooks";
import { clsx } from "clsx";

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
};

export default function Tilt({
  children,
  className,
  maxTilt = 8,
  glare = true,
}: TiltProps) {
  const preferReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { pointer, onMove, onLeave } = useElementPointer(
    ref,
    !preferReduced
  );

  const rotateX = -pointer.y * maxTilt * 2;
  const rotateY = pointer.x * maxTilt * 2;

  return (
    <motion.div
      ref={ref}
      className={clsx("relative will-change-transform", className)}
      style={{ transformStyle: "preserve-3d", perspective: 900 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{
        rotateX,
        rotateY,
        scale: pointer.active ? 1.02 : 1,
      }}
      transition={spring.gentle}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
          style={{
            background: `radial-gradient(circle at ${50 + pointer.x * 100}% ${
              50 + pointer.y * 100
            }%, rgba(255,255,255,0.28), transparent 55%)`,
            opacity: pointer.active ? 1 : 0,
            mixBlendMode: "overlay",
          }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
}
