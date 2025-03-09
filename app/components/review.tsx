'use client';
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import FadeInSection from "./FadeInSection";

const reviews = [
  {
    name: "Amit Patel",
    role: "SAP SD Consultant",
    review: "The best SAP training experience! The mentors are fantastic, and the job placement support is exceptional. Within 3 months, I landed my dream role!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sneha Sharma",
    role: "SAP MM Analyst",
    review: "Practical approach, real-world case studies, and hands-on projects made all the difference. Highly recommend!",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Rahul Verma",
    role: "SAP S/4HANA Developer",
    review: "Comprehensive curriculum with industry-oriented insights. The interview prep sessions helped me ace my SAP certification and get hired!",
    image: "https://randomuser.me/api/portraits/men/50.jpg"
  }
];

export default function ReviewsSection() {
  return (
    <section className="relative py-20 px-6 sm:px-12 lg:px-16 text-center bg-gradient-to-b from-primary-light to-gray-100">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-300 to-purple-400 opacity-10 blur-3xl -z-10"></div>

      <FadeInSection>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold tracking-tight text-primary-dark"
        >
          What Our Students Say
        </motion.h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-2">
          Real stories from professionals who transformed their careers.
        </p>
      </FadeInSection>

      {/* Reviews Grid */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
        }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" }}
            transition={{ duration: 0.3 }}
            className="p-8 bg-white/70 backdrop-blur-lg shadow-lg rounded-xl border border-gray-200 flex flex-col items-center text-left"
          >
            <Quote className="h-10 w-10 text-primary mb-4" />
            <p className="text-gray-700 italic">"{review.review}"</p>
            
            {/* Student Info */}
            <div className="flex items-center mt-6">
              <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full shadow-md border-2 border-primary mr-3" />
              <div>
                <p className="font-semibold text-primary-dark">{review.name}</p>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>

            {/* Star Ratings */}
            <div className="flex justify-center mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
