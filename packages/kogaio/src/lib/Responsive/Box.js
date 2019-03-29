import React from 'react'
import styled from 'styled-components'
import {
  alignSelf,
  color,
  fontFamily,
  fontSize,
  height,
  minHeight,
  minWidth,
  space,
  textAlign,
  width
} from 'styled-system'

const Box = props => <StyledBox {...props} />

const StyledBox = styled.div`
  box-sizing: border-box;
  ${space}
  ${color}
  ${height}
  ${minHeight}
  ${minWidth}
  ${width}
  ${fontFamily}
  ${fontSize}
  ${alignSelf}
  ${textAlign}
  ${props => props.css}
`

Box.displayName = 'Box'

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...height.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...textAlign.propTypes
}
Box.displayName = 'Box'

export default Box
