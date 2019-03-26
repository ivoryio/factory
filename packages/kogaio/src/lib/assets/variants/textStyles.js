export default function (colors, fontWeights) {
  return {
    h1: {
      fontSize: '2em'
    },
    h3: {
      fontSize: '1.25em'
    },
    h4: {
      fontSize: '1.125em'
    },
    h5: {
      fontSize: '1em'
    },
    h6: {
      fontSize: '0.875em'
    },
    link: {
      fontSize: '0.875em',
      color: colors.info,
      fontWeight: fontWeights[8],
      '&:visited': {
        fontWeight: fontWeights[4]
      }
    },
    'input-label': {
      fontSize: '0.875em'
    },
    'input-label-gray': {
      fontSize: '0.875em',
      color: colors.manatee
    },
    paragraph: {
      fontSize: '0.75em'
    },
    subtitle: {
      fontSize: '1em'
    },
    caption: {
      fontSize: '0.75em'
    },
    list: {
      fontSize: '0.875em'
    }
  }
}
