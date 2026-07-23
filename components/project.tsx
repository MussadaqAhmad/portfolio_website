"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

type ProjectProps = (typeof projectsData)[number] & {
  index: number;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 48,
    scale: 0.92,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 16,
      delay: index * 0.08,
    },
  }),
};

const tagContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.15,
    },
  },
};

const tagVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 1,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
  hover: {
    scale: 1.08,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 22,
    },
  },
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  index,
}: ProjectProps) {
  const visibleTags = tags.slice(0, 4);
  const remainingTags = tags.length - visibleTags.length;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{
        y: -8,
        transition: { type: "spring", stiffness: 300, damping: 22 },
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex h-full cursor-default flex-col overflow-hidden rounded-xl border border-black/5 bg-gray-100 shadow-sm transition-shadow duration-300 hover:border-black/10 hover:shadow-xl hover:shadow-black/10 dark:bg-white/10 dark:hover:border-white/10 dark:hover:shadow-black/30"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top, rgba(255,255,255,0.18), transparent 55%)",
        }}
      />

      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.08 }}
          transition={{ type: "spring", stiffness: 180, damping: 22 }}
        >
          <Image
            src={imageUrl}
            alt={`${title} project screenshot`}
            fill
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      <div className="relative flex flex-1 flex-col p-5">
        <motion.h3
          className="text-lg font-semibold sm:text-xl"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0.85 }}
          whileHover={{ opacity: 1 }}
          className="mt-2 flex-1 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-white/70"
        >
          {description}
        </motion.p>

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
              className="rounded-full bg-black/[0.7] px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-white dark:text-white/80"
              key={tagIndex}
            >
              {tag}
            </motion.li>
          ))}
          {remainingTags > 0 && (
            <motion.li
              variants={tagVariants}
              whileHover="hover"
              className="rounded-full bg-black/[0.45] px-2.5 py-1 text-[0.65rem] uppercase tracking-wider text-white dark:text-white/80"
            >
              +{remainingTags}
            </motion.li>
          )}
        </motion.ul>
      </div>
    </motion.article>
  );
}
