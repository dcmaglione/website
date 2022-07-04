const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        // Accent
        accent: '#e5383b',

        // Light
        primaryBgLight: '#f8f9fa',
        secondaryBgLight: '#e9ecef',
        primaryTextLight: '#212529',
        secondaryTextLight: '#343a40',
        hoverTextLight: '#6c757d',

        // Dark
        primaryBgDark: '#212529',
        secondaryBgDark: '#343a40',
        primaryTextDark: '#f8f9fa',
        secondaryTextDark: '#e9ecef',
        hoverTextDark: '#adb5bd',
      },
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
