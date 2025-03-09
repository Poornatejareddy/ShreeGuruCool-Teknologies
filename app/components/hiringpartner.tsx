"use client"; // 👈 Ensures useState and useEffect work in Next.js App Router

import { useEffect, useState } from "react";
import Image from "next/image";

const hiringPartners = [
  { name: "Amazon", logo: "https://cdndailyexcelsior.b-cdn.net/wp-content/uploads/2024/06/amozone.png" },
  { name: "tcs", logo: "https://www.thestatesman.com/wp-content/uploads/2022/06/TCS.jpg" },
  { name: "infosys", logo: "https://contentstatic.techgig.com/thumb/msid-108083341,width-800,resizemode-4/Infosys-allows-employees-WFH-for-3-days-a-week.jpg?4034" },
  { name: "SAP", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/SAP_2011_logo.svg/1200px-SAP_2011_logo.svg.png" },
  { name: "accenture", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzLNUo1hLlXy0jXmo4yfJHzvUwPC2JnNWToQ&s" },
  { name: "Wipro", logo: "https://mms.businesswire.com/media/20241017796218/en/2275854/22/Wipro_Logo.jpg" },
];

export default function HiringPartners() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout;

    if (!isHovered) {
      scrollInterval = setInterval(() => {
        document.getElementById("partnerScroll")?.scrollBy({ left: 100, behavior: "smooth" });
      }, 2000);
    }

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  return (
    <section className="py-16 bg-primary-light px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-primary-dark mb-4">Our Hiring Partners</h2>
      <p className="text-gray-600 mb-6">Top companies where our students get placed.</p>

      {/* Scrolling Partner Logos */}
      <div
        id="partnerScroll"
        className="flex overflow-x-auto space-x-8 scrollbar-hide py-4 px-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {hiringPartners.map((partner, index) => (
          <div key={index} className="flex-shrink-0 w-32">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={60}
              className="mx-auto grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Grid Fallback for Small Screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6 hidden md:grid">
        {hiringPartners.map((partner, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={50}
              className="grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
