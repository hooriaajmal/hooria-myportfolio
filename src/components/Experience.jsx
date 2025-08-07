import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  CheckCircle,
  MapPin,
  Calendar,
  Briefcase,
  Building2,
  FileText,
} from "lucide-react";

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const cardVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeInOut", delay },
  },
});

export default function Experience({ isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section
      id="experience"
      ref={ref}
      className={`min-h-screen py-16 px-4 sm:px-8 lg:px-16 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={headingVariants}
        className="text-center mt-12 mb-12"
      >
        <div className="inline-block relative">
          <h2 className="text-3xl sm:text-4xl font-bold inline-block">
            <span className={`${isDark ? "text-white" : "text-black"}`}>
              My{" "}
            </span>
            <span className="text-red-600">Experience</span>
          </h2>
          <span className="absolute left-0 bottom-[-10px] h-[6px] w-10 bg-red-600 rounded-full" />
        </div>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left Column - Education */}
        <div className="space-y-6">
          {/* Education Card */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariant(0.2)}
            className={`p-6 rounded-2xl border transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_5px_rgba(255,0,0,0.5)] ${
              isDark
                ? "bg-[#0d0d0d] border-red-500/20"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`rounded-xl p-4 ${
                  isDark ? "bg-[#191919]" : "bg-gray-200"
                }`}
              >
                <GraduationCap className="text-red-600 w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold">
                  Bachelor of Science in Artificial Intelligence
                </h3>
                <div className="text-red-600 font-semibold">
                  COMSATS University, Islamabad (Attock Campus)
                </div>
              </div>
              <div className="ml-auto">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 dark:bg-red-500/10 border-none">
                  <span className="text-sm font-semibold text-red-600">
                    CGPA:
                  </span>
                  <span className="ml-1 text-sm font-semibold text-red-600">
                    3.6
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-8 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-red-600" />
                <span>
                  <span className="font-semibold">Duration:</span> 2021 - 2025
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>
                  <span className="font-semibold">Location:</span> Attock,
                  Pakistan
                </span>
              </div>
            </div>

            <div className="mb-6 text-sm">
              Specialized in Artificial Intelligence with focus on machine
              learning, deep learning, and AI systems.
            </div>

            <div>
              <h4 className="font-semibold mb-3">Key Achievements</h4>
              <div className="space-y-3">
                {[
                  "Built ML and NLP projects using Python, TensorFlow, and PyTorch",
                  "Worked on academic research focused on Urdu LLMs",
                  "Designed and trained custom datasets for fine-tuning tasks",
                  "Explored deep learning, data pipelines, and backend integrations",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 rounded-lg px-4 py-3 ${
                      isDark ? "bg-[#191919]" : "bg-red-100"
                    }`}
                  >
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Experience */}
        <div className="space-y-6">
          {/* AI Intern Card */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariant(0.4)}
            className={`p-6 rounded-2xl border transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_5px_rgba(255,0,0,0.5)] ${
              isDark
                ? "bg-[#0d0d0d] border-red-500/20"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`rounded-xl p-3 ${
                  isDark ? "bg-[#191919]" : "bg-gray-200"
                }`}
              >
                <Briefcase className="text-red-600 w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-1">AI Intern</h3>
                <div className="text-red-600 font-semibold flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  <span>Kindi AI</span>
                </div>
                <div className="text-sm mt-1">Oct 2024 – Jan 2025 (Remote)</div>
              </div>
              <a
                href="src/assets/Internship Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-red-600 hover:text-red-500 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span className="text-sm">Certificate</span>
              </a>
            </div>

            <p className="text-sm mt-8 mb-10">
              Developed state-of-the-art speech generation systems at Kindi AI,
              using models like Whisper and StyleTTS2 to refine speaker
              consistency and prosody.
            </p>

            <div className="space-y-2 mb-12 ml-8 justify-center">
              {[
                "Built speech-to-speech systems using VoiceCraft and Google TTS.",
                "Fine-tuned deep learning models for more expressive audio.",
                "Cleaned, preprocessed, and normalized real-world voice datasets.",
                "Designed and tested large-scale inference scripts.",
                "Documented results and participated in technical reviews.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-red-600" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex ml-5 flex-wrap gap-2">
              {[
                "Whisper",
                "VoiceCraft",
                "Google TTS",
                "StyleTTS2",
                "OpenAI",
                "Hugging Face",
                "Google Colab",
                "Python",
                "Deep Learning",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-red-600 bg-red-100 dark:bg-red-500/10 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Frontend Developer Intern Card */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariant(0.6)}
            className={`p-6 rounded-2xl border transition-transform duration-300 hover:scale-[1.02] shadow-[0_0_5px_rgba(255,0,0,0.5)] ${
              isDark
                ? "bg-[#0d0d0d] border-red-500/20"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div
                className={`rounded-xl p-3 ${
                  isDark ? "bg-[#191919]" : "bg-gray-200"
                }`}
              >
                <Briefcase className="text-red-600 w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold mb-1">
                  Frontend Developer Intern
                </h3>
                <div className="text-red-600 font-semibold flex items-center gap-1">
                  <Building2 className="w-4 h-4" />
                  <span>Elevvo Pathways</span>
                </div>
                <div className="text-sm mt-1">
                  Jul 2025 – Aug 2025 (Remote)
                </div>
              </div>
              <a
                href="src/assets/FrontendCertificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-red-600 hover:text-red-500 transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span className="text-sm">Certificate</span>
              </a>
            </div>

            <p className="text-sm mt-8 mb-10">
              Working as a frontend intern at Elevvo Pathways to build a fully
              responsive and functional website using modern web development tools
              and frameworks.
            </p>

            <div className="space-y-2 mb-12 ml-8 justify-center">
              {[
                "Created structured multi-page website layouts with semantic HTML and CSS.",
                "Implemented interactivity using JavaScript for dynamic components.",
                "Used Bootstrap for responsive design and mobile-first layouts.",
                "Built reusable UI components with React.js.",
                "Tested and optimized cross-browser compatibility and performance.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-red-600" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex ml-5 flex-wrap gap-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "React.js",
                "Responsive Design",
                "Git",
                "VS Code",
                "UI/UX Basics",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm text-red-600 bg-red-100 dark:bg-red-500/10 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
