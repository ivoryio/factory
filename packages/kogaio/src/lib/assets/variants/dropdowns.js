export default function ({ borders, colors, radii, shadows, ...theme }) {
  const defaultStyle = {
    'background-color': colors.white,
    border: `${borders[1]} ${colors['azure-white']}`,
    '&.dropdown-active': {
      'border-color': colors.gunmetal
    },
    '&.dropdown-selected': {
      'border-top-left-radius': `${radii[2]}px`,
      'border-top-right-radius': `${radii[2]}px`,
      ':hover': {
        border: `${borders[1]} ${colors.gunmetal}`
      }
    },
    '.dropdown-text': {
      color: colors['dark-gunmetal']
    },
    '.dropdown-item': {
      ':hover': {
        'background-color': colors['white-smoke']
      },
      ':nth-of-type(n + 2)': {
        'border-top': `${borders[1]} ${colors['light-gray']}`
      },
      '&.selected': {
        'background-color': colors['ghost-white']
      }
    }
  }
  return {
    default: defaultStyle,
    disabled: {
      ...defaultStyle,
      'background-color': colors['ghost-white'],
      ':hover': {
        border: `${borders[1]} ${colors['azure-white']}`
      }
    },
    valid: {
      ...defaultStyle,
      '&.dropdown-selected': {
        border: `${borders[1]} ${colors.success}`,
        'box-shadow': shadows['input-basic']
      }
    },
    error: {
      ...defaultStyle,
      '&.dropdown-selected': {
        border: `${borders[1]} ${colors.error}`,
        'box-shadow': shadows['input-basic']
      }
    }
  }
}
