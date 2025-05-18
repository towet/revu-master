/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5', // Indigo-600
          dark: '#4338CA', // Indigo-700
        },
        secondary: {
          DEFAULT: '#0EA5E9', // Sky-500
          dark: '#0284C7', // Sky-600
        },
        accent: {
          DEFAULT: '#F97316', // Orange-500
          dark: '#EA580C', // Orange-600
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.6 },
          '50%': { opacity: 0.3 },
        },
        'text-reveal': {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'float-reverse-slow': 'float-reverse 9s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'pulse-social': 'pulse-slow 3s ease-in-out infinite',
        'fade-in': 'fade-in 1.2s ease-out forwards',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};