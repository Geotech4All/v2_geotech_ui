/** @type {import('tailwindcss').Config} */
module.exports = {
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
        "gradient-radial-sm": "radial-gradient(circle, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 65%); "
      },
      fontFamily: {
        "inter": ['Inter', 'sans-serif'],
        "lobster": ["Lobster", "cursive"],
        "montserrat": ["Montserrat", "sans-serif"],
        "nunito": ["Nunito", "sans-serif"],
        "pacifico": ["Pacifico", "cursive"]
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("prettier-plugin-tailwindcss")
  ],
}
