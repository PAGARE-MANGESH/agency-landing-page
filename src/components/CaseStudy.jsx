import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Target, Zap, TrendingUp, Lightbulb, 
  ChevronDown, ChevronUp, Search, Eye, MousePointerClick
} from 'lucide-react';
import caseStudyBanner from '../../assets/case-study-banner12.webp';
import { FadeUp, FadeLeft, FadeRight, VIEWPORT } from '../utils/animations.jsx';

export default function CaseStudy() {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default first one open

  const accordionItems = [
    {
      id: 0,
      title: 'Client Overview',
      icon: <FileText className="w-4 h-4" />,
      content: 'Metropolis is a leading diagnostic and pathology service provider offering comprehensive healthcare solutions. Operating hundreds of branch centers, they faced major regional challenges competing against local clinics.'
    },
    {
      id: 1,
      title: 'Challenges',
      icon: <Target className="w-4 h-4" />,
      content: (
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Competing with regional clinics and local hospitals in highly saturated multi-city diagnostic spaces.</li>
          <li>Many physical locations failed to appear on Google maps for adjacent high-intent search queries.</li>
          <li>Inconsistent metadata and schema across locations hurt overall search engine evaluation.</li>
          <li>A lack of regular local reviews decreased organic click-through rates (CTR).</li>
        </ul>
      )
    },
    {
      id: 2,
      title: 'Strategy Implemented',
      icon: <Zap className="w-4 h-4" />,
      content: (
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Deploys customized neighborhood coordinates and local schema per center.</li>
          <li>Re-organized categories, metadata details, and photos on Google profiles.</li>
          <li>Set up automated local feedback pipelines for satisfied clients.</li>
          <li>Acquired backlinks from regional papers and community organizations.</li>
          <li>Authored specific landing page copy targeting local landmarks.</li>
        </ul>
      )
    },
    {
      id: 3,
      title: 'Results Achieved',
      icon: <TrendingUp className="w-4 h-4" />,
      content: (
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Overall lead conversion rates increased significantly across all branches.</li>
          <li>Locations appeared consistently in the top 3 maps results.</li>
          <li>Direct clicks to call branches scaled within the first 90 days.</li>
          <li>Substantial organic traffic improvements for localized service terms.</li>
          <li>Client review acquisition rates increased by 3.2x.</li>
        </ul>
      )
    },
    {
      id: 4,
      title: 'Key Insight',
      icon: <Lightbulb className="w-4 h-4" />,
      content: (
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Targeting specific landmarks outperforms generic city keywords by 2.4x.</li>
          <li>Aligning maps metadata with location page info accelerates trust scores.</li>
        </ul>
      )
    }
  ];

  return (
    <section id="case" className="py-20 bg-white">
      {/* 1. Case Study Banner Image */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        <FadeUp>
          <motion.div 
            whileHover={{ scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="rounded-3xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <img 
              src={caseStudyBanner} 
              alt="Metropolis Case Study Banner" 
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </FadeUp>
      </div>

      {/* 2. Interactive Details Layout */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Accordions */}
          <FadeLeft className="lg:col-span-5 space-y-3">
            {accordionItems.map((item) => {
              const isOpen = expandedIndex === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen ? 'border-red-200 bg-red-50/10 shadow-sm' : 'border-slate-100 bg-white hover:border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => setExpandedIndex(isOpen ? -1 : item.id)}
                    className="w-full flex items-center justify-between p-4 text-left transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#B62E28] text-white flex items-center justify-center shadow-sm">
                        {item.icon}
                      </div>
                      <span className="font-bold text-slate-800 text-sm sm:text-base">
                        {item.title}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </FadeLeft>

          {/* Center Column: Highlights Block */}
          <FadeUp delay={0.1} className="lg:col-span-5 bg-[#F4FBF7] rounded-3xl p-6 sm:p-8 border border-[#E6F7F0] space-y-6 flex flex-col justify-between self-stretch">
            <div className="space-y-6">
              {/* Point 1 */}
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00D285] mt-2 shrink-0 animate-pulse"></div>
                <p className="text-slate-700 font-semibold text-sm sm:text-base leading-snug">
                  400%+ increase in local SEO visibility
                </p>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] mt-2 shrink-0"></div>
                <p className="text-slate-700 font-semibold text-sm sm:text-base leading-snug">
                  Higher clicks from location and service-based searches
                </p>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#A855F7] mt-2 shrink-0"></div>
                <p className="text-slate-700 font-semibold text-sm sm:text-base leading-snug">
                  Stronger rankings across major city-level demand clusters
                </p>
              </div>
            </div>

            {/* Top Hyperlocal Searches Box */}
            <div className="bg-white rounded-2xl p-5 border border-[#DEF7EC] mt-8 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-[#065F46]">
                <Search className="w-4 h-4 font-bold" />
                <span className="font-bold text-sm uppercase tracking-wider">Top Hyperlocal Searches</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D285]"></div>
                  blood test near me
                </li>
                <li className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D285]"></div>
                  pathology lab near me
                </li>
                <li className="flex items-center gap-2 text-slate-600 text-xs sm:text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00D285]"></div>
                  diagnostic center in Delhi NCR
                </li>
              </ul>
            </div>
          </FadeUp>

          {/* Right Column: Metrics Cards */}
          <FadeRight delay={0.2} className="lg:col-span-2 flex flex-row lg:flex-col gap-4 w-full">
            {/* Visibility Card */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex-1 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[140px] hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center">
                  <Eye className="w-4.5 h-4.5" />
                </div>
              </div>
              <div>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Visibility</span>
                <div className="text-[#10B981] font-extrabold text-2xl sm:text-3xl flex items-center gap-0.5 mt-2">
                  <span className="text-sm">▲</span> 4.0x
                </div>
              </div>
              <p className="text-slate-500 text-[11px] leading-snug mt-2">
                for high-intent local terms
              </p>
            </motion.div>

            {/* Local Clicks Card */}
            <motion.div 
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="flex-1 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[140px] hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                  <MousePointerClick className="w-4.5 h-4.5" />
                </div>
              </div>
              <div>
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">Local Clicks</span>
                <div className="text-[#10B981] font-extrabold text-2xl sm:text-3xl flex items-center gap-0.5 mt-2">
                  <span className="text-sm">▲</span> 3.8x
                </div>
              </div>
              <p className="text-slate-500 text-[11px] leading-snug mt-2">
                across priority city pages
              </p>
            </motion.div>
          </FadeRight>

        </div>
      </div>
    </section>
  );
}

