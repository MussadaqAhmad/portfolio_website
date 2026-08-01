"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import {
  duration,
  ease,
  spring,
  staggerContainer,
  staggerItem,
  viewportEnter,
} from "@/lib/motion";
import AnimatedNumber from "@/components/motion/animated-number";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="text-secondary mb-28 max-w-[45rem] scroll-mt-28 text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={viewportEnter}
      transition={{ duration: duration.slow, ease: ease.outExpo }}
    >
      <SectionHeading>About me</SectionHeading>

      <motion.div
        variants={staggerContainer(0.12, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportEnter}
        className="glass-surface conic-border space-y-4 rounded-3xl px-6 py-8 sm:px-10 sm:py-12"
      >
        <motion.p variants={staggerItem} className="mb-3">
          Senior Mobile Engineer with{" "}
          <span className="text-primary font-medium">
            <AnimatedNumber
              value={4.5}
              decimals={1}
              suffix="+ years"
              duration={1.7}
            />
          </span>{" "}
          architecting and
          delivering full-stack mobile solutions across{" "}
          <span className="text-primary font-medium">
            Flutter, React Native, native Android (Kotlin/Java), and native iOS
            (Swift)
          </span>
          . Strong track record in mobile architecture and system design, building
          scalable, high-performance applications used by thousands of end users
          across SaaS, fintech, and health tech products. Hands-on expertise in{" "}
          <span className="text-primary font-medium">REST/GraphQL API</span> integration,{" "}
          <span className="text-primary font-medium">Firebase</span> and{" "}
          <span className="text-primary font-medium">Supabase</span> backends,{" "}
          <span className="text-primary font-medium">Node.js</span> and{" "}
          <span className="text-primary font-medium">MongoDB</span>, and CI/CD automation —
          paired with a consistent record of end-to-end delivery from architecture
          through App Store and Google Play release. Experienced leading
          engineering teams through code reviews, mentoring, and technical
          decision-making, with a focus on clean, maintainable cross-platform and
          native codebases.
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="mb-3 flex flex-wrap items-center justify-center gap-2"
        >
          {[
            "Senior Software Engineer",
            "Cross Platform App Developer",
            "Node.js Developer",
            "Full Stack Mobile Developer",
          ].map((role) => (
            <motion.span
              key={role}
              whileHover={{ y: -3, scale: 1.04 }}
              transition={spring.snappy}
              className="chip rounded-full px-3 py-1 text-sm font-medium"
            >
              {role}
            </motion.span>
          ))}
        </motion.p>

        <motion.p variants={staggerItem} className="text-muted">
          <span className="text-secondary italic">My achievements include:</span> completing
          Mobile App Development certification from Techlift (GC-IT) Bootcamp
          (Aug 2021), participating in DAIRA&apos;18 Speed Programming at FAST-NU,
          AIRTECH&apos;17 Mobile App Designing at Air University Islamabad, Riphah
          speed programming at Junnon&apos;18, organizing FUTSAL at Riphah Annual
          Junnon&apos;18, and serving as E-Gaming Head at Riphah Annual
          Olympiad&apos;17.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}
