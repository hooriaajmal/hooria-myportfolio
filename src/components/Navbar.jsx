import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const links = ["Home", "About", "Experience", "Skills", "Projects", "Contact"];

export default function Navbar({ isDark, toggleTheme }) {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const capitalized =
              sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
            setActive(capitalized);
          }
        });
      },
      { root: null, threshold: 0.6 }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => {
      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Update body background color when theme changes
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#000000" : "#ffffff";
  }, [isDark]);

  const handleClick = (link) => {
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 py-3 px-4 lg:px-6 transition-all duration-300 ${
          isDark
            ? "text-white"
            : "text-black"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo - Left Side with background */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleClick("Home")}
              className={`group px-3 py-1.5 rounded-lg transition-all duration-300 ${
                isDark 
                  ? "bg-gray-900/80 backdrop-blur-md hover:bg-gray-800/80" 
                  : "bg-white/20 backdrop-blur-md hover:bg-white/30"
              }`}
              aria-label="Go to home"
            >
              <h1
                className={`text-xl lg:text-2xl font-bold transition-all duration-300 ${
                  isDark 
                    ? "text-white group-hover:text-red-500" 
                    : "text-black group-hover:text-red-500"
                }`}
              >
                HA.
              </h1>
            </button>
          </div>

          {/* Navigation Links - Center with background */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className={`px-4 py-2 rounded-lg backdrop-blur-md ${
              isDark 
                ? "bg-gray-900/80 border border-gray-700" 
                : "bg-white/30 border border-gray-200"
            }`}>
              <ul className="flex items-center space-x-6 xl:space-x-8">
                {links.map((link) => (
                  <li key={link} className="relative group">
                    <button
                      onClick={() => handleClick(link)}
                      className={`relative px-3 py-2 text-sm lg:text-base font-medium transition-all duration-300 ${
                        active === link
                          ? "text-red-500"
                          : isDark
                          ? "text-gray-300 hover:text-red-400"
                          : "text-gray-600 hover:text-red-500"
                      }`}
                    >
                      {link}
                      {/* Active indicator */}
                      {active === link && (
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-red-500 rounded-full" />
                      )}
                      {/* Hover indicator */}
                      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-400 rounded-full transition-all duration-300 group-hover:w-full" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Theme Toggle - Right Side with background */}
          <div className="flex items-center space-x-3">
            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`hidden lg:flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                isDark 
                  ? "bg-gray-900/80 backdrop-blur-md hover:bg-gray-800/80 text-yellow-400" 
                  : "bg-white/20 backdrop-blur-md hover:bg-white/30 text-gray-600"
              }`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                isDark 
                  ? "bg-gray-900/80 backdrop-blur-md hover:bg-gray-800/80 text-white" 
                  : "bg-white/20 backdrop-blur-md hover:bg-white/30 text-gray-600"
              }`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes className="text-sm" /> : <FaBars className="text-sm" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } ${isDark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-bold">Menu</h2>
          <div className="flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                isDark 
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-400" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 ${
                isDark 
                  ? "bg-gray-800 hover:bg-gray-700 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-600"
              }`}
            >
              <FaTimes className="text-sm" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => handleClick(link)}
                  className={`w-full text-left px-3 py-3 rounded-lg transition-all duration-300 font-medium text-base ${
                    active === link
                      ? "bg-red-500 text-white"
                      : isDark
                      ? "text-gray-300 hover:bg-gray-800 hover:text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}