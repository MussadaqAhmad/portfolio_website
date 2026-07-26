"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useSmoothMouse } from "@/lib/motion-hooks";
import { useTheme } from "@/context/theme-context";

function ParticleField({ count = 18 }: { count?: number }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i * 37 + 11) % 100}%`,
    size: 2 + (i % 3),
    duration: 14 + (i % 10),
    delay: (i * 0.7) % 12,
    opacity: 0.25 + (i % 5) * 0.08,
  }));

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10%] rounded-full bg-gray-400/60"
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
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const mouse = useSmoothMouse(0.06);
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: preferReduced ? 300 : 60,
    damping: preferReduced ? 40 : 28,
    mass: 0.4,
  });

  const blobY = useTransform(smoothProgress, [0, 1], [0, 320]);
  const blobY2 = useTransform(smoothProgress, [0, 1], [0, -220]);
  const blobY3 = useTransform(smoothProgress, [0, 1], [0, 160]);
  const floatLayerY = useTransform(smoothProgress, [0, 1], [0, -90]);
  const midFloatY = useTransform(smoothProgress, [0, 1], [40, -120]);
  const ringScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.08, 0.92]);
  const ringRotate = useTransform(smoothProgress, [0, 1], [0, 45]);

  const meshOpacity = useTransform(
    smoothProgress,
    [0, 0.2, 0.45, 0.7, 1],
    [0.55, 0.7, 0.55, 0.65, 0.4]
  );
  const warmOpacity = useTransform(
    smoothProgress,
    [0, 0.15, 0.35, 0.55],
    [0.9, 1, 0.35, 0.15]
  );
  const coolOpacity = useTransform(
    smoothProgress,
    [0.25, 0.45, 0.7, 0.9],
    [0.15, 0.85, 1, 0.5]
  );
  const duskOpacity = useTransform(
    smoothProgress,
    [0.55, 0.75, 1],
    [0.1, 0.75, 0.95]
  );

  /* Quiet layered atmosphere — depth without color noise */
  if (isDark) {
    return (
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#090909]"
        aria-hidden
      >
        {/* Hero-area breathing radial */}
        <div
          className={
            preferReduced
              ? "absolute left-1/2 top-0 h-[70vh] w-[90vw] max-w-[56rem] -translate-x-1/2"
              : "dark-hero-radial absolute left-1/2 top-0 h-[70vh] w-[90vw] max-w-[56rem] -translate-x-1/2"
          }
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 35%, rgba(255,255,255,0.045), transparent 70%)",
          }}
        />

        {/* Large slow blobs — 3–4% opacity, 24–30s */}
        {!preferReduced && (
          <>
            <div
              className="dark-blob-a absolute -left-[20%] top-[8%] h-[42rem] w-[42rem] rounded-full bg-white/[0.035] blur-[120px]"
            />
            <div
              className="dark-blob-b absolute -right-[18%] top-[28%] h-[38rem] w-[38rem] rounded-full bg-white/[0.03] blur-[130px]"
            />
            <div
              className="dark-blob-c absolute left-[20%] top-[62%] h-[36rem] w-[44rem] rounded-full bg-white/[0.028] blur-[140px]"
            />
            <div
              className="dark-blob-a absolute right-[10%] bottom-[-5%] h-[32rem] w-[32rem] rounded-full bg-white/[0.025] blur-[110px]"
              style={{ animationDelay: "-12s" }}
            />
          </>
        )}

        {preferReduced && (
          <>
            <div className="absolute -left-[20%] top-[8%] h-[42rem] w-[42rem] rounded-full bg-white/[0.03] blur-[120px]" />
            <div className="absolute -right-[18%] top-[40%] h-[38rem] w-[38rem] rounded-full bg-white/[0.025] blur-[130px]" />
          </>
        )}

        {/* Soft side depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 40% 50% at 0% 50%, rgba(255,255,255,0.018), transparent 60%), radial-gradient(ellipse 40% 50% at 100% 50%, rgba(255,255,255,0.015), transparent 60%)",
          }}
        />

        {/* Soft vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 75% at 50% 40%, transparent 35%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        {/* Ultra-soft mouse wash (in addition to DarkCursor) */}
        {!preferReduced && (
          <div
            className="absolute h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              left: `${mouse.x * 100}%`,
              top: `${mouse.y * 100}%`,
              background:
                "radial-gradient(circle, rgba(255,255,255,0.025), transparent 68%)",
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute inset-0 animate-mesh"
        style={{
          opacity: meshOpacity,
          y: floatLayerY,
          background:
            "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(251,226,227,0.55), transparent 55%), radial-gradient(ellipse 70% 45% at 80% 10%, rgba(219,215,251,0.5), transparent 50%), radial-gradient(ellipse 60% 40% at 50% 80%, rgba(199,210,254,0.35), transparent 55%)",
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          opacity: warmOpacity,
          background:
            "radial-gradient(ellipse 70% 55% at 30% 15%, rgba(251,226,227,0.45), transparent 60%)",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: coolOpacity,
          background:
            "radial-gradient(ellipse 65% 50% at 75% 40%, rgba(199,210,254,0.42), transparent 58%), radial-gradient(ellipse 50% 40% at 20% 70%, rgba(219,215,251,0.35), transparent 55%)",
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: duskOpacity,
          background:
            "radial-gradient(ellipse 80% 55% at 50% 85%, rgba(167,139,250,0.22), transparent 60%), radial-gradient(ellipse 45% 35% at 80% 20%, rgba(96,165,250,0.18), transparent 50%)",
        }}
      />

      <motion.div
        className="animate-orb absolute top-[-6rem] right-[8%] h-[28rem] w-[28rem] rounded-full bg-[#fbe2e3] blur-[100px] sm:w-[42rem]"
        style={{ y: blobY }}
      />
      <motion.div
        className="animate-float-slow absolute top-[10%] left-[-20%] h-[26rem] w-[40rem] rounded-full bg-[#dbd7fb] blur-[110px] sm:w-[52rem]"
        style={{ y: blobY2 }}
      />
      <motion.div
        className="animate-orb absolute top-[55%] right-[-10%] h-[22rem] w-[22rem] rounded-full bg-[#c7d2fe]/70 blur-[90px]"
        style={{ y: blobY3, animationDelay: "-8s" }}
      />

      <motion.div
        className="absolute left-[15%] top-[40%] h-48 w-48 rounded-full bg-[#fbcfe8]/40 blur-3xl"
        style={{ y: midFloatY }}
      />

      <div className="animate-aurora absolute top-[35%] left-0 right-0 h-64 opacity-40">
        <div className="mx-auto h-full w-[90%] rounded-full bg-gradient-to-r from-[#fbe2e3]/50 via-[#dbd7fb]/40 to-[#c7d2fe]/50 blur-3xl" />
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

      <motion.div
        className="absolute left-1/2 top-[18%] h-[36rem] w-[36rem] -translate-x-1/2 opacity-[0.12]"
        style={{ scale: ringScale, rotate: ringRotate }}
      >
        <div className="animate-ring h-full w-full rounded-full bg-gradient-to-tr from-[#fbe2e3] via-transparent to-[#dbd7fb] p-px [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude] [-webkit-mask-composite:xor]" />
      </motion.div>

      {!preferReduced && <ParticleField count={16} />}
    </div>
  );
}
