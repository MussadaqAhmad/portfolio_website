"use client";

import { useMemo, useState } from "react";
import SectionHeader from "@/components/ui/section-header";
import Tilt from "@/components/motion/tilt";
import { skillCategories, skillsData, type SkillCategory } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { spring } from "@/lib/motion";
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

const skillColors: Record<string, string> = {
  Flutter: "#54c5f8",
  Dart: "#42a5d9",
  "React Native": "#61dafb",
  Java: "#f89820",
  Kotlin: "#a97bff",
  Swift: "#f05138",
  "Node.js": "#68a063",
  MongoDB: "#47a248",
  Firebase: "#ffca28",
  "REST APIs": "#7c83fd",
  GraphQL: "#e535ab",
  "Socket.IO": "#8b8b98",
  SQLite: "#44a2d1",
  "Google Maps": "#4285f4",
  "CI/CD": "#6A2FB4",
  Git: "#f05032",
  Stripe: "#635bff",
  PayPal: "#0070ba",
  "Agile Scrum": "#22a6b3",
  "SOLID Principles": "#9333EA",
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const [active, setActive] = useState<SkillCategory>("All");

  const visibleSkills = useMemo(
    () =>
      active === "All"
        ? skillsData
        : skillsData.filter((skill) => skill.category === active),
    [active]
  );

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-40"
    >
      <SectionHeader
        eyebrow="Toolkit"
        title="Technical Skills"
        tagline="Core Expertise!"
      />

      <div
        role="tablist"
        aria-label="Filter skills by category"
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {skillCategories.map((category) => (
          <button
            key={category}
            id={`skills-tab-${category}`}
            type="button"
            role="tab"
            aria-selected={active === category}
            aria-controls="skills-panel"
            onClick={() => setActive(category)}
            className="filter-tab rounded-full px-4 py-2 text-[0.8rem] font-medium"
          >
            {category}
          </button>
        ))}
      </div>

      <div
        id="skills-panel"
        role="tabpanel"
        aria-labelledby={`skills-tab-${active}`}
      >
        <motion.ul
          layout
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleSkills.map((skill) => {
              const Icon = skillIcons[skill.name] ?? FaServer;
              return (
                <motion.li
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.86, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.86, filter: "blur(4px)" }}
                  transition={spring.snappy}
                  className="min-w-0 list-none"
                >
                  <Tilt
                    maxTilt={7}
                    className="skill-card group flex h-28 w-full flex-col items-center justify-center gap-3 rounded-2xl px-3 text-center sm:h-32"
                  >
                    <span
                      aria-hidden
                      className="skill-icon inline-flex text-3xl sm:text-4xl"
                      style={{ color: skillColors[skill.name] ?? "var(--accent)" }}
                    >
                      <Icon />
                    </span>
                    <span className="skill-label text-primary text-[0.82rem] font-medium sm:text-sm">
                      {skill.name}
                    </span>
                  </Tilt>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
