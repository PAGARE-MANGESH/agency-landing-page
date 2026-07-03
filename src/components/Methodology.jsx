import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Utensils, Home, Wrench, Search, Check, X } from 'lucide-react';
import healthImg from '../../assets/health.webp';

export default function Methodology() {
  const [activeTab, setActiveTab] = useState('Healthcare');

  const tabs = {
    Healthcare: {
      icon: <Stethoscope className="w-5 h-5" />,
      city: 'Delhi',
      landmark: 'Green Park Metro',
      image: healthImg,
      crossedQuery: 'Diagnostic Lab in Delhi',
      optimizedQuery: 'Blood test near Green Park Metro',
      competition: 'Low (-58%)',
      conversion: 'High (+132%)'
    },
    Food: {
      icon: <Utensils className="w-5 h-5" />,
      city: 'Mumbai',
      landmark: 'BKC Hub',
      image: null, // We will use our custom HTML template as fallback
      crossedQuery: 'Restaurants in Mumbai',
      optimizedQuery: 'Corporate catering BKC Hub',
      competition: 'Low (-45%)',
      conversion: 'High (+180%)'
    },
    'Real Estate': {
      icon: <Home className="w-5 h-5" />,
      city: 'Pune',
      landmark: 'Magarpatta Phase 2',
      image: null,
      crossedQuery: 'Flats in Pune',
      optimizedQuery: '3BHK near Magarpatta Phase 2',
      competition: 'Low (-62%)',
      conversion: 'High (+95%)'
    },
    'Home Services': {
      icon: <Wrench className="w-5 h-5" />,
      city: 'Bangalore',
      landmark: 'HSR Layout',
      image: null,
      crossedQuery: 'Plumbers in Bangalore',
      optimizedQuery: 'Emergency plumber HSR Layout',
      competition: 'Low (-50%)',
      conversion: 'High (+210%)'
    }
  };

  return (
    <section id="methodology" className="py-24 bg-white relative overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Top Header layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-6 text-left">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-0.5 bg-[#B62E28]"></div>
              <span className="text-[#B62E28] text-xs sm:text-sm font-semibold uppercase tracking-widest">
                From city-level to hyper-local
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[46px] text-slate-400 tracking-tight leading-[1.1] uppercase">
              How we transform <br />
              your <span className="font-extrabold text-[#0C0E12]">Visibility</span>
            </h2>
          </div>
          
          <div className="lg:col-span-6 text-left text-slate-500 text-sm sm:text-base leading-relaxed">
            <p className="mb-4">
              Most businesses only target <strong className="text-slate-900 font-semibold">broad city-level keywords</strong>. At <strong className="text-slate-900 font-semibold">GBIM</strong>, we go deeper by optimizing for <strong className="text-slate-900 font-semibold">hyper-local searches</strong> that include <strong className="text-slate-900 font-semibold">neighborhoods, landmarks, and high-intent micro-locations</strong>.
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
              return (
                <button
                  key={tabName}
                  onClick={() => setActiveTab(tabName)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isSelected 
                      ? 'bg-white border-red-150 shadow-[0_15px_30px_-5px_rgba(182,46,40,0.08)] ring-1 ring-[#B62E28]/10' 
                      : 'bg-white/50 border-slate-100 hover:bg-white hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#B62E28] text-white' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {tabs[tabName].icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-extrabold text-lg text-[#0C0E12]">{tabName}</h3>
                      <span className="text-xs text-slate-400 font-medium">{tabs[tabName].city} → {tabs[tabName].landmark}</span>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 transition-transform ${
                    isSelected ? 'rotate-90 bg-red-50 text-[#B62E28] border-red-100' : ''
                  }`}>
                    →
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Graphic mockup representing local map positioning outcomes */}
          <div className="lg:col-span-7 flex justify-center">
            <AnimatePresence mode="wait">
              {tabs[activeTab].image ? (
                // If the tab has an image asset (Healthcare), render it directly
                <motion.div
                  key="image-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-[580px]"
                >
                  <img 
                    src={tabs[activeTab].image} 
                    alt={`${activeTab} local seo visibility framework`} 
                    className="w-full h-auto object-contain rounded-3xl"
                  />
                </motion.div>
              ) : (
                // Fallback custom HTML template for other tabs
                <motion.div
                  key="html-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-[580px] aspect-[4/3] rounded-3xl border border-slate-100 bg-[#F8FAFC]/40 p-6 sm:p-8 flex flex-col justify-between relative shadow-[0_20px_50px_rgba(0,0,0,0.02)] overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-15 pointer-events-none -z-10 bg-radial-grid">
                    <svg className="w-full h-full text-slate-300" viewBox="0 0 200 150">
                      <circle cx="100" cy="75" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,3" />
                      <path d="M10,75 L190,75 M100,10 L100,140" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>

                  <div className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
                    <div className="relative">
                      <div className="absolute -inset-1.5 rounded-full bg-[#B62E28]/20 animate-ping"></div>
                      <div className="w-9 h-9 rounded-full bg-[#B62E28] flex items-center justify-center text-white shadow-md">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        </svg>
                      </div>
                    </div>
                    <span className="mt-2 bg-[#B62E28] text-white font-extrabold text-xs px-3.5 py-1 rounded-full shadow-md">
                      {tabs[activeTab].landmark}
                    </span>
                  </div>

                  <div className="w-full max-w-[380px] mx-auto bg-white border border-slate-100 shadow-xl rounded-2xl p-5 flex flex-col gap-3 relative z-25">
                    <div className="flex items-center justify-between text-slate-400 text-xs bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-2">
                        <Search className="w-4 h-4 shrink-0 text-slate-350" />
                        <span className="line-through">{tabs[activeTab].crossedQuery}</span>
                      </div>
                      <X className="w-4 h-4 text-red-400 shrink-0" />
                    </div>

                    <div className="flex items-center justify-between text-[#00A355] text-xs bg-emerald-50/50 px-3.5 py-2.5 rounded-xl border border-emerald-100">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 stroke-[3] shrink-0" />
                        <span className="font-extrabold">{tabs[activeTab].optimizedQuery}</span>
                      </div>
                      <div className="text-[10px] bg-[#00D285] text-white px-2 py-0.5 rounded-full font-bold">
                        Targeted
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end w-full relative z-20">
                    <div className="bg-white border border-slate-100 shadow-lg rounded-xl p-3 px-4.5 text-left">
                      <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Conversion</span>
                      <span className="font-heading font-extrabold text-[#B62E28] text-sm">{tabs[activeTab].conversion}</span>
                    </div>

                    <div className="px-5 py-2 rounded-full bg-blue-600 text-white font-extrabold text-xs shadow-md tracking-wider">
                      High Intent Query
                    </div>

                    <div className="bg-white border border-slate-100 shadow-lg rounded-xl p-3 px-4.5 text-left">
                      <span className="block text-[10px] text-slate-400 uppercase font-bold tracking-wider">Competition</span>
                      <span className="font-heading font-extrabold text-emerald-600 text-sm">{tabs[activeTab].competition}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
