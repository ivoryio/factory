import styled from 'styled-components'
import {
  background,
  border,
  compose,
  shadow,
  color,
  colorStyle,
  layout,
  position,
  space,
  typography
} from 'styled-system'
import propTypes from '@styled-system/prop-types'

import { themed } from '../utils'
import { pointerEvents, visibility } from '../utils/customProps'

const Box = styled.div`
  box-sizing: border-box;
  ${themed('Box')}

  ${compose(
    background,
    border,
    color,
    colorStyle,
    layout,
    pointerEvents,
    position,
    shadow,
    space,
    typography,
    visibility
  )}
`

Box.propTypes = {
  ...propTypes.background,
  ...propTypes.border,
  ...propTypes.compose,
  ...propTypes.shadow,
  ...propTypes.color,
  ...propTypes.colorStyle,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography
}
Box.displayName = 'Box'

/** @component */
export default Box
