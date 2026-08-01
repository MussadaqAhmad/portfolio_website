"use client";

import { useState } from "react";
import type { ProjectItem } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { spring } from "@/lib/motion";
import { clsx } from "clsx";
import { BsChevronDown } from "react-icons/bs";
import { FaAppStoreIos, FaGooglePlay } from "react-icons/fa";
import Tilt from "@/components/motion/tilt";

type ProjectProps = ProjectItem & {
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
      delay: (index % 3) * 0.08,
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
  playStoreUrl,
  appStoreUrl,
  index,
}: ProjectProps) {
  const [expanded, setExpanded] = useState(false);

  const visibleTags = tags.slice(0, 4);
  const remainingTags = tags.length - visibleTags.length;

  const stores = [
    playStoreUrl && {
      key: "play",
      label: "Play Store",
      href: playStoreUrl,
      Icon: FaGooglePlay,
    },
    appStoreUrl && {
      key: "ios",
      label: "App Store",
      href: appStoreUrl,
      Icon: FaAppStoreIos,
    },
  ].filter(Boolean) as {
    key: string;
    label: string;
    href: string;
    Icon: typeof FaGooglePlay;
  }[];

  const panelId = `project-desc-${index}`;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2, margin: "-40px" }}
      className="h-full"
    >
      <Tilt maxTilt={5} className="h-full overflow-hidden rounded-3xl">
        <article
          className={clsx(
            "group relative flex h-full flex-col rounded-3xl p-3",
            "glass-surface glass-border-glow"
          )}
        >
        <div className="card-media aspect-[16/10]">
          <Image
            src={imageUrl}
            alt={`${title} app screenshot`}
            fill
            quality={90}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="scale-[1.02] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.08]"
          />

          <div className="card-overlay">
            {stores.length > 0 ? (
              <div className="overlay-actions">
                {stores.map(({ key, label, href, Icon }) => (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="store-chip store-chip-overlay"
                    aria-label={`View ${title} on the ${label}`}
                  >
                    <Icon aria-hidden className="text-[0.9rem]" />
                    {label}
                  </a>
                ))}
              </div>
            ) : (
              <p className="overlay-note line-clamp-5">{description}</p>
            )}
          </div>
        </div>

        <div className="relative z-[3] flex flex-1 flex-col px-2 pb-1 pt-5">
          <h3 className="text-primary font-display flex items-start gap-2.5 text-lg font-bold tracking-tight sm:text-xl">
            <span aria-hidden className="title-bar mt-1 h-5 self-stretch" />
            {title}
          </h3>

          <div className="mt-2.5 flex items-start gap-3">
            <p
              id={panelId}
              className={clsx(
                "text-secondary flex-1 text-[0.875rem] leading-relaxed",
                !expanded && "line-clamp-3"
              )}
            >
              {description}
            </p>

            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              aria-expanded={expanded}
              aria-controls={panelId}
              aria-label={
                expanded
                  ? `Collapse the ${title} description`
                  : `Read the full ${title} description`
              }
              className="disclosure-btn mt-0.5"
            >
              <BsChevronDown aria-hidden className="text-[0.7rem]" />
            </button>
          </div>

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
                className="chip project-tech-chip rounded-full px-2.5 py-1 text-[0.65rem] uppercase tracking-wider"
                key={tagIndex}
              >
                {tag}
              </motion.li>
            ))}
            {remainingTags > 0 && (
              <motion.li
                variants={tagVariants}
                whileHover="hover"
                className="chip project-tech-chip rounded-full px-2.5 py-1 text-[0.65rem] uppercase tracking-wider opacity-80"
              >
                +{remainingTags}
              </motion.li>
            )}
          </motion.ul>

          {/* Devices without hover never reveal the image overlay, so the same
              store links render inline for them instead. */}
          {stores.length > 0 && (
            <div className="store-links-touch mt-auto flex-wrap gap-2 pt-5">
              {stores.map(({ key, label, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="store-chip"
                  aria-label={`View ${title} on the ${label}`}
                >
                  <Icon aria-hidden className="text-[0.9rem]" />
                  {label}
                </a>
              ))}
            </div>
          )}
        </div>
        </article>
      </Tilt>
    </motion.div>
  );
}
