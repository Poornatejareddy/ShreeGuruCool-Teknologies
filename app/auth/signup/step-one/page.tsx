'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function SignupStepOne() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSendOtp = async () => {
    setError('');
    if (!email) return setError('Email is required!');
    setLoading(true);

    try {
      await axios.post(
        'http://localhost:5000/api/auth/register-send-otp',
        { email },
        { withCredentials: true }
      );

      localStorage.setItem('signup_email', email);
      router.push('/auth/signup/verify');
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.msg || 'Failed to send OTP');
      } else {
        setError('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-sky-200 px-4">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-200"
      >
        {/* Project Branding */}
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.ico" // Replace this with the correct path to your logo
            alt="ShreeGuruCool Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-2">Welcome to ShreeGuruCool</h2>
        <p className="text-center text-gray-600 mb-6">Step 1: Enter your email to get started</p>


        {/* Email Input */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Error message */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-sm text-center mb-2"
          >
            {error}
          </motion.p>
        )}

        {/* Send OTP Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          disabled={loading}
          onClick={handleSendOtp}
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          {loading ? 'Sending OTP...' : 'Send OTP'}
        </motion.button>
      </motion.div>
    </div>
  );
}
