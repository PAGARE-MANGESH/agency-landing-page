import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StatHook from './components/StatHook.jsx';
import Educational from './components/Educational.jsx';
import Methodology from './components/Methodology.jsx';
import Framework from './components/Framework.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import WhyUs from './components/WhyUs.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Testimonials from './components/Testimonials.jsx';
import FAQ from './components/FAQ.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-white text-brand-navy selection:bg-indigo-100 selection:text-indigo-900">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B62E28] to-[#FFC000] origin-left z-[100]" 
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <StatHook />
      <Educational />
      <Methodology />
      <Framework />
      <CaseStudy />
      <WhyUs />
      <CtaBanner />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

