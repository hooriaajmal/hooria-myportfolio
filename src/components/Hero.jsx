import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiArrowDown, FiDownload, FiMail } from "react-icons/fi";
import profileImage from "../assets/me2.jpg";
import resumePDF from "../assets/ResumeHooriaAjmal.pdf";

// Particle System Component (keeping your existing particle system)
const ParticleCanvas = ({ isDark }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const numberOfParticles = Math.floor(
        (canvas.width * canvas.height) / 8000
      );
      particlesRef.current = [];

      for (let i = 0; i < numberOfParticles; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 2.5 + 1,
          opacity: Math.random() * 0.7 + 0.4,
        });
      }
    };

    const updateParticles = () => {
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
        }

        if (mouseRef.current.x && mouseRef.current.y) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRef.current.radius) {
            const force =
              (mouseRef.current.radius - distance) / mouseRef.current.radius;
            const angle = Math.atan2(dy, dx);
            particle.vx -= Math.cos(angle) * force * 0.035;
            particle.vy -= Math.sin(angle) * force * 0.035;
          }
        }

        particle.vx *= 0.99;
        particle.vy *= 0.99;
      });
    };

    const drawParticles = () => {
      const particleColor = isDark ? "239, 68, 68" : "185, 28, 28";

      particlesRef.current.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${particle.opacity})`;
        ctx.fill();
      });
    };

    const drawConnections = () => {
      const maxDistance = 150;
      const connectionColor = isDark ? "239, 68, 68" : "185, 28, 28";

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.35;

            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.strokeStyle = `rgba(${connectionColor}, ${opacity})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      if (mouseRef.current.x && mouseRef.current.y) {
        const mouseConnectionColor = isDark ? "220, 38, 38" : "239, 68, 68";

        particlesRef.current.forEach((particle) => {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRef.current.radius) {
            const opacity = (1 - distance / mouseRef.current.radius) * 0.6;

            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx.strokeStyle = `rgba(${mouseConnectionColor}, ${opacity})`;
            ctx.lineWidth = 2.5;
            ctx.stroke();
          }
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      updateParticles();
      drawConnections();
      drawParticles();

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseOut = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

// Typewriter Component
const Typewriter = ({ options }) => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const strings = options.strings;
    const currentString = strings[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentString.substring(0, text.length + 1));
          if (text === currentString) {
            setTimeout(() => setIsDeleting(true), options.pauseFor || 800);
          }
        } else {
          setText(currentString.substring(0, text.length - 1));
          if (text === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % strings.length);
          }
        }
      },
      isDeleting ? options.deleteSpeed || 60 : options.delay || 130
    );

    return () => clearTimeout(timeout);
  }, [text, currentIndex, isDeleting, options]);

  return <span>{text}</span>;
};

const commonVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const textVariants = {
  ...commonVariants,
  visible: {
    ...commonVariants.visible,
    transition: { ...commonVariants.visible.transition, delay: 0.2 },
  },
};

const cardVariants = commonVariants;

const statsVariants = {
  ...commonVariants,
  visible: {
    ...commonVariants.visible,
    transition: { ...commonVariants.visible.transition, delay: 0.2 },
  },
};


