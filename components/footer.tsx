"use client";

import { motion } from "framer-motion";
import { duration, ease, viewportEnter } from "@/lib/motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportEnter}
      transition={{ duration: duration.slow, ease: ease.outExpo }}
      className="mb-10 px-4 text-center text-gray-500"
    >
      <small className="block text-xs">
        &copy; {new Date().getFullYear()} Mussadaq Ahmad. All rights reserved.
      </small>
    </motion.footer>
  );
}
