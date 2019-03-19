import {
  buttonsFactory,
  inputsFactory,
  textStylesFactory,
  tooltipsFactory
} from './variants'
import { mergeDeep } from './helpers'

const defaultTheme = new function () {
  this.colors = {
    brand: {
      primary: '#00aeef',
      complementary: '#009feb',
      hover: {
        primary: '#01a2de',
        complementary: '#0197df'
      },
      disabled: {
        background: '#b9e8fa',
        border: '#92d3eb'
      }
    },
    destructive: {
      primary: '#e33719',
      complementary: '#d63418',
      border: '#bf0711',
      hover: {
        primary: '#d93518',
        complementary: '#cc3216',
        border: '#b50710'
      },
      disabled: {
        border: '#db9586',
        primary: '#fdac9a',
        complementary: '#f2a594'
      }
    },
    error: '#fb5607',
    wispPink: '#fbeae5',
    alert: '#f0c808',
    validation: {
      primary: '#83b700',
      complementary: '#7dad03',
      hover: {
        border: '#699100',
        primary: '#7bab00',
        complementary: '#76a400'
      },
      disabled: {
        border: '#bcd47c',
        primary: '#dce19f',
        complementary: '#d5eba0'
      }
    },
    info: '#009fda',
    white: '#fff',
    'pale-white': '#fafcfd',
    'ghost-white': '#f6f9fb',
    'white-smoke': '#f2f6f9',
    'ice-white': '#dfe9f2',
    'azureish-white': '#d8e2ed',
    'azureish-grey': '#c4cdd5',
    'pastel-blue': '#b3c3d4',
    'light-gray': '#cdd3d9',
    manatee: '#979ca6',
    'paynes-gray': '#636f7c',
    independence: '#4f5767',
    'gun-metal': '#243143',
    'dark-gunmetal': '#1b202f',
    black: '#000',
    'modal-background': 'rgba(36, 49, 67, 0.25)'
  }
  this.shadows = {
    'button-basic': '0 1px 0 0 rgba(0, 0, 0, 0.05)',
    'button-extended':
      '0 1px 0 0 rgba(22, 29, 37, 0.1), inset 0 1px 0 1px rgba(255, 255, 255, 0.09)',
    'input-basic': '0 1px 0 0 rgba(22, 29, 37, 0.05)'
  }

  this.colorStyles = {
    'outline-alt': {
      border: `1px solid ${this.colors.independence}`,
      color: `${this.colors.brand.primary}`
    },
    'card-white': {
      boxShadow: '5px 0 10px 0 rgba(0, 0, 0, 0.15)',
      backgroundColor: this.colors.white
    },
    'card-gray': {
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)',
      backgroundColor: this.colors['ghost-white']
    },
    'menu-list': {
      boxShadow: '0 1px 4px 0 rgba(22, 29, 37, 0.35)',
      backgroundColor: this.colors.white
    }
  }
  this.gutter = '1em'
  this.breakpoints = {
    xs: '20em',
    sm: '30em',
    md: '48em',
    lg: '80em',
    xlg: '120em'
  }
  this.borders = [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid'
  ]

  this.fonts = {
    serif: 'athelas, georgia, times, serif',
    sansSerif: 'Roboto, sans-serif, -apple-system, BlinkMacSystemFont'
  }

  this.fontSizes = [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem'
  ]
  this.fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900]
  this.lineHeights = {
    solid: 1,
    title: 1.25,
    copy: 1.5,
    tooltip: 1.6,
    button: 1.9,
    input: 2
  }
  this.letterSpacings = {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  }
  this.radii = [0, 2, 4, 16, 32, '50%', '100%']
  this.space = [0, 4, 8, 16, 32, 64, 128, 256]

  this.buttons = buttonsFactory(this.colors, this.shadows)
  this.inputs = inputsFactory(this.colors, this.shadows)
  this.textStyles = textStylesFactory(this.colors, this.fontWeights)
  this.tooltips = tooltipsFactory(this.colors)
}()

function themeFactory (customTheme) {
  if (!customTheme) {
    return defaultTheme
  }
  const updatedStyles = Object.assign(
    {},
    ...Object.keys(customTheme).map(style => ({
      [style]: mergeDeep(defaultTheme[style], customTheme[style])
    }))
  )

  const colors = updatedStyles.colors || defaultTheme.colors
  const shadows = updatedStyles.shadows || defaultTheme.shadows

  const buttons = buttonsFactory(colors, shadows)
  const inputs = inputsFactory(colors, shadows)
  const textStyles = textStylesFactory(colors, shadows)
  const tooltips = tooltipsFactory(colors, shadows)

  const updatedTheme = {
    ...defaultTheme,
    ...updatedStyles,
    shadows,
    buttons,
    inputs,
    textStyles,
    tooltips
  }
  return updatedTheme
}

export { defaultTheme, themeFactory }
