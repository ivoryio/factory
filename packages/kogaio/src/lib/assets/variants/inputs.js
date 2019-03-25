export default function (colors, shadows, ...args) {
  return {
    default: {
      backgroundColor: `${colors.white}`,
      boxShadow: shadows['input-basic'],
      border: `1px solid ${colors['pastel-blue']}`,
      '&:focus': {
        border: `1px solid ${colors['paynes-gray']}`
      },
      '&:hover': {
        border: `1px solid ${colors['paynes-gray']}`
      }
    },
    disabled: {
      backgroundColor: `${colors['ghost-white']}`,
      border: `1px solid ${colors['ice-white']}`,
      boxShadow: 'none',
      color: colors['manatee'],
      cursor: 'not-allowed'
    },
    valid: {
      boxShadow: shadows['input-basic'],
      border: `1px solid ${colors.brand}`,
      backgroundColor: `${colors.white}`
    },
    error: {
      boxShadow: shadows['input-basic'],
      border: `1px solid ${colors.error}`,
      backgroundColor: `${colors.white}`
    }
  }
}
