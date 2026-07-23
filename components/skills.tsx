"use client";

import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useReducedMotion } from "framer-motion";
import { spring, viewportEnter } from "@/lib/motion";
import Magnetic from "@/components/motion/magnetic";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 36,
    filter: "blur(6px)",
    scale: 0.94,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      ...spring.gentle,
      delay: 0.04 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const preferReduced = useReducedMotion();

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={viewportEnter}
            custom={index}
            className="list-none"
          >
            <Magnetic strength={preferReduced ? 0 : 0.22}>
              <motion.span
                className="glass-surface inline-block rounded-xl px-5 py-3 dark:text-white/80"
                whileHover={{
                  scale: 1.07,
                  rotate: index % 2 === 0 ? 2.5 : -2.5,
                  y: -3,
                }}
                transition={spring.snappy}
              >
                {skill}
              </motion.span>
            </Magnetic>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
