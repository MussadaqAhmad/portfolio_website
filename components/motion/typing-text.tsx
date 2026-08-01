"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type TypingTextProps = {
  /** Phrases cycled through in order. A single entry types once and stops. */
  phrases: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdDuration?: number;
  startDelay?: number;
  className?: string;
};

export default function TypingText({
  phrases,
  typeSpeed = 90,
  deleteSpeed = 45,
  holdDuration = 1800,
  startDelay = 400,
  className,
}: TypingTextProps) {
  const preferReduced = useReducedMotion();
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (preferReduced) return;
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [preferReduced, startDelay]);

  useEffect(() => {
    if (preferReduced || !started || phrases.length === 0) return;

    const current = phrases[index % phrases.length];
    const singlePhrase = phrases.length === 1;

    if (!deleting && text === current) {
      // A lone phrase stays on screen instead of looping.
      if (singlePhrase) return;
      const timer = setTimeout(() => setDeleting(true), holdDuration);
      return () => clearTimeout(timer);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timer);
  }, [
    text,
    deleting,
    index,
    phrases,
    started,
    preferReduced,
    typeSpeed,
    deleteSpeed,
    holdDuration,
  ]);

  if (preferReduced) {
    return <span className={className}>{phrases[0]}</span>;
  }

  return (
    <span className={className}>
      <span aria-hidden>{text}</span>
      <span className="typing-caret" aria-hidden />
      <span className="sr-only">{phrases[0]}</span>
    </span>
  );
}
