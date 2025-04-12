/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // Translates personalizadas
      translate: {
        '101': '101%',
      },

      // Animaciones
      animation: {
        text: "text 3s ease infinite",
        'fade-in-fast': 'fadeInFast 0.5s ease forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
      },

      // Keyframes
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
          '0%': {
            opacity: '0',
            transform: 'scale(0.75)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        floatSlow: {
          '0%, 100%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(-52%)',
          },
        },
        marquee: {
          '0%': {
            transform: 'translateX(0%)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },

      // Tipografías personalizadas
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inspiration: ['Inspiration', 'cursive'],
        'roboto-slab': ['"Roboto Slab"', 'serif'],
        alexbrush: ['"Alex Brush"', 'cursive'], // estilo manuscrito
      },

      // Colores personalizados
      colors: {
        'color-principal-azul': '#0033A0',
        'color-secundario-amarillo': '#FFD100',
      },
    },
  },
  plugins: [],
};
