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
      className="mb-8 text-center text-3xl font-medium capitalize"
    >
      {children}
    </TextReveal>
  );
}
