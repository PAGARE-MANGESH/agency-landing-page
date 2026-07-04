import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Compass, Star } from 'lucide-react';
import humanFrame from '../../assets/human-frame.webp';

export default function Educational() {
  return (
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background soft map overlays */}
      <div className="absolute right-[-200px] top-[10%] w-[500px] h-[500px] rounded-full border border-slate-100 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Human Frame Graphic */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex justify-center items-center"
        >
          <img 
            src={humanFrame} 
            alt="Local SEO executive professional with laptop" 
            className="w-full max-w-[500px] h-auto object-contain rounded-3xl"
          />
        </motion.div>

        {/* Right Column: Headings, Paragraphs, and Stats Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 flex flex-col items-start text-left"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#252525] tracking-tight mb-6">
            What is <span className="font-extrabold text-[#B62E28]">Local</span> <span className="font-extrabold text-[#252525]">SEO</span>
          </h2>
          
          <p className="text-slate-650 text-[15px] sm:text-base mb-6 leading-relaxed">
            Local SEO is the <strong className="text-slate-900 font-semibold">process of optimizing your business to appear in</strong> <strong className="text-[#00A355] font-semibold">location-based searches</strong> <strong className="text-slate-900 font-semibold">and capture</strong> <strong className="text-[#0194fc] font-semibold">high-intent customers</strong> at the exact moment they are ready to take action.
          </p>

          <p className="text-slate-500 text-sm sm:text-base mb-8 leading-relaxed">
            It focuses on improving your visibility in Google Maps and the Local Pack, helping your business rank for searches that directly lead to calls, visits, and conversions.
          </p>

                   {/* Two side-by-side metric cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
            
            {/* Card 1: Google Maps Visibility */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.025, boxShadow: '0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 8px 10px -6px rgba(16, 185, 129, 0.05)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="p-5 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 bg-gradient-to-b from-white to-[#F8FAFC] shadow-[0_4px_25px_rgba(0,0,0,0.015)] cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4 text-[#00A355] font-bold text-xs uppercase tracking-wider">
                <div className="p-1 rounded-full bg-emerald-50 text-emerald-600">
                  <MapPin className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>Google Maps Visibility</span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center border-b border-slate-100 pb-3 mb-3">
                <div>
                  <span className="block font-heading font-extrabold text-[#00A355] text-sm">12.4K</span>
                  <span className="text-[10px] text-slate-400">Map Views</span>
                </div>
                <div>
                  <span className="block font-heading font-extrabold text-[#0194fc] text-sm">1.8K</span>
                  <span className="text-[10px] text-slate-400">Calls</span>
                </div>
                <div>
                  <span className="block font-heading font-extrabold text-emerald-500 text-sm">2.6K</span>
                  <span className="text-[10px] text-slate-400">Directions</span>
                </div>
              </div>
              {/* SVG Trendline */}
              <svg className="w-full h-8 text-emerald-500" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0,18 Q20,12 40,15 T80,5 T100,2" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* Card 2: Google Maps Business Listing */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.025, boxShadow: '0 20px 25px -5px rgba(239, 68, 68, 0.1), 0 8px 10px -6px rgba(239, 68, 68, 0.05)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="p-5 rounded-2xl border border-red-500/10 hover:border-red-500/30 bg-gradient-to-b from-white to-[#F8FAFC] shadow-[0_4px_25px_rgba(0,0,0,0.015)] text-left flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-full bg-[#B62E28] text-white flex items-center justify-center font-bold text-xs">
                    M
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-slate-900 leading-tight">Metropolis Diagnostic Network</h4>
                    <span className="text-[10px] text-slate-400 block">- Lower Parel</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex text-yellow-400 fill-current">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[9px] text-slate-500 font-semibold">4.8 (1234)</span>
                </div>
                <span className="text-[9px] text-slate-400 block mb-1">Diagnostic center · Open now</span>
              </div>
              <div className="border-t border-slate-100 pt-2 mt-2 flex justify-between text-[9px] text-slate-500 font-bold">
                <span>Top 3 Local Pack</span>
                <span className="text-[#00A355]">✓ Verified</span>
              </div>
            </motion.div>

          </div>

          {/* Link button with red circle arrow */}
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 font-bold text-sm tracking-widest text-[#0C0E12] hover:text-[#B62E28] transition-all group uppercase"
          >
            <span>GET STARTED</span>
            <div className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-[#B62E28] group-hover:bg-[#B62E28] group-hover:text-white transition-all shadow-sm">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>

        </motion.div>

      </div>
    </section>
  );
}
