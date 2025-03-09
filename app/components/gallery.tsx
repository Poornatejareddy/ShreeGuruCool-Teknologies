"use client"; // 👈 Ensure this is the FIRST line

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [1, 2, 3, 4];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-bold text-primary-dark mb-8">Gallery</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((i) => (
          <div key={i} className="cursor-pointer" onClick={() => setSelectedImage(`/images/gallery-${i}.jpg`)}>
            <Image
              src={`/images/gallery-${i}.jpg`}
              alt="Gallery Image"
              width={200}
              height={150}
              className="rounded-md shadow-md hover:shadow-lg transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox for enlarged images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl">
            <Image 
              src={selectedImage} 
              alt="Expanded View" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
            <button 
              className="absolute top-2 right-2 text-white text-xl bg-black/50 p-2 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
