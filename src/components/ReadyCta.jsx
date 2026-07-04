import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ReadyCta() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-65px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="w-full mt-16 rounded-3xl bg-gradient-to-r from-[#0055DF] via-[#3B82F6] to-[#8B5CF6] p-8 sm:p-12 text-center shadow-[0_20px_50px_rgba(0,85,223,0.15)] text-white relative overflow-hidden"
    >
      {/* Subtle decorative circles */}
      <div className="absolute top-[-80px] left-[-80px] w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-84 h-84 rounded-full bg-white/5 pointer-events-none" />
      
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-[34px] leading-tight mb-3">
          Ready to Dominate Local Search?
        </h3>
        <p className="text-white/95 text-sm sm:text-base md:text-[16.5px] max-w-xl mb-8 leading-relaxed font-medium">
          Join hundreds of businesses that trust Get Found for their local SEO success
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          {/* Call button */}
          <motion.a 
            href="tel:7039821730"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white text-[#0055DF] font-bold rounded-xl shadow-md hover:bg-slate-50 transition-all text-[14.5px] tracking-wide w-full sm:w-auto whitespace-nowrap"
          >
            <Phone className="w-4 h-4 fill-current" />
            <span>Call Now: 7039821730</span>
          </motion.a>

          {/* WhatsApp button */}
          <motion.a 
            href="https://wa.me/917039821730"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#00A884] text-white font-bold rounded-xl shadow-md hover:bg-[#009675] transition-all text-[14.5px] tracking-wide w-full sm:w-auto whitespace-nowrap"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-200 animate-ping absolute shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 shrink-0" />
            <span>Chat on WhatsApp</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
