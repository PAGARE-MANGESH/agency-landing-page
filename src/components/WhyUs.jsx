import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, BarChart3, RotateCw, MessageSquare, DollarSign, Users, CheckCircle2 
} from 'lucide-react';
import { FadeUp } from '../utils/animations.jsx';

export default function WhyUs() {
  const features = [
    {
      title: '100% Focus on Local SEO',
      desc: 'We specialize exclusively in local search optimization',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'bg-gradient-to-br from-[#0055DF] to-indigo-600 text-white'
    },
    {
      title: 'Actionable Analytics',
      desc: 'Get crystal-clear data detailing growth, traffic, and leads',
      icon: <BarChart3 className="w-5 h-5" />,
      color: 'bg-gradient-to-br from-[#0055DF] to-indigo-600 text-white'
    },
    {
      title: 'Continuous Optimization',
      desc: 'We tweak and test your strategy for long-term dominance',
      icon: <RotateCw className="w-5 h-5" />,
      color: 'bg-gradient-to-br from-[#0055DF] to-indigo-600 text-white'
    },
    {
      title: 'Instant Support',
      desc: 'Reach out anytime via call, email, or direct WhatsApp support',
      icon: <MessageSquare className="w-5 h-5" />,
      color: 'bg-gradient-to-br from-[#0055DF] to-indigo-600 text-white'
    },
    {
      title: 'Competitive ROI',
      desc: 'High-quality local marketing scaled directly to your budget',
      icon: <DollarSign className="w-5 h-5" />,
      color: 'bg-gradient-to-br from-[#0055DF] to-indigo-600 text-white'
    },
    {
      title: 'Navi Mumbai Presence',
      desc: 'We know the local market, neighborhoods, and user intent',
      icon: <Users className="w-5 h-5" />,
      color: 'bg-gradient-to-br from-[#0055DF] to-indigo-600 text-white'
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
  };

  return (
    <section id="why-us" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0A1931] dark:text-white leading-tight tracking-tight uppercase">
              Why Choose <span className="font-extrabold text-[#0055DF] dark:text-blue-400">Get Found</span>
            </h2>
            <p className="mt-4 text-[#64748B] dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              We're not just another SEO agency. We're your local visibility partners committed to your success.
            </p>
          </FadeUp>
        </div>

        {/* 6 Grid Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 p-6 sm:p-8 rounded-2xl bg-[#F4F7FC] dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/40 shadow-sm"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${feature.color}`}>
                {feature.icon}
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-bold text-base text-[#0A1931] dark:text-white leading-snug mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-[13.5px] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
