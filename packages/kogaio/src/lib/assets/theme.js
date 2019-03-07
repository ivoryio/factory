import { buttons, inputs, textStyles, tooltips } from './componentStyles'

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
    black: '#000',
    'modal-background': 'rgba(36, 49, 67, 0.25)'
  },
  colorStyles: {
    brand: {
      color: '#00aeef',
      '&:hover': {
        color: '#008fc4'
      },
      '&:disabled': {
        color: '#b9e8fa'
      }
    },
    'card-white': {
      boxShadow: '5px 0 10px 0 rgba(0, 0, 0, 0.15)',
      backgroundColor: '#fff'
    },
    'card-gray': {
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      backgroundColor: '#f6f9fb'
    },
    'menu-list': {
      boxShadow: '0 1px 4px 0 rgba(22, 29, 37, 0.35)',
      backgroundColor: '#fff'
    }
  },
  fonts: {
    serif: 'athelas, georgia, times, serif',
    sansSerif: 'Roboto, sans-serif, -apple-system, BlinkMacSystemFont'
  },
  inputs,
  textStyles,
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
  tooltips,
  space: [0, 4, 8, 16, 32, 64, 128, 256]
}
