import React from 'react';
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
  return (
    <div className="relative min-h-screen bg-white text-brand-navy selection:bg-indigo-100 selection:text-indigo-900">
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
