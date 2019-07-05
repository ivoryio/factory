export default function ({ borders, colors, ...theme }) {
  return {
    info: {
      border: `${borders[1]} ${colors.info}`,
      'background-color': colors.white,
      '& > div': {
        'i:first-of-type, .tooltip-text': {
          color: colors.info
        }
      },
      ':after': {
        borderColor: colors.info,
        'background-color': colors.white
      }
    },
    success: {
      border: `${borders[1]} ${colors.brand}`,
      'background-color': colors.white,
      '& > div': {
        'i:first-of-type, .tooltip-text': {
          color: colors.brand
        }
      },
      ':after': {
        borderColor: colors.brand,
        'background-color': colors.white
      }
    },
    error: {
      border: `${borders[1]} ${colors.error}`,
      'background-color': colors.white,
      '& > div': {
        'i:first-of-type, .tooltip-text': {
          color: colors.error
        }
      },
      ':after': {
        borderColor: colors.error,
        'background-color': colors.white
      }
    }
  }
}
