"use client";

import { useMemo } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useSmoothMouse } from "@/lib/motion-hooks";

function ParticleField({ count = 18 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 37 + 11) % 100}%`,
        size: 2 + (i % 3),
        duration: 14 + (i % 10),
        delay: (i * 0.7) % 12,
        opacity: 0.25 + (i % 5) * 0.08,
      })),
    [count]
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10%] rounded-full bg-gray-400/60 dark:bg-white/40"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `particleDrift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function BackgroundMotion() {
  const preferReduced = useReducedMotion();
  const mouse = useSmoothMouse(0.06);
  const { scrollYProgress } = useScroll();
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 280]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const meshOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    [0.5, 0.7, 0.4]
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 animate-mesh"
        style={{
          opacity: meshOpacity,
          background:
            "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(251,226,227,0.55), transparent 55%), radial-gradient(ellipse 70% 45% at 80% 10%, rgba(219,215,251,0.5), transparent 50%), radial-gradient(ellipse 60% 40% at 50% 80%, rgba(199,210,254,0.35), transparent 55%)",
        }}
      />

      <motion.div
        className="animate-orb absolute top-[-6rem] right-[8%] h-[28rem] w-[28rem] rounded-full bg-[#fbe2e3] blur-[100px] sm:w-[42rem] dark:bg-[#946263]/70"
        style={{ y: blobY }}
      />
      <motion.div
        className="animate-float-slow absolute top-[10%] left-[-20%] h-[26rem] w-[40rem] rounded-full bg-[#dbd7fb] blur-[110px] sm:w-[52rem] dark:bg-[#676394]/65"
        style={{ y: blobY2 }}
      />
      <div
        className="animate-orb absolute top-[55%] right-[-10%] h-[22rem] w-[22rem] rounded-full bg-[#c7d2fe]/70 blur-[90px] dark:bg-[#4b5563]/50"
        style={{ animationDelay: "-8s" }}
      />

      <div className="animate-aurora absolute top-[35%] left-0 right-0 h-64 opacity-40 dark:opacity-30">
        <div className="mx-auto h-full w-[90%] rounded-full bg-gradient-to-r from-[#fbe2e3]/50 via-[#dbd7fb]/40 to-[#c7d2fe]/50 blur-3xl dark:from-[#946263]/40 dark:via-[#676394]/35 dark:to-[#4b5563]/40" />
      </div>

      {!preferReduced && (
        <div
          className="absolute h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            left: `${mouse.x * 100}%`,
            top: `${mouse.y * 100}%`,
            background:
              "radial-gradient(circle, var(--glow), transparent 65%)",
            opacity: 0.55,
          }}
        />
      )}

      <div className="absolute left-1/2 top-[18%] h-[36rem] w-[36rem] -translate-x-1/2 opacity-[0.12] dark:opacity-[0.08]">
        <div className="animate-ring h-full w-full rounded-full bg-gradient-to-tr from-[#fbe2e3] via-transparent to-[#dbd7fb] p-px [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor]" />
      </div>

      {!preferReduced && <ParticleField count={16} />}
    </div>
  );
}
