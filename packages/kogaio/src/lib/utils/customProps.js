import { compose, height, style, width } from 'styled-system'
import { mapProps } from './helpers'

export const dimensions = mapProps(({ dimensions, ...rest }) => {
  if (Array.isArray(dimensions)) {
    const [width, height] = dimensions
    return {
      ...rest,
      width,
      height: height || width
    }
  }
  return {
    ...rest,
    width: dimensions,
    height: dimensions
  }
})(
  compose(
    width,
    height
  )
)

export const visibility = style({
  prop: 'visibility'
})
