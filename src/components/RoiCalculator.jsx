import React, { useState } from 'react';
import { theme } from '../theme.js';

export default function RoiCalculator() {
  const [traffic, setTraffic] = useState(15000);
  const [conversion, setConversion] = useState(2.0);
  const [multiplier, setMultiplier] = useState(2.5);

  const currentLeads = Math.round(traffic * (conversion / 100));
  const projectedLeads = Math.round(currentLeads * multiplier);
  const leadLift = Math.round((multiplier - 1) * 100);

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white shadow-2xl border border-slate-200/80 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accentRed/5 rounded-bl-full pointer-events-none"></div>
      
      <h3 className="font-heading font-bold text-xl text-brand-navy mb-1">ROI Calculator Sandbox</h3>
      <p className="text-sm text-brand-secondarySlate mb-6">Simulate and forecast your local lead growth instantly</p>

      <div className="space-y-6">
        {/* Slider 1 */}
        <div>
          <div className="flex justify-between text-sm font-semibold mb-2">
            <span className="text-brand-navy">Current Monthly Traffic</span>
            <span className="text-brand-accentRed">{traffic.toLocaleString()}</span>
          </div>
          <input 
            type="range" 
            min="1000" 
            max="50000" 
            step="1000"
            value={traffic} 
            onChange={(e) => setTraffic(Number(e.target.value))}
            className={theme.classes.rangeInput}
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>1,000</span>
            <span>50,000</span>
          </div>
        </div>

        {/* Slider 2 */}
        <div>
          <div className="flex justify-between text-sm font-semibold mb-2">
            <span className="text-brand-navy">Conversion Probability</span>
            <span className="text-brand-accentRed">{conversion}%</span>
          </div>
          <input 
            type="range" 
            min="0.5" 
            max="5.0" 
            step="0.1"
            value={conversion} 
            onChange={(e) => setConversion(Number(e.target.value))}
            className={theme.classes.rangeInput}
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>0.5%</span>
            <span>5.0%</span>
          </div>
        </div>

        {/* Slider 3 */}
        <div>
          <div className="flex justify-between text-sm font-semibold mb-2">
            <span className="text-brand-navy">Map Pack Multiplier</span>
            <span className="text-brand-accentRed">{multiplier}x</span>
          </div>
          <input 
            type="range" 
            min="1.5" 
            max="5.0" 
            step="0.1"
            value={multiplier} 
            onChange={(e) => setMultiplier(Number(e.target.value))}
            className={theme.classes.rangeInput}
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span>1.5x</span>
            <span>5.0x</span>
          </div>
        </div>

        {/* Output Cards */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
            <span className="text-xs font-semibold text-brand-secondarySlate block mb-1">Local Enquiries</span>
            <span className="font-heading font-extrabold text-2xl text-brand-navy">{projectedLeads}</span>
            <span className="text-[10px] text-brand-accentGreen block mt-1">+{projectedLeads - currentLeads} additional</span>
          </div>
          <div className="p-4 rounded-2xl bg-red-50 border border-red-100 text-center">
            <span className="text-xs font-semibold text-brand-secondarySlate block mb-1">Inbound Lead Lift</span>
            <span className="font-heading font-extrabold text-2xl text-brand-accentRed">+{leadLift}%</span>
            <span className="text-[10px] text-brand-secondarySlate block mt-1">Scale optimization</span>
          </div>
        </div>
      </div>
    </div>
  );
}
