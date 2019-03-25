export default function (colors, fontWeights) {
  return {
    h1: {
      fontSize: '1.775em',
      lineHeight: 1.83
    },
    h2: {
      fontSize: '1.575em',
      lineHeight: 1.43
    },
    h3: {
      fontSize: '1.245em',
      lineHeight: 1.61
    },
    link: {
      fontSize: '0.875em',
      color: colors.info,
      lineHeight: 1.71,
      fontWeight: fontWeights[8],
      '&:visited': {
        fontWeight: fontWeights[4]
      }
    },
    'input-label': {
      fontSize: '0.875em',
      lineHeight: 2
    },
    'input-label-gray': {
      fontSize: '0.875em',
      lineHeight: 2,
      color: colors.manatee
    },
    paragraph: {
      fontSize: '0.875em',
      lineHeight: 1.71
    },
    subtitle: {
      fontSize: '1em',
      lineHeight: 1.52
    },
    caption: {
      fontSize: '0.775em',
      lineHeight: 1.8
    },
    list: {
      fontSize: '0.875em',
      lineHeight: 2.43
    }
  }
}
