"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { fadeUpDelay, spring, staggerContainer, staggerItem } from "@/lib/motion";
import Magnetic from "@/components/motion/magnetic";
import Tilt from "@/components/motion/tilt";
import TextReveal from "@/components/motion/text-reveal";

const stats = [
  { label: "Experience", value: "4.5+ Years" },
  { label: "Projects", value: "12+ Delivered" },
  { label: "Focus", value: "Cross-Platform & Native" },
] as const;

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const preferReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 320], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 320], [1, 0.96]);
  const heroY = useTransform(scrollY, [0, 320], [0, 48]);

  return (
    <motion.section
      ref={ref}
      id="home"
      style={
        preferReduced
          ? undefined
          : { opacity: heroOpacity, scale: heroScale, y: heroY }
      }
      className="mb-28 max-w-[52rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={fadeUpDelay(0.05)}
        className="mb-8 flex justify-center"
      >
        <div className="animate-float relative">
          <div
            aria-hidden
            className="animate-glow-pulse absolute -inset-3 rounded-full bg-gradient-to-tr from-[#fbe2e3] via-[#dbd7fb] to-[#c7d2fe] opacity-80 blur-md dark:from-[#946263]/60 dark:via-[#676394]/60 dark:to-[#4b5563]/60"
          />
          <div
            aria-hidden
            className="animate-ring absolute -inset-5 rounded-full opacity-40"
            style={{
              background:
                "conic-gradient(from 0deg, #fbe2e3, #dbd7fb, #c7d2fe, #fbe2e3)",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 2px), #fff calc(100% - 2px))",
            }}
          />
          <Tilt maxTilt={10} className="relative rounded-full">
            <div className="relative rounded-full bg-gradient-to-tr from-[#fbe2e3] via-[#dbd7fb] to-[#c7d2fe] p-[3px] dark:from-[#946263] dark:via-[#676394] dark:to-[#4b5563]">
              <Image
                src="/mussadaq_ahmad_jamil.png"
                alt="Mussadaq Ahmad — Software Engineer"
                width={256}
                height={256}
                quality={95}
                priority
                className="h-28 w-28 rounded-full border-4 border-white object-cover object-top shadow-lg sm:h-32 sm:w-32 dark:border-gray-900"
              />
            </div>
          </Tilt>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeUpDelay(0.12)}
        className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
      >
        Senior Software Engineer
      </motion.p>

      <TextReveal
        as="h1"
        mode="words"
        delay={0.18}
        className="mb-4 px-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl dark:text-white"
      >
        Mussadaq Ahmad
      </TextReveal>

      <motion.p
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={fadeUpDelay(0.28)}
        className="mx-auto mb-8 max-w-[38rem] px-4 text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300"
      >
        I build{" "}
        <span className="font-medium text-gray-900 dark:text-white">
          high-performance mobile apps
        </span>{" "}
        with Flutter, React Native, and native Android (Kotlin/Java) and iOS
        (Swift) — turning complex ideas into polished products that users love.
      </motion.p>

      <motion.ul
        variants={staggerContainer(0.08, 0.32)}
        initial="hidden"
        animate="visible"
        className="mb-10 flex flex-wrap items-center justify-center gap-3 px-4"
      >
        {stats.map((stat) => (
          <motion.li
            key={stat.label}
            variants={staggerItem}
            whileHover={{ y: -4, scale: 1.03 }}
            transition={spring.snappy}
            className="glass-surface flex min-w-[9rem] flex-col rounded-2xl px-5 py-3"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {stat.label}
            </span>
            <span className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
              {stat.value}
            </span>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeUpDelay(0.42)}
        className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4"
      >
        <Magnetic strength={0.25}>
          <Link
            href="#contact"
            className="btn-alive group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-8 text-[0.95rem] font-semibold text-white shadow-lg shadow-gray-900/20 outline-none hover:bg-gray-950 hover:shadow-xl active:scale-[0.98] sm:w-auto dark:shadow-black/40"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const r = el.getBoundingClientRect();
              el.style.setProperty("--mx", `${e.clientX - r.left}px`);
              el.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
          >
            Let&apos;s work together
            <BsArrowRight className="opacity-80 transition duration-300 group-hover:translate-x-1.5" />
          </Link>
        </Magnetic>

        <Magnetic strength={0.22}>
          <a
            className="btn-alive group flex h-12 w-full items-center justify-center gap-2 rounded-full borderBlack bg-white/80 px-8 text-[0.95rem] font-semibold text-gray-800 shadow-sm outline-none backdrop-blur-sm hover:bg-white active:scale-[0.98] sm:w-auto dark:bg-white/10 dark:text-gray-100 dark:hover:bg-white/15"
            href="/Mussadaq%20Ahmad%20Jamil%20-%20Flutter%20Engineer%20(Resume).pdf"
            download="Mussadaq-Ahmad-Resume.pdf"
            onMouseMove={(e) => {
              const el = e.currentTarget;
              const r = el.getBoundingClientRect();
              el.style.setProperty("--mx", `${e.clientX - r.left}px`);
              el.style.setProperty("--my", `${e.clientY - r.top}px`);
            }}
          >
            Download Resume
            <HiDownload className="opacity-60 transition duration-300 group-hover:translate-y-0.5" />
          </a>
        </Magnetic>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeUpDelay(0.5)}
        className="mt-5 flex items-center justify-center gap-3"
      >
        <Magnetic strength={0.4}>
          <a
            className="flex h-11 w-11 items-center justify-center rounded-full borderBlack bg-white/80 text-lg text-gray-600 shadow-sm backdrop-blur-sm transition hover:scale-105 hover:text-gray-950 dark:bg-white/10 dark:text-gray-300 dark:hover:text-white"
            href="https://www.linkedin.com/in/mussadaq-ahmad-jamil/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <motion.span
              whileHover={{ rotate: -8, scale: 1.1 }}
              transition={spring.snappy}
              className="inline-flex"
            >
              <BsLinkedin />
            </motion.span>
          </a>
        </Magnetic>
        <Magnetic strength={0.4}>
          <a
            className="flex h-11 w-11 items-center justify-center rounded-full borderBlack bg-white/80 text-lg text-gray-600 shadow-sm backdrop-blur-sm transition hover:scale-105 hover:text-gray-950 dark:bg-white/10 dark:text-gray-300 dark:hover:text-white"
            href="https://github.com/MussadaqAhmad"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <motion.span
              whileHover={{ rotate: 8, scale: 1.1 }}
              transition={spring.snappy}
              className="inline-flex"
            >
              <FaGithub />
            </motion.span>
          </a>
        </Magnetic>
      </motion.div>
    </motion.section>
  );
}
