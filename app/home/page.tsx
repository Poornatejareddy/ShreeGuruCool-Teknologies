'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import HeroSection from '../components/herosection';
import ReviewsSection from '../components/review';
import Gallery from '../components/gallery';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, MessageSquare, CheckCircle, BookOpen} from 'lucide-react';
import HiringPartners from '../components/hiringpartner';
import FAQSection from '../components/faqdata';

// Dynamic import with loading state handling
const FadeInSection = dynamic(() => import('../components/FadeInSection'), {
  ssr: false,
  loading: () => <div className="invisible h-0" />
});

const features = [
  { title: "Industry-Expert Trainers", description: "Learn from professionals with 10+ years of SAP experience." },
  { title: "Hands-On Projects", description: "Real-world projects to make you job-ready." },
  { title: "Real-World Case Studies", description: "Analyze and solve actual business challenges." },
  { title: "100% Job Assistance", description: "Dedicated placement support to land your dream job." }
];

const courses = [
  { title: "SAP SD", description: "Master order-to-cash cycles.", Icon: Users },
  { title: "SAP MM", description: "Procurement & inventory management.", Icon: Award },
  { title: "SAP S/4HANA", description: "Future-proof your ERP skills.", Icon: MessageSquare }
];

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

const blogs = [
  {
    title: "SAP S/4HANA – The Future of Enterprise ERP",
    image: "/images/blog-1.jpg",
    link: "/blog/sap-s4hana"
  },
  {
    title: "Optimizing SAP MM for Supply Chain Efficiency",
    image: "/images/blog-2.jpg",
    link: "/blog/sap-mm-efficiency"
  }
];


const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-white">

      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Shreegurucool */}
      <section className="relative py-20 bg-gray-100 px-6 sm:px-12 lg:px-16 text-center">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 opacity-10 blur-3xl -z-10"></div>

      <FadeInSection direction="up">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold tracking-tight text-primary-dark bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Why Choose Shreegurucool?
        </motion.h2>
      </FadeInSection>

      <FadeInSection direction="up">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto"
        >
          Elevate your SAP career with our expert-led courses.  
          Get hands-on experience with real projects and case studies.  
          Our dedicated **job assistance program** ensures you're always ahead in the industry.  
        </motion.p>
      </FadeInSection>

      {/* Feature Cards */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
        }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="flex items-center gap-4 bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <CheckCircle className="text-green-500 h-8 w-8" />
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>

      {/* Explore Courses */}
      <section className="relative py-20 px-6 sm:px-12 lg:px-16 text-center">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 opacity-10 blur-3xl -z-10"></div>

      <FadeInSection direction="up">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold tracking-tight text-primary-dark bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Explore Our Courses
        </motion.h2>
      </FadeInSection>

      {/* Course Cards */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
        }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" }}
            transition={{ duration: 0.3 }}
            className="p-8 bg-white/70 backdrop-blur-lg shadow-lg rounded-xl border border-gray-200 flex flex-col items-center"
          >
            <course.Icon className="h-14 w-14 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-primary-dark">{course.title}</h3>
            <p className="text-gray-600 mt-2">{course.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* More Courses Button */}
      <FadeInSection direction="up">
        <motion.a
          href="/courses"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 inline-flex items-center px-6 py-3 bg-primary text-white rounded-md shadow-md hover:bg-primary-hover transition transform hover:scale-105"
        >
          <BookOpen className="h-5 w-5 mr-2" /> For More Courses, Click Here
        </motion.a>
      </FadeInSection>
    </section>

      {/* Students Reviews */}
    
      <ReviewsSection reviews={reviews} />

      {/* Latest Blogs */}

      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-4xl font-bold text-primary-dark mb-8">Latest Blogs</h2>
      </motion.div>

      {/* Blog Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
        }}
      >
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.link}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" }}
            transition={{ duration: 0.3 }}
            className="block overflow-hidden rounded-lg bg-white shadow-md transform transition-all hover:shadow-xl"
          >
            {/* Blog Image */}
            <Image 
              src={blog.image} 
              alt={blog.title} 
              width={500} 
              height={300} 
              className="rounded-t-lg object-cover"
            />

            {/* Blog Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">{blog.title}</h3>
              <p className="text-gray-600 mt-2">Discover the latest insights on SAP solutions and strategies.</p>
              
              {/* Read More Button */}
              <div className="mt-4">
                <span className="inline-block px-4 py-2 text-primary-dark font-medium border border-primary-dark rounded-md hover:bg-primary-dark hover:text-white transition">
                  Read More →
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* 🚀 Explore More Blogs Button with Glassmorphism Effect */}
      <motion.div 
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <a 
          href="/blogs"
          className="relative inline-block px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-primary-dark to-primary rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 opacity-50 blur-lg"></span>
          <span className="relative z-10">✨ Explore More Blogs</span>
        </a>
      </motion.div>
    </section>

      {/* Gallery */}
      
    <Gallery />

      {/* Hiring Partners */}
      
      <HiringPartners />
      
            {/* FAQs */}
      <FAQSection />

    </div>
  );
};

export default Index;