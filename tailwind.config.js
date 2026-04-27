/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f7bd48',
          DEFAULT: '#785600',
          dark: '#5d4200'
        },
        background: '#ffffff', // Clean white background like Joyalukkas
        surface: '#fcf9f8',
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body: ["Manrope", "sans-serif"],
      }
    },
  },
  plugins: [],
}
