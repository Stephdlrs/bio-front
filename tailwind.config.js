/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './pages/**/*.{js,vue,ts}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#85b19b', // muted greenish sage
          light: '#a8c9b7',   // softer sage tint
          dark:  '#5e8d76',   // deeper moss tone
        },
        secondary: {
          DEFAULT: '#4a90a4', // desaturated teal-blue
          light: '#77b4c0',   // airy sea-blue
          dark:  '#376c7a',   // dark teal
        },
        tertiary: {
          DEFAULT: '#8c7d69', // warm taupe-brown
          light: '#b6a993',   // sand beige highlight
          dark:  '#6b5e4d',   // grounded brown-gray
        },
      },
    },
  },
  plugins: [],
}