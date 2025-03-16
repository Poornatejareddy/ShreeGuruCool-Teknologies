import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Bot, X } from 'lucide-react';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+123456789'; // Replace with actual phone number
  };

  const handleWhatsappClick = () => {
    window.open('https://wa.me/123456789', '_blank'); // Replace with actual WhatsApp link
  };

  const handleChatbotClick = () => {
    setShowChatbot(!showChatbot); // Toggle chatbot visibility
  };

  if (!isClient) return null; // Avoid hydration mismatch

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button onClick={toggleMenu} className="bg-black p-4 rounded-full text-white shadow-lg">
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md">
          <button onClick={handlePhoneClick} className="flex items-center gap-2 text-gray-700 hover:text-blue-500">
            <Phone /> Phone
          </button>
          <button onClick={handleWhatsappClick} className="flex items-center gap-2 text-gray-700 hover:text-green-500">
            <MessageCircle /> WhatsApp
          </button>
          <button onClick={handleChatbotClick} className="flex items-center gap-2 text-gray-700 hover:text-purple-500">
            <Bot /> Chatbot
          </button>
        </div>
      )}

      {showChatbot && (
        <div className="fixed bottom-16 right-16 w-80 h-96 bg-white shadow-xl rounded-lg border border-gray-200 flex flex-col">
          <div className="flex justify-between items-center bg-primary text-white p-3 rounded-t-lg">
            <span className="text-lg font-semibold">Chatbot</span>
            <button onClick={handleChatbotClick} className="text-white">
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
      )}
    </div>
  );
};

export default FloatingChatbot;
