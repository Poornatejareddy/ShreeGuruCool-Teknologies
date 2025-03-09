'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // ✅ Define types for event handlers
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-16 px-6">
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-8">
        {/* Logo Section */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/3">
          <Image src="/logo.ico" alt="ShreeGuruCool" width={250} height={250} className="mb-4" />
          <h2 className="text-xl font-semibold text-primary-dark text-center">ShreeGuruCool</h2>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-3xl font-bold text-primary-dark mb-6 text-center md:text-left">Contact Us</h1>
          <p className="text-gray-600 mb-6 text-center md:text-left">Have questions? Fill out the form below and we’ll get back to you.</p>
          
          {submitted ? (
            <p className="text-green-600 font-semibold text-center">Thank you! Your message has been sent.</p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary-dark text-white py-3 rounded-lg shadow-md hover:bg-primary transition-all"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Contact Details Section */}
      <div className="max-w-4xl w-full bg-white p-8 rounded-xl shadow-lg mt-10 text-center">
        <h2 className="text-2xl font-bold text-primary-dark mb-4">Our Contact Details</h2>
        <p className="text-gray-600">📍 Address: 123 ShreeGuruCool St, Bengaluru, India</p>
        <p className="text-gray-600">📞 Phone: +91 98765 43210</p>
        <p className="text-gray-600">✉️ Email: contact@shreegurucool.com</p>
      </div>

      {/* Google Map Section */}
      <div className="max-w-4xl w-full mt-10">
        <iframe
          className="w-full h-72 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3284193438126!2d77.7023281740502!3d12.9508243153355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1235e3ec686b%3A0xb6fef3cde9aeace1!2sShreeGuruCool%20teKnologies!5e0!3m2!1sen!2sin!4v1741259786885!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
