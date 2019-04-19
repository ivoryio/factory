export default function (theme) {
  const { colors, fonts, fontWeights } = theme
  return {
    h1: {
      fontSize: '2rem'
    },
    h2: {
      fontSize: '1.5rem'
    },
    h3: {
      fontSize: '1.25rem',
      fontFamily: fonts.complementary
    },
    h4: {
      fontSize: '1.125rem'
    },
    h5: {
      fontSize: '1rem',
      textTransform: 'uppercase'
    },
    h6: {
      fontSize: '0.875rem'
    },
    link: {
      color: colors.brand,
      fontFamily: fonts.complementary,
      fontSize: '0.875rem',
      fontWeight: fontWeights[2],
      textDecoration: 'underline',
      '&:visited': {
        fontWeight: fontWeights[1]
      }
    },
    inputLabel: {
      fontFamily: fonts.primary,
      fontSize: '0.875rem',
      fontWeight: fontWeights[1],
      lineHeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal'
    },
    paragraph: {
      fontFamily: fonts.primary,
      fontSize: '0.75rem',
      lineHeight: 1.5
    },
    subtitle: {
      fontFamily: fonts.complementary,
      fontSize: '1rem'
    },
    caption: {
      fontFamily: fonts.primary,
      fontSize: '0.75rem'
    },
    list: {
      fontFamily: fonts.primary,
      lineHeight: 2.43,
      fontSize: '0.875rem'
    }
  }
}
