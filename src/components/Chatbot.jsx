import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: 'Hello! Welcome to Get Found. How can I help you dominate local search today? Please select one of the questions below:'
    }
  ]);

  const chatbotRef = useRef(null);
  const messagesEndRef = useRef(null);

  const qaData = [
    {
      question: 'How long does local SEO take to show results?',
      answer: 'Most local businesses see noticeable rank improvements on Google Maps and search results within 30 to 90 days of implementation.'
    },
    {
      question: 'What is Google My Business optimization?',
      answer: 'It is the process of optimizing your GMB profile (correct categories, geo-targeted keywords, accurate hours, and photos) so you rank in Google\'s Local 3-Pack.'
    },
    {
      question: 'What areas do you cover?',
      answer: 'We primarily specialize in helping businesses in Navi Mumbai, Mumbai, and surrounding local areas rank higher.'
    },
    {
      question: 'How can I get started?',
      answer: 'You can fill out the Quick Enquiry Form in the Contact section or directly reach out via Call (7039821730) or WhatsApp!'
    }
  ];

  const handleSuggestionClick = (qa) => {
    // 1. Add user message
    const userMsgId = Date.now();
    setMessages(prev => [
      ...prev,
      { id: userMsgId, sender: 'user', text: qa.question }
    ]);

    // 2. Add bot answer after a small delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { 
          id: Date.now() + 1, 
          sender: 'bot', 
          text: qa.answer 
        }
      ]);
    }, 600);
  };

  // Scroll to bottom whenever messages list updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans" ref={chatbotRef}>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#0055DF] hover:bg-blue-600 text-white flex items-center justify-center shadow-lg transition-colors border border-blue-500/25"
        aria-label="Toggle support assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="absolute bottom-16 right-0 w-[330px] sm:w-[360px] h-[480px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#0055DF] p-4 text-white flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <h4 className="font-extrabold text-sm text-left">Get Found Support</h4>
                  <p className="text-[10px] text-white/80 text-left font-medium">Online Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-950/20">
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  {/* Avatar bubble */}
                  <div className={`w-7.5 h-7.5 rounded-full flex items-center justify-center shrink-0 shadow-sm text-xs font-bold ${
                    msg.sender === 'user' ? 'bg-[#0055DF] text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}>
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  {/* Message bubble */}
                  <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-xs sm:text-[13px] leading-relaxed shadow-sm text-left ${
                    msg.sender === 'user' 
                      ? 'bg-[#0055DF] text-white rounded-tr-none' 
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-800/40'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions List */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col gap-2">
              <span className="text-[10px] text-slate-400 dark:text-slate-500 font-extrabold uppercase text-left pl-1">
                Suggested Questions
              </span>
              <div className="flex flex-col gap-1.5 max-h-[140px] overflow-y-auto pr-1">
                {qaData.map((qa, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(qa)}
                    className="w-full text-left text-[11px] sm:text-xs font-bold p-2 bg-slate-50 dark:bg-slate-950 hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-[#0055DF] dark:hover:text-blue-400 border border-slate-100 dark:border-slate-800/80 rounded-xl transition-all"
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Overlay (Read-only as only suggestion responses are supported) */}
            <div className="p-3 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between text-[11px] font-semibold text-slate-400 dark:text-slate-500 select-none">
              <span>Only suggestion responses supported</span>
              <Send className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
