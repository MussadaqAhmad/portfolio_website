"use client";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { duration, ease, spring, viewportEnter } from "@/lib/motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 w-full max-w-6xl scroll-mt-28 sm:max-w-7xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={viewportEnter}
        transition={{ duration: duration.slow, ease: ease.outExpo }}
      >
        <SectionHeading>My projects</SectionHeading>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportEnter}
        transition={{ ...spring.soft, delay: 0.1 }}
        className="-mt-4 mx-auto mb-10 max-w-3xl text-center text-gray-700 dark:text-white/70"
      >
        Below, you&apos;ll find key projects that highlight my expertise and
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
