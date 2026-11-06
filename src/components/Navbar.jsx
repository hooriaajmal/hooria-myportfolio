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
      <nav className="fixed top-0 left-0 w-full z-50 py-3 px-4 lg:px-6 transition-all duration-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo - Left Side with background */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleClick("Home")}
              className="group px-3.5 py-1.5 rounded-xl transition-all duration-300 bg-black/90 border border-red-500/40 hover:border-red-500/70 shadow-lg shadow-red-500/10 backdrop-blur-md"
              aria-label="Go to home"
            >
              <h1 className="text-xl lg:text-2xl font-bold transition-all duration-300 text-white group-hover:text-red-500">
                HA.
              </h1>
            </button>
          </div>

          {/* Navigation Links - Center with background */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="px-5 py-2 rounded-2xl backdrop-blur-md bg-black/90 border border-red-500/40 shadow-lg shadow-red-500/10">
              <ul className="flex items-center space-x-6 xl:space-x-8">
                {links.map((link) => (
                  <li key={link} className="relative group">
                    <button
                      onClick={() => handleClick(link)}
                      className={`relative px-3 py-1.5 text-sm lg:text-base font-medium transition-all duration-300 ${
                        active === link
                          ? "text-red-500"
                          : "text-white hover:text-red-500"
                      }`}
                    >
                      {link}
                      {/* Active indicator */}
                      {active === link && (
                        <span className="absolute left-0 bottom-0 h-0.5 w-full bg-red-500 rounded-full" />
                      )}
                      {/* Hover indicator */}
                      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-red-500 rounded-full transition-all duration-300 group-hover:w-full" />
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
              className="hidden lg:flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 bg-black/90 border border-red-500/40 hover:border-red-500/70 shadow-lg shadow-red-500/10 backdrop-blur-md text-white hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? (
                <FaSun className="text-sm text-yellow-400 hover:text-red-500 transition-colors" />
              ) : (
                <FaMoon className="text-sm text-white hover:text-red-500 transition-colors" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-300 bg-black/90 border border-red-500/40 hover:border-red-500/70 shadow-lg shadow-red-500/10 backdrop-blur-md text-white hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] shadow-2xl transform transition-transform duration-300 z-50 lg:hidden bg-black/95 backdrop-blur-md text-white border-l border-red-500/40 shadow-red-500/20 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-red-500/30">
          <h2 className="text-lg font-bold text-white">Menu</h2>
          <div className="flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 bg-black border border-red-500/40 text-white hover:text-red-500 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FaSun className="text-sm text-yellow-400" /> : <FaMoon className="text-sm text-white" />}
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 bg-black border border-red-500/40 text-white hover:text-red-500 hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Close menu"
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
                      ? "bg-red-600 text-white"
                      : "text-white hover:bg-red-500/10 hover:text-red-500"
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
