"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="relative z-[999]">
      {/* The shell is absolutely positioned inside this wrapper so it always
          matches the height of the links, however many rows they wrap onto. */}
      <div className="fixed left-1/2 top-0 w-full -translate-x-1/2 md:top-6 md:w-auto">
        <motion.div
          className="nav-shell absolute inset-0 rounded-none border md:rounded-full"
          initial={{ y: -100, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
        />

        <nav aria-label="Primary" className="relative px-2 py-2.5 md:px-4 md:py-1.5">
          <ul className="mx-auto flex max-w-[24rem] flex-wrap items-center justify-center gap-x-1 gap-y-0.5 text-[0.8rem] font-medium md:max-w-none md:flex-nowrap md:gap-x-1.5 md:text-[0.85rem]">
            {links.map((link) => {
              const isActive = activeSection === link.name;

              return (
                <motion.li
                  className="relative flex items-center justify-center"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  <Link
                    className="nav-link flex w-full items-center justify-center rounded-full px-2.5 py-2 md:px-3 md:py-2.5"
                    data-active={isActive}
                    aria-current={isActive ? "page" : undefined}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {isActive && (
                      <motion.span
                        className="nav-active absolute inset-0 -z-10 rounded-full"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
