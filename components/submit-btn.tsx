"use client";

import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import Magnetic from "@/components/motion/magnetic";
import { spring } from "@/lib/motion";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Magnetic strength={0.28}>
      <motion.button
        type="submit"
        className="btn-alive btn-shine cta-primary group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full outline-none transition-all focus:scale-105 active:scale-105 disabled:scale-100 disabled:opacity-65"
        disabled={pending}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.98 }}
        transition={spring.magnetic}
        onMouseMove={(e) => {
          const el = e.currentTarget;
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${e.clientX - r.left}px`);
          el.style.setProperty("--my", `${e.clientY - r.top}px`);
        }}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </>
        )}
      </motion.button>
    </Magnetic>
  );
}
