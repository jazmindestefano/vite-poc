import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-ujv': '#E1EE32',
      },
    },
  },
  plugins: [],
}

export default config;