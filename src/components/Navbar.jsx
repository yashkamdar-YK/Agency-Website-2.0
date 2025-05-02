'use client';
import React from 'react';
import { motion } from 'framer-motion';

const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
    return (
        <nav className="w-full px-6 py-3 bg-white">
            <div className="max-w-11/12 mx-auto flex items-center justify-between">
                {/* Left Side */}
                <div className="flex items-center space-x-4">
                    <motion.a
                        href="#"
                        className="font-black text-sm tracking-widest bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        whileHover={{ rotate: [1, 3, -3, 0.5, 1], scale: 1.05 }}
                    >
                        APEX LAB
                    </motion.a>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-6 text-sm font-bold uppercase tracking-wide">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            className="relative  py-1 text-black group"
                            animate={{ rotateZ: 0, y: 0, scale: 1 }}
                            whileHover={{
                                scale: 1.1,
                                rotateZ: [0, 10, -10, 5, 0],
                                y: [-1, 2, -2, 1, 0],
                            }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                        >
                            <span className="inline-block relative z-10 group-hover:text-black/80 transition-colors duration-300">
                                {link.name}
                            </span>

                            {/* Underline only */}
                            <motion.span
                                className="absolute left-0 -bottom-1 h-0.5 bg-black rounded-full"
                                initial={{ width: 0 }}
                                whileHover={{ width: '100%' }}
                                transition={{ duration: 0.3 }}
                            />

                            {index === 0 && <span className="mx-2 text-black">•</span>}
                        </motion.a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
