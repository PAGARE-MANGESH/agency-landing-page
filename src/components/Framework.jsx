import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, KeyRound, MapPinned, Globe, Link2, HeartHandshake 
} from 'lucide-react';
import { FadeLeft, FadeRight, StaggerList, StaggerItem, VIEWPORT, staggerContainer, staggerItem } from '../utils/animations.jsx';

export default function Framework() {
  const items = [
    {
      icon: <Building2 className="w-5 h-5" />,
      title: 'Google Business Profile Optimization',
      desc: 'Fine-tuning your Google Business Profile for maximum Map Pack exposure.'
    },
    {
      icon: <KeyRound className="w-5 h-5" />,
      title: 'Local Keyword Strategy',
      desc: 'Discovery of high-intent geo-modifiers that drive local phone calls.'
    },
    {
      icon: <MapPinned className="w-5 h-5" />,
      title: 'Location Page SEO',
      desc: 'Structured data and local content for multi-branch landing pages.'
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: 'Technical SEO',
      desc: 'Schema markup and page speed optimization for mobile users.'
    },
    {
      icon: <Link2 className="w-5 h-5" />,
      title: 'Authority Building',
      desc: 'Local citations and contextually relevant backlinks from regional sources.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: 'Reputation Management',
      desc: 'Strategic review acquisition and sentiment monitoring for local trust.'
    }
  ];

  return (
    <section id="framework" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header — left fades from left, right from right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <FadeLeft className="lg:col-span-7 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#0055DF]"></div>
              <span className="text-[#0055DF] text-xs sm:text-sm font-semibold uppercase tracking-widest">
                Our Offerings
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] text-[#0A1931] tracking-tight leading-[1.1] uppercase">
              Our Local <br />
              <span className="font-extrabold text-[#0A1931]">SEO Framework</span>
            </h2>
          </FadeLeft>
          
          <FadeRight delay={0.15} className="lg:col-span-5 text-left text-[#64748B] text-sm sm:text-base leading-relaxed lg:pt-6">
            <p>
              Our local SEO framework is built to improve map visibility, strengthen city-wise rankings, and turn high-intent local searches into real business enquiries.
            </p>
          </FadeRight>
        </div>

        {/* Framework Grid — cards stagger up */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="rounded-3xl border border-slate-100 bg-white overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.015)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y divide-slate-100 md:divide-y-0 lg:divide-y-0">
            {items.map((item, idx) => {
              const borderClasses = `
                p-8 text-left transition-colors hover:bg-[#F4F7FC]/40 flex flex-col items-start
                ${idx < 3 ? 'lg:border-b lg:border-slate-100' : ''}
                ${idx % 3 !== 2 ? 'lg:border-r lg:border-slate-100' : ''}
                ${idx % 2 !== 1 ? 'md:border-r md:border-slate-100' : ''}
                ${idx < 4 ? 'md:border-b md:border-slate-100' : ''}
              `;
              
              return (
                <motion.div
                  key={idx}
                  variants={staggerItem}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={borderClasses}
                >
                  {/* Icon wrap */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="w-10 h-10 rounded-xl bg-[#0055DF]/10 text-[#0055DF] flex items-center justify-center mb-6 shadow-sm"
                  >
                    {item.icon}
                  </motion.div>
                  
                  <h3 className="font-heading font-extrabold text-base text-[#0A1931] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-500 text-[13.5px] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
