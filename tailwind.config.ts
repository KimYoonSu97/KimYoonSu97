import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mono)", "var(--font-pretendard)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
