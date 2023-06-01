/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "hsl(270deg 3% 85%)",
        tertiary: "hsl(0deg 0% 100%)",
        secondary: "hsl(209deg 10% 50%)",
        primary: "hsl(320deg 9% 7%)",
        error: "hsl(19deg 97% 57%)",
        fast: "hsl(0deg 0% 100%)",
        normal: "hsl(209deg 10% 80%)",
        slow: "hsl(19deg 97% 57%)",
      },
    },
  },
  plugins: [],
};
