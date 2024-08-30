import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        viga: ['var(--font-viga)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.hover-item': {
          display: 'inline-block',
          cursor: 'pointer',
          transitionProperty: 'transform',
          transitionDuration: '300ms',
          '&:hover': {
            transform: 'scale(1.25)',
          },
        },
      });
    }),
  ],
};

export default config;
