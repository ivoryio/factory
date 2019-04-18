export default function (theme) {
  const { colors } = theme
  return {
    info: {
      border: `solid 1px ${colors.info}`,
      backgroundColor: colors.white,
      '& > div': {
        'i:first-of-type, .tooltip-text': {
          color: colors.info
        }
      },
      '&:after': {
        borderColor: colors.info,
        backgroundColor: colors.white
      }
    },
    success: {
      border: `solid 1px ${colors.brand}`,
      backgroundColor: colors.white,
      '& > div': {
        'i:first-of-type, .tooltip-text': {
          color: colors.brand
        }
      },
      '&:after': {
        borderColor: colors.brand,
        backgroundColor: colors.white
      }
    },
    error: {
      border: `solid 1px ${colors.error}`,
      backgroundColor: colors.white,
      '& > div': {
        'i:first-of-type, .tooltip-text': {
          color: colors.error
        }
      },
      '&:after': {
        borderColor: colors.error,
        backgroundColor: colors.white
      }
    }
  }
}
