import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        <div>
          <a href="#" className="flex items-center gap-1.5 font-heading font-extrabold text-2xl tracking-tight text-white mb-4">
            <span className="text-indigo-400">B2B</span>
            <span className="text-slate-500 font-light">GROWTH</span>
          </a>
          <p className="text-sm leading-relaxed text-slate-400">
            Performance local positioning agency scaling multi-location footprint and pipeline conversions for B2B brands globally.
          </p>
        </div>

        <div>
          <h5 className="font-heading font-bold text-white text-base mb-4 uppercase tracking-wider">Solutions</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white transition-colors">Local Search Positioning</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Backlink Architecture</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Conversion Landing Pages</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Reputation Management</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-heading font-bold text-white text-base mb-4 uppercase tracking-wider">Company</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#case" className="hover:text-white transition-colors">Case Studies</a></li>
            <li><a href="#methodology" className="hover:text-white transition-colors">Methodology</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-heading font-bold text-white text-base mb-4 uppercase tracking-wider">Contact Info</h5>
          <p className="text-sm leading-relaxed text-slate-400">
            <strong>Address:</strong> 246, Second floor, Raheja Tesla 2 MIDC Industrial Area, Sanpada, Navi Mumbai, Maharashtra 400703<br/>
            <strong>Phone:</strong> +91 7039821730<br/>
            <strong>Email:</strong> info.getfound@gmail.com
          </p>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-4">
        <span>© {new Date().getFullYear()} B2B Growth Technologies Pvt Ltd. All rights reserved.</span>
        <div className="flex justify-center gap-6">
          <a href="#" className="hover:text-slate-350">Privacy Policy</a>
          <a href="#" className="hover:text-slate-350">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
