export default function (theme) {
  const { colors, shadows } = theme
  return {
    white: {
      boxShadow: shadows['card-simple'],
      backgroundColor: colors.white
    },
    light: {
      boxShadow: shadows['card-simple'],
      backgroundColor: colors['pale-white']
    }
  }
}
