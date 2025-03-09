"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const About = () => {
  const [isClient, setIsClient] = useState(false);
  const defaultImage = "/logo.png.jpg"; // Ensure this exists in the public folder


  useEffect(() => {
    setIsClient(true);
  }, []);




  const teamMembers = [
    {
      name: "Gurunatha Reddy Samala",
      role: "Founder & Proprietor",
      description: "Visionary leader and expert in SAP & business transformation.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHB4fqRreGDkQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1675257393166?e=2147483647&v=beta&t=leRZ_rabMpffRGTGsr5ApqkI5fk0rXxxxXw39u19dE8",
    },
    {
      name: "Lisa Chen",
      role: "SAP MM Specialist",
      description: "Global SAP MM expert with extensive implementation experience.",
      image: defaultImage, // ✅ Uses valid local placeholder
    },
    {
      name: "David Kumar",
      role: "S/4HANA Consultant",
      description: "Driving digital transformation with SAP S/4HANA expertise.",
      image: defaultImage, // ✅ Uses valid local placeholder
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      
      {/* Background Animation (Only Runs on Client) */}
      {isClient && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300 rounded-full opacity-30 blur-3xl"></div>
        </motion.div>
      )}

      {/* Watermark */}
      <div className="absolute bottom-4 right-4 opacity-50">
        <Image src="/logo.ico" alt="SGC Logo" width={48} height={48} priority suppressHydrationWarning />
      </div>

      {/* About Hero Section */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
        >
          About ShreeGuruCool TeKnologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 text-xl text-gray-700 max-w-3xl mx-auto"
        >
          Empowering professionals through expert coaching, training, and technology solutions.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Mission</h2>
            <p className="text-gray-700">
              At ShreeGuruCool TeKnologies, our goal is to bridge the gap between knowledge and real-world implementation.
              We provide practical, hands-on training in SAP and modern technologies to help individuals and businesses succeed.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">Why Choose Us</h3>
            <ul className="space-y-3 text-gray-700">
              {[
                "Expert coaching from industry leaders", 
                "Real-world SAP & tech experience", 
                "Hands-on projects & case studies", 
                "Flexible learning options"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500">•</span>
                  <span className="ml-3">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">Meet Our Founder & Experts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index} 
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <Image 
                  src={isClient && index !== 0 ? member.image.replace("/placeholder.jpg", `https://example.com/${member.name.toLowerCase().replace(" ", "-")}.jpg`) : member.image} 
                  alt={member.name} 
                  width={96} 
                  height={96} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-200" 
                  suppressHydrationWarning={true} 
                />
                <h3 className="text-xl font-semibold text-blue-700">{member.name}</h3>
                <p className="text-blue-500 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
