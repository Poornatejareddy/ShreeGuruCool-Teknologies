"use client";

import React from "react";
import { motion } from "framer-motion";

const videos = [
  { id: "KWKQzZCUwig", title: "Difference between ECC and S4HANA SD" },
  { id: "R2CyxIdhUC8", title: "SAP SD ECC ( ASAP Methodology )" },
  { id: "u5nCYAzvdQU", title: "SAP S4HANA Activate Methodology" },
  { id: "nVDOgNTEV_E", title: "S4HANA SD - Enterprise Structure Definitions" },
];

const Lectures = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen py-12 px-6 sm:px-12 lg:px-24 bg-gray-100"
    >
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl font-extrabold text-center text-gray-800 mb-8"
      >
        📚 Lecture Videos
      </motion.h1>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative bg-white/80 backdrop-blur-lg shadow-lg rounded-xl p-4"
          >
            {/* Lecture Title */}
            <h2 className="text-lg font-semibold text-gray-700 mb-3 text-center">
              {video.title}
            </h2>

            {/* Embedded YouTube Video */}
            <div className="relative aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-48 sm:h-56 md:h-64 rounded-lg shadow-md border border-gray-300"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allowFullScreen
              ></iframe>
            </div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 w-full h-full rounded-xl opacity-20 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: 1.1 }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              style={{
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.4) 10%, rgba(255,255,255,0) 60%)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Lectures;
