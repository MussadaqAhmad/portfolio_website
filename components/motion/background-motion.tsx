"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import ParticleCanvas from "@/components/motion/particle-canvas";

type BlobProps = {
  /** Position + size utilities for the parallax wrapper. */
  frame: string;
  /** Blur utility applied to the coloured layer itself. */
  blur: string;
  color: string;
  drift: string;
  y: MotionValue<number>;
  delay?: string;
};

function Blob({ frame, blur, color, drift, y, delay }: BlobProps) {
  return (
    <motion.div className={`absolute ${frame}`} style={{ y }}>
      <div
        className={`h-full w-full rounded-full ${blur} ${drift}`}
        style={{ background: color, animationDelay: delay }}
      />
    </motion.div>
  );
}

export default function BackgroundMotion() {
  const preferReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: preferReduced ? 300 : 60,
    damping: preferReduced ? 40 : 28,
    mass: 0.4,
  });

  const blobY = useTransform(smoothProgress, [0, 1], [0, 320]);
  const blobY2 = useTransform(smoothProgress, [0, 1], [0, -220]);
  const blobY3 = useTransform(smoothProgress, [0, 1], [0, 160]);
  const blobY4 = useTransform(smoothProgress, [0, 1], [0, -110]);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div
        className={`bg-hero-glow absolute left-1/2 top-0 h-[70vh] w-[90vw] max-w-[56rem] -translate-x-1/2 ${
          preferReduced ? "" : "animate-hero-radial"
        }`}
      />

      <Blob
        frame="-left-[20%] top-[8%] h-[42rem] w-[42rem]"
        blur="blur-[120px]"
        color="var(--blob-a)"
        drift={preferReduced ? "" : "animate-blob-a"}
        y={blobY}
      />
      <Blob
        frame="-right-[18%] top-[28%] h-[38rem] w-[38rem]"
        blur="blur-[130px]"
        color="var(--blob-b)"
        drift={preferReduced ? "" : "animate-blob-b"}
        y={blobY2}
      />
      <Blob
        frame="left-[20%] top-[62%] h-[36rem] w-[44rem]"
        blur="blur-[140px]"
        color="var(--blob-c)"
        drift={preferReduced ? "" : "animate-blob-c"}
        y={blobY3}
      />
      <Blob
        frame="bottom-[-5%] right-[10%] h-[32rem] w-[32rem]"
        blur="blur-[110px]"
        color="var(--blob-d)"
        drift={preferReduced ? "" : "animate-blob-a"}
        y={blobY4}
        delay="-12s"
      />

      <ParticleCanvas />

      <div className="bg-side-depth absolute inset-0" />
      <div className="bg-vignette absolute inset-0" />
    </div>
  );
}
