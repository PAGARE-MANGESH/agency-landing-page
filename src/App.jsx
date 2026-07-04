import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import StatHook from './components/StatHook.jsx';
import Founder from './components/Founder.jsx';
import Framework from './components/Framework.jsx';
import CaseStudy from './components/CaseStudy.jsx';
import RealResults from './components/RealResults.jsx';
import LocalLeaders from './components/LocalLeaders.jsx';
import WhyUs from './components/WhyUs.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Testimonials from './components/Testimonials.jsx';
import Blog from './components/Blog.jsx';
import FAQ from './components/FAQ.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import Chatbot from './components/Chatbot.jsx';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-white dark:bg-slate-950 text-brand-navy dark:text-slate-100 selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0055DF] to-[#FFC700] origin-left z-[100]" 
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <StatHook />
      <Founder />
      <Framework />
      <WhyUs />
      <CaseStudy />
      <RealResults />
      <Testimonials />
      <LocalLeaders />
      <CtaBanner />
      <Blog />
      <FAQ />
      <ContactForm />
      <Footer />
      <Chatbot />
    </div>
  );
}
