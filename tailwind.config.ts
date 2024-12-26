import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				'sm': '500px',
				'md': '768px',
				'lg': '991px',
				'xl': '1200px',
			},
			colors: {
				primary: '#2f66ff',
				danger: 'rgba(248, 113, 113, 1)',
				dark: "#0940d9"
			},
	

		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
