"use client";

import Reveal from "@/components/motion/reveal";

type SectionBridgeProps = {
  label: string;
  hint?: string;
};

/** Narrative beat between sections — one short cue, then the next chapter. */
export default function SectionBridge({ label, hint }: SectionBridgeProps) {
  return (
    <Reveal
      preset="fadeBlur"
      className="dark-section-fade my-8 flex w-full max-w-lg flex-col items-center gap-2 px-4 text-center sm:my-12"
    >
      <span className="font-display text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400 dark:text-[#71717A]">
        {label}
      </span>
      {hint ? (
        <p className="max-w-sm text-sm leading-relaxed text-gray-500 dark:text-[#71717A]">
          {hint}
        </p>
      ) : null}
      <span
        aria-hidden
        className="dark-divider-soft mt-2 h-px w-10 bg-gradient-to-r from-transparent via-gray-400/70 to-transparent dark:w-24 dark:via-transparent"
      />
    </Reveal>
  );
}
