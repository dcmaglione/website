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
        accent: '#5E81AC',

        // Light
        primaryBgLight: '#eceff4',
        secondaryBgLight: '#e5e9f0',
        primaryTextLight: '#2e3440',
        secondaryTextLight: '#3b4252',

        // Dark
        primaryBgDark: '#2e3440',
        secondaryBgDark: '#3b4252',
        primaryTextDark: '#eceff4',
        secondaryTextDark: '#e5e9f0',
      },
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
