/** @type {import('tailwindcss').Config} */
module.exports = {
  fontFamily: {
    // ⭐️ 'zen' という名前で '--font-zen' を定義！
    zen: "var(--font-zen)",

    // ⭐️ Tailwindのデフォルトの sans も上書きして、確実に適用！
    sans: ["var(--font-zen)", "sans-serif"],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/scss/**/*.scss",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
