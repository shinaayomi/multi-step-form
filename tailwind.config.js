/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "marine-blue": "var(--marine-blue)",
        "purplish-blue": "var(--purplish-blue)",
        "pastel-blue": "var(--pastel-blue)",
        "light-blue": "var(--light-blue)",
        "strawberry-red": "var(--strawberry-red)",
        "cool-gray": "var(--cool-gray)",
        "light-gray": "var(--light-gray)",
        magnolia: "var(--magnolia)",
        alabaster: "var(--alabaster)",
      },
      fontFamily: {
        "ubuntu-medium": "UbuntuMedium",
        "ubuntu-bold": "UbuntuBold",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
