import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { FadeLeft, FadeRight, VIEWPORT, staggerContainer, staggerItem } from '../utils/animations.jsx';

export default function Testimonials() {
  const scrollRef = useRef(null);

  const reviews = [
    {
      name: 'Rushi Sanas',
      stars: 5,
      tag: 'Garam Masala Restaurant',
      tagColor: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50',
      quote: "From empty tables to packed weekends – thanks to Get Found. Our restaurant now appears first when people search for authentic Indian food in our area. The team's local SEO expertise transformed our business completely."
    },
    {
      name: 'Founder, Kokna Swad',
      stars: 5,
      tag: 'Local Restaurant',
      tagColor: 'bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 border border-teal-100 dark:border-teal-900/50',
      quote: 'Priyanka and her team did an amazing job optimizing our business on Google Maps. We are now getting consistent customer calls and weekend bookings without spending money on ads.'
    },
    {
      name: 'Director, Glamour Packaging',
      stars: 5,
      tag: 'B2B Client',
      tagColor: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50',
      quote: 'Our business queries from local search directories have tripled. Proactive updates and direct WhatsApp support make the Get Found team an exceptional local visibility partner.'
    }
  ];



  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-950 grid-overlay border-y border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Text Side */}
          <FadeLeft className="lg:col-span-7 text-left">
            {/* Client Obsession Badge */}
            <div className="flex flex-col items-start">
              <span className="text-[10px] sm:text-xs font-bold text-[#0055DF] dark:text-blue-400 tracking-wider uppercase flex items-center gap-1">
                <Sparkles className="w-3 h-3 fill-current" />
                <span>What Our Clients Say</span>
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-slate-900 dark:text-white tracking-tight leading-[1.1] uppercase mt-2">
                Real Stories of <span className="text-[#0055DF] dark:text-blue-400">Local Growth.</span>
              </h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed mt-4">
              Real stories from real businesses that transformed their local presence in Navi Mumbai with Get Found.
            </p>
          </FadeLeft>

          {/* Right Rating Side */}
          <FadeRight delay={0.15} className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between self-stretch gap-4">
            
            {/* Real Stats Counters */}
            <div className="grid grid-cols-3 gap-6 bg-slate-50 dark:bg-slate-900/50 p-4 border border-slate-100 dark:border-slate-800 rounded-2xl w-full">
              <div className="text-center lg:text-left">
                <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-[#0055DF] dark:text-blue-400">30+</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Happy Clients</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-slate-800 dark:text-white">98%</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Success Rate</span>
              </div>
              <div className="text-center lg:text-left">
                <span className="block font-heading font-extrabold text-2xl sm:text-3xl text-emerald-500">5 ★</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">Avg Rating</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between w-full gap-4">
              <span className="text-xs font-bold text-slate-400">Trusted by Local Leaders</span>
              {/* Slider Controls */}
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll('left')}
                  className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-250"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-800 dark:text-slate-250"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </FadeRight>
        </div>

        {/* Scrollable Testimonials Carousel Container */}
        <motion.div 
          ref={scrollRef}
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory mb-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.06)' }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="min-w-[285px] sm:min-w-[340px] md:min-w-[360px] max-w-[360px] flex-shrink-0 bg-white dark:bg-slate-900 border border-slate-250/50 dark:border-slate-800 rounded-[28px] p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.015)] flex flex-col justify-between snap-start text-left"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex text-yellow-400 fill-current">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${rev.tagColor}`}>
                    {rev.tag.split(' ')[0]}...
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-350 text-xs sm:text-[13.5px] leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>
              <div className="border-t border-slate-50 dark:border-slate-800 pt-4">
                <span className="font-bold text-slate-800 dark:text-white block text-sm">{rev.name}</span>
                <span className="text-[10px] text-slate-400 block">{rev.tag}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

