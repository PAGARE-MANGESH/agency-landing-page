import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Search } from 'lucide-react';
import bannerImg from '../../assets/bannerImg.png';
import bannerImgPhone from '../../assets/bannerImg-phone.png';

export default function Hero() {
  const [bgImage, setBgImage] = useState(bannerImg);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setBgImage(bannerImgPhone);
      } else {
        setBgImage(bannerImg);
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // run initially
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cover bg-center lg:bg-[length:100%_100%] min-h-[90vh] flex items-center transition-all duration-300 dark:bg-slate-950"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay mask to adapt bannerImg to dark mode */}
      <div className="absolute inset-0 bg-slate-950/85 dark:opacity-100 opacity-0 transition-opacity duration-300 pointer-events-none z-0" />

      {/* Decorative Blur Spheres (Blue / Soft Yellow) */}
      <div className="absolute top-1/4 left-[5%] w-64 h-64 bg-[#0055DF]/10 rounded-full glow-sphere pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-[#FFC700]/10 rounded-full glow-sphere pointer-events-none z-0" style={{ animationDelay: '2s' }} />
 
      {/* Grid overlay layout for alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headings and CTAs matching the image layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0055DF]/5 dark:bg-blue-500/10 border border-[#0055DF]/15 dark:border-blue-400/20 text-[#0055DF] dark:text-blue-400 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <MapPin className="w-4 h-4 text-[#FFC700] fill-[#FFC700] animate-bounce" />
            <span>#1 Local SEO Experts in Navi Mumbai</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A1931] dark:text-white leading-[1.15] tracking-tight mb-6 animate-fade-in">
            How Visible Are You{' '}
            <span className="relative inline-block font-extrabold text-[#0055DF] dark:text-blue-400 whitespace-nowrap mr-2">
              on Google?
              {/* Hand-drawn yellow brush underline effect */}
              <svg className="absolute left-0 top-[90%] w-full h-3 text-[#FFC700]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                  d="M3,5 Q50,9 97,4" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  fill="none" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-[#64748B] dark:text-slate-350 max-w-xl mb-8 leading-relaxed font-medium">
            Be the first choice in your locality. Boost calls, visits, and customers with expert Local SEO.
          </p>
 
          {/* Yellow Accent CTA Button with Navy text */}
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 20px 30px rgba(255,199,0,0.25)' }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#FFC700] hover:bg-[#E5B300] hover:ring-4 hover:ring-[#FFC700]/20 text-[#0A1931] dark:text-[#0A1931] font-extrabold transition-all duration-300 transform active:scale-95 text-[15px] tracking-wide"
            >
              <Search className="w-5 h-5 stroke-[2.5]" />
              <span>GET A FREE LOCAL SEO AUDIT</span>
            </motion.button>
          </a>
        </motion.div>

        {/* Right Column: Empty spacer to let the background graphic show clearly */}
        <div className="hidden lg:block lg:col-span-5 h-[350px]"></div>

      </div>
    </header>
  );
}
