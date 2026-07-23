"use client";

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
import { duration, ease, spring, viewportEnter } from "@/lib/motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 w-full max-w-4xl scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My work experience</SectionHeading>
      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={viewportEnter}
        transition={{ duration: duration.slow, ease: ease.outExpo }}
        className="-mt-4 mx-auto mb-12 max-w-2xl text-center text-gray-700 dark:text-white/70"
      >
        A track record of building and shipping mobile products — from early-career
        contributions to leading cross-platform development for global teams.
      </motion.p>

      <VerticalTimeline lineColor={isLight ? "#e5e7eb" : "rgba(255,255,255,0.15)"}>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: isLight
                ? "rgba(249, 250, 251, 0.72)"
                : "rgba(255, 255, 255, 0.06)",
              boxShadow: isLight
                ? "0 8px 32px rgba(0,0,0,0.04)"
                : "0 12px 40px rgba(0,0,0,0.25)",
              border: isLight
                ? "1px solid rgba(0, 0, 0, 0.06)"
                : "1px solid rgba(255, 255, 255, 0.1)",
              textAlign: "left",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
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
                ? "0 0 0 4px #f3f4f6, 0 4px 16px rgba(0,0,0,0.06)"
                : "0 0 0 4px rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.3)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring.gentle, delay: 0.05 }}
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
                  <motion.li
                    key={highlightIndex}
                    className="list-disc marker:text-gray-400"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ...spring.gentle,
                      delay: 0.04 * highlightIndex,
                    }}
                  >
                    {highlight}
                  </motion.li>
                ))}
              </ul>

              <div className="!mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{
                      ...spring.snappy,
                      delay: 0.03 * skillIndex,
                    }}
                    className="rounded-full bg-gray-900/[0.07] px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-gray-700 dark:bg-white/10 dark:text-gray-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}
