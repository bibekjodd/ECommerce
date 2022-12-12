/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}"
   ],
   theme: {
      extend: {
         fontFamily: {
            arial: 'Arial, Helvetica, sans-serif',
            roboto: "'Roboto', sans-serif"
         },
         animation: {
            hero: 'hero 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
         },
         keyframes: {
            hero: {
               "0%": {
                  transform: 'scale(1)',
               },
               "33%": {
                  transform: 'scale(1.1) translate(30px,-50px)',
               },
               "66%": {
                  transform: 'scale(0.9) translate(20px,-20px)',
               },
               "100%": {
                  transform: 'scale(1)',
               },
            },

         }
      },
   },
   plugins: [
      require('tailwind-scrollbar-hide'),
      require('@tailwindcss/line-clamp'),
   ],
}
