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
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-cover bg-center lg:bg-[length:100%_100%] min-h-[90vh] flex items-center transition-all duration-300"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Grid overlay layout for alignment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Headings and CTAs matching the image layout */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDECEC] border border-red-100 text-[#B62E28] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
            <MapPin className="w-4 h-4 fill-current" />
            <span>Local SEO Services in India</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0C0E12] leading-[1.15] tracking-tight mb-6">
            Increase{' '}
            <span className="relative inline-block font-extrabold text-[#B62E28] whitespace-nowrap mr-2">
              Local Visibility
              {/* Hand-drawn green brush underline effect */}
              <svg className="absolute left-0 top-[90%] w-full h-3 text-[#00D285]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M3,5 Q50,9 97,4" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
            and Drive <span className="font-extrabold text-[#0C0E12]">High-Intent Customers</span> to Your Business
          </h1>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-slate-755 max-w-xl mb-8 leading-relaxed font-medium">
            Rank higher in Google Maps, local search, and near-me results with data-driven Local SEO.
          </p>

          {/* Green CTA Button */}
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="animate-pulse-cta inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00D285] hover:bg-[#00B873] text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform active:scale-95 text-[15px]"
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
