"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { SiFlutter, SiKotlin, SiReact, SiSwift } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { fadeUpDelay, spring, staggerContainer, staggerItem } from "@/lib/motion";
import Magnetic from "@/components/motion/magnetic";
import Tilt from "@/components/motion/tilt";
import TextReveal from "@/components/motion/text-reveal";
import AnimatedNumber from "@/components/motion/animated-number";
import TypingText from "@/components/motion/typing-text";

const roles = [
  "Senior Software Engineer",
  "Flutter Specialist",
  "React Native Developer",
  "Native Android & iOS",
];

/** Corner pills that slide in from off-canvas, then bob forever. */
const floatingIcons = [
  {
    label: "Flutter",
    Icon: SiFlutter,
    color: "#38bdf8",
    position: "left-[-22%] top-[2%] xl:left-[-30%]",
    from: { x: -80, y: -80 },
  },
  {
    label: "Swift",
    Icon: SiSwift,
    color: "#fb923c",
    position: "right-[-22%] top-[8%] xl:right-[-30%]",
    from: { x: 80, y: -80 },
  },
  {
    label: "Kotlin",
    Icon: SiKotlin,
    color: "#9333EA",
    position: "bottom-[14%] left-[-24%] xl:left-[-32%]",
    from: { x: -80, y: 80 },
  },
  {
    label: "React Native",
    Icon: SiReact,
    color: "#4ade80",
    position: "bottom-[4%] right-[-25%] xl:right-[-34%]",
    from: { x: 80, y: 80 },
  },
];

const stats = [
  {
    label: "Experience",
    kind: "count" as const,
    value: 4.5,
    decimals: 1,
    suffix: "+ Years",
  },
  {
    label: "Projects",
    kind: "count" as const,
    value: 12,
    decimals: 0,
    suffix: "+ Delivered",
  },
  {
    label: "Focus",
    kind: "text" as const,
    value: "Cross-Platform & Native",
  },
];

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
      className="relative mb-28 max-w-[52rem] scroll-mt-[100rem] text-center sm:mb-0"
    >
      {floatingIcons.map(({ label, Icon, color, position, from }, i) => (
        <motion.div
          key={label}
          aria-hidden
          className={`pointer-events-none absolute z-10 hidden lg:block ${position}`}
          initial={
            preferReduced
              ? { opacity: 1 }
              : { opacity: 0, x: from.x, y: from.y }
          }
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            className={preferReduced ? "floating-icon" : "floating-icon animate-float-icon"}
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            <Icon style={{ color }} />
            <span className="floating-icon-label">{label}</span>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={fadeUpDelay(0.05)}
        className="mb-8 flex justify-center"
      >
        <div className="animate-float relative">
          <div
            aria-hidden
            className="avatar-glow animate-glow-pulse absolute -inset-3 rounded-full opacity-80"
          />
          <div
            aria-hidden
            className="avatar-ring animate-ring absolute -inset-5 rounded-full opacity-35"
          />
          <Tilt maxTilt={8} className="relative rounded-full">
            <div className="avatar-frame relative rounded-full p-[3px]">
              <Image
                src="/mussadaq_ahmad_jamil.png"
                alt="Mussadaq Ahmad — Software Engineer"
                width={256}
                height={256}
                quality={95}
                priority
                className="avatar-photo h-28 w-28 rounded-full border-4 object-cover object-top sm:h-32 sm:w-32"
              />
            </div>
          </Tilt>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeUpDelay(0.12)}
        className="text-accent mb-3 font-display flex min-h-[1.4em] items-center justify-center text-xs font-semibold uppercase tracking-[0.28em]"
      >
        <TypingText phrases={roles} />
      </motion.p>

      <TextReveal
        as="h1"
        mode="words"
        delay={0.18}
        className="text-primary font-display mb-4 px-4 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
      >
        Mussadaq Ahmad
      </TextReveal>

      <motion.p
        initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={fadeUpDelay(0.28)}
        className="text-secondary mx-auto mb-6 max-w-[34rem] px-4 text-base leading-relaxed sm:text-lg sm:leading-relaxed"
      >
        I build{" "}
        <span className="accent-text font-semibold">
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
            className="min-w-[9rem]"
          >
            <Tilt
              maxTilt={6}
              className="glass-surface flex flex-col rounded-2xl px-5 py-3"
            >
              <span className="text-muted font-display text-[0.65rem] font-semibold uppercase tracking-[0.18em]">
                {stat.label}
              </span>
              <span className="text-primary font-display mt-0.5 text-sm font-bold">
                {stat.kind === "count" ? (
                  <AnimatedNumber
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    duration={1.8}
                    delay={0.35}
                    immediate
                  />
                ) : (
                  stat.value
                )}
              </span>
            </Tilt>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={fadeUpDelay(0.42)}
        className="flex flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:gap-4"
      >
        <Magnetic strength={0.12}>
          <Link
            href="#contact"
            className="btn-alive btn-shine cta-primary group flex h-12 w-full items-center justify-center gap-2 rounded-full px-8 text-[0.95rem] font-semibold outline-none active:scale-[0.98] sm:w-auto"
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

        <Magnetic strength={0.1}>
          <a
            className="btn-alive btn-shine cta-secondary group flex h-12 w-full items-center justify-center gap-2 rounded-full px-8 text-[0.95rem] font-semibold outline-none backdrop-blur-sm active:scale-[0.98] sm:w-auto"
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
        <Magnetic strength={0.18}>
          <a
            className="icon-button flex h-11 w-11 items-center justify-center rounded-full text-lg hover:scale-105"
            href="https://www.linkedin.com/in/mussadaq-ahmad-jamil/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <motion.span
              whileHover={{ scale: 1.08 }}
              transition={spring.snappy}
              className="inline-flex"
            >
              <BsLinkedin />
            </motion.span>
          </a>
        </Magnetic>
        <Magnetic strength={0.18}>
          <a
            className="icon-button flex h-11 w-11 items-center justify-center rounded-full text-lg hover:scale-105"
            href="https://github.com/MussadaqAhmad"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <motion.span
              whileHover={{ scale: 1.08 }}
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
