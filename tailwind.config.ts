import type { Config } from 'tailwindcss';

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
};

export default config;
