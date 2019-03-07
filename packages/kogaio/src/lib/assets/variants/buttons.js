import { hexToRgbA } from '../helpers'

export default function (colors, shadows) {
  const { brand, validation, destructive } = colors

  return {
    primary: {
      color: colors.white,
      border: `1px solid ${colors.info}`,
      backgroundImage: `linear-gradient(to bottom, ${brand.primary}, ${
        brand.complementary
      })`,
      boxShadow: '0 1px 0 0 rgba(0, 0, 0, 0.05)',
      '&:active': {
        transform: 'scale(0.965)'
      },
      '&:focus': {
        outlineColor: 'transparent',
        outlineStyle: 'none'
      },
      '&:hover': {
        color: colors.white,
        border: `1px solid ${colors.info}`,
        backgroundImage: `linear-gradient(to bottom, ${brand.hover.primary}, ${
          brand.hover.complementary
        })`
      },
      '&:disabled': {
        border: `1px solid ${brand.disabled.border}`,
        color: brand.white,
        background: brand.disabled.background,
        cursor: 'not-allowed',
        transform: 'scale(1)',
        '&:hover': {
          backgroundImage: `linear-gradient(to bottom, ${
            colors.brand
          }, #009feb)`
        }
      }
    },
    outline: {
      border: `1px solid ${colors.info}`,
      color: `${brand.primary}`,
      backgroundColor: 'transparent',
      '&:active': {
        transform: 'scale(0.965)'
      },
      '&:focus': {
        outlineColor: 'transparent',
        outlineStyle: 'none'
      },
      '&:hover': {
        backgroundColor: `${hexToRgbA(colors.info, 0.07)}`,

        border: `1px solid ${brand.primary}`,
        color: `${brand.primary}`
      },
      '&:disabled': {
        border: `1px solid ${brand.disabled.border}`,
        backgroundColor: `${colors.white}`,
        color: `${brand.disabled.border}`,
        cursor: 'not-allowed',
        transform: 'scale(1)',
        '&:hover': {
          backgroundColor: 'transparent'
        }
      }
    },
    validation: {
      color: colors.white,
      boxShadow: shadows['button-extended'],
      border: `solid 1px ${validation.complementary}`,
      backgroundImage: `linear-gradient(to bottom, ${validation.primary}, ${
        validation.complementary
      })`,
      '&:active': {
        transform: 'scale(0.965)'
      },
      '&:focus': {
        outlineColor: 'transparent',
        outlineStyle: 'none'
      },
      '&:hover': {
        boxShadow: shadows['button-extended'],
        border: `1px solid ${validation.hover.border}`,
        backgroundImage: `linear-gradient(to bottom, ${
          validation.hover.primary
        }, ${validation.hover.complementary});`
      },
      '&:disabled': {
        border: `1px solid ${validation.disabled.border}`,
        backgroundImage: `linear-gradient(to bottom, ${
          validation.disabled.primary
        }, ${validation.disabled.complementary})`,
        cursor: 'not-allowed',
        transform: 'scale(1)'
      }
    },
    destructive: {
      backgroundImage: `linear-gradient(to bottom, ${destructive.primary} 0%, ${
        destructive.complementary
      })`,
      border: `1px solid ${destructive.border}`,
      boxShadow: shadows['button-extended'],
      color: '#fff',
      '&:focus': {
        outlineColor: 'transparent',
        outlineStyle: 'none'
      },
      '&:active': {
        transform: 'scale(0.965)'
      },
      '&:hover': {
        boxShadow: shadows['button-extended'],
        backgroundImage: `linear-gradient(to bottom, ${
          destructive.hover.primary
        } 1%, ${destructive.hover.complementary});`,
        border: `1px solid ${destructive.hover.border}`
      },
      '&:disabled': {
        backgroundImage: `linear-gradient(to bottom, ${
          destructive.disabled.primary
        }, ${destructive.disabled.complementary})`,
        border: `1px solid ${destructive.disabled.border}`,
        cursor: 'not-allowed',
        transform: 'scale(1)'
      }
    }
  }
}
