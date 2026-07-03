/**
 * B2B Theme tokens, colors, and premium styling presets
 */
export const theme = {
  colors: {
    accentRed: '#B62E28',      // Brand Red
    accentGreen: '#00D285',    // Brand Green
    navy: '#0C0E12',           // Slate/Navy text color
    slate: '#5F6470',          // Secondary Slate text
    lightRow: '#F8FAFC',       // Background alternating
    white: '#FFFFFF'
  },
  
  classes: {
    sectionHeading: "font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0C0E12] leading-tight tracking-tight mb-4",
    sectionSubheading: "text-[#B62E28] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2",
    
    // Shared styling preset for primary CTAs
    primaryCta: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00D285] hover:bg-[#00B873] text-white font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center",
    secondaryCta: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200 hover:border-slate-350 text-[#0C0E12] font-bold transition-all duration-300 text-center hover:bg-slate-50",
    
    // Reusable Card Preset: circle wrapper + title + description
    cardIconWrapper: "w-12 h-12 rounded-full bg-red-50 text-[#B62E28] flex items-center justify-center mb-6 shrink-0",
    cardTitle: "font-heading font-bold text-xl text-[#0C0E12] mb-2",
    cardDesc: "text-[#5F6470] text-sm leading-relaxed"
  }
};
