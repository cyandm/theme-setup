/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./**/*.php'],
	theme: {
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		// require('@tailwindcss/aspect-ratio'),
	],
};
