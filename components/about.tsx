"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a{" "}
        <span className="font-medium">Software Developer</span> with over{" "}
        <span className="font-medium">4+ years of experience</span> specializing
        in cross-platform and native mobile development using{" "}
        <span className="font-medium">
          Flutter, React Native, Kotlin, Java, and Swift
        </span>
        . I build high-performance, user-friendly apps for Android and iOS that deliver seamless
        experiences. My expertise also includes backend development with{" "}
        <span className="font-medium">Node.js and MongoDB</span>, ensuring
        robust and scalable solutions. Passionate about problem-solving and
        clean code, I stay ahead of industry trends to create innovative,
        impactful applications.
      </p>

      <p className="mb-3">
        <span className="font-medium">Senior Software Engineer</span> ·{" "}
        <span className="font-medium">Cross Platform App Developer</span> ·{" "}
        <span className="font-medium">Node.js Developer</span> ·{" "}
        <span className="font-medium">Full Stack Mobile Developer</span>
      </p>

      <p>
        <span className="italic">My achievements include:</span> completing
        Mobile App Development certification from Techlift (GC-IT) Bootcamp
        (Aug 2021), participating in DAIRA'18 Speed Programming at FAST-NU,
        AIRTECH'17 Mobile App Designing at Air University Islamabad, Riphah
        speed programming at Junnon'18, organizing FUTSAL at Riphah Annual
        Junnon'18, and serving as E-Gaming Head at Riphah Annual Olympiad'17.
      </p>
    </motion.section>
  );
}
