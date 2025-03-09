"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LogoSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center space-y-4 py-10"
    >
      {/* Animated Logo */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative flex items-center justify-center p-4 bg-white rounded-full shadow-lg"
      >
        <Image
          src="/logo.ico"
          alt="SGC Logo"
          width={80}
          height={80}
          className="rounded-full"
        />
        {/* Glowing Effect */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-full opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(255,255,255,0) 70%)",
          }}
        />
      </motion.div>

      {/* Animated Company Name */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
      >
        ShreeGuruCool
      </motion.h1>

      {/* Animated Slogan */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-lg text-gray-700"
      >
        Transforming SAP Careers with Excellence 🚀
      </motion.p>
    </motion.div>
  );
};

export default LogoSection;
