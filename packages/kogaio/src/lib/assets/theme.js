import {
  buttonsFactory,
  inputsFactory,
  textStylesFactory,
  tooltipsFactory
} from './variants'
import { mergeDeep, hexToRgbA, isObjectEmpty } from '../utils/helpers'

export const defaultTheme = new function () {
  this.colors = {
    brand: '#66bb6a',
    'brand-hover': '#4caf50',
    'brand-disabled': '#dfe9f2',
    'outline-hover': '#43a047',
    'outline-disabled': '#a5d6a7',
    error: '#ff7043',
    'error-hover': '#ff5722',
    alert: '#fbc02d',
    info: '#64b5f6',
    success: '#66bb6a',
    white: '#ffffff',
    'pale-white': '#fafcfd',
    'ghost-white': '#f6f9fb',
    'white-smoke': '#f2f6f9',
    'ice-white': '#dfe9f2',
    'azure-white': '#d8e2ed',
    'pastel-blue': '#b3c3d4',
    'light-gray': '#cdd3d9',
    manatee: '#979ca6',
    'paynes-gray': '#636f7c',
    independence: '#4f5767',
    gunmetal: '#243143',
    'dark-gunmetal': '#1b202f',
    black: '#000000'
  }
  this.shadows = {
    'button-basic': `0 1px 0 0 ${hexToRgbA(this.colors.black, 0.05)}`,
    'button-extended': `0 1px 0 0 ${hexToRgbA(
      this.colors['dark-gunmetal'],
      0.05
    )}, 0 1px 0 0 ${hexToRgbA(this.colors['dark-gunmetal'], 0.1)}`,
    'input-basic': `0 1px 0 0 ${hexToRgbA(this.colors['dark-gunmetal'], 0.05)}`,
    'card-simple': `0 1px 1px 1px ${hexToRgbA(this.colors.black, 0.15)}`,
    'card-highlight': `2px 0 10px 0 ${hexToRgbA(this.colors.black, 0.15)}`,
    'menu-list': `0 1px 4px 0 ${hexToRgbA(this.colors['dark-gunmetal'], 0.35)}`
  }
  this.colorStyles = {
    'card-white': {
      boxShadow: this.shadows['card-simple'],
      backgroundColor: this.colors.white
    },
    'card-gray': {
      boxShadow: this.shadows['card-simple'],
      backgroundColor: this.colors['pale-white']
    },
    'menu-list': {
      boxShadow: this.shadows['menu-list'],
      backgroundColor: this.colors.white
    },
    'modal-background': `${hexToRgbA(this.colors.gunmetal, 0.25)}`,
    'button-outline-alt': {
      color: this.colors.gunmetal,
      border: `1px solid ${this.colors.gunmetal}`,
      '&:hover': {
        border: `1px solid ${this.colors.gunmetal}`
      }
    },
    'button-outline-dark': {
      color: this.colors.white,
      border: `1px solid ${this.colors.alert}`,
      '&:hover': {
        border: `1px solid ${this.colors.alert}`
      }
    }
  }
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
    primary:
      'Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
    complementary:
      'Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif'
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
  this.radii = [0, 1, 2, 4, 16, 32, '50%', '100%']
  this.space = [0, 4, 8, 16, 32, 64, 128, 256]

  this.buttons = buttonsFactory(this.colors, this.shadows)
  this.inputs = inputsFactory(this.colors, this.shadows)
  this.textStyles = textStylesFactory(this.colors, this.fontWeights)
  this.tooltips = tooltipsFactory(this.colors)
}()

export function themeFactory (customTheme) {
  if (!customTheme || isObjectEmpty(customTheme)) return defaultTheme

  const updatedTheme = Object.assign(
    defaultTheme,
    ...Object.keys(customTheme).map(style => ({
      [style]: mergeDeep(defaultTheme[style], customTheme[style])
    }))
  )

  const { colors, shadows } = updatedTheme
  const buttons = buttonsFactory(colors, shadows)
  const inputs = inputsFactory(colors, shadows)
  const textStyles = textStylesFactory(colors, shadows)
  const tooltips = tooltipsFactory(colors, shadows)

  return {
    ...updatedTheme,
    buttons,
    inputs,
    textStyles,
    tooltips
  }
}
