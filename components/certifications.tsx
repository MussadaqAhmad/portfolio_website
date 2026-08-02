"use client";

import Image from "next/image";
import SectionHeader from "@/components/ui/section-header";
import { certificationsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem, viewportEnter } from "@/lib/motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { BsArrowUpRight, BsCalendar3 } from "react-icons/bs";
import Tilt from "@/components/motion/tilt";

export default function Certifications() {
  const { ref } = useSectionInView("Certs");

  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 w-full max-w-5xl scroll-mt-28 sm:mb-40"
    >
      <SectionHeader
        eyebrow="Credentials"
        title="Certifications"
        tagline="Verified Credentials!"
      >
        Formal certifications that shaped how I approach mobile engineering and
        delivery.
      </SectionHeader>

      <motion.ul
        variants={staggerContainer(0.1, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportEnter}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certificationsData.map((cert) => (
          <motion.li key={cert.title} variants={staggerItem} className="list-none">
            <Tilt maxTilt={6} className="h-full overflow-hidden rounded-2xl">
              <article className="glass-surface glass-border-glow flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-[color:var(--glass-border)] bg-[color:rgba(var(--accent-rgb),0.06)]">
                {cert.image ? (
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate issued by ${cert.issuer}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="text-accent flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:rgba(var(--accent-rgb),0.3)] bg-[color:rgba(var(--accent-rgb),0.12)] text-2xl"
                  >
                    <HiOutlineAcademicCap />
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5 text-left sm:p-6">
                <h3 className="text-primary font-display text-base font-bold leading-snug tracking-tight sm:text-lg">
                  {cert.title}
                </h3>

                <p className="text-secondary mt-1.5 text-[0.85rem] font-medium">
                  {cert.issuer}
                </p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
                  <span className="date-badge cert-date-badge">
                    <BsCalendar3 aria-hidden className="text-[0.7rem]" />
                    {cert.date}
                  </span>

                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accent inline-flex items-center gap-1.5 text-[0.78rem] font-semibold transition hover:gap-2.5"
                    >
                      Verify
                      <BsArrowUpRight aria-hidden />
                    </a>
                  ) : null}
                </div>
              </div>
              </article>
            </Tilt>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
