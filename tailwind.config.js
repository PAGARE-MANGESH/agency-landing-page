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
          navy: '#0C0E12',
          secondarySlate: '#5F6470',
          lightRow: '#F8FAFC',
          redStart: '#EF4444',
          orangeEnd: '#F97316',
          accentRed: '#B62E28',
          accentGreen: '#00D285',
          accentGreenLight: '#70E0A3'
        }
      }
    },
  },
  plugins: [],
}
