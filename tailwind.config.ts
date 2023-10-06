import type { Config } from 'tailwindcss'

const config: Config = {
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    function ({ addUtilities }: {addUtilities:any}) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '10px 10px 20px rgba(0, 0, 0, 0.7)',  // Adjust values to your preference
        },
      }
      addUtilities(newUtilities);
    }
  ],
}
export default config
