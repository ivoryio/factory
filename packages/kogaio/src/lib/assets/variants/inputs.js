export default function ({ borders, colors, shadows }) {
  return {
    default: {
      'background-color': colors.white,
      border: `${borders[1]} ${colors['pastel-blue']}`,
      'box-shadow': shadows['input-basic'],
      '&:focus, &:hover': {
        border: `${borders[1]} ${colors['paynes-gray']}`
      }
    },
    disabled: {
      'background-color': `${colors['ghost-white']}`,
      border: `${borders[1]} ${colors['ice-white']}`,
      'box-shadow': 'none',
      color: colors.manatee,
      cursor: 'not-allowed'
    },
    valid: {
      'background-color': `${colors.white}`,
      border: `${borders[1]} ${colors.brand}`,
      'box-shadow': shadows['input-basic']
    },
    error: {
      'background-color': `${colors.white}`,
      border: `${borders[1]} ${colors.error}`,
      'box-shadow': shadows['input-basic']
    }
  }
}
