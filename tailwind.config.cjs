module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,svg}"],
  theme: {
    extend: {
      fontFamily: {
				inter: ['Inter', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
        mono: ['Roboto Mono', "monospace"],
      },
      screens: {
        'xs': '320px',
      },
    },
  },
  plugins: [],
};
