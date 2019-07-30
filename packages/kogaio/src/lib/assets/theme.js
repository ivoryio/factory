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

const BORDERS = [0, '1px solid', '2px solid', '3px solid', '4px solid']
const BREAKPOINTS = {
  xs: '20em',
  sm: '30em',
  md: '48em',
  lg: '80em',
  xlg: '120em'
}
const COLORS = {
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
const SHADOWS = {
  'button-shadow': `0 1px 0 0 ${hexToRgbA(COLORS.black, 0.05)}`,
  'input-basic': `0 1px 0 0 ${hexToRgbA(COLORS['dark-gunmetal'], 0.05)}`,
  'card-simple': `0 1px 1px 1px ${hexToRgbA(COLORS.black, 0.15)}`,
  'card-highlight': `2px 0 10px 0 ${hexToRgbA(COLORS.black, 0.15)}`,
  'menu-list': `0 1px 4px 0 ${hexToRgbA(COLORS['dark-gunmetal'], 0.35)}`
}
const COLOR_STYLES = {
  'menu-list': {
    boxShadow: SHADOWS['menu-list'],
    backgroundColor: COLORS.white
  },
  modal: {
    'background-color': `${hexToRgbA(COLORS.gunmetal, 0.25)}`
  },
  'button-outline-alt': {
    color: COLORS.gunmetal,
    border: `${BORDERS[1]} ${COLORS.gunmetal}`,
    '&:hover': {
      border: `${BORDERS[1]} ${COLORS.gunmetal}`
    }
  },
  'button-outline-dark': {
    color: COLORS.white,
    border: `${BORDERS[1]} ${COLORS.alert}`,
    '&:hover': {
      border: `${BORDERS[1]} ${COLORS.alert}`
    }
  },
  overlay: {
    'background-color': hexToRgbA(COLORS.gunmetal, 0.6)
  }
}
const FONTS = {
  primary:
    'Rubik, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif',
  complementary:
    '"Open Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen, Ubuntu, Cantarell, sans-serif'
}
const FONT_SIZES = ['0.75rem', '0.875rem', '1rem', '1.25rem', '1.5rem', '2rem']
const FONT_WEIGHTS = { lighter: 300, regular: 400, bold: 700 }
const GUTTER = 4
const LETTER_SPACINGS = {
  normal: 'normal',
  tracked: '0.1rem',
  tight: '-0.05rem',
  mega: '0.25rem'
}
const LINE_HEIGHTS = {
  solid: 1,
  title: 1.25,
  paragraph: 1.5,
  tooltip: 1.6,
  button: 2,
  input: 2,
  list: 2.5
}
const RADII = {
  none: 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '8': 8,
  '16': 16,
  round: '50%'
}

const TEXT_STYLES = {
  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.2px'
  }
}

const defaultTheme = {
  borders: BORDERS,
  breakpoints: BREAKPOINTS,
  colors: COLORS,
  colorStyles: COLOR_STYLES,
  fonts: FONTS,
  fontSizes: FONT_SIZES,
  fontWeights: FONT_WEIGHTS,
  letterSpacings: LETTER_SPACINGS,
  lineHeights: LINE_HEIGHTS,
  radii: RADII,
  shadows: SHADOWS,
  space: generateSpaces(GUTTER),
  textStyles: TEXT_STYLES
}

function generateSpaces (gridUnit = 4) {
  return Array.from({ length: 100 }, (v, ix) => ix * gridUnit)
}

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
