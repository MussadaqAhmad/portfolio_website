"use client";

import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { spring, viewportEnter } from "@/lib/motion";
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

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="text-primary flex flex-wrap justify-center gap-2 text-lg">
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
              <motion.span
                className="glass-surface skill-card inline-flex items-center gap-2 rounded-xl px-5 py-3"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={spring.snappy}
              >
                <span aria-hidden className="text-secondary inline-flex">
                  <Icon className="h-[1.05rem] w-[1.05rem]" />
                </span>
                {skill}
              </motion.span>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
