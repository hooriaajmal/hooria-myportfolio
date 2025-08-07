import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiSend } from "react-icons/fi";

const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay,
    },
  },
});

export default function Contact({ isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleClear = (e) => {
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 100); // allow Formspree to process first
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-16 px-4 sm:px-8 lg:px-16 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headingVariants}
        className="text-center mb-12"
      >
        <div className="inline-block relative">
          <h2 className="text-3xl sm:text-4xl font-bold inline-block">
            <span className={`${isDark ? "text-white" : "text-black"}`}>
              Get in{" "}
            </span>
            <span className="text-red-600">Touch</span>
          </h2>
          <span className="absolute left-0 bottom-[-10px] h-[6px] w-10 bg-red-600 rounded-full" />
        </div>
      </motion.div>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/xkgzrgwy"
        method="POST"
        onSubmit={handleClear}
        className="max-w-xl mx-auto flex flex-col gap-6"
      >
        {/* Name Field */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant(0.1)}
        >
          {inView && (
          <input
            name="name"
            type="text"
            required
            autoFocus
            placeholder="Drop a name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full px-4 py-2 rounded-md border border-red-600 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
              isDark
                ? "bg-gray-800 placeholder-gray-400 text-white"
                : "bg-gray-100 placeholder-gray-600 text-black"
            }`}
          />)}

        </motion.div>

        {/* Email Field */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant(0.3)}
        >
          <input
            name="email"
            type="email"
            required
            placeholder="Add your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 rounded-md border border-red-600 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
              isDark
                ? "bg-gray-800 placeholder-gray-400 text-white"
                : "bg-gray-100 placeholder-gray-600 text-black"
            }`}
          />
        </motion.div>

        {/* Message Field */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant(0.5)}
        >
          <textarea
            name="message"
            rows="5"
            required
            placeholder="Say hello or drop a note..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`w-full px-4 py-2 rounded-md border border-red-600 shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-red-500 transition ${
              isDark
                ? "bg-gray-800 placeholder-gray-400 text-white"
                : "bg-gray-100 placeholder-gray-600 text-black"
            }`}
          />
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInVariant(0.7)}
          className="flex justify-end"
        >
          <motion.button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-md font-semibold transition-all duration-300 hover:bg-red-500 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiSend className={`h-5 w-5 `} />
            Send Message
          </motion.button>
        </motion.div>
      </form>
    </section>
  );
}