import React from 'react'
import styled from 'styled-components'
import {
  alignSelf,
  borders,
  color,
  fontFamily,
  fontSize,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  space,
  textAlign,
  width
} from 'styled-system'

const Box = props => <StyledBox {...props} />

const StyledBox = styled.div`
  box-sizing: border-box;
  ${borders}
  ${space}
  ${color}
  ${height}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${width}
  ${fontFamily}
  ${fontSize}
  ${alignSelf}
  ${textAlign}
  ${props => props.css}
`

Box.propTypes = {
  ...borders.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...textAlign.propTypes
}
Box.displayName = 'Box'

export default Box
