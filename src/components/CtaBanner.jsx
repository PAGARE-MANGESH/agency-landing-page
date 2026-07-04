import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { FadeUp } from '../utils/animations.jsx';

export default function CtaBanner() {
  return (
    <section className="w-full bg-[#0055DF] text-white py-20 relative overflow-hidden text-center">
      {/* Decorative background glow circles */}
      <div className="absolute top-[-100px] left-[-100px] w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 rounded-full bg-white/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <FadeUp>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-tight mb-4">
            Ready to Get Found?
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mb-12 font-medium">
            Contact us today for a FREE consultation. No strings attached – just real insights.
          </p>
        </FadeUp>

        {/* 3 Contact Cards Grid */}
        <FadeUp delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full mb-10">
            {/* Card 1: Call Us */}
            <motion.a 
              href="tel:7039821730"
              whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/10 border border-white/15 shadow-sm transition-all duration-300"
            >
              <Phone className="w-8 h-8 text-white mb-4 stroke-[1.5]" />
              <span className="font-bold text-sm sm:text-base text-white/80 uppercase tracking-wider mb-2">Call Us</span>
              <span className="font-extrabold text-base sm:text-lg text-white flex items-center gap-1.5">
                <span>📞</span>
                <span>7039821730</span>
              </span>
            </motion.a>

            {/* Card 2: Visit Us */}
            <motion.div 
              whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/10 border border-white/15 shadow-sm transition-all duration-300"
            >
              <MapPin className="w-8 h-8 text-white mb-4 stroke-[1.5]" />
              <span className="font-bold text-sm sm:text-base text-white/80 uppercase tracking-wider mb-2">Visit Us</span>
              <span className="font-extrabold text-base sm:text-lg text-white flex items-center gap-1.5">
                <span>📍</span>
                <span>Navi Mumbai</span>
              </span>
            </motion.div>

            {/* Card 3: WhatsApp */}
            <motion.a 
              href="https://wa.me/917039821730"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              className="flex flex-col items-center justify-center p-8 rounded-2xl bg-white/10 border border-white/15 shadow-sm transition-all duration-300"
            >
              <MessageCircle className="w-8 h-8 text-white mb-4 stroke-[1.5]" />
              <span className="font-bold text-sm sm:text-base text-white/80 uppercase tracking-wider mb-2">WhatsApp</span>
              <span className="font-extrabold text-base sm:text-lg text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block animate-pulse shrink-0" />
                <span>Chat Now</span>
              </span>
            </motion.a>
          </div>
        </FadeUp>

        {/* Action Buttons */}
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
            {/* Consultation button */}
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 bg-white text-[#0055DF] font-extrabold rounded-full shadow-md transition-all text-sm tracking-wide w-full sm:w-auto whitespace-nowrap"
            >
              Get Your FREE Consultation
            </motion.a>

            {/* WhatsApp Outline Button */}
            <motion.a 
              href="https://wa.me/917039821730"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 bg-transparent border-2 border-white text-white font-extrabold rounded-full transition-all text-sm tracking-wide w-full sm:w-auto whitespace-nowrap"
            >
              Chat on WhatsApp
            </motion.a>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
