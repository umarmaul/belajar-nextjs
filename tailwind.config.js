/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["var(--font-poppins)"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
