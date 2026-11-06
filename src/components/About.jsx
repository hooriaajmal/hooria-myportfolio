import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function About({ isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className={`${isDark ? "bg-black text-white" : "bg-white text-black"}`}
    >
{/* Top Statement */}
<motion.div
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  variants={fadeUp}
  className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-24 text-left"
>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug max-w-6xl">
    I like to learn by doing things, and I'm curious about how things work. I like to build real projects and figure out how to make them work my way.
  </h1>

  {/* Label with line */}
  <div className="mt-10">
    <p
      className={`text-sm mb-2 ${
        isDark ? "text-gray-400" : "text-gray-600"
      }`}
    >
      My journey so far
    </p>
    <hr className={`${isDark ? "border-gray-700" : "border-gray-300"}`} />
  </div>
</motion.div>



      {/* Two-Column Section */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 pb-24"
      >
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
