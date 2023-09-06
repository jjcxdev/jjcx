import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'accent': 'rgb(106, 207, 199)',
        'dark': 'rgb(19, 29, 32)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'custompurple': 'linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%)',
        'customblue': 'radial-gradient(circle at 10% 20%, rgb(28, 142, 210) 0%, rgb(113, 192, 244) 47.3%, rgb(139, 238, 230) 88.4%)',
      },
    },
  },
  plugins: [],
}
export default config
