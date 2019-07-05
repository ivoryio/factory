export default function ({ borders, colors, shadows, ...theme }) {
  return {
    primary: {
      color: colors.white,
      'background-color': colors.brand,
      'box-shadow': shadows['button-shadow'],
      ':hover': {
        'background-color': colors['brand-hover']
      },
      ':disabled': {
        color: colors['pastel-blue'],
        border: 'none',
        'background-color': colors['brand-disabled'],
        cursor: 'not-allowed',
        transform: 'scale(1)'
      }
    },
    outline: {
      'background-color': 'transparent',
      border: `${borders[1]} ${colors.brand}`,
      color: colors.brand,
      ':hover': {
        border: `${borders[1]} ${colors['outline-hover']}`
      },
      ':disabled': {
        border: `${borders[1]} ${colors['outline-disabled']}`,
        color: colors['outline-disabled'],
        cursor: 'not-allowed',
        transform: 'scale(1)',
        ':hover': {
          'background-color': 'transparent'
        }
      }
    },
    validation: {
      color: colors.white,
      'box-shadow': shadows['button-shadow'],
      'background-color': colors.success,
      ':hover': {
        'background-color': colors['brand-hover']
      }
    },
    destructive: {
      'background-color': colors.error,
      'box-shadow': shadows['button-shadow'],
      color: colors.white,
      ':hover': {
        'background-color': colors['error-hover']
      }
    }
  }
}
