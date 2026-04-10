/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAFAF7',
        accent: {
          DEFAULT: '#3A5F42',
          light: '#6B7F5C',
          faint: '#EDF2EC',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          secondary: '#2A2A2A',
          muted: '#6B6B6B',
          faint: '#9A9A9A',
        },
        border: {
          DEFAULT: '#E0DDD6',
          hover: '#3A5F42',
        },
      },
      fontFamily: {
        serif: ['var(--font-crimson)', 'Georgia', 'serif'],
        sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1100px',
      },
      fontSize: {
        display: ['clamp(2.25rem, 5vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
