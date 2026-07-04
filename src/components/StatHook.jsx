import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import mobileFrame from '../../assets/mobile-frame.webp';

export default function StatHook() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors duration-300">
      
      {/* Background fading circles/vectors to match the style */}
      <div className="absolute left-[-200px] top-[10%] w-[500px] h-[500px] rounded-full border border-red-500/5 pointer-events-none -z-10"></div>
      <div className="absolute left-[-150px] top-[15%] w-[400px] h-[400px] rounded-full border border-indigo-500/5 pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: About Intro */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <span className="text-[#0055DF] dark:text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2">
            Smart strategy. Real visibility.
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A1931] dark:text-white leading-[1.25] tracking-tight mb-8">
            About Get Found
          </h2>

          <p className="text-[#64748B] dark:text-slate-350 text-sm sm:text-base mb-6 leading-relaxed">
            We help local businesses get discovered. Whether you're a restaurant, clinic, or real estate agent, we ensure your ideal customer finds you first—not your competition.
          </p>

          <p className="text-[#64748B] dark:text-slate-350 text-sm sm:text-base mb-8 leading-relaxed">
            Every business deserves to be seen by customers searching in their area. We optimize your local presence so search engines rank you at the top.
          </p>

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

        </div>

        {/* Right Side: The 4 Focus Points Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          <div className="absolute w-72 h-72 bg-[#0055DF]/5 rounded-full glow-sphere pointer-events-none -z-10" />
          
          {[
            { title: 'Precision Targeting', desc: 'We focus on the exact keywords and locations that matter to your business', color: 'border-blue-500/10' },
            { title: 'Fast Results', desc: 'See improvements in your local rankings within the first 30 days', color: 'border-[#FFC700]/20' },
            { title: 'Customer-Focused', desc: 'Every strategy is designed to bring you more qualified leads and customers', color: 'border-emerald-500/15' },
            { title: 'Proven Expertise', desc: 'Years of experience helping local businesses dominate their markets', color: 'border-purple-500/15' }
          ].map((pt, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`p-6 rounded-2xl border ${pt.color} bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-md shadow-sm text-left`}
            >
              <div className="w-8 h-8 rounded-lg bg-[#0055DF]/10 dark:bg-blue-500/20 text-[#0055DF] dark:text-blue-400 flex items-center justify-center font-bold text-sm mb-4">
                0{idx + 1}
              </div>
              <h4 className="font-heading font-extrabold text-base text-[#0A1931] dark:text-white mb-2">{pt.title}</h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{pt.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
