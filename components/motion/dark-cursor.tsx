"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import { useSmoothMouse } from "@/lib/motion-hooks";

/** Soft, nearly invisible spotlight — dark mode only */
export default function DarkCursor() {
  const { theme } = useTheme();
  const preferReduced = useReducedMotion();
  const mouse = useSmoothMouse(0.1);
  const [finePointer, setFinePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (theme !== "dark" || preferReduced || !finePointer) return null;

  return (
    <div
      className="dark-cursor-spotlight"
      style={{ left: mouse.px, top: mouse.py }}
      aria-hidden
    />
  );
}
