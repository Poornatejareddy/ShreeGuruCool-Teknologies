'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Award, Users, MessageSquare, CheckCircle, BookOpen } from 'lucide-react';

const FAQSection = dynamic(() => import('./components/faqdata'), { ssr: false });
const HiringPartners = dynamic(() => import('./components/hiringpartner'), { ssr: false });
const Gallery = dynamic(() => import('./components/gallery'), { ssr: false });
const ReviewsSection = dynamic(() => import('./components/review'), { ssr: false });
const HeroSection = dynamic(() => import('./components/herosection'), { ssr: false });

// Dynamic import with loading state handling
const FadeInSection = dynamic(() => import('./components/FadeInSection'), {
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

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-white">
  
      {/* Hero Section */}
      <HeroSection />
  
      {/* Why Choose Shreegurucool */}
      <section className="relative py-16 px-4 sm:px-8 text-center">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 opacity-10 blur-3xl -z-10"></div>
  
        <FadeInSection direction="up">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-primary-dark bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Why Choose Shreegurucool?
          </motion.h2>
        </FadeInSection>
  
        <FadeInSection direction="up">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Elevate your SAP career with expert-led courses and hands-on experience. 
            Our <strong>job assistance program</strong> keeps you ahead in the industry.
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
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-3 bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <CheckCircle className="text-green-500 h-6 w-6 sm:h-8 sm:w-8" />
              <div className="text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
  
      {/* Explore Courses */}
      <section className="relative py-16 px-4 sm:px-8 text-center">
        {/* Background Glow Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-300 to-purple-400 opacity-10 blur-3xl -z-10"></div>
  
        <FadeInSection direction="up">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-primary-dark bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white shadow-lg rounded-xl border border-gray-200 flex flex-col items-center"
            >
              <course.Icon className="h-12 w-12 text-primary mb-3" />
              <h3 className="text-lg sm:text-xl font-semibold text-primary-dark">{course.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 mt-1">{course.description}</p>
            </motion.div>
          ))}
        </motion.div>
  
        {/* More Courses Button */}
        <FadeInSection direction="up">
          <motion.a
            href="/courses"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center px-5 py-2 text-sm sm:text-base bg-primary text-white rounded-lg shadow-md hover:bg-primary-hover transition transform hover:scale-105"
          >
            <BookOpen className="h-5 w-5 mr-2" /> View More Courses
          </motion.a>
        </FadeInSection>
      </section>
  
      {/* Students Reviews */}
      <ReviewsSection />
  
      {/* Latest Blogs */}
      <section className="py-14 px-4 sm:px-6 text-center bg-gray-50">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-6">Latest Blogs</h2>
        </motion.div>
  
        {/* Blog Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } }
          }}
        >
          {blogs.map((blog, index) => (
            <motion.a key={index} href={blog.link} className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
              <Image src={blog.image} alt={blog.title} width={500} height={300} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-primary-dark">{blog.title}</h3>
                <p className="text-sm text-gray-600 mt-2">Read more...</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>
  
      {/* FAQ Section */}
      <FAQSection />
  
      {/* Hiring Partners */}
      <HiringPartners />
  
      {/* Image Gallery */}
      <Gallery />
    </div>
  );
};

export default Home;
