'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function VerifyOtp() {
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedEmail = localStorage.getItem('signup_email');
    if (storedEmail) setEmail(storedEmail);
    else router.push('/auth/signup/step-one');
  }, [router]);

  const handleVerify = async () => {
    setError('');
    if (!otp || !email) return setError('OTP and Email are required!');
    setLoading(true);
    try {
      await axios.post(
        'http://localhost:5000/api/auth/register-verify-otp',
        { email, otp },
        { withCredentials: true }
      );
      router.push('/auth/signup/complete');
    } catch (err: any) {
      setError(err?.response?.data?.msg || 'Verification failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-green-200 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 70 }}
        className="w-full max-w-md bg-white rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-center text-green-700 mb-4">🌿 Verify Your OTP</h2>
        <p className="text-center text-gray-600 mb-6">Step 2: Enter the OTP sent to <span className="font-semibold">{email}</span></p>

        <motion.input
          whileFocus={{ scale: 1.03 }}
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-600 text-sm mt-3 text-center"
          >
            {error}
          </motion.p>
        )}

        <motion.button
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.02 }}
          disabled={loading}
          onClick={handleVerify}
          className={`w-full mt-6 py-3 rounded-lg font-semibold text-white transition ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {loading ? 'Verifying...' : 'Verify OTP'}
        </motion.button>
      </motion.div>
    </div>
  );
}
