import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '750': '750ms',
      },
      scale: {
        '95': '0.95',
        '85': '0.85',
      },
    },
    dropShadow: {
      glow: [
        '0 0px 20px rgba(255,255, 255, 0.28)',
        '0 0px 65px rgba(255, 255,255, 0.02)',
      ],
    },
  },
  plugins: [],
};
export default config;
