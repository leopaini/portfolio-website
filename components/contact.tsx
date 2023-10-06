"use client";

import React from "react";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";
import { motion } from "framer-motion";
import useSectionInView from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:example@gmail.com">example@gmail.com</a> or through this
        form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black/80"
        action={async (formData) => {
          const { error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("E-mail sent successfully");
        }}
      >
        <input
          required
          type="email"
          maxLength={100}
          name="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
        />
        <textarea
          required
          name="message"
          maxLength={1000}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
        />

        <SubmitBtn />
      </form>
    </motion.section>
  );
}
