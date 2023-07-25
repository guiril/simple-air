const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      lg: { max: '1359px' },
      md: { max: '1024px' },
      sm: { max: '767px' }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0px',
        lg: '32px',
        md: '24px',
        sm: '16px'
      }
    },
    colors: {
      primary: {
        700: '#4C24A3',
        600: '#622FCD',
        500: '#773BF8',
        400: '#9262F9',
        300: '#AD89FB',
        200: '#C9B1FC',
        100: '#E4D8FE',
        50: '#F7F0FF'
      },
      secondary: {
        600: '#faad14',
        500: '#ffc53d',
        400: '#ffd666'
      },
      neutral: {
        700: '#000000',
        600: '#222222',
        500: '#717171',
        400: '#B0B0B0',
        300: '#DDDDDD',
        200: '#EBEBEB',
        100: '#F7F7F7',
        0: '#FFFFFF'
      },
      success: {
        700: '#389e0d',
        600: '#52c41a',
        500: '#73d13d',
        400: '#95de64'
      },
      warning: {
        600: '#fa8c16',
        500: '#ffa940',
        400: '#ffc069'
      },
      fail: {
        600: '#f5222d',
        500: '#ff4d4f',
        400: '#ff7875'
      },
      cyan: {
        600: '#13c2c2',
        500: '#36cfc9',
        400: '#5cdbd3'
      },
      daybreak: {
        600: '#1677ff',
        500: '#4096ff',
        400: '#69b1ff'
      }
    },
    fontSize: {
      h1: [
        '2.5rem', // 40px
        {
          lineHeight: '1.2em',
          fontWeight: '600'
        }
      ],
      h2: [
        '1.75rem', // 28px
        {
          lineHeight: '1.3em',
          fontWeight: '600'
        }
      ],
      h3: [
        '1.5rem', // 24px
        {
          lineHeight: '1.32em',
          fontWeight: '600'
        }
      ],
      'title-md-sb': [
        '1.25rem', // 20px
        {
          lineHeight: '1.4em',
          letterSpacing: '0.02em',
          fontWeight: '600'
        }
      ],
      'title-md-md': [
        '1.25rem',
        {
          lineHeight: '1.2em',
          fontWeight: '500'
        }
      ],
      'title-sm-md': [
        '1.125rem', // 18px
        {
          lineHeight: '1.45em',
          letterSpacing: '0.02em',
          fontWeight: '500'
        }
      ],
      'p-md-r': [
        '1rem',
        {
          lineHeight: '1.25em',
          fontWeight: '400'
        }
      ],
      'p-md-sb': [
        '1rem',
        {
          lineHeight: '1.25em',
          letterSpacing: '0.02em',
          fontWeight: '600'
        }
      ],
      'p-md-body': [
        '1rem',
        {
          lineHeight: '1.5em',
          fontWeight: '400'
        }
      ],
      'p-sm-r': [
        '0.875rem', // 14px
        {
          lineHeight: '1.4em',
          letterSpacing: '0.02em',
          fontWeight: '400'
        }
      ],
      'p-sm-r-2': [
        '0.875rem',
        {
          lineHeight: '1.3em',
          letterSpacing: '0.02em',
          fontWeight: '400'
        }
      ],
      'p-sm-sb': [
        '0.875rem',
        {
          lineHeight: '1.3em',
          fontWeight: '600'
        }
      ],
      'p-sm-btn': [
        '0.875rem',
        {
          lineHeight: '1.7em',
          fontWeight: '400'
        }
      ],
      'p-sm-btn-sb': [
        '0.875rem',
        {
          lineHeight: '1.7em',
          letterSpacing: '0.02em',
          fontWeight: '600'
        }
      ],
      'p-xs': [
        '0.75rem', // 12px
        {
          lineHeight: '1.3em',
          letterSpacing: '0.02em',
          fontWeight: '400'
        }
      ],
      'p-xs-md': [
        '0.75rem',
        {
          lineHeight: '1.3em',
          fontWeight: '500'
        }
      ]
    },
    extend: {}
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        'input:focus-visible': {
          outline: 'none'
        }
      });
    }),
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '1280px'
        },
        '@screen lg': {
          '.container': {
            maxWidth: '100%',
            paddingRight: '32px',
            paddingLeft: '32px'
          }
        },
        '@screen md': {
          '.container': {
            paddingRight: '24px',
            paddingLeft: '24px'
          }
        },
        '@screen sm': {
          '.container': {
            paddingRight: '16px',
            paddingLeft: '16px'
          }
        }
      });
    })
  ]
};
