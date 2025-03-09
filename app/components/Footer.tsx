"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left"
        >
          {/* Logo & About */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Image src="/logo.ico" alt="SAP Coach Logo" width={80} height={80} className="rounded-lg" />
            </motion.div>
            <p className="text-sm leading-relaxed">
              Empowering SAP professionals with expert training in SAP SD, MM, and S/4HANA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "Contact", path: "/contact" }
              ].map((item, index) => (
                <motion.li 
                  key={index} 
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Link href={item.path} className="hover:text-blue-400 transition">
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white">Connect with Us</h3>
            <div className="mt-4 flex justify-center md:justify-start space-x-6">
              {[
                { href: "https://www.facebook.com/profile.php?id=100087966021724", icon: <Facebook className="h-6 w-6" />, color: "hover:text-blue-500" },
                { href: "https://twitter.com", icon: <Twitter className="h-6 w-6" />, color: "hover:text-blue-400" },
                { href: "https://linkedin.com", icon: <Linkedin className="h-6 w-6" />, color: "hover:text-blue-600" },
                { href: "mailto:info@sapcoach.com", icon: <Mail className="h-6 w-6" />, color: "hover:text-red-400" }
              ].map((item, index) => (
                <motion.a 
                  key={index} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`transition ${item.color}`}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="mt-10 text-center text-sm border-t border-gray-700 pt-4"
        >
          © {new Date().getFullYear()} ShreeGuruCool Teknologies. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
