/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4f46e5',
          foreground: '#eef2ff',
        },
        secondary: {
          DEFAULT: '#64748b',
          foreground: '#0f172a',
        },
        background: {
          light: '#f8fafc',
          dark: '#0f172a',
        },
      },
      boxShadow: {
        glow: '0 25px 65px rgba(79, 70, 229, 0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadein: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadein: 'fadein 0.8s ease-in-out forwards',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
    },
  ],
}

