export default function (colors) {
  return {
    info: {
      border: `solid 1px ${colors.info}`,
      backgroundColor: `${colors.white}`,
      '& > div': {
        'i:first-of-type, .tooltip-text': {
          color: `${colors.info}`
        }
      },
      '&:after': {
        borderColor: `${colors.info}`,
        backgroundColor: `${colors.white}`
      }
    },
    success: {
      border: `solid 1px ${colors.validation.complementary}`,
      backgroundColor: `${colors.white}`,
      '& > div': {
        'i:first-of-type, .tooltip-text': {
          color: `${colors.validation.complementary}`
        }
      },
      '&:after': {
        borderColor: `${colors.validation.complementary}`,
        backgroundColor: `${colors.white}`
      }
    },
    error: {
      border: `solid 1px ${colors.error}`,
      backgroundColor: `${colors.wispPink}`,
      '& > div': {
        'i, .tooltip-text': {
          color: `${colors.error}`
        }
      },
      '&:after': {
        backgroundColor: `${colors.wispPink}`,
        borderColor: `${colors.error}`
      }
    }
  }
}
