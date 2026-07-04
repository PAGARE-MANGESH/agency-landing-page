/**
 * B2B Theme tokens, colors, and premium styling presets
 */
export const theme = {
  colors: {
    accentBlue: '#0055DF',      // Primary Brand Blue
    accentYellow: '#FFC700',    // Accent Yellow
    navy: '#0A1931',            // Primary Text / Headings
    slate: '#64748B',           // Secondary Text / Slate
    lightRow: '#F4F7FC',        // Secondary Background / Containers
    white: '#FFFFFF'
  },
  
  classes: {
    sectionHeading: "font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A1931] leading-tight tracking-tight mb-4",
    sectionSubheading: "text-[#0055DF] text-xs sm:text-sm font-bold uppercase tracking-widest block mb-2",
    
    // Shared styling preset for primary CTAs (Yellow button, navy text)
    primaryCta: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFC700] hover:bg-[#E5B300] text-[#0A1931] font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center",
    secondaryCta: "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#0055DF] text-[#0055DF] font-bold transition-all duration-300 text-center hover:bg-[#0055DF]/5",
    
    // Reusable Card Preset: circle wrapper + title + description
    cardIconWrapper: "w-12 h-12 rounded-full bg-[#0055DF]/10 text-[#0055DF] flex items-center justify-center mb-6 shrink-0",
    cardTitle: "font-heading font-bold text-xl text-[#0A1931] mb-2",
    cardDesc: "text-[#64748B] text-sm leading-relaxed"
  }
};
