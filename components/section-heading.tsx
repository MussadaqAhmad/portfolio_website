"use client";

import TextReveal from "@/components/motion/text-reveal";

type SectionHeadingProps = {
  children: string;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <TextReveal
      as="h2"
      mode="words"
      className="font-display mb-8 text-center text-3xl font-bold tracking-tight capitalize text-gray-950 sm:text-4xl dark:text-[#F5F5F5]"
    >
      {children}
    </TextReveal>
  );
}
