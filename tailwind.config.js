/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['ui-sans-serif', 'system-ui', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(1200px circle at 0% 0%, rgba(59,130,246,0.15), transparent 50%), radial-gradient(1200px circle at 100% 100%, rgba(236,72,153,0.15), transparent 50%)',
      }
    },
  },
  plugins: [],
}
