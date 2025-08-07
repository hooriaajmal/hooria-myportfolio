import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// CHANGED: Slide from top instead of bottom
const fadeInVariant = (delay = 0) => ({
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay },
  },
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Projects({ isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const projects = [
    {
      title: "AI Copy Style Transfer & Generation",
      description:
        "Fine-tuned TensorFlow models on Google Colab for copy style transfer and generation. Built a Streamlit app for real-time inference on CPU with advanced preprocessing, custom loss functions, and optimized model architecture for style-aware text generation.",
      technologies: [
        "Python", 
        "TensorFlow", 
        "Google Colab", 
        "Streamlit", 
        "NLP", 
        "Fine-tuning",
        "CPU Optimization",
        "Text Generation"
      ],
      image: "src/assets/copystyle.png",
      link: "https://github.com/hooriaajmal/copy-style-transfer",
    },
    {
      title: "Real-Time Price Prediction System",
      description:
        "Developed a hybrid time series analysis model using PyTorch for real-time price prediction with 2-second intervals for 20-second forecasts. Integrated online scraping APIs for live data, implemented advanced preprocessing, and deployed optimized CPU inference with Streamlit UI.",
      technologies: [
        "Python", 
        "PyTorch", 
        "Time Series Analysis", 
        "Web Scraping", 
        "Streamlit",
        "Hybrid Models",
        "Real-time Prediction",
        "API Integration"
      ],
      image: "src/assets/price.png",
      link: "https://github.com/hooriaajmal/price-prediction-system",
    },
    {
      title: "Timetable Generation Agent",
      description:
        "Developed an intelligent timetable generation agent using Grok model and LLaMA for automated scheduling. Processes CSV data with JSON output structure, intelligently assigns rooms and time slots, and creates optimized timetables with conflict resolution and resource management.",
      technologies: [
        "Python", 
        "LLM", 
        "Grok", 
        "LLaMA", 
        "Groq", 
        "Pandas", 
        "JSON Processing",
        "CSV Data",
        "Agent Systems",
        "Scheduling Algorithm"
      ],
      image: "src/assets/timetable.png",
      link: "https://github.com/hooriaajmal/timetable-generation-agent",
    },
    {
      title: "Urdu Sentiment Analysis on Twitter Data",
      description:
        "Built and fine-tuned BiLSTM, CNN, and BERT models to classify Urdu tweets with custom preprocessing and class weighting for multi-class and binary classification.",
      technologies: ["Python", "TensorFlow", "Hugging Face", "Colab"],
      image: "src/assets/image.png",
      link: "https://colab.research.google.com/drive/1YgmmdFX0KAavu3TBJsWvQWveDmesc1ZB?usp=sharing",
    },
    {
      title: "Urdu Story Generation Model",
      description:
        "Created an AI system to generate and narrate Urdu stories using transformer-based model (LLaMA 3.1 8b) for text generation and TTS for narration, with video generation tools for storytelling impact.",
      technologies: [
        "Python",
        "PyTorch",
        "Transformers",
        "LLaMA 3.1",
        "Gemini",
        "LangChain",
        "MongoDB",
        "FastAPI",
        "Streamlit",
        "TTS",
        "Stable Diffusion",
        "MusicGen",
      ],
      image: "src/assets/ash.png",
      link: "https://github.com/hooriaajmal/ASH-Urdu-Story-Generation",
    },
    {
      title: "Frontend Portfolio Website",
      description:
        "Personal portfolio site to showcase projects and skills, built using React, Tailwind CSS, and Framer Motion. Fully responsive with theme switching and animations.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Formspree"],
      image: "src/assets/portfolio.png",
      link: "https://github.com/hooriaajmal",
    },
  ];

  return (
    <section
      id="projects"
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
        className="text-center mt-10 mb-10"
      >
        <div className="inline-block relative">
          <h2 className="text-3xl sm:text-4xl font-bold inline-block">
            <span className={`${isDark ? "text-white" : "text-black"}`}>
              Featured{" "}
            </span>
            <span className="text-red-600">Projects</span>
          </h2>
          <span className="absolute left-0 bottom-[-10px] h-[6px] w-10 bg-red-600 rounded-full" />
        </div>
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInVariant(index * 0.2)}
            className={`group rounded-lg overflow-hidden border transition-all duration-300 hover:scale-105 hover:-translate-y-1
              ${
                isDark
                  ? "bg-neutral-900 text-white border-white/20 shadow-[0_0_10px_rgba(255,255,255,0.15)]"
                  : "bg-white text-black border-white shadow-[0_0_10px_rgba(0,0,0,0.15)]"
              }
            `}
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-600 text-white rounded-lg flex items-center gap-2 hover:bg-red-500 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiExternalLink className="w-4 h-4" />
                  View Project
                </motion.a>
              </div>
            </div>

            <div className="p-6">
              <h3
                className={`text-xl font-bold mb-3 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                {project.title}
              </h3>
              <p
                className={`mb-4 text-sm leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-red-100 dark:bg-red-500/20 text-xs text-red-600 dark:text-red-400 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}