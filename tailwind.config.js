module.exports = {
  theme: {

    // Enable dark mode.
    // darkMode: 'media',
	  
	  container: {
			center: true,
      padding: 'var(--gutter)',
    },

    variants: {
      backgroundColor: ['responsive', 'hover'],
      borderColor: ['responsive', 'focus'],
    },


    fontFamily: {
      body: ['arial', 'sans-serif']
    },
    

    extend: {
      spacing: {
        'gutter': 'var(--gutter)',
        'gutter-sm': 'var(--gutter-sm)',
        'gutter-lg': 'var(--gutter-lg)'
      },
      colors: {
        white: '#FFF',
        black: '#111',
        primary: {
            '50': '#fbf5f7', 
            '100': '#f6ecee', 
            '200': '#eacfd5', 
            '300': '#ddb2bb', 
            '400': '#c37988', 
            '500': '#A93F55', 
            '600': '#98394d', 
            '700': '#7f2f40', 
            '800': '#652633', 
            '900': '#531f2a'
        },
        secondary: {
            '50': '#fef6f7', 
            '100': '#feeeef', 
            '200': '#fcd4d6', 
            '300': '#fabbbd', 
            '400': '#f6878c', 
            '500': '#F2545B', 
            '600': '#da4c52', 
            '700': '#b63f44', 
            '800': '#913237', 
            '900': '#77292d'
        },
        trinary: {
            '50': '#f9f9f9', 
            '100': '#f2f3f3', 
            '200': '#dfe1e0', 
            '300': '#cccfcd', 
            '400': '#a6aba8', 
            '500': '#808782', 
            '600': '#737a75', 
            '700': '#606562', 
            '800': '#4d514e', 
            '900': '#3f4240'
        }
      },
    }
  },

  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],

  mode: 'jit',
  purge: {
    content: [
      './dist/**/*.js',
      './dist/**/*.html'
    ],
  },
  variants: {

  },
}