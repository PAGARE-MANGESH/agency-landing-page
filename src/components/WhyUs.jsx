import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, Sprout, Settings, Check, 
  TrendingUp, Building2, ShieldCheck, MapPin, 
  Sparkles, HeartHandshake, UtensilsCrossed, Home, Scissors, Briefcase
} from 'lucide-react';
import { FadeLeft, FadeRight, FadeUp, StaggerList, StaggerItem, VIEWPORT, staggerContainer, staggerItem, staggerItemLeft } from '../utils/animations.jsx';

export default function WhyUs() {
  const column1Items = [
    { label: 'Real campaign data from competitive industries', icon: <TrendingUp className="w-3.5 h-3.5" /> },
    { label: 'Experience handling multi-city SEO execution', icon: <MapPin className="w-3.5 h-3.5" /> },
    { label: 'Focus on measurable business outcomes', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
    { label: 'Scalable SEO systems for long-term growth', icon: <Sparkles className="w-3.5 h-3.5" /> }
  ];

  const column2Items = [
    { label: 'Experience working with enterprise and multi-location brands', icon: <Building2 className="w-3.5 h-3.5" /> },
    { label: 'Proven execution in healthcare and service sectors', icon: <HeartHandshake className="w-3.5 h-3.5" /> },
    { label: 'Transparent reporting and performance tracking', icon: <Settings className="w-3.5 h-3.5" /> }
  ];

  const column3Items = [
    { label: 'Healthcare And Clinics', icon: <Building2 className="w-3.5 h-3.5" /> },
    { label: 'Real Estate', icon: <MapPin className="w-3.5 h-3.5" /> },
    { label: 'Restaurants', icon: <UtensilsCrossed className="w-3.5 h-3.5" /> },
    { label: 'Home Services', icon: <Home className="w-3.5 h-3.5" /> },
    { label: 'Salons And Wellness', icon: <Scissors className="w-3.5 h-3.5" /> },
    { label: 'Professional Services', icon: <Briefcase className="w-3.5 h-3.5" /> }
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <FadeLeft className="lg:col-span-7 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#0055DF]"></div>
              <span className="text-[#0055DF] text-xs sm:text-sm font-semibold uppercase tracking-widest">Why Us?</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] text-[#0A1931] tracking-tight leading-[1.1] uppercase">
              What Makes <br />
              <span className="font-extrabold text-[#0055DF]">GetFound Different</span>
            </h2>
          </FadeLeft>
          
          <FadeRight delay={0.15} className="lg:col-span-5 text-left text-[#64748B] text-sm sm:text-base leading-relaxed lg:pt-6">
            <p>
              GetFound brings together real multi-location SEO experience, industry-specific execution, and transparent performance tracking to help growing businesses scale visibility, rankings, and enquiries across markets.
            </p>
          </FadeRight>
        </div>

        {/* 3 Columns — each column slides up with increasing delay */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Column 1 */}
          <FadeUp delay={0} className="flex flex-col items-start text-left">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-14 h-14 rounded-2xl bg-[#0055DF]/10 text-[#0055DF] flex items-center justify-center mb-6 shadow-sm"
            >
              <Network className="w-6 h-6" />
            </motion.div>
            <h3 className="font-heading font-extrabold text-xl text-[#0A1931] mb-6">Our approach is built on</h3>
            <motion.ul
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              {column1Items.map((item, idx) => (
                <motion.li key={idx} variants={staggerItemLeft} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0055DF]/10 text-[#0055DF] flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-[#64748B] text-xs sm:text-[13.5px] leading-relaxed font-medium">{item.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </FadeUp>

          {/* Column 2 */}
          <FadeUp delay={0.15} className="flex flex-col items-start text-left">
            <motion.div
              whileHover={{ scale: 1.08, rotate: 4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-14 h-14 rounded-2xl bg-[#0055DF]/10 text-[#0055DF] flex items-center justify-center mb-6 shadow-sm"
            >
              <Sprout className="w-6 h-6" />
            </motion.div>
            <h3 className="font-heading font-extrabold text-xl text-[#0A1931] mb-6">Trusted by Growing Businesses</h3>
            <motion.ul
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="space-y-4"
            >
              {column2Items.map((item, idx) => (
                <motion.li key={idx} variants={staggerItemLeft} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0055DF]/10 text-[#0055DF] flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-[#64748B] text-xs sm:text-[13.5px] leading-relaxed font-medium">{item.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </FadeUp>

          {/* Column 3 */}
          <FadeUp delay={0.3} className="flex flex-col items-start text-left">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-14 h-14 rounded-2xl bg-[#0055DF]/10 text-[#0055DF] flex items-center justify-center mb-6 shadow-sm"
            >
              <Settings className="w-6 h-6" />
            </motion.div>
            <h3 className="font-heading font-extrabold text-xl text-[#0A1931] mb-6">Industries We Serve</h3>
            <motion.div
              variants={staggerContainer(0.08, 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
            >
              {column3Items.map((item, idx) => (
                <motion.div key={idx} variants={staggerItem} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0055DF]/10 text-[#0055DF] flex items-center justify-center shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <span className="text-[#64748B] text-xs sm:text-[13px] leading-snug font-medium">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </FadeUp>

        </div>

      </div>
    </section>
  );
}
