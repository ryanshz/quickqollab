/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	daisyui: {
		themes: ['business', 'corporate'],
	},
	plugins: ['@tailwindcss/typography', require('daisyui')],
};
