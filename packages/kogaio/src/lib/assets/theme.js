import { buttonFn, cardFn, inputFn, typographyFn, tooltipFn } from './variants'
import { mergeDeep, hexToRgbA, isObjectEmpty } from '../utils/helpers'

export const defaultTheme = new function () {
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
    'modal-background': `${hexToRgbA(this.colors.gunmetal, 0.25)}`,
    'button-outline-alt': {
      '& div:first-child': {
        color: this.colors.gunmetal
      },
      border: `1px solid ${this.colors.gunmetal}`,
      '&:hover': {
        border: `1px solid ${this.colors.gunmetal}`
      }
    },
    'button-outline-dark': {
      '& div:first-child': {
        color: this.colors.white
      },
      border: `1px solid ${this.colors.alert}`,
      '&:hover': {
        border: `1px solid ${this.colors.alert}`
      }
    },
    overlay: {
      'background-color': hexToRgbA(this.colors.gunmetal, 0.6)
    }
  }
  this.textStyles = {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.625em'
    }
  }
  this.fonts = {
    primary:
      'Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
    complementary:
      '"Open Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif'
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
  this.fontWeights = ['lighter', 'regular', 'bold']
  this.letterSpacings = {
    normal: 'normal',
    tracked: '0.1rem',
    tight: '-0.05rem',
    mega: '0.25rem'
  }
  this.lineHeights = {
    solid: 1,
    title: 1.25,
    copy: 1.5,
    tooltip: 1.6,
    button: 2,
    input: 2
  }
  this.gutter = 4
  this.radii = [0, 1, 2, 3, 4, '50%']
  this.space = generateSpaces(this.gutter)

  function generateSpaces (gridUnit = 4) {
    return Array.from({ length: 100 }, (v, ix) => ix * gridUnit)
  }
}()

export function themeFactory (customTheme) {
  // #region initial theme
  const initialTheme = updateComponentVariantsWith(defaultTheme)
  if (!customTheme || isObjectEmpty(customTheme)) return initialTheme
  // #endregion

  // #region custom theme
  const updatedTheme = Object.assign(
    {},
    initialTheme,
    ...Object.keys(customTheme).map(style => ({
      [style]: mergeDeep(initialTheme[style], customTheme[style])
    }))
  )
  return updatedTheme
  // #endregion

  function updateComponentVariantsWith (theme, components) {
    const componentStyles = [
      { key: 'buttons', fn: buttonFn },
      { key: 'cards', fn: cardFn },
      { key: 'inputs', fn: inputFn },
      { key: 'tooltips', fn: tooltipFn },
      { key: 'typography', fn: typographyFn }
    ]
    return Object.assign(
      {},
      theme,
      ...componentStyles.map(({ key, fn: componentFn }) => ({
        [key]: componentFn(theme)
      }))
    )
  }
}
