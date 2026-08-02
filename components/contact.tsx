"use client";

import { useRef } from "react";
import SectionHeader from "@/components/ui/section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { duration, ease, spring, viewportEnter } from "@/lib/motion";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

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
      <SectionHeader
        eyebrow="Contact"
        title="Get In Touch"
        tagline="Ask Me Anything!"
        className="!mb-6 sm:!mb-8"
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportEnter}
        transition={{ ...spring.soft, delay: 0.1 }}
        className="text-secondary"
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
        ref={formRef}
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

          formRef.current?.reset();
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="field h-14 rounded-lg px-4"
          name="senderName"
          type="text"
          required
          maxLength={100}
          autoComplete="name"
          placeholder="Name"
        />
        <input
          className="field mt-3 h-14 rounded-lg px-4"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          autoComplete="email"
          placeholder="Email"
        />
        <textarea
          className="field my-3 h-52 rounded-lg p-4"
          name="message"
          placeholder="Message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </motion.form>
    </motion.section>
  );
}
