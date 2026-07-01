/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        tan: {
          DEFAULT: '#F3EFE7',
          50:  '#FDFCFB',
          100: '#FAF8F4',
          200: '#F6F1EB',
          300: '#F3EFE7',
          400: '#EAE3D6',
          500: '#DDD5C4',
          600: '#CEC3AE',
          700: '#B8A893',
          800: '#9E8E79',
          900: '#7D6E5D',
        },
        blue: '#2563EB',
        lavender: '#A29BFE',
        ink: '#111111',
        muted: '#666666',
        line: '#DDD5C4',
        neutral: {
          DEFAULT: '#19181B',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
      },
      borderRadius: {
        'card': '0px',
      },
    },
  },
  plugins: [],
};
