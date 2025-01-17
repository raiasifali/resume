/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "custom-gradient": "linear-gradient(to bottom, #34295c 0%, #1e1e1e 30%)",
                "t-gradient":
                    "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
                "n-gradient":
                    "linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)),linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
            },
            boxShadow: {
                "custom-inset": "-0.76px 0.76px 0.76px -1.52px #FFFFFF33 inset",
                custom: "0px 18.26px 22.83px 0px #0000000D",
            },
            backdropBlur: {
                custom: "149.14px",
            },
        },
    },
    plugins: [],
};

