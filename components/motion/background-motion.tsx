"use client";

import ParticleCanvas from "@/components/motion/particle-canvas";

export default function BackgroundMotion() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <ParticleCanvas />
      <div className="bg-vignette absolute inset-0" />
    </div>
  );
}
