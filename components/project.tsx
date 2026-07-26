"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { duration, ease, spring } from "@/lib/motion";
import { useElementPointer } from "@/lib/motion-hooks";
import { clsx } from "clsx";
import { useTheme } from "@/context/theme-context";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(6px)",
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      ...spring.soft,
      delay: index * 0.06,
    },
  }),
};

const tagContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const tagVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: spring.snappy,
  },
  hover: {
    y: -1,
    transition: spring.snappy,
  },
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  index,
}: ProjectProps) {
  const preferReduced = useReducedMotion();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const ref = useRef<HTMLDivElement>(null);
  const { pointer, onMove, onLeave } = useElementPointer(
    ref,
    !preferReduced && !isDark
  );
  const visibleTags = tags.slice(0, 4);
  const remainingTags = tags.length - visibleTags.length;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-40px" }}
      className="h-full"
      style={{ perspective: isDark ? undefined : 1000 }}
    >
      <motion.article
        ref={ref}
        onMouseMove={isDark ? undefined : onMove}
        onMouseLeave={isDark ? undefined : onLeave}
        animate={
          isDark
            ? undefined
            : {
                y: pointer.active ? -10 : 0,
                rotateX: preferReduced ? 0 : -pointer.y * 6,
                rotateY: preferReduced ? 0 : pointer.x * 6,
              }
        }
        whileHover={
          isDark
            ? { y: -4, transition: { duration: 0.35, ease: ease.out } }
            : undefined
        }
        transition={spring.gentle}
        style={isDark ? undefined : { transformStyle: "preserve-3d" }}
        className={clsx(
          "group relative flex h-full cursor-default flex-col overflow-hidden rounded-xl",
          "glass-surface glass-border-glow",
          "bg-gray-100/80 dark:bg-[#151515]"
        )}
      >
        {!isDark && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-[2] rounded-xl"
            style={{
              background: `radial-gradient(420px circle at ${
                50 + pointer.x * 100
              }% ${
                50 + pointer.y * 100
              }%, rgba(255,255,255,0.2), transparent 45%)`,
              opacity: pointer.active ? 1 : 0,
            }}
          />
        )}

        {!isDark && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -inset-4 -z-10 rounded-2xl bg-[#dbd7fb]/30 blur-2xl"
            animate={{
              opacity: pointer.active ? 1 : 0,
              scale: pointer.active ? 1.05 : 0.95,
            }}
            transition={{ duration: duration.base, ease: ease.outExpo }}
          />
        )}

        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={isDark ? { scale: 1.04 } : undefined}
            animate={
              isDark
                ? undefined
                : { scale: pointer.active ? 1.08 : 1 }
            }
            transition={{ duration: duration.slow, ease: ease.outExpo }}
          >
            <Image
              src={imageUrl}
              alt={`${title} project screenshot`}
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] dark:group-hover:scale-[1.04]"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-[#090909]/70 dark:via-transparent dark:opacity-40 dark:group-hover:opacity-60" />
        </div>

        <div className="relative z-[3] flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-bold tracking-tight text-gray-950 sm:text-xl dark:text-[#F5F5F5]">
            {title}
          </h3>

          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-700 dark:text-[#A1A1AA]">
            {description}
          </p>

          <motion.ul
            className="mt-4 flex flex-wrap gap-2"
            variants={tagContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {visibleTags.map((tag, tagIndex) => (
              <motion.li
                custom={tagIndex}
                variants={tagVariants}
                whileHover="hover"
                className="rounded-full bg-black/[0.7] px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-white dark:border dark:border-white/[0.06] dark:bg-[#1B1B1B] dark:text-[#A1A1AA]"
                key={tagIndex}
              >
                {tag}
              </motion.li>
            ))}
            {remainingTags > 0 && (
              <motion.li
                variants={tagVariants}
                whileHover="hover"
                className="rounded-full bg-black/[0.45] px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-white dark:border dark:border-white/[0.06] dark:bg-[#1B1B1B] dark:text-[#71717A]"
              >
                +{remainingTags}
              </motion.li>
            )}
          </motion.ul>
        </div>
      </motion.article>
    </motion.div>
  );
}
