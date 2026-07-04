import React from 'react';
import { motion } from 'framer-motion';
import { Eye, MousePointer, Navigation, Phone, TrendingUp } from 'lucide-react';
import { FadeUp } from '../utils/animations.jsx';

export default function RealResults() {
  const rows = [
    {
      metric: 'Profile Views',
      icon: <Eye className="w-5 h-5" />,
      iconColor: 'bg-blue-100 dark:bg-blue-900/50 text-[#0055DF] dark:text-blue-400',
      before: '4,350',
      after: '12,780',
      afterColor: 'text-[#0055DF] dark:text-blue-400',
      growth: '+194%'
    },
    {
      metric: 'Website Clicks',
      icon: <MousePointer className="w-5 h-5" />,
      iconColor: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400',
      before: '320',
      after: '980',
      afterColor: 'text-purple-600 dark:text-purple-400',
      growth: '+206%'
    },
    {
      metric: 'Direction Requests',
      icon: <Navigation className="w-5 h-5 rotate-45" />,
      iconColor: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400',
      before: '180',
      after: '640',
      afterColor: 'text-emerald-600 dark:text-emerald-400',
      growth: '+256%'
    },
    {
      metric: 'Calls from GMB',
      icon: <Phone className="w-5 h-5" />,
      iconColor: 'bg-orange-100 dark:bg-orange-900/50 text-orange-650 dark:text-orange-400',
      before: '210',
      after: '880',
      afterColor: 'text-orange-650 dark:text-orange-400',
      growth: '+319%'
    }
  ];

  return (
    <section id="results" className="py-20 bg-slate-50/50 dark:bg-slate-950/20 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0A1931] dark:text-white leading-tight tracking-tight uppercase">
              Real <span className="font-extrabold text-[#0055DF] dark:text-blue-400">Results</span>
            </h2>
            <p className="mt-4 text-[#64748B] dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              See the dramatic improvements our clients experience within just 3 months
            </p>
          </FadeUp>
        </div>

        {/* Table Container Card */}
        <FadeUp delay={0.15}>
          <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden">
            
            {/* Header Banner */}
            <div className="w-full bg-gradient-to-r from-[#0055DF] to-[#8B5CF6] py-4 text-center">
              <span className="text-white font-extrabold text-sm sm:text-base tracking-wider uppercase">
                Before vs After 3 Months
              </span>
            </div>

            {/* Table wrapper for horizontal scroll on small devices */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                    <th className="py-5 px-6 sm:px-8 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Metric</th>
                    <th className="py-5 px-6 sm:px-8 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center">Before SEO</th>
                    <th className="py-5 px-6 sm:px-8 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center">After 3 Months</th>
                    <th className="py-5 px-6 sm:px-8 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center">Growth</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/40 dark:hover:bg-slate-800/20 transition-colors">
                      {/* Metric Name */}
                      <td className="py-5 px-6 sm:px-8 flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${row.iconColor}`}>
                          {row.icon}
                        </div>
                        <span className="font-bold text-[#0A1931] dark:text-slate-150 text-sm sm:text-base">
                          {row.metric}
                        </span>
                      </td>
                      
                      {/* Before SEO */}
                      <td className="py-5 px-6 sm:px-8 text-center font-semibold text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                        {row.before}
                      </td>

                      {/* After 3 Months */}
                      <td className={`py-5 px-6 sm:px-8 text-center font-extrabold text-sm sm:text-base ${row.afterColor}`}>
                        {row.after}
                      </td>

                      {/* Growth */}
                      <td className="py-5 px-6 sm:px-8 text-center">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs sm:text-sm">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{row.growth}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </FadeUp>

        {/* Bottom Pill Badge */}
        <div className="flex justify-center mt-10">
          <FadeUp delay={0.3}>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 text-emerald-600 dark:text-emerald-400 font-extrabold text-xs sm:text-sm shadow-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Real growth. Real local reach.</span>
            </div>
          </FadeUp>
        </div>

      </div>
    </section>
  );
}
