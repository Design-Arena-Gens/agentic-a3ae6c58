import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          50: '#effef4',
          100: '#d9fbe5',
          200: '#b5f6cc',
          300: '#7eecaa',
          400: '#3fdb82',
          500: '#18c566',
          600: '#0f9f52',
          700: '#0f7e45',
          800: '#10643b',
          900: '#0e5233'
        }
      }
    },
  },
  plugins: [],
} satisfies Config
