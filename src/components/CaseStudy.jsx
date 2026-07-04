import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, Target, Zap, TrendingUp, Lightbulb, 
  ChevronDown, ChevronUp
} from 'lucide-react';
import { FadeUp, FadeLeft, FadeRight } from '../utils/animations.jsx';

export default function CaseStudy() {
  const [expandedIndex, setExpandedIndex] = useState(0); // Default first one open

  const accordionItems = [
    {
      id: 0,
      title: 'Client Overview',
      icon: <FileText className="w-4 h-4" />,
      content: 'Get Found helps local businesses across Navi Mumbai gain maximum visibility. Whether you run a healthcare clinic, restaurant, salon, retail shop, or real estate firm, we place you directly in front of high-intent regional searches.'
    },
    {
      id: 1,
      title: 'Challenges',
      icon: <Target className="w-4 h-4" />,
      content: (
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Failing to appear in Google Maps or the local 3-pack for adjacent near-me searches.</li>
          <li>Inconsistent NAP (Name, Address, Phone) citations across directories hurting authority.</li>
          <li>Incomplete profiles and missing localized schema configurations.</li>
          <li>Low client review counts and slow response rates driving visitors to competitors.</li>
        </ul>
      )
    },
    {
      id: 2,
      title: 'Strategy Implemented',
      icon: <Zap className="w-4 h-4" />,
      content: (
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Complete audit and optimization of GMB listing categories, descriptions, and hours.</li>
          <li>Structured data, neighborhood schema coordinates, and geo-targeted keywords setup.</li>
          <li>Local directory citation building and clean-up of duplicated NAP records.</li>
          <li>Strategic review management loop setup to gather high-rating customer reviews.</li>
        </ul>
      )
    },
    {
      id: 3,
      title: 'Results Achieved',
      icon: <TrendingUp className="w-4 h-4" />,
      content: (
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Consistent listing placements in the top 3 maps results within 30 to 90 days.</li>
          <li>A 194%+ average increase in overall monthly profile views.</li>
          <li>Significant customer calls and direction requests growth.</li>
          <li>High intent search term rankings conversion directly translating into walk-ins.</li>
        </ul>
      )
    },
    {
      id: 4,
      title: 'Key Insight',
      icon: <Lightbulb className="w-4 h-4" />,
      content: (
        <ul className="list-disc pl-4 space-y-1.5">
          <li>Optimizing coordinates and local landmark metadata outperforms generic city keywords by 2.4x.</li>
          <li>Active review acquisition builds long term Google Trust scores.</li>
        </ul>
      )
    }
  ];

  return (
    <section id="case" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <FadeUp>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0A1931] dark:text-white leading-tight tracking-tight uppercase">
              Case <span className="font-extrabold text-[#0055DF] dark:text-blue-400">Study</span>
            </h2>
            <p className="mt-4 text-[#64748B] dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              How we help local businesses dominate search results and acquire real customers.
            </p>
          </FadeUp>
        </div>

        {/* Case Study Details Layout */}
        <FadeUp delay={0.15}>
          <div className="space-y-4">
            {accordionItems.map((item) => {
              const isOpen = expandedIndex === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'border-blue-200 dark:border-blue-800/85 bg-blue-50/10 dark:bg-blue-950/20 shadow-sm' 
                      : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-200 dark:hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => setExpandedIndex(isOpen ? -1 : item.id)}
                    className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0055DF] to-indigo-600 text-white flex items-center justify-center shadow-sm">
                        {item.icon}
                      </div>
                      <span className="font-bold text-slate-800 dark:text-white text-base sm:text-lg">
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
                        <div className="px-6 pb-6 pt-2 text-slate-650 dark:text-slate-350 text-sm sm:text-[15px] leading-relaxed border-t border-slate-50 dark:border-slate-800/40">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
