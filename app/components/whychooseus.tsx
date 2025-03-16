import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Affordable & Accessible Learning",
    description: "Quality SAP education at an affordable price, accessible from anywhere.",
  },
  {
    title: "Certification & Career Readiness",
    description: "Industry-recognized certification and job-focused training.",
  },
  {
    title: "Real-Time Project Experience",
    description: "Hands-on projects to build confidence and expertise.",
  },
  {
    title: "Continuous Skill Development",
    description: "Regular updates and advanced modules for lifelong learning.",
  },
  {
    title: "Networking & Industry Collaboration",
    description: "Connect with experts, peers, and recruiters for better opportunities.",
  },
  {
    title: "100% Placement Assistance",
    description: "Guidance and job support to help you secure your dream role.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-16 px-4 sm:px-8 text-center">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 opacity-10 blur-xl -z-10"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-primary-dark bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Why Choose Shreegurucool?
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
      >
        Elevate your SAP career with expert-led courses and hands-on experience. 
        Our <strong>job assistance program</strong> keeps you ahead in the industry.
      </motion.p>

      {/* Feature Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-3 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <CheckCircle className="text-green-500 h-6 w-6 sm:h-8 sm:w-8" />
            <div className="text-left">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhyChooseUs;
