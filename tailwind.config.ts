import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionDelay: {
        "100": "100ms",
        "200": "200ms",
        "300": "300ms",
        "400": "400ms",
      },
      fontFamily: {
        mono: ["Monomaniac One", "sans-serif"],
        space: ["Space Mono", "sans-serif"],
      },
      fontSize: {
        "clamp-xl": "clamp(1.25rem, 4vw, 4.5rem)", // Largest size
        "clamp-lg": "clamp(1.15rem, 3.5vw, 3.5rem)", // Smaller
        "clamp-md": "clamp(1.05rem, 3vw, 2.5rem)", // Even smaller
        "clamp-sm": "clamp(0.95rem, 2.5vw, 1.75rem)", // Smallest
        "clamp-xs": "clamp(0.8rem, 2vw, 1.25rem)", // Smallest
        "clamp-2xs": "clamp(0.7rem, 1.5vw, 1rem)", // Even smaller than xs
        "clamp-3xs": "clamp(0.6rem, 1vw, 0.75rem)", // Smallest size
      },
      colors: {
        accent: "#06b6d4",
        dark: "#151515",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        custompurple:
          "linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%)",
        customblue:
          "radial-gradient(circle at 10% 20%, rgb(28, 142, 210) 0%, rgb(113, 192, 244) 47.3%, rgb(139, 238, 230) 88.4%)",
      },
    },
  },
  plugins: [],
};
export default config;
