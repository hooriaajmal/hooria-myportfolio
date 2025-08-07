import React from "react";
import {
  FaPython,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNumpy,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiVite,
  SiMongodb,
} from "react-icons/si";

// Skills array with proper brand colors
const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-3xl" style={{ color: '#E34F26' }} /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-3xl" style={{ color: '#1572B6' }} /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-3xl" style={{ color: '#F7DF1E' }} /> },
  { name: "React", icon: <FaReact className="text-3xl" style={{ color: '#61DAFB' }} /> },
  { name: "Python", icon: <FaPython className="text-3xl" style={{ color: '#3776AB' }} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-3xl" style={{ color: '#06B6D4' }} /> },
  { name: "Vite", icon: <SiVite className="text-3xl" style={{ color: '#646CFF' }} /> },
  { name: "Git", icon: <FaGitAlt className="text-3xl" style={{ color: '#F05032' }} /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-3xl" style={{ color: '#FF6F00' }} /> },
  { name: "PyTorch", icon: <SiPytorch className="text-3xl" style={{ color: '#EE4C2C' }} /> },
  { name: "Scikit-learn", icon: <SiScikitlearn className="text-3xl" style={{ color: '#F7931E' }} /> },
  { name: "Pandas", icon: <SiPandas className="text-3xl" style={{ color: '#130654' }} /> },
  { name: "NumPy", icon: <SiNumpy className="text-3xl" style={{ color: '#4DABCF' }} /> },
  { name: "MongoDB", icon: <SiMongodb className="text-3xl" style={{ color: '#47A248' }} /> },
];

export default function Skills({ isDark }) {
  return (
    <section
      id="skills"
      className={`py-16 px-6 overflow-hidden ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          <span className={isDark ? "text-white" : "text-black"}>
              Technical{" "}
            </span>
            <span className="text-red-600">Skills</span>
          </h2>
        </div>

      {/* Animated Skills Container - Only on large screens */}
      <div className="relative w-full overflow-hidden hidden lg:block">
        {/* First row - moving left */}
        <div className="flex animate-scroll-left mb-8">
          {[...skills, ...skills].map((skill, index) => (
            <div
            key={index}
              className={`flex-shrink-0 mx-4 p-6 rounded-xl shadow-lg border-b-4 border-red-600 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDark 
                  ? "bg-gray-900/20 backdrop-blur-sm border-gray-800" 
                  : "bg-white/30 backdrop-blur-sm border-gray-200"
              }`}
              style={{ minWidth: '200px' }}
            >
              {/* Icon and Name */}
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                  {skill.icon}
                </div>
                <span className="font-semibold text-sm text-center">
                  {skill.name}
                </span>
              </div>
            </div>
          ))}
              </div>

        {/* Second row - moving right */}
        <div className="flex animate-scroll-right">
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`right-${index}`}
              className={`flex-shrink-0 mx-4 p-6 rounded-xl shadow-lg border-b-4 border-red-600 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isDark 
                  ? "bg-gray-900/20 backdrop-blur-sm border-gray-800" 
                  : "bg-white/30 backdrop-blur-sm border-gray-200"
              }`}
              style={{ minWidth: '200px' }}
            >
              {/* Icon and Name */}
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                  {skill.icon}
                </div>
                <span className="font-semibold text-sm text-center">
                  {skill.name}
                  </span>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Skills Grid for smaller screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto lg:hidden">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-lg border-b-4 border-red-600 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              isDark 
                ? "bg-gray-900/20 backdrop-blur-sm border-gray-800" 
                : "bg-white/30 backdrop-blur-sm border-gray-200"
            }`}
          >
            {/* Icon and Name */}
            <div className="flex flex-col items-center space-y-3 mb-4">
              <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                {skill.icon}
              </div>
              <span className="font-semibold text-sm text-center">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}