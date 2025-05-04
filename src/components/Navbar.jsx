"use client";
import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "WORK", href: "#work" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="w-full px-6 lg:px-13 py-3 bg-white">
      <div className=" flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="font-black text-sm tracking-widest bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
          >
            APEX LABS
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6 text-sm font-bold uppercase tracking-wide">
          {navLinks.map((link, index) => (
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
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
