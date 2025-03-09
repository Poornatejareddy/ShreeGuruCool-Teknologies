'use client';
import Image from 'next/image';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light to-white relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute bottom-4 right-4 opacity-50">
        <Image src="/logo.ico" alt="ShreeGuruCool Logo" width={48} height={48} />
      </div>

      {/* Services Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-dark to-primary">
            Our SAP Training Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Master SAP modules with our industry-driven training, expert mentorship, and real-world hands-on experience.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "SAP SD (Sales & Distribution)",
              description: "Learn the core functionalities of SAP SD, including order processing, pricing, billing, and customer management, through real-world case studies and hands-on practice.",
              image: "/sd.jpg",
            },
            {
              title: "SAP MM (Materials Management)",
              description: "Gain expertise in procurement, inventory management, invoice verification, and materials planning with expert-led training and real-time projects.",
              image: "/mm.jpg",
            },
            {
              title: "SAP S/4HANA Training",
              description: "Master SAP’s next-generation ERP system, including migration strategies, embedded analytics, and real-time data processing for enterprise transformation.",
              image: "/s4.jpg",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={96} 
                height={96} 
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-primary-light" 
              />
              <h3 className="text-xl font-semibold mb-2 text-primary-dark text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-primary-light text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-dark">Start Your SAP Journey Today!</h2>
          <p className="mt-4 text-lg text-gray-700">Join ShreeGuruCool teKnologies and take the first step towards SAP mastery with industry experts guiding you every step of the way.</p>
          <button className="mt-6 px-6 py-3 bg-primary-dark text-white font-semibold rounded-lg shadow-md hover:bg-primary transition-all duration-300">
            Enroll Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;