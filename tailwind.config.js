/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			xxs: "300px",
			xs: "390px",
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},

		extend: {
			animation: {
				marquee: "marquee 10s linear infinite",
				marquee2: "marquee2 10s linear infinite",
			},
			keyframes: {
				marquee: {
					"0%": { transform: "translateY(0%)" },
					"100%": { transform: "translateY(-100%)" },
				},
				marquee2: {
					"0%": { transform: "translateY(100%)" },
					"100%": { transform: "translateY(0%)" },
				},
			},

			fontFamily: {
				Lato: ["Lato", "sans-serif"],
				azonix: ["Azonix", "sans-serif"],
			},
			backgroundImage: {
				gif: "url(./assets/backVideo.gif)",
			},
		},
	},
};
