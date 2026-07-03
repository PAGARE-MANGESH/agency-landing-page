import React, { useState } from 'react';
import { theme } from '../theme.js';
import { Check } from 'lucide-react';

export default function AuditForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: 'Google Business Profile Optimization',
    budget: '$1,000 - $3,000 /mo',
    notes: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.website.trim()) errors.website = 'Website URL is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus('submitting');

    try {
      // simulated POST request to Apps Script Web App
      await fetch('https://script.google.com/macros/s/example-web-app/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      setTimeout(() => {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          website: '',
          service: 'Google Business Profile Optimization',
          budget: '$1,000 - $3,000 /mo',
          notes: ''
        });
      }, 1500);

    } catch (error) {
      console.error(error);
      setFormStatus('error');
    }
  };

  return (
    <section id="audit" className="py-20 grid-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Prompt */}
          <div className="lg:col-span-5">
            <span className={theme.classes.sectionSubheading}>GET A FREE AUDIT</span>
            <h2 className={theme.classes.sectionHeading}>
              Dominate Local Searches in 48 Hours
            </h2>
            <p className="text-brand-secondarySlate text-lg mb-8 leading-relaxed">
              Request a comprehensive analysis of your Google Business Profile, organic keywords, map pack placement, and competitor profiles. No obligation.
            </p>

            <div className="space-y-4">
              {[
                'Complete GBP & Maps Health Audit',
                'Competitor local ranking gap report',
                'Immediate action plan for traffic growth'
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-green-50 border border-green-200">
                    <Check className="w-4 h-4 text-brand-accentGreen" />
                  </div>
                  <span className="text-sm font-semibold text-brand-navy">{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-2xl">
              <h3 className="font-heading font-bold text-2xl text-brand-navy mb-2">Request Free Consultation</h3>
              <p className="text-sm text-brand-secondarySlate mb-6">Fill the inputs below and our experts will review your website.</p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-55 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentRed transition-all ${formErrors.name ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-200'}`}
                      placeholder="John Doe"
                    />
                    {formErrors.name && <span className="text-xs text-red-500 mt-1 block">{formErrors.name}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Corporate Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-55 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentRed transition-all ${formErrors.email ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-200'}`}
                      placeholder="john@company.com"
                    />
                    {formErrors.email && <span className="text-xs text-red-500 mt-1 block">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-55 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentRed transition-all ${formErrors.phone ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-200'}`}
                      placeholder="+1 (555) 000-0000"
                    />
                    {formErrors.phone && <span className="text-xs text-red-500 mt-1 block">{formErrors.phone}</span>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Website URL</label>
                    <input 
                      type="url" 
                      name="website" 
                      value={formData.website} 
                      onChange={handleInputChange} 
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-55 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentRed transition-all ${formErrors.website ? 'border-red-500 ring-2 ring-red-200' : 'border-slate-200'}`}
                      placeholder="www.company.com"
                    />
                    {formErrors.website && <span className="text-xs text-red-500 mt-1 block">{formErrors.website}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Service Needed</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-55 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentRed transition-all"
                    >
                      <option>Google Business Profile Optimization</option>
                      <option>Local Keyword Strategy</option>
                      <option>Location Page SEO</option>
                      <option>Technical Local SEO</option>
                      <option>Reputation Management</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Marketing Budget</label>
                    <select 
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-55 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentRed transition-all"
                    >
                      <option>$1,000 - $3,000 /mo</option>
                      <option>$3,000 - $5,000 /mo</option>
                      <option>$5,000+ /mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Project Notes / Details</label>
                  <textarea 
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-55 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accentRed transition-all"
                    placeholder="Tell us about your locations or goals..."
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 rounded-xl bg-green-50 border border-green-200 text-brand-accentGreen text-sm font-semibold">
                    ✓ Success! Your audit request has been sent. We will get back to you shortly.
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-brand-accentRed text-sm font-semibold">
                    ✗ Simulation successful! Local lead data has been logged to console.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 rounded-xl bg-brand-navy hover:bg-brand-accentRed text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Submitting...' : 'SUBMIT AUDIT REQUEST'}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
