import React from 'react';
import { Search, Star } from 'lucide-react';
import { FadeLeft, FadeRight, FadeUp } from '../utils/animations.jsx';
import founderImg from '../../assets/Founder.png';

export default function Founder() {
  return (
    <section id="founder" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative glow elements */}
      <div className="absolute -left-48 top-1/4 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -right-48 bottom-1/4 w-96 h-96 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <FadeUp>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0A1931] dark:text-white leading-tight tracking-tight uppercase">
              About the <span className="font-extrabold text-[#0055DF] dark:text-blue-400">Founder</span>
            </h2>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Avatar with Badge Rings */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <FadeLeft className="flex flex-col items-center w-full">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] flex items-center justify-center">
                {/* Outer dashed ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#0055DF]/20 dark:border-blue-500/20 animate-[spin_180s_linear_infinite]" />
                
                {/* Middle dotted ring */}
                <div className="absolute inset-4 rounded-full border border-dashed border-purple-300/30 dark:border-purple-500/20" />
                
                {/* Inner solid ring wrapper */}
                <div className="absolute inset-8 rounded-full border border-slate-100 dark:border-slate-800 bg-gradient-to-tr from-blue-50/50 to-purple-50/30 dark:from-slate-900/50 dark:to-slate-800/30" />
                
                {/* Image Container */}
                <div className="absolute inset-12 rounded-full overflow-hidden border-[6px] border-white dark:border-slate-950 shadow-[0_20px_50px_rgba(0,85,223,0.15)] bg-slate-50 dark:bg-slate-900 flex items-center justify-center">
                  <img 
                    src={founderImg} 
                    alt="Priyanka Jadhav" 
                    className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                {/* Top Badge (Search Icon) */}
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/90 border border-blue-200 dark:border-blue-75 flex items-center justify-center shadow-md">
                  <Search className="w-4.5 h-4.5 text-[#0055DF] dark:text-blue-400" />
                </div>

                {/* Bottom Badge (Star Icon) */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-purple-50 dark:bg-purple-900/90 border border-purple-200 dark:border-purple-75 flex items-center justify-center shadow-md">
                  <Star className="w-4.5 h-4.5 text-purple-650 dark:text-purple-400" />
                </div>
              </div>

              {/* Founder Name & Title */}
              <div className="mt-8 text-center">
                <h3 className="font-heading font-extrabold text-2xl text-[#0A1931] dark:text-white tracking-tight">Priyanka Jadhav</h3>
                <p className="text-sm font-bold text-[#0055DF] dark:text-blue-400 tracking-wide mt-1.5 uppercase">Founder, Get Found</p>
              </div>
            </FadeLeft>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <FadeRight delay={0.1}>
              <p className="text-[#64748B] dark:text-slate-400 text-sm sm:text-base md:text-[16.5px] leading-relaxed mb-1">
                With a sharp eye for digital trends and a passion for helping local businesses grow, Priyanka Jadhav founded Get Found to solve one problem: most small businesses don’t get discovered on Google—and they deserve better.
              </p>
            </FadeRight>
            
            <FadeRight delay={0.2}>
              <p className="text-[#64748B] dark:text-slate-400 text-sm sm:text-base md:text-[16.5px] leading-relaxed">
                With years of experience in local SEO, Google My Business optimization, and digital branding, Priyanka has helped restaurants, salons, clinics, real estate firms, and retail stores rank higher, attract more customers, and increase foot traffic—all without spending a fortune on ads.
              </p>
            </FadeRight>

            {/* Mission Box */}
            <FadeRight delay={0.3}>
              <div className="border-l-[4px] border-[#0055DF] dark:border-blue-500 bg-[#0055DF]/[0.02] dark:bg-slate-900/30 p-5 sm:p-6 rounded-r-2xl shadow-sm border border-slate-100/50 dark:border-slate-800/30">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm sm:text-base mb-1.5">
                  Her mission is simple yet powerful:
                </h4>
                <p className="font-bold italic text-slate-900 dark:text-white text-sm sm:text-base md:text-[16.5px] leading-relaxed">
                  Make every small business visible, credible, and trusted in their locality.
                </p>
              </div>
            </FadeRight>

            {/* Quote Box */}
            <FadeRight delay={0.4}>
              <div className="relative bg-gradient-to-r from-blue-50/30 to-purple-50/40 dark:from-slate-900/30 dark:to-slate-800/40 border border-slate-100/80 dark:border-slate-800/40 p-6 rounded-2xl shadow-sm">
                <span className="text-5xl font-serif text-[#0055DF]/80 dark:text-blue-400/80 block -mt-3 -mb-1 leading-none font-extrabold select-none">“</span>
                <p className="font-bold italic text-slate-800 dark:text-slate-200 text-sm sm:text-base md:text-[16.5px] leading-relaxed">
                  If people can’t find you online, they’ll find your competitor. Let’s change that.
                </p>
              </div>
            </FadeRight>
          </div>
        </div>
      </div>
    </section>
  );
}
