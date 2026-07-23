"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { useReducedMotion } from "framer-motion";

/** Smooth mouse position with lerp — pixel + normalized 0–1 */
export function useSmoothMouse(lerp = 0.08) {
  const preferReduced = useReducedMotion();
  const target = useRef({ x: 0.5, y: 0.3 });
  const current = useRef({ x: 0.5, y: 0.3 });
  const [pos, setPos] = useState({ x: 0.5, y: 0.3, px: 0, py: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    if (preferReduced) return;

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      target.current = { x: e.clientX / w, y: e.clientY / h };
    };

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * lerp;
      current.current.y += (target.current.y - current.current.y) * lerp;
      const w = window.innerWidth || 1;
      const h = window.innerHeight || 1;
      setPos({
        x: current.current.x,
        y: current.current.y,
        px: current.current.x * w,
        py: current.current.y * h,
      });
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [lerp, preferReduced]);

  return pos;
}

/** Element-relative mouse for lighting / tilt (normalized -0.5..0.5) */
export function useElementPointer<T extends HTMLElement>(
  ref: RefObject<T | null>,
  enabled = true
) {
  const preferReduced = useReducedMotion();
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!enabled || preferReduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setPointer({ x, y, active: true });
    },
    [enabled, preferReduced, ref]
  );

  const onLeave = useCallback(() => {
    setPointer({ x: 0, y: 0, active: false });
  }, []);

  return { pointer, onMove, onLeave };
}

/** Magnetic pull toward cursor for buttons / icons */
export function useMagnetic<T extends HTMLElement>(
  strength = 0.35,
  enabled = true
) {
  const ref = useRef<T>(null);
  const preferReduced = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      if (!enabled || preferReduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      setOffset({ x: x * strength, y: y * strength });
    },
    [enabled, preferReduced, strength]
  );

  const onLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  return { ref, offset, onMove, onLeave };
}
