/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      blue: {
        600: "#3B82F6",
      },
      gray: {
        100: "oklch(96.7% 0.003 264.542)",
        200: "oklch(92.8% 0.006 264.531)",
        500: "oklch(55.1% 0.027 264.364)",
        900: "oklch(21% 0.034 264.665)",
      },
    },
    fontFamily: {},
  },
};
