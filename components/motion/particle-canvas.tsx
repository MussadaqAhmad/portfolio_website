"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
};

const PALETTE = {
  light: { accent: "99, 102, 241", dot: "129, 140, 248", linkAlpha: 0.14 },
  dark: { accent: "168, 85, 247", dot: "216, 180, 254", linkAlpha: 0.18 },
};

const LINK_DISTANCE = 130;
const POINTER_RADIUS = 200;
/** One particle per this many CSS pixels of viewport area. */
const AREA_PER_PARTICLE = 17000;
const MIN_PARTICLES = 32;
const MAX_PARTICLES = 110;

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const preferReduced = useReducedMotion();
  const palette = PALETTE[theme];

  useEffect(() => {
    if (preferReduced) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frame = 0;
    let paused = false;
    const pointer = { x: -9999, y: -9999, active: false };

    const spawn = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      radius: 0.7 + Math.random() * 1.6,
      alpha: 0.25 + Math.random() * 0.45,
    });

    const seed = () => {
      const target = Math.round(
        Math.min(
          MAX_PARTICLES,
          Math.max(MIN_PARTICLES, (width * height) / AREA_PER_PARTICLE)
        )
      );
      particles = Array.from({ length: target }, spawn);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const step = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around the viewport so the field never empties out.
        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;

        if (pointer.active) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 0 && dist < POINTER_RADIUS) {
            const push = (1 - dist / POINTER_RADIUS) * 0.6;
            p.x += (dx / dist) * push;
            p.y += (dy / dist) * push;
          }
        }
      }

      // Links first so dots render on top of them.
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq > LINK_DISTANCE * LINK_DISTANCE) continue;

          const strength = 1 - Math.sqrt(distSq) / LINK_DISTANCE;
          ctx.strokeStyle = `rgba(${palette.accent}, ${
            strength * palette.linkAlpha
          })`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      for (const p of particles) {
        const nearPointer =
          pointer.active &&
          Math.hypot(p.x - pointer.x, p.y - pointer.y) < POINTER_RADIUS;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = nearPointer
          ? `rgba(${palette.accent}, ${Math.min(1, p.alpha + 0.35)})`
          : `rgba(${palette.dot}, ${p.alpha})`;
        ctx.fill();
      }

      frame = requestAnimationFrame(step);
    };

    const onPointerMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    const onVisibility = () => {
      const hidden = document.hidden;
      if (hidden && !paused) {
        paused = true;
        cancelAnimationFrame(frame);
      } else if (!hidden && paused) {
        paused = false;
        frame = requestAnimationFrame(step);
      }
    };

    resize();
    frame = requestAnimationFrame(step);

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [palette, preferReduced]);

  if (preferReduced) return null;

  return <canvas ref={canvasRef} className="bg-canvas" aria-hidden />;
}
