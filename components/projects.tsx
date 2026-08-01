"use client";

import SectionHeader from "@/components/ui/section-header";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 w-full max-w-6xl scroll-mt-28 sm:mb-40 sm:max-w-7xl"
    >
      <SectionHeader
        eyebrow="Portfolio"
        title="Projects Showcase"
        tagline="What I've Built!"
      >
        Below, you&apos;ll find key projects that highlight my expertise and
        practical skills. Each project demonstrates my ability to handle complex
        challenges, use diverse technologies effectively, and manage projects
        proficiently.
      </SectionHeader>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {projectsData.map((project, index) => (
          <Project key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
