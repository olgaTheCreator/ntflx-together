/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './dist/index.html', './src/components/**/*.tsx'],
  safelist: [
    {
      pattern: /bg-(red|green|blue)-(100|500|700)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
      height: {
        '1/8': '12.5%',
        '7/8': '87.5%',
        '1/10': '10%',
        '9/10': '90%',
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        full: '100%',
      },
      colors: {
        blue: {
          100: '#C8D9F5',
          200: '#95B4EB',
          300: '#587BC3',
          400: '#2A4787',
          500: '#051338',
          600: '#030E30',
          700: '#020A28',
          800: '#010720',
          900: '#00051A',
        },
        green: {
          100: '#F0FAED',
          200: '#DFF6DC',
          300: '#C2E5C0',
          400: '#A2CBA4',
          500: '#7ca982',
          600: '#5A9167',
          700: '#3E7951',
          800: '#27623F',
          900: '#175134',
          DEFAULT: '#7ca982',
        },
        red: {
          100: '#FCE2D9',
          200: '#F9C0B4',
          300: '#EE938B',
          400: '#DE6B6D',
          500: '#c83e4d',
          600: '#AC2D46',
          700: '#901F40',
          800: '#741338',
          900: '#600B33',
          DEFAULT: '#c83e4d',
        },
        white: '#FAFAFA',
        orange: { 600: '#FF741C', DEFAULT: '#FF934F' },
        info: {
          100: '#C7F9ED',
          200: '#92F3E3',
          300: '#58DCD2',
          400: '#2EB9BA',
          500: '#00808C',
          600: '#006478',
          700: '#004B64',
          800: '#003651',
          900: '#002743',
        },
        warning: {
          100: '#FBF5C9',
          200: '#F7EA95',
          300: '#E9D35E',
          400: '#D3B735',
          500: '#B79301',
          600: '#9D7B00',
          700: '#836400',
          800: '#6A4E00',
          900: '#573F00',
        },

        // /* CSS HEX */
        // --oxford-blue: #051338ff;
        // --cambridge-blue: #7ca982ff;
        // --seasalt: #fafafaff;
        // --bittersweet-shimmer: #c83e4dff;
        // --atomic-tangerine: #ff934fff;
      },
    },
  },
  plugins: [],
};
