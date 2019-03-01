import { buttons, inputs } from './componentStyles'

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
  buttons,
  colors: {
    brand: '#00aeef',
    'brand-hover': '#008fc4',
    'brand-disabled': '#b9e8fa',
    error: '#fb5607',
    alert: '#f0c808',
    valid: '#7dad03',
    info: '#009fda',
    white: '#fff',
    'pale-white': '#fafcfd',
    'ghost-white': '#f6f9fb',
    'white-smoke': '#f2f6f9',
    'ice-white': '#dfe9f2',
    'azureish-white': '#d8e2ed',
    'pastel-blue': '#b3c3d4',
    'light-gray': '#cdd3d9',
    manatee: '#979ca6',
    'paynes-gray': '#636f7c',
    independence: '#4f5767',
    'gun-metal': '#243143',
    'dark-gunmetal': '#1b202f',
    black: '#000'
  },
  colorStyles: {
    input: {
      regular: {
        background: '#fff',
        border: '1px solid #b3c3d4'
      },
      focused: {
        background: '#fff',
        border: '1px solid #009fda'
      },
      error: {
        background: '#fbeae5',
        border: '1px solid #fb5607'
      },
      valid: {
        background: '#fff',
        border: '1px solid #7dad03'
      },
      disabled: {
        background: '#f9fafb',
        border: '1px solid #dfe3e8'
      }
    },
    button: {
      regular: {
        'background-image': 'linear-gradient(to bottom, #00aeef, #009feb)',
        border: '1px solid #009fda'
      },
      hover: {
        'background-image': 'linear-gradient(to bottom, #01a2de, #0197df)',
        border: '1px solid #008cc0'
      },
      disabled: {
        'background-color': '#b9e8fa',
        border: '1px solid #92d3eb'
      },
      outlined: {
        'background-color': '#fff',
        border: '1px solid #009fda'
      },
      'outline-hover': {
        'background-color': 'rgba(0, 159, 218, 0.07)',
        border: '1px solid #009fda'
      },
      'outline-disabled': {
        'background-color': '#fff',
        border: '1px solid #b9e8fa'
      },
      error: {
        'background-image': 'linear-gradient(to bottom, #e33719, #d63418)',
        border: 'solid 1px #bf0711'
      },
      'error-hover': {
        'background-image': 'linear-gradient(to bottom, #d93518, #cc3216)',
        border: '1px solid #b50710'
      },
      'error-disabled': {
        'background-image': 'linear-gradient(to bottom, #fdac9a, #f2a594)',
        border: '1px solid #db9586'
      }
    }
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif:
      'Roboto, sans-serif, -apple-system, BlinkMacSystemFont'
  },
  inputs,
  textStyles: {
    h1: {
      fontSize: '1.9rem',
      fontFamily: 'Roboto, sans-serif, -apple-system, BlinkMacSystemFont',
      lineHeight: 1.83
    },
    h2: {
      fontSize: '1.6rem',
      fontFamily: 'Roboto, sans-serif, -apple-system, BlinkMacSystemFont',
      lineHeight: 1.43
    },
    h3: {
      fontSize: '1.3',
      fontFamily: 'Roboto, sans-serif, -apple-system, BlinkMacSystemFont',
      lineHeight: 1.61
    },
    default: {
      fontSize: '1rem',
      fontFamily: 'Roboto, sans-serif, -apple-system, BlinkMacSystemFont',
      lineHeight: 1.6
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
