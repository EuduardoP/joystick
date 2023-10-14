import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'd-wh': '#F8F8F2',
        'd-cy': '#8BE9FD',
        'd-gr': '#50FA7B', 
        'd-pi': '#FF79C6',
        'd-or': '#FFB86C',
        'd-pu': '#BD93F9',
        'd-re': '#FF5555',
        'd-ye': '#F1FA8C',
        'd-co': '#6272A4',
      },
    },
  },
  plugins: [],
}
export default config
