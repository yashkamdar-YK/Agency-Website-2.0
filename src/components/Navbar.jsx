"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "WORK", href: "work" },
  { name: "ABOUT", href: "about" },
  { name: "SERVICES", href: "services" },
  { name: "CONTACT", href: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full px-[36px] md:px-[52px] py-4 top-0 left-0 bg-white z-50 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-black text-lg tracking-wide">
          APEX LABS
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 uppercase font-bold text-sm tracking-wide">
          {navLinks.map((link, index) => (
            <div key={link.name} className="flex items-center space-x-2">
              {/* Apply bold styling to the first item */}
              <a
                key={link.name}
                href={link.href}
                className="relative  py-1 text-black group"
              >
                <span className="inline-block relative z-10 group-hover:text-black/80 transition-colors duration-300">
                  {link.name}
                </span>

                {/* Underline only */}
                <span className="absolute left-0 -bottom-1 h-0.5 bg-black rounded-full" />
                {index === 0 && <span className="mx-2 text-black">•</span>}
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="text-black font-bold uppercase text-sm md:hidden"
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {/* Fullscreen Overlay for Mobile */}
      {/* Fullscreen Overlay for Mobile */}
      <div
        className={`fixed inset-0 bg-black text-white z-50 transform transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
      >
        <div className="flex flex-col justify-between h-full p-8">

          {/* Header with APEX LABS and Close Button */}
          <div className="flex justify-between items-center mb-12">
            <a href="/" className="font-black text-lg">
              APEX LABS
            </a>
            <button
              onClick={toggleMenu}
              className="text-white font-bold uppercase text-sm"
            >
              CLOSE
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-8 text-4xl font-extrabold uppercase tracking-wide">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`hover:text-gray-400 ${link.name === "WORK" ? "text-white" : "text-gray-500"
                  }`}
                onClick={() => setIsMenuOpen(false)} // Close menu on click
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-between text-xs text-gray-500 mt-10">
            <span>APEX / 15 - 24</span>
            <span>BRAND FOCUSED STUDIO</span>
          </div>
        </div>
      </div>

    </>
  );
};

export default Navbar;