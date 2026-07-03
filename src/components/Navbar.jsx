import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      <div className="flex items-center justify-between gap-4 px-8 py-3 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100/80 supports-[backdrop-filter]:backdrop-blur-xl transition-all duration-300">

        {/* Brand identity */}
        <a href="#home" className="flex items-center gap-2.5 font-sans font-bold text-2xl tracking-tight text-slate-900 group">
          <div className="flex flex-col items-center justify-center -space-y-0.5">
            {/* The Pin */}
            <svg className="w-5.5 h-5.5 fill-[#FFC000] drop-shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-0.5" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            {/* Stacked small text */}
            <div className="flex flex-col items-center text-[7px] font-black text-[#2A6FDB] tracking-wider leading-[0.8] uppercase font-sans">
              <span>GET</span>
              <span className="mt-[1px]">FOUND</span>
            </div>
          </div>
          <span className="font-extrabold text-[#0C0E12] tracking-tight text-xl transition-colors duration-300 group-hover:text-[#B62E28]">Get Found</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-7 font-medium text-slate-600 text-[13.5px]">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#B62E28] transition-colors duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Schedule Call Button */}
        <div className="hidden md:block">
          <a href="#contact" className="inline-flex items-center pl-1.5 pr-6 py-1.5 bg-[#B62E28] text-white font-bold rounded-full hover:bg-[#990000] shadow-md transition-all group">
            <div className="w-9 h-9 rounded-full bg-[#FDECEC] text-[#B62E28] flex items-center justify-center mr-3 group-hover:scale-105 transition-transform">
              <Phone className="w-4 h-4 fill-current" />
            </div>
            <span className="text-[14.5px] tracking-wide">Schedule A Call</span>
          </a>
        </div>

        {/* Mobile drawer trigger */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-900 focus:outline-none hover:text-[#B62E28]">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden mt-2 p-6 rounded-3xl bg-white shadow-xl border border-slate-200 flex flex-col gap-1 font-semibold text-slate-900">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`hover:text-[#B62E28] py-2.5 px-2 rounded-xl hover:bg-slate-50 transition-all ${i < links.length - 1 ? 'border-b border-slate-100' : ''}`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a onClick={() => setIsOpen(false)} href="#contact" className="block w-full">
              <div className="w-full text-center py-3 bg-[#B62E28] text-white font-bold rounded-full hover:bg-[#990000] flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 fill-current" />
                <span>Schedule A Call</span>
              </div>
            </a>
          </div>
        </div>
      )}

    </nav>
  );
}

