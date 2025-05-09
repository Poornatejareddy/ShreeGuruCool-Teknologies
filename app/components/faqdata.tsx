"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  { question: "What is SAP SD?", answer: "SAP SD (Sales and Distribution) handles order processing, pricing, billing, and shipping." },
  { question: "What is SAP MM?", answer: "SAP MM (Material Management) focuses on procurement, inventory management, and logistics." },
  { question: "What is SAP S/4HANA?", answer: "SAP S/4HANA is an advanced ERP system offering real-time analytics and faster processing." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-6 sm:mb-8">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 mb-4 sm:mb-6">Got questions? We have answers.</p>

      <div className="max-w-2xl mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-3 sm:mb-4">
            <button
              className="w-full flex justify-between items-center p-3 sm:p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-base sm:text-lg font-medium">{faq.question}</span>
              <span className="text-primary text-lg">{openIndex === index ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 sm:p-4 text-gray-700 bg-gray-50 rounded-lg mt-2"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}

        {/* Ask a Question Section */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">Have more questions?</h3>
          <p className="text-gray-600 mb-3 sm:mb-4">Ask us anything, and we&apos;ll get back to you!</p>
          <input
            type="text"
            placeholder="Type your question here..."
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
          />
          <button className="mt-3 px-5 py-2 sm:px-6 sm:py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
