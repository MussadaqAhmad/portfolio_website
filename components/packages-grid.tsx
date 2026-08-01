"use client";

import SectionHeader from "@/components/ui/section-header";
import { useSectionInView } from "@/lib/hooks";
import type { PackageStats } from "@/lib/pub-dev";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportEnter } from "@/lib/motion";
import { SiDart } from "react-icons/si";
import { BsArrowUpRight, BsHeartFill, BsStarFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import Tilt from "@/components/motion/tilt";

type PackagesGridProps = {
  packages: PackageStats[];
};

export default function PackagesGrid({ packages }: PackagesGridProps) {
  const { ref } = useSectionInView("Packages");

  return (
    <section
      id="packages"
      ref={ref}
      className="mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-40"
    >
      <SectionHeader
        eyebrow="Open Source"
        title="Published Packages"
        tagline="Shipped To pub.dev!"
      >
        Reusable Flutter and Dart packages published on pub.dev, with live
        version and popularity data pulled straight from the registry.
      </SectionHeader>

      <motion.ul
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportEnter}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {packages.map((pkg) => (
          <motion.li key={pkg.name} variants={staggerItem} className="list-none">
            <Tilt maxTilt={6} className="h-full overflow-hidden rounded-2xl">
              <article className="glass-surface glass-border-glow flex h-full flex-col rounded-2xl p-5 text-left sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <span
                  aria-hidden
                  className="text-accent flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[color:rgba(var(--accent-rgb),0.3)] bg-[color:rgba(var(--accent-rgb),0.12)] text-xl"
                >
                  <SiDart />
                </span>

                <span className="date-badge">v{pkg.version}</span>
              </div>

              <h3 className="text-primary font-display mt-4 text-base font-bold tracking-tight sm:text-lg">
                {pkg.title}
              </h3>

              <p className="text-faint mt-1 font-mono text-[0.72rem]">
                {pkg.name}
              </p>

              <p className="text-secondary mt-3 flex-1 text-[0.85rem] leading-relaxed">
                {pkg.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="stat-pill" title={`${pkg.likes} likes on pub.dev`}>
                  <BsHeartFill aria-hidden className="text-accent text-[0.7rem]" />
                  {pkg.likes} likes
                </span>
                <span
                  className="stat-pill"
                  title={`${pkg.points} of ${pkg.maxPoints} pub points`}
                >
                  <BsStarFill aria-hidden className="text-accent text-[0.7rem]" />
                  {pkg.points}/{pkg.maxPoints} pts
                </span>
                {pkg.downloads30d !== null ? (
                  <span
                    className="stat-pill"
                    title="Downloads in the last 30 days"
                  >
                    <HiOutlineDownload aria-hidden className="text-accent text-[0.8rem]" />
                    {pkg.downloads30d.toLocaleString()}/mo
                  </span>
                ) : null}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={pkg.pubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="overlay-cta !text-[0.78rem]"
                  aria-label={`View ${pkg.name} on pub.dev`}
                >
                  View on pub.dev
                  <BsArrowUpRight aria-hidden />
                </a>

                {pkg.repoUrl ? (
                  <a
                    href={pkg.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-button flex h-9 w-9 items-center justify-center rounded-full text-base"
                    aria-label={`${pkg.name} source on GitHub`}
                  >
                    <FaGithub aria-hidden />
                  </a>
                ) : null}
              </div>
              </article>
            </Tilt>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
