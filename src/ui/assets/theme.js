export default {
  gutter: '1em',
  breakpoints: {
    xs: '20em',
    sm: '30em',
    md: '48em',
    lg: '80em',
    xlg: '120em'
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid'
  ],
  colors: {
    accent: '#2980b9',
    background: '#ecf0f1',
    black: '#191919',
    confirm: '##2ecc71',
    error: '#e74c3c',
    highlight: '#3498db',
    placeholder: '#bdc3c7',
    text: '#484848',
    warning: '#e67e22',
    white: '#fff'
  },
  colorStyles: {
    accent: {
      color: '#2980b9'
    },
    background: {
      color:'#ecf0f1'
    },
    black: {
      color: '#191919'
    },
    confirm: {
      color: '##2ecc71'
    },
    error: {
      color: '#e74c3c'
    },
    highlight: {
      color: '#3498db'
    },
    placeholder: {
      color: '#bdc3c7'
    },
    text: {
      color: '#484848'
    },
    warning: {
      color: '#e67e22'
    },
    white: {
      color: '#fff'
    }
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif: '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
  },
  textStyles: {
    h1: {
      fontSize: ['2.8rem', '2.7rem'][0],
      fontFamily: 'Roboto',
      lineHeight: 1.83
    },
    h2: {
      fontSize: ['2.5rem', '2.4rem'][0],
      fontFamily: 'Roboto',
      lineHeight: 1.43
    },
    h3: {
      fontSize: ['2rem', '1.9rem'][0],
      fontFamily: 'Roboto',
      lineHeight: 1.61
    }
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  radii: [0, 2, 4, 16, 9999, '100%'],
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256]
}
