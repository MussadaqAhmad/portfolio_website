"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { duration, ease, spring } from "@/lib/motion";
import { clsx } from "clsx";

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
    >
      <motion.article
        whileHover={{ y: -4, transition: { duration: 0.35, ease: ease.out } }}
        transition={spring.gentle}
        className={clsx(
          "group relative flex h-full cursor-default flex-col overflow-hidden rounded-xl",
          "glass-surface glass-border-glow"
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: duration.slow, ease: ease.outExpo }}
          >
            <Image
              src={imageUrl}
              alt={`${title} project screenshot`}
              fill
              quality={90}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-60 dark:from-[#0b0b0b]/70" />
        </div>

        <div className="relative z-[3] flex flex-1 flex-col p-5">
          <h3 className="text-primary font-display text-lg font-bold tracking-tight sm:text-xl">
            {title}
          </h3>

          <p className="text-secondary mt-2 line-clamp-3 flex-1 text-sm leading-relaxed">
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
                className="chip rounded-full px-2.5 py-1 text-[0.65rem] uppercase tracking-wider"
                key={tagIndex}
              >
                {tag}
              </motion.li>
            ))}
            {remainingTags > 0 && (
              <motion.li
                variants={tagVariants}
                whileHover="hover"
                className="chip rounded-full px-2.5 py-1 text-[0.65rem] uppercase tracking-wider opacity-80"
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
