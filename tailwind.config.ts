import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            tablet: "640px",
            laptop: "1280px",
            desktop: "1920px",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "bg-body-color": "var(--bg-body-color)",
                "grid-color": "var(--grid-color)",
                "bg-card-color": "var(--bg-card-color)",
                "hover-bg-card-color": "var(--hover-bg-card-color)",
                
                "heading-color": "var(--heading-color)",
                "hover-heading-color": "var(--hover-heading-color)",
                
                "sub-heading-color": "var(--sub-heading-color)",
                "hover-sub-heading-color": "var(--hover-sub-heading-color)",
                
                "text-color": "var(--text-color)",
                "hover-text-color": "var(--hover-text-color)",

                "footer-bg": "var(--bg-footer)",
                "footer-text": "var(--text-footer-color)",
            },
            height: {
                hb: "6.25rem",
                ab: "35.938rem",
                f: "43rem",
            },
            spacing: {
                box: "26.563rem",
                sbox: "18.75rem",
            },
        },
        fontFamily: {
            sans: ["var(--font-inter)"],
        },
    },
    plugins: [],
};
export default config;
