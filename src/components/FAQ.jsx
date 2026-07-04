import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadeUp, VIEWPORT, staggerContainer, staggerItem } from '../utils/animations.jsx';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const items = [
    {
      q: 'How Long Does Local SEO Take',
      a: 'Most local campaigns start seeing initial visibility increases and Google Maps traction within 60 to 90 days as schema and profile optimizations take effect.'
    },
    {
      q: 'Can You Rank My Business In Multiple Cities',
      a: 'Yes, we specialize in multi-location SEO. We deploy customized city pages, local coordinate schemas, and optimized business profiles for each branch.'
    },
    {
      q: 'Do You Improve Google Maps Rankings',
      a: 'Absolutely. Maps pack visibility is our primary objective. We optimize your Google Business Profiles, review acquisition funnels, and local citations.'
    },
    {
      q: 'How Do You Measure Success',
      a: 'We track measurable business outcomes including phone calls, website clicks, directional maps views, and local search footprint improvements.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Title fades up */}
        <FadeUp className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-[#0A1931] dark:text-white leading-[1.1] mb-4">
            <span className="text-[#0055DF] dark:text-blue-400">Frequently asked</span> questions
          </h2>
          <p className="text-[#64748B] dark:text-slate-450 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            We believe in clear communication from day one. Here are answers to some common questions we receive. If you have a question that isn't answered here, please don't hesitate to reach out.
          </p>
        </FadeUp>
 
        {/* Accordions stagger up */}
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="space-y-4"
        >
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                variants={staggerItem}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-blue-100 dark:border-blue-900/40 bg-[#F4F7FC]/90 dark:bg-slate-900 shadow-sm' 
                    : 'border-slate-100 dark:border-slate-800 bg-[#F4F7FC]/40 dark:bg-slate-900/30 hover:bg-[#F4F7FC]/70 dark:hover:bg-slate-900/60'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-[#0A1931] dark:text-white text-sm sm:text-base focus:outline-none"
                >
                  <span>{item.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0 shadow-sm transition-colors duration-300 ${
                      isOpen ? 'bg-[#0A1931] dark:bg-slate-800' : 'bg-[#0055DF] dark:bg-blue-500'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </motion.div>
                </button>
 
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-5 text-[#64748B] dark:text-slate-350 text-[13.5px] leading-relaxed border-t border-slate-100/50 dark:border-slate-800 pt-3">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
