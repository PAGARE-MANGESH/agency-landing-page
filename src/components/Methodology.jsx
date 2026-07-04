import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Utensils, Home, Wrench, Search, Check, X, MapPin } from 'lucide-react';

export default function Methodology() {
  const [activeTab, setActiveTab] = useState('Healthcare');

  const tabs = {
    Healthcare: {
      icon: <Stethoscope className="w-5 h-5" />,
      city: 'Delhi',
      landmark: 'Green Park Metro',
      image: null,
      crossedQuery: 'Diagnostic Lab in Delhi',
      optimizedQuery: 'Blood test near Green Park Metro',
      competition: 'Low (-58%)',
      conversion: 'High (+132%)',
      color: '#0055DF',
      bgColor: 'bg-blue-600',
      accentBg: 'bg-[#F4F7FC]',
      textAccent: 'text-[#0055DF]',
      borderColor: 'border-blue-100',
      lightColor: 'rgba(0, 85, 223, 0.1)'
    },
    Food: {
      icon: <Utensils className="w-5 h-5" />,
      city: 'Mumbai',
      landmark: 'BKC Hub',
      image: null,
      crossedQuery: 'Restaurants in Mumbai',
      optimizedQuery: 'Corporate catering BKC Hub',
      competition: 'Low (-45%)',
      conversion: 'High (+180%)',
      color: '#F97316',
      bgColor: 'bg-orange-500',
      accentBg: 'bg-orange-50',
      textAccent: 'text-orange-600',
      borderColor: 'border-orange-200',
      lightColor: 'rgba(249, 115, 22, 0.1)'
    },
    'Real Estate': {
      icon: <Home className="w-5 h-5" />,
      city: 'Pune',
      landmark: 'Magarpatta Phase 2',
      image: null,
      crossedQuery: 'Flats in Pune',
      optimizedQuery: '3BHK near Magarpatta Phase 2',
      competition: 'Low (-62%)',
      conversion: 'High (+95%)',
      color: '#2563EB',
      bgColor: 'bg-blue-500',
      accentBg: 'bg-blue-50',
      textAccent: 'text-blue-600',
      borderColor: 'border-blue-200',
      lightColor: 'rgba(37, 99, 235, 0.1)'
    },
    'Home Services': {
      icon: <Wrench className="w-5 h-5" />,
      city: 'Bangalore',
      landmark: 'HSR Layout',
      image: null,
      crossedQuery: 'Plumbers in Bangalore',
      optimizedQuery: 'Emergency plumber HSR Layout',
      competition: 'Low (-50%)',
      conversion: 'High (+210%)',
      color: '#7C3AED',
      bgColor: 'bg-purple-500',
      accentBg: 'bg-purple-50',
      textAccent: 'text-purple-600',
      borderColor: 'border-purple-200',
      lightColor: 'rgba(124, 58, 237, 0.1)'
    }
  };

  const activeTabDetails = tabs[activeTab];

  return (
    <section id="methodology" className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Header layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#0055DF] dark:bg-blue-400"></div>
              <span className="text-[#0055DF] dark:text-blue-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
                From city-level to hyper-local
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] text-slate-400 dark:text-slate-500 tracking-tight leading-[1.1] uppercase">
              How we transform <br />
              your <span className="font-extrabold text-[#0C0E12] dark:text-white">Visibility</span>
            </h2>
          </div>
          
          <div className="lg:col-span-6 text-left text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            <p className="mb-4">
              Most businesses only target <strong className="text-slate-900 dark:text-white font-semibold">broad city-level keywords</strong>. At <strong className="text-slate-900 dark:text-white font-semibold">GBIM</strong>, we go deeper by optimizing for <strong className="text-slate-900 dark:text-white font-semibold">hyper-local searches</strong> that include <strong className="text-slate-900 dark:text-white font-semibold">neighborhoods, landmarks, and high-intent micro-locations</strong>.
            </p>
            <p>
              This allows your business to appear for highly specific queries where competition is lower and conversion rates are significantly higher.
            </p>
          </div>
        </div>

        {/* Lower interactive layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Interactive Tabs list */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {Object.keys(tabs).map((tabName) => {
              const isSelected = activeTab === tabName;
              const themeColor = tabs[tabName].color;
              return (
                <button
                  key={tabName}
                  onClick={() => setActiveTab(tabName)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected 
                      ? 'bg-white dark:bg-slate-900 ring-1' 
                      : 'bg-white/50 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-200 dark:hover:border-slate-700'
                  }`}
                  style={{
                    borderColor: isSelected ? themeColor : '',
                    boxShadow: isSelected ? `0 15px 30px -5px ${tabs[tabName].lightColor}` : ''
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isSelected ? 'text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}
                      style={{
                        backgroundColor: isSelected ? themeColor : ''
                      }}
                    >
                      {tabs[tabName].icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-lg text-[#0C0E12] dark:text-white">{tabName}</h3>
                      <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">{tabs[tabName].city} → {tabs[tabName].landmark}</span>
                    </div>
                  </div>
                  <div 
                    className={`w-6 h-6 rounded-full border flex items-center justify-center text-slate-400 transition-all ${
                      isSelected ? 'rotate-90 text-white' : 'border-slate-200 dark:border-slate-800'
                    }`}
                    style={{
                      backgroundColor: isSelected ? themeColor : 'transparent',
                      borderColor: isSelected ? themeColor : ''
                    }}
                  >
                    →
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Graphic mockup representing local map positioning outcomes */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.96, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -15 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-[580px] aspect-[4/3] rounded-3xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-6 sm:p-8 flex flex-col justify-between relative shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden"
              >
                {/* Simulated Radar Map Grid */}
                <div className="absolute inset-0 opacity-20 pointer-events-none -z-10">
                  <svg className="w-full h-full text-slate-350 dark:text-slate-700" viewBox="0 0 200 150">
                    <circle cx="100" cy="75" r="30" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,3" />
                    <circle cx="100" cy="75" r="60" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,3" />
                    <circle cx="100" cy="75" r="90" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3,3" />
                    
                    {/* Simulated Map Streets */}
                    <path d="M 20,40 L 180,40 M 10,75 L 190,75 M 30,110 L 170,110" stroke="currentColor" strokeWidth="1" />
                    <path d="M 60,10 L 60,140 M 100,5 L 100,145 M 140,10 L 140,140" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </div>

                {/* Animated Pulsing Location Pin */}
                <div className="absolute top-[38%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                  <div className="relative">
                    {/* Double pulsing rings colored dynamically */}
                    <motion.div 
                      animate={{ scale: [1, 2.5], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                      className="absolute -inset-3 rounded-full pointer-events-none"
                      style={{ backgroundColor: activeTabDetails.color }}
                    />
                    <motion.div 
                      animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                      transition={{ duration: 2, delay: 0.6, repeat: Infinity, ease: 'easeOut' }}
                      className="absolute -inset-3 rounded-full pointer-events-none"
                      style={{ backgroundColor: activeTabDetails.color }}
                    />
                    
                    {/* The Pin */}
                    <motion.div 
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg relative z-10"
                      style={{ backgroundColor: activeTabDetails.color }}
                    >
                      <MapPin className="w-6 h-6 fill-white/20" />
                    </motion.div>
                  </div>
                  <span 
                    className="mt-3 text-white font-extrabold text-[11px] sm:text-xs px-4 py-1.5 rounded-full shadow-lg tracking-wide uppercase"
                    style={{ backgroundColor: activeTabDetails.color }}
                  >
                    {activeTabDetails.landmark}
                  </span>
                </div>

                {/* Left Card: Conversion metrics (Floating left) */}
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.4 }}
                  className="absolute bottom-6 left-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl rounded-2xl p-4 text-left z-20 hidden sm:block"
                >
                  <span className="block text-[9px] text-slate-400 dark:text-slate-500 uppercase font-extrabold tracking-wider">Conversion</span>
                  <span className="font-heading font-extrabold text-red-500 text-base">{activeTabDetails.conversion}</span>
                </motion.div>

                {/* Right Card: Competition metrics (Floating right) */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="absolute bottom-6 right-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl rounded-2xl p-4 text-left z-20 hidden sm:block"
                >
                  <span className="block text-[9px] text-slate-400 dark:text-slate-500 uppercase font-extrabold tracking-wider">Competition</span>
                  <span className="font-heading font-extrabold text-emerald-600 text-base">{activeTabDetails.competition}</span>
                </motion.div>

                {/* Query Switcher Card */}
                <div className="w-full max-w-[360px] mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-100 dark:border-slate-800 shadow-2xl rounded-2xl p-5 flex flex-col gap-3.5 relative z-20 mt-2 sm:mt-4">
                  {/* City-level crossed query */}
                  <motion.div 
                    initial={{ y: 5, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="flex items-center justify-between text-slate-400 dark:text-slate-500 text-xs bg-slate-50/80 dark:bg-slate-950/85 px-3.5 py-2.5 rounded-xl border border-slate-100 dark:border-slate-800"
                  >
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 shrink-0 text-slate-350" />
                      <span className="line-through font-medium">{activeTabDetails.crossedQuery}</span>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-red-50 dark:bg-red-950/50 text-red-500 flex items-center justify-center shrink-0">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </motion.div>

                  {/* Hyperlocal optimized query */}
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center justify-between text-emerald-600 dark:text-emerald-400 text-xs bg-emerald-50/50 dark:bg-emerald-950/20 px-3.5 py-3 rounded-xl border border-emerald-100 dark:border-emerald-900/40"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="font-extrabold text-[13px]">{activeTabDetails.optimizedQuery}</span>
                    </div>
                    <div className="text-[9px] bg-emerald-500 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                      Ranked #1
                    </div>
                  </motion.div>
                </div>

                {/* Mobile metrics layout (when cards hidden) */}
                <div className="flex justify-between items-center w-full mt-4 sm:hidden bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="text-left">
                    <span className="block text-[8px] text-slate-400 dark:text-slate-500 uppercase font-bold">Conversion</span>
                    <span className="font-bold text-red-500 text-xs">{activeTabDetails.conversion}</span>
                  </div>
                  <div className="px-3.5 py-1 rounded-full bg-blue-600 text-white font-extrabold text-[9px] uppercase tracking-wider">
                    High Intent
                  </div>
                  <div className="text-left">
                    <span className="block text-[8px] text-slate-400 dark:text-slate-500 uppercase font-bold">Competition</span>
                    <span className="font-bold text-emerald-600 text-xs">{activeTabDetails.competition}</span>
                  </div>
                </div>

                {/* Bottom Center Indicator Badge */}
                <div className="hidden sm:flex justify-center w-full mt-auto mb-1">
                  <span className="px-4 py-1.5 rounded-full bg-blue-600/90 backdrop-blur-sm text-white font-extrabold text-[10px] shadow-md tracking-wider uppercase">
                    High Intent Query Optimized
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
