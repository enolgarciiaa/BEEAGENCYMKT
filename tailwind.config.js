/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      translate: {
        '101': '101%',
      },
      animation: {
        text: "text 3s ease infinite",
        'fade-in-fast': 'fadeInFast 0.5s ease forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        logoExpand: "logoExpand 1.5s forwards ease-out",
        fadeOut: "fadeOut 6s ease-out 13s forwards",
        'fade-in-logo': 'fadeInLogo 1s ease forwards',
        'move-line': 'moveLine 4s linear infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bg-glow': 'bgGlow 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        fadeInFast: {
          '0%': { opacity: '0', transform: 'scale(0.75)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(-52%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        logoExpand: {
          "0%": { opacity: 0, transform: "scale(0) rotate(0deg)" },
          "100%": { opacity: 1, transform: "scale(1.5) rotate(360deg)" },
        },
        fadeOut: {
          "100%": { opacity: 0, visibility: "hidden" },
        },
        fadeInLogo: {
          '0%': { opacity: '0', transform: 'scale(0.2) rotate(0deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(var(--tw-rotate))' },
        },
        moveLine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        bgGlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.9 },
        }
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inspiration: ['Inspiration', 'cursive'],
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        alexbrush: ['"Alex Brush"', 'cursive'],
      },
      colors: {
        'color-principal-azul': '#0033A0',
        'color-secundario-amarillo': '#FFD100',
      },
    },
  },
  plugins: [],
};
