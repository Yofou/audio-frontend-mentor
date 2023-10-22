import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./**!(node_modules)/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      black: '#000',
      orange: {
        300: '#FBAF85',
        600: '#D87D4A',
      },
      white: {
        'pure': '#FFF',
        300: '#FAFAFA',
        600: '#F1F1F1',
      },
      black: {
        'pure': '#000',
        300: '#101010',
      }
    },
    fontFamily: {
      manrope: ["'Manrope Variable'", 'sans-serif']
    },
    fontSize: {
      h1: "3.5rem",
      h2: '2.5rem',
      h3: '2.25rem',
      h4: '1.75rem',
      h5: '1.5rem',
      h6: '1.125rem',
      overline: '0.875rem',
      subtitle: '0.8125rem',
      body: '0.9375rem'
    }
	},
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        '.font-heading-1': {
          fontFamily: theme('fontFamily.manrope'),
          fontSize: theme('fontSize.h1'),
          letterSpacing: '0.125rem', 
          lineHeight: '6.625rem',
          fontWeight: 700
        },
        '.font-heading-2': {
          fontFamily: theme('fontFamily.manrope'),
          fontSize: theme('fontSize.h2'),
          letterSpacing: '0.08931rem', 
          lineHeight: '2.25rem',
          fontWeight: 700
        },
        '.font-heading-3': {
          fontFamily: theme('fontFamily.manrope'),
          fontSize: theme('fontSize.h3'),
          letterSpacing: '0.07144rem', 
          lineHeight: '2.25rem',
          fontWeight: 700
        },
        '.font-heading-4': {
          fontFamily: theme('fontFamily.manrope'),
          fontSize: theme('fontSize.h4'),
          letterSpacing: '0.125rem', 
          lineHeight: 'normal',
          fontWeight: 700
        },
        '.font-heading-5': {
          fontFamily: theme('fontFamily.manrope'),
          fontSize: theme('fontSize.h5'),
          letterSpacing: '0.10713rem', 
          lineHeight: 'normal',
          fontWeight: 700
        },
        '.font-heading-6': {
          fontFamily: theme('fontFamily.manrope'),
          fontSize: theme('fontSize.h6'),
          letterSpacing: '0.08038rem', 
          lineHeight: 'normal',
          fontWeight: 700
        },
        '.font-outline': {
          fontFamily: theme('fontFamily.manrope'),
          fontSize: theme('fontSize.outline'),
          letterSpacing: '0.625rem', 
          lineHeight: 'normal',
          fontWeight: 400
        },
        '.font-subtitle': {
          fontFamily: theme('fontFamily.manrope'),
          fontSize: theme('fontSize.subtitle'),
          letterSpacing: '0.05806rem', 
          lineHeight: '1.5625rem',
          fontWeight: 700
        },
        '.font-body': {
          fontFamily: theme('fontFamily.manrope'),
          fontSize: theme('fontSize.body'),
          letterSpacing: '0.05806rem', 
          lineHeight: '1.5625rem',
          fontWeight: 500
        }
      })
    })
  ],
}
