import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      fontFamily: {
        display: ['Oswald', 'ui-serif'],
      },
      screens: {
        '3xl': '1600px',
      },
      borderRadius: {
        none: '0',
        sm: '.125rem',
        DEFAULT: '.25rem',
        lg: '.5rem',
        full: '9999px',
      },
      opacity: {
        '0': '0',
        '20': '0.2',
        '40': '0.4',
        '60': '0.6',
        '80': '0.8',
        '100': '1',
      },
      backgroundSize: ({ theme }) => ({
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        ...theme('spacing'),
      }),
      fill: ({ theme }) => ({
        gray: theme('colors.gray'),
      }),
    },
  },
};

export default config;
