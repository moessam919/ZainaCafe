import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            laptop: "1085px",
        },
        extend: {},
    },
    plugins: [],
};

export default config;
