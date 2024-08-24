import type { Config } from 'tailwindcss';
// import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}'],
  // presets: [require('./my-preset.js')],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    // screens: {
    //   sm: '500px',
    //   md: [{ min: '668px', max: '767px' }, { min: '868px' }],
    //   lg: '1100px',
    //   xl: '1400px',
    // },
    // // full control
    // // screens: {
    // //   tall: { raw: '(min-height: 800px)' },
    // //   // => @media (min-height: 800px) { ... }
    // // },
    // // min max
    // // screens: {
    // //   sm: { min: '640px', max: '767px' },
    // //   // => @media (min-width: 640px and max-width: 767px) { ... }
    // //   md: { min: '768px', max: '1023px' },
    // //   // => @media (min-width: 768px and max-width: 1023px) { ... }
    // //   lg: { min: '1024px', max: '1279px' },
    // //   // => @media (min-width: 1024px and max-width: 1279px) { ... }
    // //   xl: { min: '1280px', max: '1535px' },
    // //   // => @media (min-width: 1280px and max-width: 1535px) { ... }
    // //   '2xl': { min: '1536px' },
    // //   // => @media (min-width: 1536px) { ... }
    // // },
    // // max
    // // screens: {
    // //   '2xl': { max: '1535px' },
    // //   // => @media (max-width: 1535px) { ... }
    // //   xl: { max: '1279px' },
    // //   // => @media (max-width: 1279px) { ... }
    // //   lg: { max: '1023px' },
    // //   // => @media (max-width: 1023px) { ... }
    // //   md: { max: '767px' },
    // //   // => @media (max-width: 767px) { ... }
    // //   sm: { max: '639px' },
    // //   // => @media (max-width: 639px) { ... }
    // // },
    // // custom value
    // // screens: {
    // //   tablet: '640px',
    // //   // => @media (min-width: 640px) { ... }
    // //   laptop: '1024px',
    // //   // => @media (min-width: 1024px) { ... }
    // //   desktop: '1280px',
    // //   // => @media (min-width: 1280px) { ... }
    // // },
    // // screens: {
    // //   xs: '475px',
    // //   ...defaultTheme.screens,
    // //   sm: '640px',
    // //   // => @media (min-width: 640px) { ... }
    // //   md: '768px',
    // //   // => @media (min-width: 768px) { ... }
    // //   // lg: '1024px',
    // //   // // => @media (min-width: 1024px) { ... }
    // //   xl: '1280px',
    // //   // => @media (min-width: 1280px) { ... }
    // //   '2xl': '1536px',
    // //   // => @media (min-width: 1536px) { ... }
    // // },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   white: '#ffffff',
    //   purple: '#3f3cbb',
    //   midnight: '#121063',
    //   metal: '#565584',
    //   tahiti: {
    //     100: '#cffafe',
    //     200: '#a5f3fc',
    //     300: '#67e8f9',
    //     400: '#22d3ee',
    //     500: '#06b6d4',
    //     600: '#0891b2',
    //     700: '#0e7490',
    //     800: '#155e75',
    //     900: '#164e63',
    //     DEFAULT: '#06b6d4',
    //   },
    //   silver: '#ecebff',
    //   'bubble-gum': '#ff77e9',
    //   bermuda: '#78dcca',
    //   // Using modern `rgb`
    //   primary: 'rgb(var(--color-primary) / <alpha-value>)',
    //   secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
    //   // // Using modern `hsl`
    //   // primary: 'hsl(var(--color-primary) / <alpha-value>)',
    //   // secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
    //   // // Using legacy `rgba`
    //   // primary: 'rgba(var(--color-primary), <alpha-value>)',
    //   // secondary: 'rgba(var(--color-secondary), <alpha-value>)',
    // },
    // // spacing: {
    // //   '1': '8px',
    // //   '2': '12px',
    // //   '3': '16px',
    // //   '4': '24px',
    // //   '5': '32px',
    // //   '6': '48px',
    // // },
    // spacing: {
    //   sm: '8px',
    //   md: '12px',
    //   lg: '16px',
    //   xl: '24px',
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    // extend: {
    //   fontFamily: {
    //     display: ['Oswald', 'ui-serif'],
    //   },
    //   screens: {
    //     lg: '992px',
    //     // => @media (min-width: 992px) { ... }
    //     '3xl': '1600px',
    //   },
    //   borderRadius: {
    //     none: '0',
    //     sm: '.125rem',
    //     DEFAULT: '.25rem',
    //     lg: '.5rem',
    //     full: '9999px',
    //   },
    //   opacity: {
    //     '0': '0',
    //     '20': '0.2',
    //     '40': '0.4',
    //     '60': '0.6',
    //     '80': '0.8',
    //     '100': '1',
    //   },
    //   backgroundSize: ({ theme }) => ({
    //     auto: 'auto',
    //     cover: 'cover',
    //     contain: 'contain',
    //     ...theme('spacing'),
    //   }),
    //   fill: ({ theme }) => ({
    //     gray: theme('colors.gray'),
    //   }),
    //   colors: {
    //     brown: {
    //       50: '#fdf8f6',
    //       100: '#f2e8e5',
    //       200: '#eaddd7',
    //       300: '#e0cec7',
    //       400: '#d2bab0',
    //       500: '#bfa094',
    //       600: '#a18072',
    //       700: '#977669',
    //       800: '#846358',
    //       900: '#43302b',
    //     },
    //     blue: {
    //       950: '#17275c',
    //     },
    //   },
    //   // spacing: {
    //   //   '13': '3.25rem',
    //   //   '15': '3.75rem',
    //   //   '128': '32rem',
    //   //   '144': '36rem',
    //   // },
    // },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') },
        h2: { fontSize: theme('fontSize.xl') },
        h3: { fontSize: theme('fontSize.lg') },
      });
    }),
    plugin(function ({ addVariant }) {
      addVariant('optional', '&:optional');
      addVariant('hocus', ['&:hover', '&:focus']);
      addVariant('inverted-colors', '@media (inverted-colors: inverted)');
    }),
  ],
};

export default config;
