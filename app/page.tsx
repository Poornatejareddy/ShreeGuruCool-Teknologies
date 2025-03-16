'use client';

import Image from 'next/image';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Award, Users, MessageSquare, BookOpen } from 'lucide-react';
import Link from "next/link";
import FloatingChatbot from './components/FloatingChatbot';

const FAQSection = dynamic(() => import('./components/faqdata'), { ssr: false });
const HiringPartners = dynamic(() => import('./components/hiringpartner'), { ssr: false });
const Gallery = dynamic(() => import('./components/gallery'), { ssr: false });
const ReviewsSection = dynamic(() => import('./components/review'), { ssr: false });
const HeroSection = dynamic(() => import('./components/herosection'), { ssr: false });
const WhyChooseUs = dynamic(() => import('./components/whychooseus'), { ssr: false });

// Dynamic import with loading state handling
const FadeInSection = dynamic(() => import('./components/FadeInSection'), {
  ssr: false,
  loading: () => <div className="invisible h-0" />
});


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
      <WhyChooseUs />

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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex"
          >
            <Link
              href="/courses"  // ✅ Correct Next.js routing
              className="px-5 py-2 text-sm sm:text-base bg-primary text-white rounded-lg shadow-md hover:bg-primary-hover transition transform hover:scale-105 flex items-center"
            >
              <BookOpen className="h-5 w-5 mr-2" /> View More Courses
            </Link>
          </motion.div>
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

      {/* Hiring Partners */}
      <HiringPartners />

      {/* Image Gallery */}
      <Gallery />

      {/* FAQ Section */}
      <FAQSection />

      <FloatingChatbot />

    </div>
  );
};

export default Home;
