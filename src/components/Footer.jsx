import React from 'react';
import { Instagram, Linkedin, Globe, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#111C24] dark:bg-slate-950 text-slate-400 py-16 border-t border-slate-800 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 text-left">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 font-sans font-bold text-white mb-5 select-none">
            <div className="flex flex-col items-center justify-center -space-y-0.5">
              <svg className="w-5 h-5 drop-shadow-sm" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#FFC700" />
              </svg>
              <div className="flex flex-col items-center text-[6px] font-black tracking-wider leading-[0.8] uppercase font-sans text-[#0055DF]">
                <span>GET</span>
                <span>FOUND</span>
              </div>
            </div>
            <span className="font-extrabold tracking-tight text-lg text-white">Get Found</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 mb-6">
            Helping local businesses in Navi Mumbai get discovered and grow.
          </p>
          <div className="flex items-center gap-3">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-350 hover:text-white flex items-center justify-center transition-all shadow-sm"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-350 hover:text-white flex items-center justify-center transition-all shadow-sm"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a 
              href="#home"
              className="w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-350 hover:text-white flex items-center justify-center transition-all shadow-sm"
            >
              <Globe className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h5 className="font-bold text-white text-base mb-5 tracking-wide">Quick Links</h5>
          <ul className="space-y-3 text-sm font-semibold">
            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#framework" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#results" className="hover:text-white transition-colors">Results</a></li>
            <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

        {/* Our Services Column */}
        <div>
          <h5 className="font-bold text-white text-base mb-5 tracking-wide">Our Services</h5>
          <ul className="space-y-3 text-sm font-semibold">
            <li><a href="#framework" className="hover:text-white transition-colors">GMB Optimization</a></li>
            <li><a href="#framework" className="hover:text-white transition-colors">Local SEO</a></li>
            <li><a href="#framework" className="hover:text-white transition-colors">Reputation Management</a></li>
            <li><a href="#framework" className="hover:text-white transition-colors">Citation Building</a></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h5 className="font-bold text-white text-base mb-5 tracking-wide">Contact</h5>
          <ul className="space-y-4 text-sm font-semibold text-slate-400">
            <li className="flex items-center gap-3">
              <MapPin className="w-4.5 h-4.5 text-red-500 fill-red-100 dark:fill-red-950 shrink-0" />
              <span>Navi Mumbai</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4.5 h-4.5 text-red-500 shrink-0" />
              <a href="tel:7039821730" className="hover:text-white transition-colors">7039821730</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4.5 h-4.5 text-white bg-slate-800 rounded-sm p-[2px] shrink-0" />
              <a href="mailto:info.getfound@gmail.com" className="hover:text-white transition-colors">info.getfound@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-slate-800/80 text-center text-xs font-semibold text-slate-500">
        <span>© 2026 Get Found. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
