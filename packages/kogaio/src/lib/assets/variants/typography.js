export default function ({
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  ...theme
}) {
  return {
    h1: {
      fontSize: fontSizes[5]
    },
    h2: {
      fontSize: fontSizes[4]
    },
    h3: {
      fontSize: fontSizes[3],
      fontFamily: fonts.complementary
    },
    h4: {
      fontSize: fontSizes[3]
    },
    h5: {
      fontSize: fontSizes[2],
      textTransform: 'uppercase'
    },
    h6: {
      fontSize: fontSizes[1]
    },
    link: {
      color: colors.brand,
      fontFamily: fonts.complementary,
      fontSize: fontSizes[1],
      fontWeight: fontWeights.bold,
      textDecoration: 'underline',
      ':visited': {
        fontWeight: fontWeights.regular
      }
    },
    inputLabel: {
      fontFamily: fonts.primary,
      fontSize: fontSizes[1],
      fontWeight: fontWeights.regular,
      lineHeight: 'normal',
      fontStyle: 'normal',
      fontStretch: 'normal'
    },
    paragraph: {
      fontFamily: fonts.primary,
      fontSize: fontSizes[0],
      lineHeight: lineHeights.paragraph
    },
    subtitle: {
      fontFamily: fonts.complementary,
      fontSize: fontSizes[2]
    },
    caption: {
      fontFamily: fonts.primary,
      fontSize: fontSizes[0]
    },
    list: {
      fontFamily: fonts.primary,
      lineHeight: lineHeights.list,
      fontSize: fontSizes[1]
    }
  }
}
