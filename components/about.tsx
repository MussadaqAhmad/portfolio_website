"use client";

import SectionHeader from "@/components/ui/section-header";
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
import Tilt from "@/components/motion/tilt";
import { MdOutlineEngineering, MdOutlineLayers, MdOutlineSmartToy } from "react-icons/md";
import { SiNodedotjs } from "react-icons/si";

const roles = [
  { label: "Senior Software Engineer", Icon: MdOutlineEngineering },
  { label: "AI-Powered Products", Icon: MdOutlineSmartToy },
  { label: "Node.js Developer", Icon: SiNodedotjs },
  { label: "Full Stack Mobile Developer", Icon: MdOutlineLayers },
] as const;

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 48, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={viewportEnter}
      transition={{ duration: duration.slow, ease: ease.outExpo }}
    >
      <SectionHeader
        eyebrow="Introduction"
        title="About Me"
        tagline="Behind The Code!"
      />

      <Tilt maxTilt={4} className="rounded-3xl">
        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportEnter}
          className="glass-surface conic-border card-lift rounded-3xl px-6 py-8 text-left sm:px-10 sm:py-12"
        >
        <motion.p
          variants={staggerItem}
          className="text-secondary text-[0.95rem] leading-8 sm:text-base"
        >
          Senior Mobile Engineer with{" "}
          <span className="text-accent font-semibold">
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

        <motion.div
          variants={staggerItem}
          className="divider-soft my-8"
          aria-hidden
        />

        <motion.ul
          variants={staggerItem}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
        >
          {roles.map(({ label, Icon }) => (
            <motion.li
              key={label}
              whileHover={{ y: -3, scale: 1.04 }}
              transition={spring.snappy}
              className="about-role-chip flex min-h-12 items-center justify-center gap-2.5 rounded-full px-4 py-2.5 text-center text-[0.78rem] font-semibold"
            >
              <Icon aria-hidden className="shrink-0 text-lg" />
              <span>{label}</span>
            </motion.li>
          ))}
        </motion.ul>
        </motion.div>
      </Tilt>
    </motion.section>
  );
}
