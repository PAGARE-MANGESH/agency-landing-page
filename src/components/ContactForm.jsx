import React, { useState, useRef, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Clock, 
  Facebook, Youtube, Instagram, Linkedin,
  ChevronDown, Check, Download
} from 'lucide-react';
// xlsx loaded dynamically on form submit — does not block page render

/* ─────────────────── Custom dark dropdown ─────────────────── */
function CustomSelect({ label, name, options, value, onChange, error }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = options.find(o => o.value === value);

  return (
    <div ref={ref} className="relative">
      <label className="block text-xs font-semibold text-slate-300 mb-1">{label}</label>
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className={`w-full px-4 py-3 rounded-xl border bg-white/5 text-left text-sm flex items-center justify-between transition-all focus:outline-none ${
          error ? 'border-red-500 ring-2 ring-red-200/20' : open ? 'border-[#B62E28] ring-2 ring-[#B62E28]/20' : 'border-white/10 hover:border-white/25'
        }`}
      >
        <span className={selected ? 'text-white' : 'text-slate-500'}>{selected ? selected.label : '-Please Choose An Option-'}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute z-50 top-full left-0 right-0 mt-1 bg-[#1a1d24] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange({ target: { name, value: opt.value } }); setOpen(false); }}
              className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between hover:bg-white/5 transition-colors ${
                value === opt.value ? 'text-[#B62E28] font-semibold' : 'text-slate-300'
              }`}
            >
              <span>{opt.label}</span>
              {value === opt.value && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────── Config from .env ─────────────────── */
const GOOGLE_SHEET_URL  = import.meta.env.VITE_GOOGLE_SHEET_URL  || '';
const STORAGE_KEY       = import.meta.env.VITE_LEADS_STORAGE_KEY  || 'getfound_leads';
const EXCEL_FILENAME    = import.meta.env.VITE_EXCEL_FILENAME      || 'GetFound_Leads.xlsx';

/* ─────────────────── Submit lead (Sheets + Excel) ─────────────────── */
async function submitLead(newLead) {
  const payload = { ...newLead, submittedAt: new Date().toLocaleString() };

  // 1️⃣  Google Sheets (if URL is configured)
  const isGoogleSheetReady =
    GOOGLE_SHEET_URL &&
    !GOOGLE_SHEET_URL.includes('PASTE_YOUR') &&
    GOOGLE_SHEET_URL.startsWith('https://script.google.com');

  if (isGoogleSheetReady) {
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires no-cors
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.warn('[GetFound] Google Sheets POST failed:', err);
    }
  }

  // 2️⃣  Always save locally + download Excel as backup
  const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  const updated  = [...existing, payload];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  try {
    const XLSX = await import('xlsx');
    const ws = XLSX.utils.json_to_sheet(updated);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Leads');
    XLSX.writeFile(wb, EXCEL_FILENAME);
  } catch (xlsxErr) {
    console.warn('[GetFound] Excel download failed:', xlsxErr);
  }
}

/* ─────────────────── Main Component ─────────────────── */
const serviceOptions = [
  { value: 'google-business', label: 'Google Business Profile Optimization' },
  { value: 'local-keyword',   label: 'Local Keyword Strategy' },
  { value: 'location-seo',    label: 'Location Page SEO' },
  { value: 'technical-seo',   label: 'Technical Local SEO' },
  { value: 'reputation',      label: 'Reputation Management' },
];

const budgetOptions = [
  { value: '1k-3k',  label: '$1,000 - $3,000 /mo' },
  { value: '3k-5k',  label: '$3,000 - $5,000 /mo' },
  { value: '5k-plus', label: '$5,000+ /mo' },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', website: '', service: '', budget: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = 'Required';
    if (!formData.email.trim())   e.email   = 'Required';
    if (!formData.phone.trim())   e.phone   = 'Required';
    if (!formData.service)        e.service = 'Required';
    if (!formData.budget)         e.budget  = 'Required';
    if (!formData.message.trim()) e.message = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      await submitLead(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', website: '', service: '', budget: '', message: '' });
    } catch (err) {
      console.error('[GetFound] Submission error:', err);
      setStatus('error');
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl border bg-white/5 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#B62E28] transition-all ${
      errors[field] ? 'border-red-500 ring-2 ring-red-200/20' : 'border-white/10 hover:border-white/25'
    }`;

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Red radial glow */}
      <div 
        className="absolute top-0 left-0 w-[600px] h-[600px] opacity-70 pointer-events-none -z-0"
        style={{ backgroundImage: 'radial-gradient(circle at top left, rgba(182,46,40,0.35) 0%, rgba(182,46,40,0.08) 45%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* ── Left Column ── */}
        <div className="lg:col-span-6 flex flex-col items-start text-left pt-2">
          <span className="text-[#B62E28] text-xs font-bold uppercase tracking-widest block mb-3">CONTACT US</span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[46px] text-white leading-tight mb-4">
            Ready to Grow <br />Your Brand?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl leading-relaxed">
            Connect with us today and discover how we can help elevate your brand to new heights.
          </p>

          {/* 2×2 contact cards */}
          <div className="grid grid-cols-2 gap-3 w-full mb-8">
            {[
              { icon: <MapPin className="w-4 h-4 text-white" />, label: 'Office',         value: '309, Rupa Solitaire' },
              { icon: <Phone  className="w-4 h-4 text-white" />, label: 'Phone',          value: 'Schedule A Call' },
              { icon: <Clock  className="w-4 h-4 text-white" />, label: 'Working Hours',  value: 'Mon – Fri, 9:30 am to 6:30 pm' },
              { icon: <Mail   className="w-4 h-4 text-white" />, label: 'Email',          value: 'sales@gbim.com' },
            ].map(c => (
              <div key={c.label} className="flex items-center gap-3 bg-[#111317]/60 border border-white/5 rounded-2xl p-4">
                <div className="w-9 h-9 rounded-xl bg-black border border-white/10 flex items-center justify-center shrink-0">{c.icon}</div>
                <div>
                  <span className="block text-[10px] text-slate-500 uppercase font-semibold tracking-wider">{c.label}</span>
                  <span className="text-xs text-white font-medium leading-snug">{c.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <span className="text-slate-400 font-bold text-xs uppercase tracking-wider">Social media :</span>
            <div className="flex items-center gap-2">
              {[Facebook, Youtube, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full border border-white/10 hover:border-white/40 text-slate-400 hover:text-white flex items-center justify-center transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right Column: Form ── */}
        <div className="lg:col-span-6 w-full">
          <div className="p-7 sm:p-9 rounded-3xl bg-[#0f1117]/70 border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <p className="text-slate-400 text-sm mb-6">Leave us a message</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Name*</label>
                  <input type="text"  name="name"  value={formData.name}  onChange={handleInputChange} className={inputClass('name')}  placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Email*</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} className={inputClass('email')} placeholder="Enter email" />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Phone*</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className={inputClass('phone')} placeholder="Enter phone" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Website</label>
                  <input type="url" name="website" value={formData.website} onChange={handleInputChange} className={inputClass('website')} placeholder="www.yoursite.com" />
                </div>
              </div>

              {/* Row 3: Custom Selects */}
              <div className="grid grid-cols-2 gap-3">
                <CustomSelect label="Service you want?*" name="service" options={serviceOptions} value={formData.service} onChange={handleInputChange} error={errors.service} />
                <CustomSelect label="Marketing Budget*"  name="budget"  options={budgetOptions}  value={formData.budget}  onChange={handleInputChange} error={errors.budget} />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Any message*</label>
                <textarea name="message" rows="3" value={formData.message} onChange={handleInputChange}
                  className={inputClass('message')} placeholder="Share details about your business..."></textarea>
              </div>

              {status === 'success' && (
                <div className="p-3 rounded-xl bg-green-950/30 border border-green-800/60 text-emerald-400 text-sm font-semibold flex items-center gap-2">
                  <Download className="w-4 h-4 shrink-0" />
                  <span>
                    Lead saved! Excel downloaded to your device.
                    {GOOGLE_SHEET_URL && !GOOGLE_SHEET_URL.includes('PASTE_YOUR') && ' Also sent to Google Sheets ✓'}
                  </span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-red-950/30 border border-red-800/60 text-red-400 text-sm font-semibold">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button type="submit" disabled={status === 'submitting'}
                className="w-full py-4 bg-white hover:bg-slate-100 text-[#0F172A] font-bold rounded-full transition-all shadow-md text-sm uppercase tracking-wider disabled:opacity-50">
                {status === 'submitting' ? 'Submitting...' : 'SUBMIT'}
              </button>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
