export default function ({ borders, colors }) {
  return {
    default: {
      'background-color': colors.white,
      border: `${borders[1]} ${colors.independence}`,
      'i:first-of-type, .tooltip-text': {
        color: colors.gunmetal
      },
      ':after': {
        'border-color': colors.independence,
        'background-color': colors.white
      }
    },
    info: {
      'background-color': colors.white,
      border: `${borders[1]} ${colors.info}`,
      'i:first-of-type, .tooltip-text': {
        color: colors.info
      },
      ':after': {
        'border-color': colors.info,
        'background-color': colors.white
      }
    },
    success: {
      'background-color': colors.white,
      border: `${borders[1]} ${colors.brand}`,
      'i:first-of-type, .tooltip-text': {
        color: colors.success
      },
      ':after': {
        'border-color': colors.success,
        'background-color': colors.white
      }
    },
    error: {
      'background-color': colors.white,
      border: `${borders[1]} ${colors.error}`,
      'i:first-of-type, .tooltip-text': {
        color: colors.error
      },
      ':after': {
        'border-color': colors.error,
        'background-color': colors.white
      }
    }
  }
}
