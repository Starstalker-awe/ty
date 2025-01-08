import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
    content: [
        "./templates/**/*.tsx"
    ], // All the src files with tailwind classes
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#39a0ed",
                    dark: "#2a7bb8"
                },
                secondary: { DEFAULT: "#a8b3b8" },
                primaries: {
                    dark: "#35393b",
                    light: "#ededed"
                }
            },
            textShadow: {
                small: "#666 3px 3px 3px",
                minor: "#666 2px 2px 2px",
                tiny: "#666 1px 1px 1px"
            },
            borderWidth: { 1: "1px" },

            spacing: {
                128: "32rem",
                192: "48rem"
            }
        },
    },
    plugins: [
        plugin(({ matchUtilities, theme }) => {
            matchUtilities({
                'text-shadow': v => ({ textShadow: v })
            }, { values: theme('textShadow')})
        })
    ]
} satisfies Config;