const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: [
      './components/**/*.tsx',
      './components/**/*.ts',
      './pages/**/*.tsx',
      './pages/**/*.ts',
      './context/**/*.tsx',
      './context/**/*.ts',
    ],
  },
  darkMode: 'class',
  theme: {
    colors,
    theme: {},
    extend: {
      screens: {
        '3xl': '1920px',
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      colors: {
        primary: {
          DEFAULT: '#6C5CE7',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#E4E1FB',
          300: '#BCB5F4',
          400: '#9488EE',
          500: '#6C5CE7',
          600: '#4430E0',
          700: '#2F1CC1',
          800: '#241694',
          900: '#190F68',
        },
        error: {
          DEFAULT: '#FF6565',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFEFE',
          300: '#FFCBCB',
          400: '#FF9898',
          500: '#FF6565',
          600: '#FF3232',
          700: '#FE0000',
          800: '#CB0000',
          900: '#980000',
        },
        zircon: {
          DEFAULT: '#F5F8FF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F5F8FF',
          600: '#C2D4FF',
          700: '#8FB1FF',
          800: '#5C8DFF',
          900: '#2969FF',
        },
        whisper: {
          DEFAULT: '#F5F6FA',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F5F6FA',
          600: '#D3D7E9',
          700: '#B1B9D8',
          800: '#8F9AC7',
          900: '#6D7CB6',
        },
        'silver-chalice': {
          DEFAULT: '#A7A7A7',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F3F3F3',
          300: '#DADADA',
          400: '#C1C1C1',
          500: '#A7A7A7',
          600: '#8D8D8D',
          700: '#747474',
          800: '#5A5A5A',
          900: '#414141',
        },
        'spun-pearl': {
          DEFAULT: '#B0AEBC',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#E6E6EA',
          400: '#CBCAD3',
          500: '#B0AEBC',
          600: '#9592A5',
          700: '#7A768E',
          800: '#615F72',
          900: '#4A4856',
        },
        trout: {
          DEFAULT: '#4D4F5C',
          50: '#C2C4CC',
          100: '#B4B6C1',
          200: '#999BA9',
          300: '#7D8092',
          400: '#646778',
          500: '#4D4F5C',
          600: '#363740',
          700: '#1F1F24',
          800: '#070709',
          900: '#000000',
        },
        'steel-gray': {
          DEFAULT: '#2C2738',
          50: '#9B92B3',
          100: '#8E83A8',
          200: '#736692',
          300: '#5B5174',
          400: '#443C56',
          500: '#2C2738',
          600: '#14121A',
          700: '#000000',
          800: '#000000',
          900: '#000000',
        },
      },
    },
  },

  variants: {
    extend: {
      width: ['focus'],
      height: ['focus'],
      fontSize: ['focus'],
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
};
