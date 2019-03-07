export default function (colors, shadows, ...args) {
  return {
    default: {
      boxShadow: shadows['input-basic'],
      border: `1px solid ${colors['pastel-blue']}`,
      backgroundColor: `${colors.white}`,
      '&:focus': {
        boxShadow: shadows['input-basic'],
        border: `1px solid ${colors.info}`,
        backgroundColor: `${colors.white}`
      },
      '&:hover': {
        ...colors.focused
      }
    },
    valid: {
      boxShadow: shadows['input-basic'],
      border: `1px solid ${colors.validation.complementary}`,
      backgroundColor: `${colors.white}`
    },
    error: {
      boxShadow: shadows['input-basic'],
      border: `1px solid ${colors.error}`,
      backgroundColor: `${colors.wispPink}`
    },
    disabled: {
      backgroundColor: `${colors['ghost-white']}`,
      border: `1px solid ${colors['ice-white']}`,
      boxShadow: 'none',
      cursor: 'not-allowed'
    }
  }
}
