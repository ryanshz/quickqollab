/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,tsx}'],
	daisyui: {
		themes: ['black', 'corporate'],
	},
	plugins: ['@tailwindcss/typography', require('daisyui')],
};
