'use client';
import Image from 'next/image';
import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun Reddy",
      role: "SAP MM Consultant",
      feedback: "ShreeGuruCool teKnologies provided me with practical hands-on training that helped me land my dream job. The instructors are industry experts who make complex topics easy to understand.",
      image: "/arjun.png",
    },
    {
      name: "Priya Sharma",
      role: "SAP SD Specialist",
      feedback: "The personalized learning approach and real-time project exposure made my SAP SD training incredibly effective. Highly recommend for career growth!",
      image: "/priya.png",
    },
    {
      name: "Rahul Verma",
      role: "SAP S/4HANA Consultant",
      feedback: "This training center gave me the confidence to handle real SAP S/4HANA projects. The mentors go beyond just teaching – they guide you at every step!",
      image: "/rahul.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary-light relative flex flex-col items-center justify-center text-center px-6 py-16">
      <h1 className="text-4xl font-bold text-primary-dark mb-8">What Our Students Say</h1>
      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-lg transition-transform duration-500">
        <Image 
          src={testimonials[current].image} 
          alt={testimonials[current].name} 
          width={80} 
          height={80} 
          className="w-20 h-20 mx-auto rounded-full border-4 border-primary-light mb-4"
        />
        <h3 className="text-xl font-semibold text-primary-dark">{testimonials[current].name}</h3>
        <p className="text-primary mb-2">{testimonials[current].role}</p>
        <p className="text-gray-600 italic">&ldquo;{testimonials[current].feedback}&rdquo;</p>

      </div>
      <div className="mt-6 flex gap-4">
        <button onClick={prevTestimonial} className="px-4 py-2 bg-primary-dark text-white rounded-lg shadow-md hover:bg-primary transition-all">◀</button>
        <button onClick={nextTestimonial} className="px-4 py-2 bg-primary-dark text-white rounded-lg shadow-md hover:bg-primary transition-all">▶</button>
      </div>
    </div>
  );
};

export default Testimonials;