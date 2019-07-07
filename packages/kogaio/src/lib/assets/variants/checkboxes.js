export default function ({ borders, colors, radii, shadows, ...theme }) {
  const defaultStyle = {
    cursor: 'pointer',
    ':hover input ~ span': {
      border: `${borders[1]} ${colors['paynes-gray']}`
    },
    '&.checkbox': {
      'background-color': colors.white,
      border: `${borders[1]} ${colors['pastel-blue']}`,
      'border-radius': `${radii[1]}px`,
      'box-shadow': shadows['input-basic'],
      '&::after': {
        'border-color': colors.brand
      }
    },
    color: colors.gunmetal
  }
  return {
    default: defaultStyle,
    disabled: {
      ...defaultStyle,
      cursor: 'not-allowed',
      ':hover input ~ span': {
        border: `${borders[1]} ${colors['pastel-blue']}`
      },
      '&.checkbox': {
        border: `${borders[1]} ${colors['pastel-blue']}`,
        'background-color': colors['ghost-white']
      },
      color: colors['pastel-blue']
    }
  }
}
