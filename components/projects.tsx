"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const introVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
      delay: 0.1,
    },
  },
};

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 w-full max-w-6xl scroll-mt-28 sm:max-w-7xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 18 }}
      >
        <SectionHeading>My projects</SectionHeading>
      </motion.div>

      <motion.p
        variants={introVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="-mt-4 mb-10 max-w-3xl mx-auto text-center text-gray-700 dark:text-white/70"
      >
        Below, you'll find key projects that highlight my expertise and
        practical skills. Each project demonstrates my ability to handle complex
        challenges, use diverse technologies effectively, and manage projects
        proficiently.
      </motion.p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <Project key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
