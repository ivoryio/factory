export default function (colors, shadows, ...args) {
  return {
    primary: {
      color: colors.white,
      backgroundColor: colors.brand,
      boxShadow: `${shadows['button-shadow']}`,
      '&:hover': {
        backgroundColor: colors['brand-hover']
      },
      '&:disabled': {
        color: colors['pastel-blue'],
        border: 'none',
        background: colors['brand-disabled'],
        cursor: 'not-allowed',
        transform: 'scale(1)'
      }
    },
    outline: {
      backgroundColor: 'transparent',
      border: `1px solid ${colors.brand}`,
      color: colors.brand,
      '&:hover': {
        border: `1px solid ${colors['outline-hover']}`
      },
      '&:disabled': {
        border: `1px solid ${colors['outline-disabled']}`,
        color: colors['outline-disabled'],
        cursor: 'not-allowed',
        transform: 'scale(1)',
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    validation: {
      color: colors.white,
      boxShadow: shadows['button-shadow'],
      backgroundColor: colors.success,
      '&:hover': {
        backgroundColor: colors['brand-hover']
      }
    },
    destructive: {
      backgroundColor: colors.error,
      boxShadow: shadows['button-shadow'],
      color: `${colors.white}`,
      '&:hover': {
        backgroundColor: colors['error-hover']
      }
    }
  }
}
