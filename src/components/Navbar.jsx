"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "WORK", href: "work" },
  { name: "ABOUT", href: "about" },
  { name: "SERVICES", href: "services" },
  { name: "CONTACT", href: "contact" },
];

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMenuOpen]);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const overlayVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.12,
      },
    },
    exit: {
      y: "-100%",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };


  return (
    <>
      <nav className="w-full px-[36px] md:px-[52px] py-4 top-0 left-0 bg-white z-50 flex items-center justify-between">
        <a href="/" className="font-black text-lg tracking-wide">
          APEX LABS
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 uppercase font-bold text-sm tracking-wide">
          {navLinks.map((link, index) => (
            <div key={link.name} className="flex items-center space-x-2">
              <a
                href={link.href}
                className="relative py-1 text-black group"
              >
                <span className="inline-block relative z-10 group-hover:text-black/80 transition-colors duration-300">
                  {link.name}
                </span>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-nav"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={overlayVariants}
            className="fixed inset-0 bg-black text-white z-50 flex flex-col justify-between h-full px-6 pt-6 pb-4 md:hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center">
              <a href="/" className="font-black tracking-wide text-sm">
                APEX LABS
              </a>
              <button
                onClick={toggleMenu}
                className="text-white text-xs px-2 py-1 leading-none uppercase font-semibold hover:bg-white hover:text-black transition"
              >
                CLOSE
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col justify-center items-start flex-grow gap-5">
              {navLinks.map((link, index) => {
                const isActive =
                  pathname === `/${link.href}` || (link.href === "/" && pathname === "/");
                return (
                  <motion.a
                    key={index}
                    href={`/${link.href}`}
                    onClick={() => setIsMenuOpen(false)}
                    variants={linkVariants}
                    className={`text-5xl font-extrabold uppercase tracking-wide transition-colors ${isActive ? "text-white" : "text-gray-500"
                      } hover:text-white`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>

            {/* Footer */}
            <motion.div
              variants={linkVariants}
              className="flex justify-between text-[10px] text-gray-500 font-semibold uppercase"
            >
              <span>NX / 15 - 24</span>
              <span>Brand Focused Studio</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;
