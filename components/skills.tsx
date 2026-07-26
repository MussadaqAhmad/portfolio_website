"use client";

import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useReducedMotion } from "framer-motion";
import { spring, viewportEnter } from "@/lib/motion";
import Magnetic from "@/components/motion/magnetic";
import { useTheme } from "@/context/theme-context";
import type { IconType } from "react-icons";
import {
  SiFlutter,
  SiDart,
  SiReact,
  SiKotlin,
  SiSwift,
  SiNodedotjs,
  SiMongodb,
  SiFirebase,
  SiGraphql,
  SiSocketdotio,
  SiSqlite,
  SiGooglemaps,
  SiGit,
  SiStripe,
  SiPaypal,
} from "react-icons/si";
import { FaJava, FaServer, FaCogs, FaUsers } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { MdOutlineArchitecture } from "react-icons/md";

const skillIcons: Record<string, IconType> = {
  Flutter: SiFlutter,
  Dart: SiDart,
  "React Native": SiReact,
  Java: FaJava,
  Kotlin: SiKotlin,
  Swift: SiSwift,
  "Node.js": SiNodedotjs,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  "REST APIs": TbApi,
  GraphQL: SiGraphql,
  "Socket.IO": SiSocketdotio,
  SQLite: SiSqlite,
  "Google Maps": SiGooglemaps,
  "CI/CD": FaCogs,
  Git: SiGit,
  Stripe: SiStripe,
  PayPal: SiPaypal,
  "Agile Scrum": FaUsers,
  "SOLID Principles": MdOutlineArchitecture,
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 24,
    filter: "blur(4px)",
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...spring.gentle,
      delay: 0.03 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const preferReduced = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      ref={ref}
      className="dark-band dark-band-alt mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 dark:text-[#F5F5F5]">
        {skillsData.map((skill, index) => {
          const Icon = skillIcons[skill] ?? FaServer;
          return (
            <motion.li
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={viewportEnter}
              custom={index}
              className="list-none"
            >
              <Magnetic strength={preferReduced || isDark ? 0 : 0.22}>
                <motion.span
                  className="glass-surface dark-skill-card inline-flex items-center gap-2 rounded-xl px-5 py-3 dark:text-[#F5F5F5]"
                  whileHover={{
                    scale: isDark ? 1.02 : 1.07,
                    rotate: isDark ? 0 : index % 2 === 0 ? 2.5 : -2.5,
                    y: isDark ? -2 : -3,
                  }}
                  transition={spring.snappy}
                >
                  <span
                    aria-hidden
                    className="inline-flex text-gray-600 dark:text-[#A1A1AA]"
                  >
                    <Icon className="h-[1.05rem] w-[1.05rem]" />
                  </span>
                  {skill}
                </motion.span>
              </Magnetic>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
