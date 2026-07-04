import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Globe } from 'lucide-react';
import { FadeLeft, FadeRight, FadeUp } from '../utils/animations.jsx';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Restrict Phone input field to only accept numbers, spaces, plus sign, hyphens, and parentheses
    if (name === 'phone') {
      const sanitized = value.replace(/[^0-9+\s\-()]/g, '');
      setFormData(prev => ({ ...prev, [name]: sanitized }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateField = (name, value) => {
    let errorMsg = '';
    if (name === 'name') {
      if (!value.trim()) {
        errorMsg = 'Full name is required';
      } else if (value.trim().length < 3) {
        errorMsg = 'Name must be at least 3 characters long';
      }
    } else if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        errorMsg = 'Email address is required';
      } else if (!emailRegex.test(value)) {
        errorMsg = 'Please enter a valid email address';
      }
    } else if (name === 'phone') {
      const numericString = value.replace(/[^0-9]/g, '');
      if (!value.trim()) {
        errorMsg = 'Phone number is required';
      } else if (numericString.length < 10) {
        errorMsg = 'Please enter a valid 10-digit phone number';
      } else if (numericString.length > 15) {
        errorMsg = 'Phone number must be at most 15 digits';
      }
    }
    setErrors(prev => ({ ...prev, [name]: errorMsg }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const numericString = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (numericString.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    } else if (numericString.length > 15) {
      newErrors.phone = 'Phone number must be at most 15 digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({});
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background soft glow elements */}
      <div className="absolute right-[-200px] top-[10%] w-[500px] h-[500px] rounded-full bg-blue-50/30 dark:bg-blue-900/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeUp>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#0A1931] dark:text-white leading-tight tracking-tight">
              Let's Put You on the <span className="font-extrabold text-[#0055DF] dark:text-blue-400">Map</span> – Literally.
            </h2>
            <p className="mt-4 text-[#64748B] dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Ready to grow your local business? Get in touch with us today.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Quick Enquiry Form */}
          <div className="lg:col-span-6">
            <FadeLeft>
              <div className="bg-[#F8FAFC] dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.015)] text-left">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0A1931] dark:text-white mb-6">
                  Quick Enquiry Form
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-350 mb-1.5 uppercase tracking-wide">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-850 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-200 dark:border-slate-800 focus:ring-[#0055DF]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs font-bold mt-1.5 block text-left">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-350 mb-1.5 uppercase tracking-wide">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-850 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.email 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-200 dark:border-slate-800 focus:ring-[#0055DF]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-red-500 text-xs font-bold mt-1.5 block text-left">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-350 mb-1.5 uppercase tracking-wide">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onBlur={handleBlur}
                      maxLength={15}
                      placeholder="+91 12345 67890"
                      className={`w-full px-4 py-3 text-sm rounded-xl border bg-white dark:bg-slate-950 text-slate-850 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-slate-200 dark:border-slate-800 focus:ring-[#0055DF]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-red-500 text-xs font-bold mt-1.5 block text-left">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Your Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-350 mb-1.5 uppercase tracking-wide">
                      Your Message
                    </label>
                    <textarea 
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your business and goals..."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-850 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0055DF] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0055DF] hover:bg-blue-600 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-md mt-2"
                  >
                    {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Enquiry Sent!' : 'Send Enquiry'}
                  </button>
                </form>
              </div>
            </FadeLeft>
          </div>

          {/* Right Column: Contact Details, Map Image & Social Connect */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left pt-2">
            <FadeRight>
              {/* Contact Details List */}
              <div className="space-y-5">
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#0A1931] dark:text-white">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex items-center gap-3 text-slate-650 dark:text-slate-300">
                    <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#0055DF] dark:text-blue-400 flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-bold text-sm sm:text-base">Navi Mumbai, India</span>
                  </div>

                  {/* Phone */}
                  <a 
                    href="tel:7039821730"
                    className="flex items-center gap-3 text-slate-655 dark:text-slate-300 hover:text-[#0055DF] dark:hover:text-blue-400 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#0055DF] dark:text-blue-400 flex items-center justify-center shrink-0 shadow-sm">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-bold text-sm sm:text-base">7039821730</span>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info.getfound@gmail.com"
                    className="flex items-center gap-3 text-slate-655 dark:text-slate-300 hover:text-[#0055DF] dark:hover:text-blue-400 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#0055DF] dark:text-blue-400 flex items-center justify-center shrink-0 shadow-sm">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <span className="font-bold text-sm sm:text-base">info.getfound@gmail.com</span>
                  </a>
                </div>
              </div>
            </FadeRight>

            {/* Map Card */}
            <FadeRight delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-200/80 dark:border-slate-800 shadow-md h-[280px] w-full bg-slate-50 dark:bg-slate-900">
                <iframe 
                  title="Get Found Location Map - Navi Mumbai, India"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120682.06227447477!2d72.91741517596443!3d19.033324673898877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c140e02d84d7%3A0x6b4afc0f1b203c94!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0" 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeRight>

            {/* Connect Section with Brand Logo */}
            <FadeRight delay={0.25} className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-slate-100 dark:border-slate-800/60">
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white text-base mb-3">Connect With Us</h4>
                <div className="flex items-center gap-3">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                  >
                    <Instagram className="w-4.5 h-4.5" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#0055DF] dark:text-blue-400 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                  >
                    <Linkedin className="w-4.5 h-4.5" />
                  </a>
                  <a 
                    href="#home"
                    className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                  >
                    <Globe className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>

              {/* Brand Logo in Contact footer */}
              <div className="flex items-center gap-2 font-sans font-bold text-slate-800 dark:text-white select-none">
                <div className="flex flex-col items-center justify-center -space-y-0.5 scale-90">
                  <svg className="w-5 h-5 drop-shadow-sm" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#FFC700" />
                  </svg>
                  <div className="flex flex-col items-center text-[6px] font-black tracking-wider leading-[0.8] uppercase font-sans text-[#0055DF]">
                    <span>GET</span>
                    <span>FOUND</span>
                  </div>
                </div>
                <span className="font-extrabold tracking-tight text-base">Get Found</span>
              </div>
            </FadeRight>
          </div>

        </div>
      </div>
    </section>
  );
}
