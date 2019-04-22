export default function (theme) {
  const { colors, shadows } = theme
  return {
    primary: {
      '& div:first-child': {
        color: colors.white
      },
      backgroundColor: colors.brand,
      boxShadow: `${shadows['button-shadow']}`,
      '&:hover': {
        backgroundColor: colors['brand-hover']
      },
      '&:disabled': {
        '& div:first-child': {
          color: colors['pastel-blue']
        },
        border: 'none',
        background: colors['brand-disabled'],
        cursor: 'not-allowed',
        transform: 'scale(1)'
      }
    },
    outline: {
      backgroundColor: 'transparent',
      border: `1px solid ${colors.brand}`,
      '& div:first-child': {
        color: colors.brand
      },
      '&:hover': {
        border: `1px solid ${colors['outline-hover']}`
      },
      '&:disabled': {
        border: `1px solid ${colors['outline-disabled']}`,
        '& div:first-child': {
          color: colors['outline-disabled']
        },
        cursor: 'not-allowed',
        transform: 'scale(1)',
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    validation: {
      '& div:first-child': {
        color: colors.white
      },
      boxShadow: shadows['button-shadow'],
      backgroundColor: colors.success,
      '&:hover': {
        backgroundColor: colors['brand-hover']
      }
    },
    destructive: {
      backgroundColor: colors.error,
      boxShadow: shadows['button-shadow'],
      '& div:first-child': {
        color: `${colors.white}`
      },
      '&:hover': {
        backgroundColor: colors['error-hover']
      }
    }
  }
}
