"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { spring } from "@/lib/motion";
import { useElementPointer } from "@/lib/motion-hooks";
import { clsx } from "clsx";

type GlassSurfaceProps = {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
};

export default function GlassSurface({
  children,
  className,
  interactive = true,
}: GlassSurfaceProps) {
  const preferReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { pointer, onMove, onLeave } = useElementPointer(
    ref,
    interactive && !preferReduced
  );

  return (
    <motion.div
      ref={ref}
      className={clsx("glass-surface glass-border-glow", className)}
      data-active={pointer.active ? "true" : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={
        {
          "--mx": `${50 + pointer.x * 100}%`,
          "--my": `${50 + pointer.y * 100}%`,
        } as React.CSSProperties
      }
      animate={
        interactive
          ? {
              y: pointer.active ? -6 : 0,
              rotateX: -pointer.y * 4,
              rotateY: pointer.x * 4,
            }
          : undefined
      }
      transition={spring.gentle}
    >
      {/* Mouse-reactive spotlight */}
      {interactive && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[2] rounded-[inherit]"
          style={{
            background: `radial-gradient(500px circle at ${
              50 + pointer.x * 100
            }% ${50 + pointer.y * 100}%, rgba(255,255,255,0.16), transparent 40%)`,
            opacity: pointer.active ? 1 : 0,
          }}
        />
      )}
      <div className="relative z-[3]">{children}</div>
    </motion.div>
  );
}
