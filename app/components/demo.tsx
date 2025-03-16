'use client';

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Demo() {
  return (
    <section className="relative pt-32 pb-24 px-6 sm:px-12 lg:px-16 text-center overflow-hidden bg-gray-50">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-10 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <Image 
            src="/logo.ico" 
            alt="ShreeGuruCool Logo" 
            width={120} 
            height={120} 
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 bg-gradient-to-r from-primary-dark to-primary bg-clip-text text-transparent"
        >
          Transform Your SAP Career with {" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text inline-block">
            {Array.from("ShreeGuruCool").map((letter, index) => (
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
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Expert coaching in <strong className="text-primary">SAP SD, MM, and S/4HANA</strong>. Elevate your skills and accelerate your career growth with personalized guidance.
        </motion.p>

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
      </div>

      {/* Demo Section */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/template.jpg"
            alt="Class Template"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Online Demo Class</h2>
          <p className="text-lg text-gray-700 mb-6">
            Experience an interactive learning session with our expert instructors and get a glimpse of what ShreeGuruCool has to offer.
          </p>
          <a
            href="#join-demo"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-lg shadow-lg hover:bg-primary-dark transition transform hover:scale-105 mb-6"
          >
            Join Demo Class
          </a>

          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Demo and Class Schedules</h3>
          <ul className="text-lg text-gray-700 list-disc list-inside">
            <li>Monday: SAP SD Demo at 5 PM</li>
            <li>Wednesday: SAP MM Demo at 6 PM</li>
            <li>Friday: S/4HANA Demo at 7 PM</li>
            <li>Saturday: Full Session from 10 AM to 2 PM</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
