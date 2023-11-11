import tailwindAnimationDelay from 'tailwindcss-animation-delay';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // fontFamily: {},
    extend: {
      // colors: {}
    },
    animationDelay: {
      500: '500ms',
      750: '750ms',
      1000: '1000ms',
      1200: '1200ms',
      1250: '1250ms',
      1500: '1500ms',
      1750: '1750ms',
      2000: '2000ms',
      2200: '2200ms',
      2250: '2250ms',
      3000: '3000ms',
    },
    keyframes: {
      'border-circle-top': {
        '0%': { left: '-100%' },
        '50%,100%': { left: '100%' },
      },
      'border-circle-right': {
        '0%': { top: '-100%' },
        '50%,100%': { top: '100%' },
        delay: '1750ms',
      },
      'border-circle-bottom': {
        '0%': { right: '-100%' },
        '50%,100%': { right: '100%' },
      },
      'border-circle-left': {
        '0%': { bottom: '-100%' },
        '50%,100%': { bottom: '100%' },
      },
    },
    backgroundImage: {
      'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))',
    },
    animation: {
      'border-circle-top': 'border-circle-top 4s linear infinite',
      'border-circle-right': 'border-circle-right 4s linear infinite',
      'border-circle-bottom': 'border-circle-bottom 4s linear infinite',
      'border-circle-left': 'border-circle-left 4s linear infinite',
    },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '2rem',
    //     lg: '4rem',
    //     xl: '5rem',
    //     '2xl': '6rem',
    //   },
    // },
  },

  plugins: [tailwindAnimationDelay],
};
