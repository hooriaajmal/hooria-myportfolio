import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket } from "lucide-react";
import { Code } from "lucide-react";

const headingVariants = {
  hidden: { opacity: 0, y: -30 }, // top to down
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 }, // bottom to top
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function About({ isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className={`min-h-screen py-16 px-4 sm:px-8 lg:px-16 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading - Hero style */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headingVariants}
        className="text-center mt-12 mb-12"
      >
        <div className="inline-block relative">
          <h2 className="text-3xl sm:text-4xl font-bold inline-block">
            <span className={`${isDark ? "text-white" : "text-black"}`}>
              About{" "}
            </span>
            <span className="text-red-600">Me</span>
          </h2>
          <span className="absolute left-0 bottom-[-10px] h-[6px] w-10 bg-red-600 rounded-full" />
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={cardVariants}
        className={`max-w-6xl mx-auto mt-12 p-6 sm:p-10 rounded-xl border transition-transform duration-300 hover:scale-105 shadow-[0_0_5px_rgba(255,0,0,0.5)] ${
          isDark
            ? "bg-[#0d0d0d] border-red-500/20"
            : "bg-gray-100 border-gray-300"
        }`}
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
          <Rocket className="text-red-600" />
          My AI Journey
        </h3>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-base mb-1 flex items-center gap-2">
                The Beginning (2021–2022)
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-700"
                }`}
              >
                I began my Bachelor's degree in{" "}
                <span className="text-blue-500">2021</span>, diving first into
                programming fundamentals. I leaned heavily on StackOverflow to
                troubleshoot errors and used W3Schools to learn HTML, CSS, and
                JavaScript. By{" "}
                <span className="text-green-400">early 2022</span>, I discovered
                the basics of Artificial Intelligence and built my first
                projects implementing classic machine learning algorithms.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base mb-1">
                AI Transformers & LLMs (2023)
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-700"
                }`}
              >
                In <span className="text-blue-500">2023</span>, I embraced large
                language models—using ChatGPT to understand transformer
                architectures and mastering prompt-engineering techniques. With
                support from professors and peers, I contributed to academic
                research projects and sharpened my AI skills. Toward the end of
                that year, I shifted my focus to front-end web development:
                learning React.js, writing JavaScript, and shipping my own
                portfolio sites.
              </p>
            </div>

            <p
              className={`mt-4 font-semibold flex items-center gap-2 ${
                isDark ? "text-red-600" : "text-red-600"
              }`}
            >
              <Code className="text-red-600" />
              Building intelligent systems that transform ideas into reality
            </p>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-base mb-1">
                Research & Development (Late 2023–2024)
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-700"
                }`}
              >
                The year <span className="text-blue-500">2024</span> was all
                about integration. I connected my AI models to web interfaces,
                collaborated on external client projects, and embarked on my
                final-year thesis: fine-tuning an open-source Urdu LLM. I
                gathered and structured a custom Urdu dataset via web scraping,
                generated animated videos narrated in Urdu, and tested audio
                pipelines—all running on Colab GPUs with a FastAPI-powered
                backend and MongoDB database.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-base mb-1">
                Full-Stack & Products (2025–Present)
              </h4>
              <p
                className={`text-sm ${
                  isDark ? "text-gray-400" : "text-gray-700"
                }`}
              >
                In <span className="text-green-500">early 2025</span>, I
                performed large-scale experiments— comparing fine-tuned LLMs,
                exploring Stable Diffusion 3 for image and animation generation,
                and producing end-to-end story videos with synchronized audio.
                By <span className="text-green-500">mid-2025</span>, the
                full-stack web app was live, and I'm now expanding its features,
                ready to adopt new technologies and solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
