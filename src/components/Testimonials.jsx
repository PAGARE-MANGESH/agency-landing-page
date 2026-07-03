import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { FadeLeft, FadeRight, VIEWPORT, staggerContainer, staggerItem } from '../utils/animations.jsx';

export default function Testimonials() {
  const scrollRef = useRef(null);

  const reviews = [
    {
      name: 'Sudeshna Dighe',
      stars: 5,
      tag: '2x Revenue in 6 Months',
      tagColor: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
      quote: 'Last year, our online store was struggling to gain traction. After partnering with GBIM Technologies Pvt Ltd., everything changed. Within weeks, we climbed from page three to the first page for our main product categories. Their SEO, PPC, and social ads brought qualified traffic that converted. Our revenue doubled in six months.'
    },
    {
      name: 'Rekha Yadav',
      stars: 5,
      tag: '5+ Years Partnership',
      tagColor: 'bg-teal-50 text-teal-700 border border-teal-100',
      quote: 'Using GBIM services from past 5 years and they have helped my business grow considerably. Their team is supportive and takes care of any issue immediately. Highly recommend the SEO services.'
    },
    {
      name: 'Rohit',
      stars: 5,
      tag: 'Trend-Driven Team',
      tagColor: 'bg-blue-50 text-blue-700 border border-blue-100',
      quote: 'GBIM Technologies is a standout digital marketing agency driven by expertise and innovation. Their team stays consistently updated with evolving social media trends and platform upgrades, ensuring your brand stays ahead.'
    },
    {
      name: 'Media Dr. Ardesh',
      stars: 5,
      tag: 'Supportive Partner',
      tagColor: 'bg-purple-50 text-purple-700 border border-purple-100',
      quote: 'The GBIM team is dedicated, and incredibly supportive to work with. Have been using their SEO services and could not be happier.'
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
    <section id="testimonials" className="py-20 bg-white grid-overlay border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Text Side */}
          <FadeLeft className="lg:col-span-8 text-left">
            {/* Client Obsession Badge */}
            <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-100 px-3 py-1 rounded-full mb-4">
              <span className="text-[10px] sm:text-xs font-bold text-[#B62E28] tracking-wider uppercase flex items-center gap-1">
                ★ Client Obsession
              </span>
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-slate-900 leading-[1.1] tracking-tight mb-4 uppercase">
              Results that <span className="text-[#B62E28]">Speak volumes.</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-xl leading-relaxed">
              Real outcomes from operators who care about efficiency, transparency, and scale.
            </p>
          </FadeLeft>

          {/* Right Rating Side */}
          <FadeRight delay={0.15} className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between self-stretch gap-4">
            
            {/* Google Reviews Badge */}
            <div className="bg-white border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] rounded-2xl p-4 flex items-center gap-4 w-full sm:w-auto">
              <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center font-bold text-slate-800 text-lg shadow-sm">
                {/* Colorful Google G Logo */}
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Google Reviews</span>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-sm text-slate-800">4.9/5</span>
                  <div className="flex text-yellow-400 fill-current">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Avatars and Navigation Controls */}
            <div className="flex items-center justify-between w-full gap-4 border-t border-slate-50 pt-3 lg:border-0 lg:pt-0">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600">A</div>
                  <div className="w-8 h-8 rounded-full border border-white bg-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-600">R</div>
                  <div className="w-8 h-8 rounded-full border border-white bg-slate-400 flex items-center justify-center text-[10px] font-bold text-slate-600">S</div>
                </div>
                <span className="text-xs font-bold text-slate-400">Trusted by 500+ Founders</span>
              </div>

              {/* Slider Controls */}
              <div className="flex gap-2">
                <button 
                  onClick={() => scroll('left')}
                  className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors text-slate-800"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => scroll('right')}
                  className="p-2 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors text-slate-800"
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
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.06)' }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="min-w-[285px] sm:min-w-[340px] md:min-w-[360px] max-w-[360px] flex-shrink-0 bg-white border border-slate-250/50 rounded-[28px] p-6 sm:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.015)] flex flex-col justify-between snap-start"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex text-yellow-400 fill-current">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${rev.tagColor}`}>
                    {rev.tag}
                  </span>
                </div>
                <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>
              <div className="border-t border-slate-50 pt-4">
                <span className="font-bold text-slate-800 block text-sm">{rev.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

