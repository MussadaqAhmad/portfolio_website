"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { duration, ease, spring, viewportEnter } from "@/lib/motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] text-center sm:mb-28"
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: duration.cinematic, ease: ease.outExpo }}
      viewport={viewportEnter}
    >
      <SectionHeading>Contact me</SectionHeading>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportEnter}
        transition={{ ...spring.soft, delay: 0.1 }}
        className="text-secondary -mt-6"
      >
        Please contact me directly at{" "}
        <a
          className="text-primary underline decoration-[rgba(var(--accent-rgb),0.6)] underline-offset-2 transition hover:decoration-[var(--accent)]"
          href="mailto:mussadaq900@gmail.com"
        >
          mussadaq900@gmail.com
        </a>{" "}
        or through this form.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportEnter}
        transition={{ ...spring.gentle, delay: 0.15 }}
        className="glass-surface mt-10 flex flex-col rounded-2xl p-5 sm:p-6"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="field h-14 rounded-lg px-4"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="field my-3 h-52 rounded-lg p-4"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </motion.form>
    </motion.section>
  );
}
