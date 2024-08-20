import { Config } from 'tailwindcss'

const config: Config = {
  content: ['src/app/*.tsx', 'src/components/*.tsx'],
  theme: {
    screens: {
      tablet: '640px',
      desktop: '1280px',
    },
    colors: {
      'aqua-splash': '#3EE9E5',
      'midnight-navy': '#093F68',
      'slate-gray': '#777F98',
      'pure-white': '#FFFFFF',
      'deep-night': '#080C20',
      'raspberry-pink': '#FF2965',
      transparent: 'transparent',
    },
    fontSize: {
      base: [
        '0.9375rem',
        {
          lineHeight: '1.5625rem',
          fontWeight: '500',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '1.5625rem',
          fontWeight: '800',
        },
      ],
      xl: [
        '2rem',
        {
          lineHeight: '2.75rem',
          fontWeight: '800',
        },
      ],
      '2xl': [
        '2.5rem',
        {
          lineHeight: '3.4375rem',
          fontWeight: '800',
        },
      ],
      '3xl': [
        '3rem',
        {
          lineHeight: '3.5rem',
          fontWeight: '800',
        },
      ],
    },
    backgroundImage: {
      'footer-squiggle': "url('/bg-footer-squiggle.svg')",
    },
    extend: {
      width: {
        scrollbar: '12px',
      },
    },
  },
  plugins: [],
}

export default config
