/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        
        'marquee-right-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 80s linear infinite',
        'marquee-right-reverse': 'marquee-right-reverse 100s linear infinite',
        
      },
      colors: {
        amarillo: '#FFD700',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        prata: ['Prata', 'serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

