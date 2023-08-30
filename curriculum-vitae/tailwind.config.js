/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      violet: '#52489C',
      lightblue: '#59C3C3',
      white: '#fff',
      black: '#000',
    },
    fontFamily: {
      robotoBold: ['RobotoMono-Bold', 'monospace'],
      robotoRegular: ['RobotoMono', 'monospace'],
      robotoThin: ['RobotoMono-Thin', 'monospace'],
    },
    extend: {
      animation: {
        'fade-in-up': 'fade-in-up 2s ease-in-out',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
