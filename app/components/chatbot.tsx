'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white shadow-xl rounded-lg border border-gray-200 flex flex-col">
          <div className="flex justify-between items-center bg-primary text-white p-3 rounded-t-lg">
            <span className="text-lg font-semibold">Chatbot</span>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700">
            <p>👋 Hi there! How can I help you today?</p>
          </div>
          <div className="p-3 border-t border-gray-200">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full p-2 border rounded-lg text-sm"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="p-3 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-hover transition"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
