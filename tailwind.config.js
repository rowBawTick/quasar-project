/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  // content: ["./src/**/*.{html,js,vue}"],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  prefix: 'tw-',
}

