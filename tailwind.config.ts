import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Your Brand Colors
        navy: {
          900: '#0B1120', // Deepest Navy (Backgrounds)
          800: '#151e32', // Dark Blue (Cards/Sections)
          700: '#1e293b', // Lighter Navy
        },
        brand: {
          DEFAULT: '#FF4D00', // Orangish Red (Accents/Buttons)
          hover: '#E04600',
          light: '#FFF0EB', // Light background for contrast
        },
        text: {
          main: '#F8FAFC', // Off-white text
          muted: '#94A3B8', // Grey text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Clean, modern font like Unita
      },
    },
  },
  plugins: [],
};
export default config;
