export default function (colors) {
  return {
    h1: {
      color: `${colors['gun-metal']}`,
      fontSize: '1.75em',
      lineHeight: 1.85
    },
    h2: {
      fontSize: '1.5em',
      lineHeight: 1.45
    },
    h3: {
      fontSize: '1.25em',
      lineHeight: 1.6
    },
    link: {
      fontSize: '0.875em',
      color: `${colors.info}`,
      lineHeight: 1.7,
      fontWeight: 900,
      '&:visited': {
        fontWeight: 'normal'
      }
    },
    'input-label': {
      fontSize: '0.875em',
      lineHeight: 2
    },
    paragraph: {
      fontSize: '0.875em',
      lineHeight: 1.7
    },
    subtitle: {
      fontSize: '1em',
      lineHeight: 1.5
    },
    caption: {
      fontSize: '0.8em',
      lineHeight: 1.8
    },
    list: {
      fontSize: '0.875em',
      lineHeight: 2.5
    },
    error: {
      fontSize: '0.875em',
      lineHeight: 1.7,
      color: `${colors.error}`
    }
  }
}
