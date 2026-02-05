/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#fafafa",
        card: "#09090b",
        "card-foreground": "#fafafa",
        popover: "#09090b",
        "popover-foreground": "#fafafa",
        primary: "#22c55e",
        "primary-foreground": "#000000",
        secondary: "#27272a",
        "secondary-foreground": "#fafafa",
        muted: "#27272a",
        "muted-foreground": "#a1a1aa",
        accent: "#27272a",
        "accent-foreground": "#fafafa",
        destructive: "#ef4444",
        "destructive-foreground": "#fafafa",
        border: "#27272a",
        input: "#27272a",
        ring: "#22c55e",
      },
    },
  },
  plugins: [],
};
