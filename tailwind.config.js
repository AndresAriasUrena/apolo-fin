/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'apolo-purple': '#8C5FFF',
          'apolo-aqua': '#8DE2DC',
          'apolo-purple': '#8C5FFF',
          'apolo-aqua': '#8DE2DC',
          'apolo-coral': '#FF5C72',
          'apolo-black': '#000000',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'slide-up': 'slideUp 0.5s ease-out',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          slideUp: {
            '0%': { transform: 'translateY(100px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          }
        }
      },
    },
    plugins: [],
  }