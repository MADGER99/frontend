/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   // "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    //"./components/**/*.{js,ts,jsx,tsx,mdx}",
   // "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
            //DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))'
          }
      }
    },
  },
  plugins: [],
}