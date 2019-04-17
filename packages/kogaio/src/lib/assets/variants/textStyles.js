export default function (colors, fonts, fontWeights) {
  return {
    h1: {
      fontSize: '2em'
    },
    h2: {
      fontSize: '1.5em'
    },
    h3: {
      fontSize: '1.25em',
      fontFamily: fonts.complementary
    },
    h4: {
      fontSize: '1.125em'
    },
    h5: {
      fontSize: '1em',
      textTransform: 'uppercase'
    },
    h6: {
      fontSize: '0.875em'
    },
    buttonLabel: {
      fontFamily: fonts.primary,
      fontSize: '0.75em',
      lineHeight: 2,
      fontWeight: fontWeights[2]
    },
    link: {
      color: colors.brand,
      fontFamily: fonts.complementary,
      fontSize: '0.875em',
      fontWeight: fontWeights[2],
      textDecoration: 'underline',
      '&:visited': {
        fontWeight: fontWeights[1]
      }
    },
    inputLabel: {
      fontFamily: fonts.primary,
      fontSize: '0.875em',
      fontWeight: 'normal',
      lineHeight: 'normal'
    },
    paragraph: {
      fontFamily: fonts.primary,
      fontSize: '0.75em',
      lineHeight: 1.5
    },
    subtitle: {
      fontFamily: fonts.complementary,
      fontSize: '1em'
    },
    caption: {
      fontFamily: fonts.primary,
      fontSize: '0.75em'
    },
    list: {
      fontFamily: fonts.primary,
      lineHeight: 2.43,
      fontSize: '0.875em'
    }
  }
}
