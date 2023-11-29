import type { Config } from 'tailwindcss'

const colors = require('tailwindcss/colors');

const config: Config = {
  mode:'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    colors: {
      'baby-sky' : '#9EB8D9',
    },
    },
  },
  plugins: [],
}
export default config
