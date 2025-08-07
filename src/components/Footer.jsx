import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer({ isDark }) {
  return (
    <footer
      className={`py-6 px-4 sm:px-8 lg:px-16 ${
        isDark ? 'bg-[#14191b] text-white' : 'bg-gray-200 text-black'
      }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        {/* Name */}
        <h2 className="text-xl sm:text-2xl font-bold">Hooria</h2>

        {/* Social Icons */}
        <div className="flex space-x-4 text-lg">
          <a
            href="https://www.facebook.com/share/1TKM5Dk1R3/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDark ? 'text-white' : 'text-black'
            } hover:text-red-600 transform hover:scale-130 transition duration-300`}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/iamsanam__?igsh=M2dxaHFndmQzNXFw"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDark ? 'text-white' : 'text-black'
            } hover:text-red-600 transform hover:scale-130 transition duration-300`}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/hooria-ajmal-544b67318"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDark ? 'text-white' : 'text-black'
            } hover:text-red-600 transform hover:scale-130 transition duration-300`}
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hooria. All rights reserved.
        </p>
      </div>
    </footer>
  );
}