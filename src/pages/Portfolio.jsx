// src/pages/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const [themeReady, setThemeReady] = useState(false); // <-- add this

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      setIsDark(systemPrefersDark);
    }

    setThemeReady(true); // <-- allow rendering only after setting theme
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  // 🔒 Prevent rendering until theme is set
  if (!themeReady) return null;

  return (
    <div className="bg-white text-black dark:bg-black dark:text-white font-poppins text-[16px]">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Experience isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}
