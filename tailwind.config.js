/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        gray: {
          100: 'var(--tw-gray-100)',
          200: 'var(--tw-gray-200)',
          300: 'var(--tw-gray-300)',
          400: 'var(--tw-gray-400)',
          500: 'var(--tw-gray-500)',
          600: 'var(--tw-gray-600)',
          700: 'var(--tw-gray-700)',
          800: 'var(--tw-gray-800)',
          900: 'var(--tw-gray-900)',
        },
        primary: {
          DEFAULT: 'var(--tw-primary)',
          active: 'var(--tw-primary-active)',
          light: 'var(--tw-primary-light)',
          clarity: 'var(--tw-primary-transparent)',
          inverse: 'var(--tw-primary-inverse)',
        },
        success: {
          DEFAULT: 'var(--tw-success)',
          active: 'var(--tw-success-active)',
          light: 'var(--tw-success-light)',
          clarity: 'var(--tw-success-transparent)',
          inverse: 'var(--tw-success-inverse)',
        },
        warning: {
          DEFAULT: 'var(--tw-warning)',
          active: 'var(--tw-warning-active)',
          light: 'var(--tw-warning-light)',
          clarity: 'var(--tw-warning-transparent)',
          inverse: 'var(--tw-warning-inverse)',
        },
        danger: {
          DEFAULT: 'var(--tw-danger)',
          active: 'var(--tw-danger-active)',
          light: 'var(--tw-danger-light)',
          clarity: 'var(--tw-danger-transparent)',
          inverse: 'var(--tw-danger-inverse)',
        },
        info: {
          DEFAULT: 'var(--tw-info)',
          active: 'var(--tw-info-active)',
          light: 'var(--tw-info-light)',
          clarity: 'var(--tw-info-transparent)',
          inverse: 'var(--tw-info-inverse)',
        },
        dark: {
          DEFAULT: 'var(--tw-dark)',
          active: 'var(--tw-dark-active)',
          light: 'var(--tw-dark-light)',
          clarity: 'var(--tw-dark-transparent)',
          inverse: 'var(--tw-dark-inverse)',
        },
        secondary: {
          DEFAULT: 'var(--tw-secondary)',
          active: 'var(--tw-secondary-active)',
          light: 'var(--tw-secondary-light)',
          clarity: 'var(--tw-secondary-transparent)',
          inverse: 'var(--tw-secondary-inverse)',
        },
        light: {
          DEFAULT: 'var(--tw-light)',
          active: 'var(--tw-light-active)',
          light: 'var(--tw-light-light)',
          clarity: 'var(--tw-light-transparent)',
          inverse: 'var(--tw-light-inverse)',
        },
        brand: {
          DEFAULT: 'var(--tw-brand)',
          active: 'var(--tw-brand-active)',
          light: 'var(--tw-brand-light)',
          clarity: 'var(--tw-brand-transparent)',
          inverse: 'var(--tw-brand-inverse)',
        },
        coal: {
          100: '#15171C',
          200: '#13141A',
          300: '#111217',
          400: '#0F1014',
          500: '#0D0E12',
          600: '#0B0C10',
          black: '#000000',
          clarity: 'rgba(24, 25, 31, 0.50)',
        }
      }
    }
  }
};