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
          "custom-gradient": `radial-gradient(#f2f2f2 65%, transparent 66%), 
                              conic-gradient(#fff 0% 60%, transparent 60% 100%)`,
      },
      
      transitionDelay: {
        "0s": "0ms",
        '4s': '4000ms',
        "8s": "8000ms",
        "12s": "12000ms",
        "16s": "16000ms",
       },
			animation: {
        fadeIn12s: "fadeIn 12s ease-out infinite",
			},

			keyframes: {
				fadeIn: {
          "0%": { opacity: "0.1" },
          "20%": { opacity: "0.8"},
          "40%": { opacity: "1"},
          "80%": { opacity: "0.6"},
          "100%": { opacity: "0.1"}
        },
        typing:{
          from: {
            width:"0"
          }
        },
        blink:{
          "50%":{
            "border-color": "transparent"
          }
        }
			},
    },
  },
  plugins: [],
};
export default config;
