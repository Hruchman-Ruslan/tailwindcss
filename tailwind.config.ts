import type { Config } from 'tailwindcss';
// import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '500px',
      md: [{ min: '668px', max: '767px' }, { min: '868px' }],
      lg: '1100px',
      xl: '1400px',
    },

    // full control
    // screens: {
    //   tall: { raw: '(min-height: 800px)' },
    //   // => @media (min-height: 800px) { ... }
    // },

    // min max
    // screens: {
    //   sm: { min: '640px', max: '767px' },
    //   // => @media (min-width: 640px and max-width: 767px) { ... }

    //   md: { min: '768px', max: '1023px' },
    //   // => @media (min-width: 768px and max-width: 1023px) { ... }

    //   lg: { min: '1024px', max: '1279px' },
    //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

    //   xl: { min: '1280px', max: '1535px' },
    //   // => @media (min-width: 1280px and max-width: 1535px) { ... }

    //   '2xl': { min: '1536px' },
    //   // => @media (min-width: 1536px) { ... }
    // },

    // max
    // screens: {
    //   '2xl': { max: '1535px' },
    //   // => @media (max-width: 1535px) { ... }

    //   xl: { max: '1279px' },
    //   // => @media (max-width: 1279px) { ... }

    //   lg: { max: '1023px' },
    //   // => @media (max-width: 1023px) { ... }

    //   md: { max: '767px' },
    //   // => @media (max-width: 767px) { ... }

    //   sm: { max: '639px' },
    //   // => @media (max-width: 639px) { ... }
    // },

    // custom value
    // screens: {
    //   tablet: '640px',
    //   // => @media (min-width: 640px) { ... }

    //   laptop: '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   desktop: '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },

    // screens: {
    //   xs: '475px',
    //   ...defaultTheme.screens,
    //   sm: '640px',
    //   // => @media (min-width: 640px) { ... }

    //   md: '768px',
    //   // => @media (min-width: 768px) { ... }

    //   // lg: '1024px',
    //   // // => @media (min-width: 1024px) { ... }

    //   xl: '1280px',
    //   // => @media (min-width: 1280px) { ... }

    //   '2xl': '1536px',
    //   // => @media (min-width: 1536px) { ... }
    // },
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
        lg: '992px',
        // => @media (min-width: 992px) { ... }
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
