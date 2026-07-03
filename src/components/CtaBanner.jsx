import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Check } from 'lucide-react';
import humanFrame from '../../assets/human-frame.webp';
import { FadeLeft, FadeRight, VIEWPORT, staggerContainer, staggerItem } from '../utils/animations.jsx';

export default function CtaBanner() {
  const features = [
    'Identify Ranking Gaps',
    'Discover Growth Opportunities',
    'Get a Clear Strategy Tailored To Your Business'
  ];

  return (
    <section id="cta-audit" className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#FFF4F4] via-white to-[#FFF0F0] border border-red-50/50 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.02)] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Background decorative circles */}
          <div className="absolute top-[-50px] left-[-50px] w-64 h-64 rounded-full bg-red-100/10 pointer-events-none"></div>
          <div className="absolute bottom-[-50px] right-[-50px] w-80 h-80 rounded-full bg-red-100/10 pointer-events-none"></div>

          {/* Left Column — slides in from left */}
          <FadeLeft className="lg:col-span-7 flex flex-col items-start text-left relative z-10">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[42px] text-[#0C0E12] leading-[1.15] mb-3 uppercase">
              Get a <span className="text-[#00D285]">FREE</span> Local SEO Audit
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mb-8 font-medium">
              Get a detailed audit and actionable insights within 48 Hours.
            </p>

            {/* Feature checklist — stagger from left */}
            <motion.div
              variants={staggerContainer(0.12, 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT}
              className="space-y-4 mb-8"
            >
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    show:   { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                  }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={VIEWPORT}
                    transition={{ type: 'spring', stiffness: 300, delay: 0.3 + idx * 0.1 }}
                    className="w-6 h-6 rounded-full bg-[#B62E28] text-white flex items-center justify-center shrink-0 shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </motion.div>
                  <span className="text-slate-700 text-sm sm:text-base font-bold">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <a href="#audit">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.04, boxShadow: '0 12px 30px rgba(182,46,40,0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full bg-[#B62E28] hover:bg-[#A02823] text-white font-bold text-xs sm:text-sm shadow-md transition-all duration-300 uppercase tracking-wider"
              >
                Request your free local SEO audit
              </motion.button>
            </a>
          </FadeLeft>

          {/* Right Column — slides in from right */}
          <FadeRight delay={0.2} className="lg:col-span-5 flex justify-center relative z-10 lg:pt-0 pt-6">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              <img 
                src={humanFrame} 
                alt="Free Local SEO Audit Professional" 
                className="w-full h-auto object-contain rounded-2xl"
              />
              
              {/* Floating badge — bobs up/down */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 right-[-20px] bg-white border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-2xl p-3 px-4 flex items-center gap-2 whitespace-nowrap"
              >
                <div className="w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 fill-current" />
                </div>
                <span className="font-bold text-xs text-blue-600 uppercase tracking-wider">Actionable Insights</span>
              </motion.div>

              {/* Floating Pin — bounces */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute top-[10%] left-[-15px]"
              >
                <div className="w-10 h-10 rounded-full bg-white text-[#B62E28] flex items-center justify-center shadow-lg border border-red-100">
                  <span className="text-lg">📍</span>
                </div>
              </motion.div>
            </div>
          </FadeRight>

        </div>
      </div>
    </section>
  );
}
