import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e5f0',
          500: '#1a365d',
          600: '#152847',
          700: '#0f1b2e',
          900: '#0a0e15',
        },
        secondary: {
          50: '#fefdf4',
          100: '#fef8e8',
          400: '#e8d4a8',
          500: '#d4a574',
          600: '#c99a5f',
        },
        accent: {
          50: '#f0fdf4',
          500: '#16a34a',
        },
      },
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
        amiri: ['var(--font-amiri)', 'serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        'dm-serif': ['var(--font-dm-serif)', 'serif'],
        'roboto-flex': ['var(--font-roboto-flex)', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.5rem',
      },
      boxShadow: {
        'elegant': '0 2px 12px rgba(0, 0, 0, 0.08)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;
