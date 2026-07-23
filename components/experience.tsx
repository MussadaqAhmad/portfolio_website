"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 scroll-mt-28 sm:mb-40 w-full max-w-4xl"
    >
      <SectionHeading>My work experience</SectionHeading>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 90, damping: 18 }}
        className="-mt-4 mb-12 max-w-2xl mx-auto text-center text-gray-700 dark:text-white/70"
      >
        A track record of building and shipping mobile products — from early-career
        contributions to leading cross-platform development for global teams.
      </motion.p>

      <VerticalTimeline lineColor={isLight ? "#e5e7eb" : "rgba(255,255,255,0.15)"}>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: isLight ? "#f9fafb" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: isLight
                ? "1px solid rgba(0, 0, 0, 0.06)"
                : "1px solid rgba(255, 255, 255, 0.08)",
              textAlign: "left",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
            }}
            contentArrowStyle={{
              borderRight: isLight
                ? "0.4rem solid #f3f4f6"
                : "0.4rem solid rgba(255, 255, 255, 0.05)",
            }}
            date={item.date}
            dateClassName="!font-medium !text-gray-500 dark:!text-gray-400"
            icon={item.icon}
            iconStyle={{
              background: isLight ? "white" : "rgba(255, 255, 255, 0.12)",
              fontSize: "1.35rem",
              boxShadow: isLight
                ? "0 0 0 4px #f3f4f6"
                : "0 0 0 4px rgba(255,255,255,0.06)",
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-semibold text-gray-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-0.5 font-medium text-gray-800 dark:text-gray-200">
                  {item.company}
                </p>
              </div>
              <span className="rounded-full bg-gray-200/80 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300">
                {item.employmentType}
              </span>
            </div>

            <p className="!mt-2 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
              <HiOutlineLocationMarker className="shrink-0 text-base" />
              {item.location}
            </p>

            <ul className="!mt-4 space-y-2.5 pl-4 text-[0.925rem] leading-relaxed text-gray-700 dark:text-white/75">
              {item.highlights.map((highlight, highlightIndex) => (
                <li key={highlightIndex} className="list-disc marker:text-gray-400">
                  {highlight}
                </li>
              ))}
            </ul>

            {"featuredProject" in item && item.featuredProject && (
              <div className="!mt-5 rounded-xl border border-black/5 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Featured project
                </p>
                <p className="mt-1 font-semibold text-gray-900 dark:text-white">
                  {item.featuredProject.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-white/70">
                  {item.featuredProject.description}
                </p>
              </div>
            )}

            <div className="!mt-5 flex flex-wrap gap-2">
              {item.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-900/[0.07] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-gray-700 dark:bg-white/10 dark:text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
