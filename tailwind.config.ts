import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        mainbackground: "rgb(201, 218, 191)",
        sidebarbackground: "rgb(156, 169, 134)",
        darkergreen: "rgb(128, 141, 124)",
        darkestgreen: "rgb(95, 111, 101)",
        offwhite: "rgb(250, 237, 206)",
      },
      clipPath: {
        'circle': 'circle(50%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;

