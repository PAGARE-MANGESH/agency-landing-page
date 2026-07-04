import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer to track active section
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = ['home', 'framework', 'case', 'why-us', 'testimonials', 'faq', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const links = [
    { label: 'Home',          href: '#home' },
    { label: 'SEO Framework', href: '#framework' },
    { label: 'Case Study',    href: '#case' },
    { label: 'Why Us',        href: '#why-us' },
    { label: 'Testimonials',  href: '#testimonials' },
    { label: 'FAQ',           href: '#faq' },
    { label: 'Contact Us',    href: '#contact' },
  ];

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className={`flex items-center justify-between gap-4 rounded-full border border-slate-200/40 glass-panel transition-all duration-500 ease-out ${
        isScrolled 
          ? 'px-6 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] bg-white/80' 
          : 'px-8 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] bg-white/90'
      }`}>

        {/* Brand identity */}
        <a href="#home" className="flex items-center gap-2.5 font-sans font-bold text-2xl tracking-tight text-slate-900 group">
          <div className="flex flex-col items-center justify-center -space-y-0.5">
            {/* The Pin */}
            <svg className="w-5.5 h-5.5 drop-shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="brand-pin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B62E28" />
                  <stop offset="100%" stopColor="#FFC000" />
                </linearGradient>
              </defs>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="url(#brand-pin-gradient)" />
            </svg>
            {/* Stacked small text */}
            <div className="flex flex-col items-center text-[7px] font-black tracking-wider leading-[0.8] uppercase font-sans bg-gradient-to-r from-[#B62E28] to-[#FFC000] bg-clip-text text-transparent">
              <span>GET</span>
              <span className="mt-[1px]">FOUND</span>
            </div>
          </div>
          <span className="font-extrabold tracking-tight text-xl bg-gradient-to-r from-[#B62E28] to-[#FFC000] bg-clip-text text-transparent transition-opacity duration-300 group-hover:opacity-85">Get Found</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 font-medium text-slate-600 text-[13.5px]">
          {links.map(link => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ y: -1 }}
                className={`transition-colors duration-200 whitespace-nowrap relative ${
                  isActive ? 'text-[#B62E28] font-bold' : 'hover:text-[#B62E28]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#B62E28] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Schedule Call Button */}
        <div className="hidden md:block">
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center pl-1.5 pr-6 py-1.5 bg-[#B62E28] text-white font-bold rounded-full hover:bg-[#990000] shadow-md transition-all group animate-vibrate-periodic"
          >
            <div className="w-9 h-9 rounded-full bg-[#FDECEC] text-[#B62E28] flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform">
              <Phone className="w-4 h-4 fill-current" />
            </div>
            <span className="text-[14.5px] tracking-wide">Schedule A Call</span>
          </motion.a>
        </div>

        {/* Mobile drawer trigger */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-900 focus:outline-none hover:text-[#B62E28]">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden mt-2 p-6 rounded-3xl bg-white shadow-xl border border-slate-200 flex flex-col gap-1 font-semibold text-slate-900 origin-top"
          >
            {links.map((link, i) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2.5 px-2 rounded-xl hover:bg-slate-50 transition-all ${
                    isActive ? 'text-[#B62E28] bg-red-50/30' : 'hover:text-[#B62E28]'
                  } ${i < links.length - 1 ? 'border-b border-slate-100' : ''}`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3">
              <a onClick={() => setIsOpen(false)} href="#contact" className="block w-full">
                <div className="w-full text-center py-3 bg-[#B62E28] text-white font-bold rounded-full hover:bg-[#990000] flex items-center justify-center gap-2 animate-vibrate-periodic">
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Schedule A Call</span>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}