export default function Hero({ isDark }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const skills = [
    "React.js",
    "JavaScript",
    "Python",
    "AI/ML",
    "Node.js",
    "MongoDB",
    "Express.js",
    "Git",
    "TypeScript",
    "Next.js",
    "TensorFlow",
    "PyTorch"
  ];

  return (
    <section
      id="home"
      ref={ref}
      className={`relative min-h-screen px-4 sm:px-8 lg:px-16 py-8 sm:py-12 flex items-center justify-center overflow-hidden ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      } flex-col`}
    >
      {/* Particle Background */}
      <ParticleCanvas isDark={isDark} />

      <div className="relative z-10 w-full max-w-7xl flex-grow flex items-center">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-y-8 lg:gap-x-12 w-full"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Profile Card */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end lg:pr-8"
            variants={cardVariants}
          >
            <div
              className={`relative w-72 sm:w-80 p-8 rounded-3xl shadow-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-103 min-h-[500px] flex flex-col ${
                isDark
                  ? "bg-black/90 border-red-500/30 shadow-red-500/20"
                  : "bg-white/90 border-red-200/50 shadow-red-500/10"
              }`}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 mx-auto rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={profileImage}
                    alt="Hooria Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online Status Indicator (responsive offset) */}
                <div
                  className={`absolute -bottom-1 right-0 sm:-right-6 w-6 h-6 bg-red-500 rounded-full border-4 animate-pulse ${
                    isDark ? "border-black" : "border-white"
                  }`}
                ></div>
              </div>

              {/* Profile Info */}
              <div className="text-center mb-6 px-2">
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-2 ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  Hooria Ajmal
                </h3>
                <p
                  className={`text-base sm:text-lg mb-1 ${
                    isDark ? "text-red-300" : "text-red-700"
                  }`}
                >
                  AI Engineer & Developer
                </p>
                <p
                  className={`text-sm ${
                    isDark ? "text-red-400" : "text-red-600"
                  }`}
                >
                  Rawalpindi, Pakistan
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center space-x-2 mb-6">
                <motion.a
                  href="https://github.com/hooriaajmal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? "text-gray-400 hover:text-red-500"
                      : "text-gray-500 hover:text-red-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="text-lg sm:text-xl" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/hooria-ajmal-544b67318"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? "text-gray-400 hover:text-red-500"
                      : "text-gray-500 hover:text-red-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin className="text-lg sm:text-xl" />
                </motion.a>

                <motion.a
                  href="mailto:hooriaajmal9@gmail.com"
                  className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-300 ${
                    isDark
                      ? "text-gray-400 hover:text-red-500"
                      : "text-gray-500 hover:text-red-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail className="text-lg sm:text-xl" />
                </motion.a>
              </div>

              {/* CTA Button - Moved to bottom */}
              <div className="mt-auto flex justify-center pt-4">
                <motion.a
                  href="https://wa.me/923121549498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-40 sm:w-48 md:w-56 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${
                    isDark
                      ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:shadow-red-500/25"
                      : "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:shadow-red-500/25"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="text-lg" />
                  Let's Talk
                </motion.a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full opacity-60"></div>
              <div
                className={`absolute -bottom-2 -left-2 w-6 h-6 rounded-full opacity-40 ${
                  isDark ? "bg-red-600" : "bg-red-400"
                }`}
              ></div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="flex-1 text-center lg:text-left lg:pl-16 px-2"
            variants={textVariants}
          >
            <div className="text-content">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                Hi,
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                I&apos;m <span className="text-red-600">Hooria</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 min-h-[48px]">
                <Typewriter
                  options={{
                    strings: [
                      "AI Engineer",
                      "React.js Developer",
                      "Music Lover",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 50,
                    pauseFor: 800,
                  }}
                />
              </h2>
            </div>

            {/* CTA Buttons */}
            <div className="w-full flex justify-center lg:justify-start mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-3 items-center"
              >
                <motion.a
                  href="#projects"
                  className="px-5 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:bg-red-500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <FiArrowDown className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href={resumePDF}
                  download="ResumeHooriaAjmal.pdf"
                  className="px-6 py-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload className="h-5 w-5" />
                  Download Resume
                </motion.a>
              </motion.div>
            </div>

            {/* Skills Section with Infinite Scroll */}
            <div className="w-full flex justify-center lg:justify-start mt-6">
              <div className="w-full max-w-xs sm:max-w-md overflow-hidden relative">
                <style jsx>{`
                  @keyframes scrollRight {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }
                  .scroll-animation {
                    animation: scrollRight 20s linear infinite;
                  }
                `}</style>
                <div className="flex gap-3 scroll-animation" style={{ width: 'calc(200%)' }}>
                  {/* First set of skills */}
                  {skills.map((skill, index) => (
                    <span
                      key={`first-${skill}-${index}`}
                      className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                        isDark
                          ? "bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30"
                          : "bg-red-100 text-red-700 border border-red-200 hover:bg-red-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {skills.map((skill, index) => (
                    <span
                      key={`second-${skill}-${index}`}
                      className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                        isDark
                          ? "bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30"
                          : "bg-red-100 text-red-700 border border-red-200 hover:bg-red-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Single Statistics Section - Responsive positioning */}
      <motion.div
        className="xl:absolute xl:bottom-8 xl:left-8 xl:flex-col xl:gap-6 xl:text-left
                   flex flex-row gap-8 sm:gap-12 justify-center text-center mt-12 xl:mt-0"
        variants={statsVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
          <div className="min-w-[80px] xl:min-w-0">
            <div
              className={`text-2xl sm:text-3xl xl:text-3xl font-bold mb-1 ${
                isDark ? "text-red-500" : "text-red-600"
              }`}
            >
              3+
            </div>
            <div
              className={`text-xs sm:text-sm xl:text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <span className="xl:hidden">Years of Experience</span>
              <span className="hidden xl:block">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          <div className="min-w-[80px] xl:min-w-0">
            <div
              className={`text-2xl sm:text-3xl xl:text-3xl font-bold mb-1 ${
                isDark ? "text-red-500" : "text-red-600"
              }`}
            >
              7+
            </div>
            <div
              className={`text-xs sm:text-sm xl:text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <span className="xl:hidden">Complete Projects</span>
              <span className="hidden xl:block">
                Complete
                <br />
                Projects
              </span>
            </div>
          </div>

          <div className="min-w-[80px] xl:min-w-0">
            <div
              className={`text-2xl sm:text-3xl xl:text-3xl font-bold mb-1 ${
                isDark ? "text-red-500" : "text-red-600"
              }`}
            >
              10K+
            </div>
            <div
              className={`text-xs sm:text-sm xl:text-sm ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <span className="xl:hidden">Hours Worked</span>
              <span className="hidden xl:block">
                Hours
                <br />
                Worked
              </span>
            </div>
          </div>
        </motion.div>
    </section>
  );
}