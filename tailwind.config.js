module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'theme-sm': ['14px', '20px'],
        'theme-xs': ['12px', '16px'],
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
        },
        orange: {
          50: '#fff7ed',
          500: '#f97316',
        },
      },
      boxShadow: {
        'theme-sm': '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)',
        'slider-navigation': '0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
      },
      width: {
        '6.5': '1.625rem',
      },
      zIndex: {
        '999': '999',
        'max': '9999',
      },
    },
  },
  plugins: [],
}