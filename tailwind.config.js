import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}', // ← 追加
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#6ee7b7',
          DEFAULT: '#34d399',
          dark: '#059669',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        mplus: ['"M PLUS 1p"', 'sans-serif'],
        handwritten: ['Kouzann', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

export default config;