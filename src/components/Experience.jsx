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
import internshipCertificate from "../assets/Internship Certificate.pdf";
import frontendCertificate from "../assets/FrontendCertificate.pdf";

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
  const inView = useInView(ref, { once: false, amount: 0.1 });

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
        className="text-center mt-10 mb-10 sm:mt-12 sm:mb-12"
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto w-full">
        {/* Left Column - Education */}
        <div className="space-y-6">
          {/* Education Card */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={cardVariant(0.2)}
            className={`p-5 sm:p-6 lg:p-7 rounded-2xl border transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] shadow-[0_0_5px_rgba(255,0,0,0.5)] ${
              isDark
                ? "bg-[#0d0d0d] border-red-500/20"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5 sm:mb-6">
              <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                <div
                  className={`rounded-xl p-3 sm:p-4 shrink-0 ${
                    isDark ? "bg-[#191919]" : "bg-gray-200"
                  }`}
                >
                  <GraduationCap className="text-red-600 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug">
                    Bachelor of Science in Artificial Intelligence
                  </h3>
                  <div className="text-red-600 font-semibold text-sm sm:text-base mt-1">
                    COMSATS University, Islamabad (Attock Campus)
                  </div>
                </div>
              </div>
              <div className="self-start sm:self-auto sm:ml-auto shrink-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-100 dark:bg-red-500/10 border-none">
                  <span className="text-xs sm:text-sm font-semibold text-red-600">
                    CGPA:
                  </span>
                  <span className="ml-1 text-xs sm:text-sm font-semibold text-red-600">
                    3.6
                  </span>
                </span>
              </div>
            </div>

            <div className={`flex flex-wrap gap-4 sm:gap-8 mb-4 text-xs sm:text-sm ${isDark ? "text-gray-300" : "text-black"}`}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-red-600 shrink-0" />
                <span>
                  <span className="font-semibold">Duration:</span> 2021 - 2025
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span>
                  <span className="font-semibold">Location:</span> Attock, Pakistan
                </span>
              </div>
            </div>

            <p className={`mb-6 text-xs sm:text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-black"}`}>
              Specialized in Artificial Intelligence with focus on machine
              learning, deep learning, and AI systems.
            </p>

            <div>
              <h4 className="font-semibold text-sm sm:text-base mb-3">Key Achievements</h4>
              <div className="space-y-2.5 sm:space-y-3">
                {[
                  "Built ML and NLP projects using Python, TensorFlow, and PyTorch",
                  "Worked on academic research focused on Urdu LLMs",
                  "Designed and trained custom datasets for fine-tuning tasks",
                  "Explored deep learning, data pipelines, and backend integrations",
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-2.5 sm:gap-3 rounded-lg px-3.5 sm:px-4 py-2.5 sm:py-3 ${
                      isDark ? "bg-[#191919]" : "bg-red-100"
                    }`}
                  >
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 shrink-0 mt-0.5" />
                    <span className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-black"}`}>{item}</span>
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
            className={`p-5 sm:p-6 lg:p-7 rounded-2xl border transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] shadow-[0_0_5px_rgba(255,0,0,0.5)] ${
              isDark
                ? "bg-[#0d0d0d] border-red-500/20"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                <div
                  className={`rounded-xl p-2.5 sm:p-3 shrink-0 ${
                    isDark ? "bg-[#191919]" : "bg-gray-200"
                  }`}
                >
                  <Briefcase className="text-red-600 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">AI Intern</h3>
                  <div className="text-red-600 font-semibold flex items-center gap-1 text-sm sm:text-base">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>Kindi AI</span>
                  </div>
                  <div className={`text-xs sm:text-sm mt-1 ${isDark ? "text-gray-400" : "text-black"}`}>
                    Oct 2024 – Jan 2025 (Remote)
                  </div>
                </div>
              </div>
              <a
                href={internshipCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-red-600 hover:text-red-500 transition-colors shrink-0 text-xs sm:text-sm font-medium mt-1"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Certificate</span>
              </a>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed mt-4 mb-6 sm:mb-8 ${isDark ? "text-gray-300" : "text-black"}`}>
              Developed state-of-the-art speech generation systems at Kindi AI,
              using models like Whisper and StyleTTS2 to refine speaker
              consistency and prosody.
            </p>

            <div className="space-y-2 mb-6 sm:mb-8 pl-1 sm:pl-2">
              {[
                "Built speech-to-speech systems using VoiceCraft and Google TTS.",
                "Fine-tuned deep learning models for more expressive audio.",
                "Cleaned, preprocessed, and normalized real-world voice datasets.",
                "Designed and tested large-scale inference scripts.",
                "Documented results and participated in technical reviews.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                  <span className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-black"}`}>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
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
                  className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-red-600 bg-red-100 dark:bg-red-500/10 rounded-full font-medium"
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
            className={`p-5 sm:p-6 lg:p-7 rounded-2xl border transition-all duration-300 hover:scale-[1.01] sm:hover:scale-[1.02] shadow-[0_0_5px_rgba(255,0,0,0.5)] ${
              isDark
                ? "bg-[#0d0d0d] border-red-500/20"
                : "bg-gray-100 border-gray-300"
            }`}
          >
            <div className="flex items-start justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="flex items-start gap-3 sm:gap-4 min-w-0">
                <div
                  className={`rounded-xl p-2.5 sm:p-3 shrink-0 ${
                    isDark ? "bg-[#191919]" : "bg-gray-200"
                  }`}
                >
                  <Briefcase className="text-red-600 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">
                    Frontend Developer Intern
                  </h3>
                  <div className="text-red-600 font-semibold flex items-center gap-1 text-sm sm:text-base">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>Elevvo Pathways</span>
                  </div>
                  <div className={`text-xs sm:text-sm mt-1 ${isDark ? "text-gray-400" : "text-black"}`}>
                    Jul 2025 – Aug 2025 (Remote)
                  </div>
                </div>
              </div>
              <a
                href={frontendCertificate}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-red-600 hover:text-red-500 transition-colors shrink-0 text-xs sm:text-sm font-medium mt-1"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span>Certificate</span>
              </a>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed mt-4 mb-6 sm:mb-8 ${isDark ? "text-gray-300" : "text-black"}`}>
              Working as a frontend intern at Elevvo Pathways to build a fully
              responsive and functional website using modern web development tools
              and frameworks.
            </p>

            <div className="space-y-2 mb-6 sm:mb-8 pl-1 sm:pl-2">
              {[
                "Created structured multi-page website layouts with semantic HTML and CSS.",
                "Implemented interactivity using JavaScript for dynamic components.",
                "Used Bootstrap for responsive design and mobile-first layouts.",
                "Built reusable UI components with React.js.",
                "Tested and optimized cross-browser compatibility and performance.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 mt-0.5 text-red-600 shrink-0" />
                  <span className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-black"}`}>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5 sm:gap-2">
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
                  className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm text-red-600 bg-red-100 dark:bg-red-500/10 rounded-full font-medium"
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
