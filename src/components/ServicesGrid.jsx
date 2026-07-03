import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './shared/SectionLabel.jsx';
import Card from './shared/Card.jsx';
import { Globe, Shield, Activity, Share2, Compass, Layers } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Local Search Positioning',
      description: 'Optimize Google Map Pack profiles and localized listing parameters for regional target offices.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Regional Backlink Architecture',
      description: 'Build contextually rich, authoritative local references that elevate city-level domain rankings.'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Conversion Funnel Layouts',
      description: 'Design and deploy landing page visual hierarchies structured specifically for enterprise buyers.'
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: 'Schema & Metadata Integrations',
      description: 'Format backend structural markup so search crawlers instantly index physical branches.'
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: 'Reputation Management Stencils',
      description: 'Scale authentic B2B client reviews and feedback to maximize organic trust markers.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Competitor Gap Diagnostics',
      description: 'Analyze local organic competitor strategies and highlight opportunities to outrank them.'
    }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionLabel text="OUR CAPABILITIES" />
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-navy leading-tight tracking-tight mb-4">
            Grow Your Traffic and Lead <span className="underline decoration-indigo-600 underline-offset-8">Conversions</span>
          </h2>
          <p className="text-lg text-brand-secondarySlate">
            Explore our local positioning services structured around performance, transparency, and data-driven insights.
          </p>
        </div>

        {/* 3-column Grid (collapsing to 1-column on mobile) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card 
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
