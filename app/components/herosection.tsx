'use client';

import { motion } from "framer-motion";
import FadeInSection from "./FadeInSection";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 px-6 sm:px-12 lg:px-16 text-center overflow-hidden bg-gray-50">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-10 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">

        <FadeInSection direction="up">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent"
          >
            Transform Your SAP Career with{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text inline-block"
            >
              {Array.from("Shreegurucool").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>
        </FadeInSection>


        <FadeInSection direction="up">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Expert coaching in <strong className="text-primary">SAP SD, MM, and S/4HANA</strong>. Elevate your skills and accelerate your career growth with personalized guidance.
          </motion.p>
        </FadeInSection>

        <FadeInSection direction="up">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-10 flex justify-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg shadow-lg hover:bg-primary-dark transition transform hover:scale-105"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </FadeInSection>
      </div>
    </section>
  );
}
