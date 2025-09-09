import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "foreground-alt": "hsl(var(--foreground-alt))",
        card: "oklch(var(--card))",
        "card-foreground": "oklch(var(--card-foreground))",
        popover: "oklch(var(--popover))",
        "popover-foreground": "oklch(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-alt": "hsl(var(--primary-alt))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-alt": "hsl(var(--secondary-alt))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--danger))",
        danger: "hsl(var(--danger))",
        gray: "hsl(var(--gray))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "ring-opaque": "hsl(var(--ring-opaque))",
        "violet-background": "hsl(var(--violet-background))",

        // Scrollbar colors
        "scrollbar-track": "hsl(var(--scrollbar-track))",
        "scrollbar-thumb": "hsl(var(--scrollbar-thumb))",
        "scrollbar-thumb-hover": "hsl(var(--scrollbar-thumb-hover))",

        // Chart colors
        "chart-1": "oklch(var(--chart-1))",
        "chart-2": "oklch(var(--chart-2))",
        "chart-3": "oklch(var(--chart-3))",
        "chart-4": "oklch(var(--chart-4))",
        "chart-5": "oklch(var(--chart-5))",
      },
      fontFamily: {
        sans: ["var(--font-bogart)", "system-ui"],
        "sans-alt": ["var(--font-glifko)", "system-ui"],
        mono: ["var(--font-geist-mono)", "system-ui"],
        konstanz: ["var(--font-konstanz)", "system-ui"],
        georgia: ["var(--font-georgia)", "system-ui"],
        inter: ["var(--font-inter)", "system-ui"],
        helvetica: ["Helvetica", "system-ui"],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        "6xl": ["var(--text-6xl)", "var(--text-6xl-line-height)"],
        "7xl": ["var(--text-7xl)", "var(--text-7xl-line-height)"],
        "10xl": ["var(--text-10xl)", "var(--text-10xl-line-height)"],
      },
      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "calc(var(--radius) + 14px)",
        "4xl": "calc(var(--radius) + 16px)",
        "5xl": "calc(var(--radius) + 24px)",
        "6xl": "calc(var(--radius) + 34px)",
      },
      boxShadow: {
        "1": "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
      screens: {
        xs: "32.5rem",
      },
      backgroundImage: {
        "gradient-1": "var(--gradient-1)",
        "gradient-2": "var(--gradient-2)",
        "gradient-3": "var(--gradient-3)",
        "gradient-4": "var(--gradient-4)",
        "gradient-5": "var(--gradient-5)",
        "gradient-6": "var(--gradient-6)",
        "gradient-7": "var(--gradient-7)",
        "gradient-8": "var(--gradient-8)",
        "gradient-9": "var(--gradient-9)",
        "gradient-10": "var(--gradient-10)",
        "gradient-11": "var(--gradient-11)",
      },
    },
  },
  plugins: [animate],
};

export default config;
