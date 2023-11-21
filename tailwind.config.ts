import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Component-son/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      custom_40: "40px",
      custom_32: "32px",
      custom_30: "30px",
      custom_24: "24px",
      custom_20: "20px",
      custom_16: "16px",
      custom_15: "15px",
      custom_11: "11px",
      custom_10: "10px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        custom_ice: "##CEFDF9",
        custom_skyBlue: "#B3E2FC",
        custom_lightBlue: "#96B2F9",
        custom_blue: "#797EF6",
        custom_navy: "#3929AA",
        custom_yellow: "#F3E86C",
        custom_peach: "#F1AD97",
        custom_orange: "#F69779",
        custom_lightGrey: "#D9D9D9",
        custom_cloud: "#CFDEE6",
        custom_skyGrey: "#CFE1F8",
        custom_smog: "#A5B3D8 ",
        custom_mint: "#79F6BA",
      },
    },
  },
  plugins: [],
};
export default config;
