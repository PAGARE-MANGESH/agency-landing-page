import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      return systemPreference;
    }
    return 'light';
  });

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
    const sections = ['home', 'about', 'founder', 'framework', 'results', 'blog', 'faq', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const links = [
    { label: 'Home',      href: '#home' },
    { label: 'About',     href: '#about' },
    { label: 'Founder',   href: '#founder' },
    { label: 'Services',  href: '#framework' },
    { label: 'Results',   href: '#results' },
    { label: 'Blog',      href: '#blog' },
    { label: 'Contact',   href: '#contact' },
  ];

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className={`flex items-center justify-between gap-4 rounded-full border border-slate-200/40 glass-panel transition-all duration-500 ease-out ${
        isScrolled 
          ? 'px-6 py-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] bg-white/80 dark:bg-slate-950/80' 
          : 'px-8 py-4 shadow-[0_8px_30px_rgba(0,0,0,0.03)] bg-white/90 dark:bg-slate-950/90'
      }`}>

        {/* Brand identity */}
        <a href="#home" className="flex items-center gap-2.5 font-sans font-bold text-2xl tracking-tight text-slate-900 group">
          <div className="flex flex-col items-center justify-center -space-y-0.5">
            {/* The Pin */}
            <svg className="w-5.5 h-5.5 drop-shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#FFC700" />
            </svg>
            {/* Stacked small text */}
            <div className="flex flex-col items-center text-[7px] font-black tracking-wider leading-[0.8] uppercase font-sans text-[#0055DF]">
              <span>GET</span>
              <span className="mt-[1px]">FOUND</span>
            </div>
          </div>
          <span className="font-extrabold tracking-tight text-xl text-[#0A1931] dark:text-white transition-colors duration-300 group-hover:text-[#0055DF]">Get Found</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 font-medium text-[#64748B] dark:text-slate-400 text-[13.5px]">
          {links.map(link => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setActiveSection(sectionId)}
                whileHover={{ y: -1 }}
                className={`transition-colors duration-200 whitespace-nowrap relative ${
                  isActive ? 'text-[#0055DF] dark:text-blue-400 font-extrabold' : 'hover:text-[#0055DF] dark:hover:text-blue-400'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#0055DF] dark:bg-blue-400 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Schedule Call Button & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2.5 rounded-full border border-slate-200/40 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-[#0055DF] dark:hover:text-blue-400 hover:shadow-md transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-6 py-2 border-2 border-[#0055DF] dark:border-blue-400 text-[#0055DF] dark:text-blue-400 font-bold rounded-full hover:bg-[#0055DF]/5 dark:hover:bg-blue-400/10 transition-all text-sm tracking-wide"
          >
            Schedule A Call
          </motion.a>
        </div>

        {/* Mobile drawer trigger */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-[#0A1931] dark:text-slate-200 focus:outline-none hover:text-[#0055DF]">
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
            className="lg:hidden mt-2 p-6 rounded-3xl bg-white dark:bg-slate-900 shadow-xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1 font-semibold text-[#0A1931] dark:text-slate-200 origin-top"
          >
            {links.map((link, i) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => { setActiveSection(sectionId); setIsOpen(false); }}
                  className={`py-2.5 px-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all ${
                    isActive ? 'text-[#0055DF] dark:text-blue-400 bg-[#0055DF]/5 dark:bg-blue-400/5 font-extrabold' : 'hover:text-[#0055DF] dark:hover:text-blue-400'
                  } ${i < links.length - 1 ? 'border-b border-slate-100 dark:border-slate-800/50' : ''}`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="flex-1 py-3 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-500" /> : <Moon className="w-4 h-4 text-indigo-500" />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <a onClick={() => setIsOpen(false)} href="#contact" className="flex-1">
                <div className="w-full text-center py-3 border-2 border-[#0055DF] dark:border-blue-400 text-[#0055DF] dark:text-blue-400 font-bold rounded-full hover:bg-[#0055DF]/5 dark:hover:bg-blue-400/10 flex items-center justify-center gap-2 text-sm">
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


