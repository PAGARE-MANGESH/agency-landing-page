/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#0055DF',
          yellow: '#FFC700',
          navy: '#0A1931',
          slate: '#64748B',
          bgLight: '#FFFFFF',
          bgSecondary: '#F4F7FC',
          
          // Legacy mappings to prevent styling breaks
          navyLegacy: '#0C0E12',
          secondarySlate: '#64748B',
          lightRow: '#F4F7FC',
          accentRed: '#0055DF',
          accentGreen: '#FFC700',
          accentGreenLight: '#FFE380'
        }
      }
    },
  },
  plugins: [],
}
