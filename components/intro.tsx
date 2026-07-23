"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const stats = [
  { label: "Experience", value: "4+ Years" },
  { label: "Projects", value: "12+ Delivered" },
  { label: "Focus", value: "Cross-Platform & Native" },
] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 18, delay },
  },
});

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[52rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      {/* <motion.div
        {...fadeUp(0)}
        className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-black/5 bg-white/70 px-4 py-2 text-sm font-medium text-gray-600 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Open to new opportunities
      </motion.div> */}

      <motion.div
        {...fadeUp(0.05)}
        className="mb-8 flex justify-center"
      >
        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#fbe2e3] via-[#dbd7fb] to-[#c7d2fe] opacity-80 blur-md dark:from-[#946263]/60 dark:via-[#676394]/60 dark:to-[#4b5563]/60"
          />
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
        </div>
      </motion.div>

      <motion.p
        {...fadeUp(0.1)}
        className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400"
      >
         Senior Software Engineer
      </motion.p>

      <motion.h1
        {...fadeUp(0.15)}
        className="mb-4 px-4 text-4xl font-bold tracking-tight text-gray-950 sm:text-5xl dark:text-white"
      >
        Mussadaq Ahmad
      </motion.h1>

      <motion.p
        {...fadeUp(0.2)}
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
        {...fadeUp(0.25)}
        className="mb-10 flex flex-wrap items-center justify-center gap-3 px-4"
      >
        {stats.map((stat) => (
          <li
            key={stat.label}
            className="flex min-w-[9rem] flex-col rounded-2xl border border-black/5 bg-white/60 px-5 py-3 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
              {stat.label}
            </span>
            <span className="mt-0.5 text-sm font-semibold text-gray-900 dark:text-white">
              {stat.value}
            </span>
          </li>
        ))}
      </motion.ul>

      <motion.div
        {...fadeUp(0.3)}
        className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4"
      >
        <Link
          href="#contact"
          className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-8 text-[0.95rem] font-semibold text-white shadow-lg shadow-gray-900/20 outline-none transition hover:bg-gray-950 hover:shadow-xl active:scale-[0.98] sm:w-auto dark:shadow-black/40"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Let&apos;s work together
          <BsArrowRight className="opacity-80 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="group flex h-12 w-full items-center justify-center gap-2 rounded-full borderBlack bg-white/80 px-8 text-[0.95rem] font-semibold text-gray-800 shadow-sm outline-none backdrop-blur-sm transition hover:bg-white active:scale-[0.98] sm:w-auto dark:bg-white/10 dark:text-gray-100 dark:hover:bg-white/15"
          href="/Mussadaq%20Ahmad%20Jamil%20-%20Flutter%20Engineer%20(Resume).pdf"
          download="Mussadaq-Ahmad-Resume.pdf"
        >
          Download Resume
          <HiDownload className="opacity-60 transition group-hover:translate-y-0.5" />
        </a>
      </motion.div>

      <motion.div
        {...fadeUp(0.35)}
        className="mt-5 flex items-center justify-center gap-3"
      >
        <a
          className="flex h-11 w-11 items-center justify-center rounded-full borderBlack bg-white/80 text-lg text-gray-600 shadow-sm backdrop-blur-sm transition hover:scale-105 hover:text-gray-950 dark:bg-white/10 dark:text-gray-300 dark:hover:text-white"
          href="https://www.linkedin.com/in/mussadaq-ahmad-jamil/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          <BsLinkedin />
        </a>
        <a
          className="flex h-11 w-11 items-center justify-center rounded-full borderBlack bg-white/80 text-lg text-gray-600 shadow-sm backdrop-blur-sm transition hover:scale-105 hover:text-gray-950 dark:bg-white/10 dark:text-gray-300 dark:hover:text-white"
          href="https://github.com/MussadaqAhmad"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithub />
        </a>
      </motion.div>
    </section>
  );
}
