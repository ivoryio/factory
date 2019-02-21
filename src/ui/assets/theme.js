export default {
  gutter: 10,
  breakpoints: {
    sm: 0, // zero represents the default (for mobile-first approach)
    md: '48em',
    lg: '80em'
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
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
  },
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  heights: [16, 32, 64, 128, 256],
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
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  mq: {
    small: '@media (max-width: 600px)'
  },
  radii: [0, 2, 4, 16, 9999, '100%'],
  width: [16, 32, 64, 128, 256]
}
