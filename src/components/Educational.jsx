import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Phone, Compass, Star } from 'lucide-react';
import humanFrame from '../../assets/human-frame.webp';

export default function Educational() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Background soft map overlays */}
      <div className="absolute right-[-200px] top-[10%] w-[500px] h-[500px] rounded-full border border-slate-100 dark:border-slate-800/20 pointer-events-none -z-10"></div>
 
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
          <span className="text-[#0055DF] dark:text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
            About the Founder
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[#0A1931] dark:text-white tracking-tight mb-1 font-extrabold">
            Priyanka Jadhav
          </h2>
          <span className="text-slate-400 dark:text-slate-500 font-bold text-sm sm:text-base uppercase tracking-wider block mb-6">
            Founder, Get Found
          </span>
          
          <p className="text-[#64748B] dark:text-slate-350 text-[15px] sm:text-base mb-4 leading-relaxed">
            With a sharp eye for digital trends and a passion for helping local businesses grow, Priyanka Jadhav founded Get Found to solve one problem: most small businesses don’t get discovered on Google—and they deserve better.
          </p>

          <p className="text-[#64748B] dark:text-slate-350 text-[15px] sm:text-base mb-6 leading-relaxed">
            With years of experience in local SEO, Google My Business optimization, and digital branding, Priyanka has helped restaurants, salons, clinics, real estate firms, and retail stores rank higher, attract more customers, and increase foot traffic—all without spending a fortune on ads.
          </p>

          {/* Blockquote Quote */}
          <div className="border-l-4 border-[#FFC700] bg-slate-50 dark:bg-slate-900/60 p-4 rounded-r-2xl mb-6 w-full italic text-[#0A1931] dark:text-white font-medium text-sm sm:text-base">
            "If people can’t find you online, they’ll find your competitor. Let’s change that."
          </div>

          {/* Mission block */}
          <div className="bg-[#0055DF]/5 border border-[#0055DF]/10 rounded-2xl p-5 mb-8 w-full">
            <h4 className="font-heading font-extrabold text-sm text-[#0055DF] dark:text-blue-400 uppercase tracking-widest mb-2">Our Mission</h4>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              To make every local business discoverable by the customers who need them most. We believe that great businesses deserve great visibility, and we're here to make that happen through strategic Local SEO and Google My Business optimization.
            </p>
          </div>

          {/* Link button with blue circle arrow */}
          <a 
            href="#contact" 
            className="inline-flex items-center gap-3 font-bold text-sm tracking-widest text-[#0A1931] dark:text-white hover:text-[#0055DF] dark:hover:text-blue-400 transition-all group uppercase"
          >
            <span>GET IN TOUCH</span>
            <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-center text-[#0055DF] dark:text-blue-400 group-hover:bg-[#0055DF] dark:group-hover:bg-blue-400 group-hover:text-white dark:group-hover:text-slate-950 transition-all shadow-sm">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </a>

        </motion.div>

      </div>
    </section>
  );
}
