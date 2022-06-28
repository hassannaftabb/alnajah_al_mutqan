module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { min: '821px', max: '1279px' },
        // => @media (max-width: 1023px) { ... }

        md: { min: '770px', max: '820px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '769px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
