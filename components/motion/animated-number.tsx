"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  animate,
  useInView,
  useReducedMotion,
  type Easing,
} from "framer-motion";
import { ease } from "@/lib/motion";

type AnimatedNumberProps = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  /** Start counting as soon as mounted (hero) instead of waiting for scroll */
  immediate?: boolean;
};

function formatValue(n: number, decimals: number) {
  if (decimals > 0) return n.toFixed(decimals);
  return Math.round(n).toString();
}

/**
 * Smooth count-up from 0 → value when scrolled into view.
 * Uses eased tween (no spring overshoot) for readable numbers.
 */
export default function AnimatedNumber({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.6,
  delay = 0,
  className,
  immediate = false,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const preferReduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "-20px", amount: 0.4 });
  const shouldAnimate = immediate || isInView;
  const [display, setDisplay] = useState(() =>
    preferReduced ? formatValue(value, decimals) : formatValue(0, decimals)
  );

  useEffect(() => {
    if (preferReduced) {
      setDisplay(formatValue(value, decimals));
      return;
    }
    if (!shouldAnimate) return;

    const controls = animate(0, value, {
      duration,
      delay,
      ease: ease.outExpo as unknown as Easing,
      onUpdate: (latest) => {
        setDisplay(formatValue(latest, decimals));
      },
    });

    return () => controls.stop();
  }, [shouldAnimate, value, decimals, duration, delay, preferReduced]);

  return (
    <span
      ref={ref}
      className={className ? `tabular-nums ${className}` : "tabular-nums"}
      aria-label={`${prefix}${formatValue(value, decimals)}${suffix}`}
    >
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const NUMBER_RE = /(\d+\.?\d*)(%?)/g;

type AnimateNumbersInTextProps = {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
};

/**
 * Scans a string for numeric tokens (e.g. "20%", "4.5") and animates each
 * from 0 while preserving surrounding copy.
 */
export function AnimateNumbersInText({
  text,
  className,
  duration = 1.5,
  delay = 0,
}: AnimateNumbersInTextProps) {
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  NUMBER_RE.lastIndex = 0;
  while ((match = NUMBER_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const numeric = Number(match[1]);
    const percent = match[2] ?? "";
    const decimals = match[1].includes(".")
      ? match[1].split(".")[1].length
      : 0;

    parts.push(
      <AnimatedNumber
        key={`n-${key}`}
        value={numeric}
        decimals={decimals}
        suffix={percent}
        duration={duration}
        delay={delay + key * 0.08}
      />
    );
    key += 1;
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  // No numbers found — render plain text
  if (parts.length === 0) {
    return <span className={className}>{text}</span>;
  }

  return <span className={className}>{parts}</span>;
}
