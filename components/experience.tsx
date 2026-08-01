"use client";

import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { duration, ease, spring, viewportEnter } from "@/lib/motion";
import { AnimateNumbersInText } from "@/components/motion/animated-number";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 w-full max-w-4xl scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>My work experience</SectionHeading>
      <motion.p
        initial={{ opacity: 0, y: 28, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={viewportEnter}
        transition={{ duration: duration.slow, ease: ease.outExpo }}
        className="text-secondary -mt-4 mx-auto mb-12 max-w-2xl text-center"
      >
        A track record of building and shipping mobile products — from early-career
        contributions to leading cross-platform development for global teams.
      </motion.p>

      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              textAlign: "left",
              padding: "1.5rem 1.75rem",
              borderRadius: "1rem",
            }}
            contentArrowStyle={{ borderRightWidth: "0.4rem" }}
            date={item.date}
            dateClassName="!font-medium !text-gray-500 dark:!text-[#71717A]"
            icon={item.icon}
            iconStyle={{ fontSize: "1.35rem" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...spring.gentle, delay: 0.05 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-primary font-display text-lg font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-primary mt-0.5 font-medium">
                    {item.company}
                  </p>
                </div>
                <span className="chip rounded-full px-3 py-1 text-xs font-medium">
                  {item.employmentType}
                </span>
              </div>

              <p className="text-muted !mt-2 flex items-center gap-1.5 text-sm">
                <HiOutlineLocationMarker className="shrink-0 text-base" />
                {item.location}
              </p>

              <ul className="text-secondary !mt-4 space-y-2.5 pl-4 text-[0.925rem] leading-relaxed">
                {item.highlights.map((highlight, highlightIndex) => (
                  <motion.li
                    key={highlightIndex}
                    className="list-disc marker:text-gray-400 dark:marker:text-[#52525B]"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      ...spring.gentle,
                      delay: 0.04 * highlightIndex,
                    }}
                  >
                    <AnimateNumbersInText text={highlight} duration={1.6} />
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
                    whileHover={{ scale: 1.03, y: -1 }}
                    transition={{
                      ...spring.snappy,
                      delay: 0.03 * skillIndex,
                    }}
                    className="chip rounded-full px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide"
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
