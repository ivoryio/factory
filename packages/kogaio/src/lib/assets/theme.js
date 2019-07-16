import {
  buttonFn,
  cardFn,
  checkboxFn,
  dropdownFn,
  inputFn,
  typographyFn,
  tooltipFn
} from './variants'
import { mergeDeep, hexToRgbA } from './helpers'

const defaultTheme = new (function () {
  this.borders = [0, '1px solid', '2px solid', '3px solid', '4px solid']
  this.breakpoints = {
    xs: '20em',
    sm: '30em',
    md: '48em',
    lg: '80em',
    xlg: '120em'
  }
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
    'button-shadow': `0 1px 0 0 ${hexToRgbA(this.colors.black, 0.05)}`,
    'input-basic': `0 1px 0 0 ${hexToRgbA(this.colors['dark-gunmetal'], 0.05)}`,
    'card-simple': `0 1px 1px 1px ${hexToRgbA(this.colors.black, 0.15)}`,
    'card-highlight': `2px 0 10px 0 ${hexToRgbA(this.colors.black, 0.15)}`,
    'menu-list': `0 1px 4px 0 ${hexToRgbA(this.colors['dark-gunmetal'], 0.35)}`
  }
  this.colorStyles = {
    'menu-list': {
      boxShadow: this.shadows['menu-list'],
      backgroundColor: this.colors.white
    },
    modal: {
      'background-color': `${hexToRgbA(this.colors.gunmetal, 0.25)}`
    },
    'button-outline-alt': {
      color: this.colors.gunmetal,
      border: `${this.borders[1]} ${this.colors.gunmetal}`,
      '&:hover': {
        border: `${this.borders[1]} ${this.colors.gunmetal}`
      }
    },
    'button-outline-dark': {
      color: this.colors.white,
      border: `${this.borders[1]} ${this.colors.alert}`,
      '&:hover': {
        border: `${this.borders[1]} ${this.colors.alert}`
      }
    },
    overlay: {
      'background-color': hexToRgbA(this.colors.gunmetal, 0.6)
    }
  }
  this.textStyles = {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2px'
    }
  }
  this.fonts = {
    primary:
      'Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
    complementary:
      '"Open Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif'
  }
  this.fontSizes = ['0.75rem', '0.875rem', '1rem', '1.25rem', '1.5rem', '2rem']
  this.fontWeights = { lighter: 300, regular: 400, bold: 700 }
  this.letterSpacings = {
    normal: 'normal',
    tracked: '0.1rem',
    tight: '-0.05rem',
    mega: '0.25rem'
  }
  this.lineHeights = {
    solid: 1,
    title: 1.25,
    paragraph: 1.5,
    tooltip: 1.6,
    button: 2,
    input: 2,
    list: 2.5
  }
  this.radii = {
    none: 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '8': 8,
    '16': 16,
    round: '50%'
  }
  this.gutter = 4
  this.space = generateSpaces(this.gutter)

  function generateSpaces (gridUnit = 4) {
    return Array.from({ length: 100 }, (v, ix) => ix * gridUnit)
  }
})()

export function themeFactory (customTheme = {}) {
  const newTheme = mergeDeep(defaultTheme, customTheme)
  const updatedTheme = updateComponentVariantsWith(newTheme)
  return updatedTheme

  function updateComponentVariantsWith (theme) {
    const componentStyles = [
      { key: 'buttons', fn: buttonFn },
      { key: 'cards', fn: cardFn },
      { key: 'checkboxes', fn: checkboxFn },
      { key: 'dropdowns', fn: dropdownFn },
      { key: 'inputs', fn: inputFn },
      { key: 'tooltips', fn: tooltipFn },
      { key: 'typography', fn: typographyFn }
    ]
    return Object.assign(
      {},
      theme,
      ...componentStyles.map(({ key, fn: componentFn }) => ({
        [key]: mergeDeep(componentFn(theme), theme[key])
      }))
    )
  }
}
