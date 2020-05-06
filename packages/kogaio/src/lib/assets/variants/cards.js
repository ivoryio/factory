export default function ({ colors, shadows }) {
  return {
    white: {
      'box-shadow': shadows['card-simple'],
      'background-color': colors.white
    },
    light: {
      'box-shadow': shadows['card-simple'],
      'background-color': colors['pale-white']
    }
  }
}
