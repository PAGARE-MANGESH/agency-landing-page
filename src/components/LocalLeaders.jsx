import React from 'react';
import { motion } from 'framer-motion';
import { FadeUp } from '../utils/animations.jsx';

import logo1 from '../../assets/Local Leaders/0af101a8db3009b1e19e4cd4dba74726.png';
import logo2 from '../../assets/Local Leaders/391ec28f965ae70eaf61cec578f4ad6e.png';
import logo3 from '../../assets/Local Leaders/3db58dcbb6aa93254ba4efdfb1b206fd.png';
import logo4 from '../../assets/Local Leaders/4a98cb3bffac79521114b4712cc4525a.png';
import logo5 from '../../assets/Local Leaders/4bb683c33fd1daa9c13ecbbbcc574e30.png';
import logo6 from '../../assets/Local Leaders/57cd98f54fb407038c71a3ed5c65e18e.png';
import logo7 from '../../assets/Local Leaders/94141728f3a9202f27bdfb8a92ae5516.png';
import logo8 from '../../assets/Local Leaders/ffb97d6122623c512205d9745a9e6426.png';

export default function LocalLeaders() {
  const localBusinesses = [
    { logo: logo1, name: 'Glamour Packaging' },
    { logo: logo2, name: 'Hotel 7/12' },
    { logo: logo3, name: 'Kokna Swad' },
    { logo: logo4, name: 'Lord Forklore' },
    { logo: logo5, name: 'OM Physiotherapy' },
    { logo: logo6, name: 'Garam Masala' },
    { logo: logo7, name: 'Zero Degree Airoli' },
    { logo: logo8, name: 'Zero Degree' }
  ];

  // Duplicate the list to allow infinite marquee scrolling loop
  const marqueeItems = [...localBusinesses, ...localBusinesses];

  const stats = [
    { value: '30+', label: 'Happy Clients' },
    { value: '98%', label: 'Success Rate' },
    { value: '5★', label: 'Average Rating' }
  ];

  return (
    <section className="py-20 bg-slate-50/30 dark:bg-slate-950/20 transition-colors duration-300 relative overflow-hidden">
      {/* Styles for endless marquee scrolling banner */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          animation: marquee 25s linear infinite;
        }
        .marquee-track:hover .animate-marquee-infinite {
          animation-play-state: paused;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <FadeUp>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0A1931] dark:text-white leading-tight tracking-tight uppercase">
              Trusted By <span className="font-extrabold text-[#0055DF] dark:text-blue-400">Local Leaders</span>
            </h2>
            <p className="mt-4 text-[#64748B] dark:text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
              Join the growing family of successful businesses that trust Get Found for their local SEO success.
            </p>
          </FadeUp>
        </div>

        {/* Scrolling Marquee Container */}
        <FadeUp delay={0.15}>
          <div className="relative w-full overflow-hidden py-6 mb-20 mask-gradient-x">
            {/* Faded edges gradients for smooth marquee entry/exit visual */}
            <div className="absolute top-0 bottom-0 left-0 w-16 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-16 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

            <div className="marquee-track flex w-max">
              <div className="flex gap-8 animate-marquee-infinite py-4 px-4">
                {marqueeItems.map((biz, idx) => (
                  <div
                    key={idx}
                    className="relative group flex flex-col items-center cursor-pointer shrink-0"
                  >
                    {/* Logo Card Circle */}
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white border border-slate-200 dark:border-slate-850 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex items-center justify-center p-3.5 transition-all duration-350 ease-out group-hover:shadow-[0_15px_35px_rgba(0,85,223,0.15)] group-hover:border-blue-300 dark:group-hover:border-blue-800">
                      <img 
                        src={biz.logo} 
                        alt={biz.name} 
                        className="w-full h-full object-contain select-none transition-transform duration-350 group-hover:scale-105" 
                      />
                    </div>

                    {/* Tooltip showing business name on hover */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 group-hover:-top-11 transition-all duration-300 ease-out bg-[#0A1931] dark:bg-white text-white dark:text-[#0A1931] text-[11px] font-extrabold py-1.5 px-3 rounded-lg shadow-md pointer-events-none whitespace-nowrap z-30 tracking-wide">
                      {biz.name}
                      {/* Tooltip arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#0A1931] dark:border-t-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Stats Cards Section */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } }
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
              }}
              whileHover={{ y: -4 }}
              className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-6 shadow-[0_10px_30px_rgba(0,0,0,0.015)] flex flex-col items-center justify-center text-center"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0055DF] dark:text-blue-400 mb-2 leading-none">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-550 dark:text-slate-450 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
