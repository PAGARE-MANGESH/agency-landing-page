import React, { useState } from 'react';
import { theme } from '../theme.js';

export default function HyperLocalMatrix() {
  const [activeCategory, setActiveCategory] = useState('Healthcare');

  const categories = {
    Healthcare: {
      city: 'Delhi',
      landmark: 'Green Park Metro',
      description: 'Optimizing local medical clinics and diagnostic centers to rank high for medical specialists and urgent care searches around major transport hubs.',
      metric: '184% lift in call volumes'
    },
    Food: {
      city: 'Mumbai',
      landmark: 'BKC Hub',
      description: 'Helping restaurants and corporate catering spaces rank for lunch-hour delivery and corporate dining keywords inside Mumbai\'s primary business district.',
      metric: '320% rise in reservations'
    },
    'Real Estate': {
      city: 'Pune',
      landmark: 'Magarpatta Phase 2',
      description: 'Targeting home buyers looking for new residential complexes and commercial spaces near tech parks.',
      metric: '87% lift in physical site visits'
    },
    'Home Services': {
      city: 'Bangalore',
      landmark: 'HSR Layout',
      description: 'Ranking plumbing, electrical, and cleaning networks in dense residential neighborhoods for immediate local needs.',
      metric: '2.4x increase in direct inquiries'
    },
    Wellness: {
      city: 'Hyderabad',
      landmark: 'Jubilee Hills',
      description: 'Positioning luxury spas, fitness studios, and wellness retreats for high-net-worth local clientele.',
      metric: '145% rise in class bookings'
    }
  };

  return (
    <section id="hyperlocal" className="py-20 bg-brand-lightRow border-y border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={theme.classes.sectionSubheading}>HYPER-LOCAL TRANSFORMATION MATRIX</span>
          <h2 className={theme.classes.sectionHeading}>
            From City-Level to Hyper-Local
          </h2>
          <p className="text-lg text-brand-secondarySlate">
            Broad keywords generate noise. We optimize for micro-locations near landmarks to capture high-intent customers who are ready to buy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Tabs */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center">
            {Object.keys(categories).map((catName) => (
              <button
                key={catName}
                onClick={() => setActiveCategory(catName)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  activeCategory === catName 
                    ? 'bg-white border-brand-accentRed shadow-lg translate-x-2' 
                    : 'bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${activeCategory === catName ? 'text-brand-accentRed' : 'text-slate-400'}`}>
                      {catName}
                    </span>
                    <span className="font-heading font-bold text-lg text-brand-navy">
                      {categories[catName].city} → {categories[catName].landmark}
                    </span>
                  </div>
                  <span className={`text-xl transition-transform ${activeCategory === catName ? 'text-brand-accentRed translate-x-1' : 'text-slate-300'}`}>
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Matrix Card */}
          <div className="lg:col-span-7">
            <div className="h-full p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl pointer-events-none -z-10"></div>
              
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-navy text-white text-xs font-bold uppercase tracking-widest mb-6">
                  Targeting Structure: {activeCategory}
                </div>

                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-brand-navy mb-4">
                  Routing Strategy for {categories[activeCategory].city}
                </h3>

                <p className="text-brand-secondarySlate text-base leading-relaxed mb-8">
                  {categories[activeCategory].description} By tailoring schema markup and reviews matching <strong>{categories[activeCategory].landmark}</strong>, we capture local near-me traffic instantly.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-red-50/50 border border-brand-accentRed/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-accentRed block mb-1">Average Outcome</span>
                  <span className="font-heading font-extrabold text-2xl text-brand-navy">{categories[activeCategory].metric}</span>
                </div>
                <a href="#audit" className={theme.classes.primaryButton}>
                  Build Matrix For My Business
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
