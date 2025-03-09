"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const closeMenu = () => setIsOpen(false);

  const menuItems = useMemo(
    () => ["Home", "About", "Services", "Lectures", "Testimonials", "Contact"],
    []
  );

  return (
    <nav
      suppressHydrationWarning
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* 🖥️ Desktop Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden md:flex items-center space-x-4"
          >
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 3 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative flex items-center justify-center p-2 bg-white rounded-full shadow-md"
                aria-hidden="true"
              >
                <Image
                  src="/logo.ico"
                  alt="SGC Logo"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text tracking-tight"
              >
                ShreeGuruCool
              </motion.span>
            </Link>
          </motion.div>

          {/* 📱 Mobile Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex md:hidden items-center space-x-4"
          >
            <Link href="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Image
                src="/logo.ico"
                alt="SGC Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-semibold text-gray-800">SGC</span>
            </Link>
          </motion.div>

          {/* 🖥️ Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : item === "Lectures" ? "/lectures" : `/${item.toLowerCase()}`}
                className="relative text-gray-700 hover:text-blue-600 transition font-medium after:block after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/auth/login"
              className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:scale-105 transition transform duration-300 shadow-md"
            >
              Login
            </Link>
          </div>

          {/* 📱 Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="p-2 text-gray-900 hover:text-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-lg overflow-hidden md:hidden"
            >
              <div className="flex flex-col items-center space-y-4 py-5">
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : item === "Lectures" ? "/lectures" : `/${item.toLowerCase()}`}
                    className="text-gray-800 hover:text-blue-600 transition font-medium text-lg"
                    onClick={closeMenu}
                  >
                    {item}
                  </Link>
                ))}
                <Link
                  href="/auth/login"
                  className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:scale-105 transition"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
