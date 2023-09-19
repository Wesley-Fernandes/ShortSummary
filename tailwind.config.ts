import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      borderColor:{
        "gray-1": "#0c0c0cc8",
      },
      outlineColor:{
        'purple-1': '#8257E5',
      },
      colors: {
        'purple-1': '#8257E5',
      },
      backgroundImage: {
        "gray-1": "#0c0c0cc8",
        'purple-1': '#8257E5',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
