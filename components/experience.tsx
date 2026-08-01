"use client";

import Image from "next/image";
import SectionHeader from "@/components/ui/section-header";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { spring, viewportEnter } from "@/lib/motion";
import { AnimateNumbersInText } from "@/components/motion/animated-number";
import Tilt from "@/components/motion/tilt";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="mb-28 w-full max-w-4xl scroll-mt-28 sm:mb-40"
    >
      <SectionHeader
        eyebrow="Career"
        title="Work Experience"
        tagline="Professional Journey!"
      >
        A track record of building and shipping mobile products — from
        early-career contributions to leading cross-platform development for
        global teams.
      </SectionHeader>

      <ol className="relative list-none">
        <span className="timeline-rail" aria-hidden />

        {experiencesData.map((item, index) => (
          <li key={item.company} className="relative pb-10 pl-14 last:pb-0 sm:pl-20">
            <span className="timeline-marker absolute left-0 top-1" aria-hidden>
              {String(index + 1).padStart(2, "0")}
            </span>

            <Tilt maxTilt={4} className="overflow-hidden rounded-2xl">
              <motion.article
                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={viewportEnter}
                transition={spring.gentle}
                className="glass-surface glass-border-glow rounded-2xl p-5 text-left sm:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-3">
                  <div className="flex min-w-0 items-center gap-3.5">
                    <a
                      href={item.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="logo-tile relative h-12 w-12 overflow-hidden transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
                      aria-label={`Visit ${item.company} website`}
                    >
                      <Image
                        src={item.logoUrl}
                        alt={`${item.company} logo`}
                        fill
                        sizes="48px"
                        className="object-contain p-1.5"
                      />
                    </a>
                    <div className="min-w-0">
                      <h3 className="text-primary font-display text-base font-bold tracking-tight sm:text-lg">
                        {item.title}
                      </h3>
                      <a
                        href={item.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-secondary mt-0.5 inline-block text-sm font-medium transition hover:text-[color:var(--accent)]"
                      >
                        {item.company}
                      </a>
                    </div>
                  </div>

                  <span className="date-badge">{item.date}</span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="text-muted flex items-center gap-1.5 text-[0.8rem]">
                    <HiOutlineLocationMarker className="shrink-0 text-base" aria-hidden />
                    {item.location}
                  </span>
                  <span className="chip rounded-full px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-wide">
                    {item.employmentType}
                  </span>
                </div>

                <ul className="text-secondary mt-5 space-y-2.5 pl-4 text-[0.875rem] leading-relaxed">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlightIndex}
                      className="list-disc marker:text-[color:var(--accent)]"
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

                <div className="mt-6 flex flex-wrap gap-2">
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
              </motion.article>
            </Tilt>
          </li>
        ))}
      </ol>
    </section>
  );
}
