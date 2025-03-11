'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import debounce from 'lodash.debounce';

const menuItems = ['Home', 'About', 'Services', 'Lectures', 'Testimonials', 'Contact'];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setScrolled(window.scrollY > 20);
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.ico" alt="SGC Logo" width={40} height={40} priority className="rounded-full" />
          <span className="text-xl font-bold text-gray-900">ShreeGuruCool</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : item === 'Lectures' ? '/lectures' : `/${item.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {item}
            </Link>
          ))}
          <Link href="/auth/login" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-900">
          {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden"
          >
            <div className="flex flex-col items-center space-y-4 py-5">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : item === 'Lectures' ? '/lectures' : `/${item.toLowerCase()}`}
                  className="text-gray-800 hover:text-blue-600 transition font-medium text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link href="/auth/login" className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
