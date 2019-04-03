import React from 'react'
import styled from 'styled-components'
import {
  alignSelf,
  borders,
  color,
  colorStyle,
  fontFamily,
  fontSize,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
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
  ${colorStyle}
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
  ${position}
  ${props => props.css}
`

Box.propTypes = {
  ...borders.propTypes,
  ...space.propTypes,
  ...color.propTypes,
  ...colorStyle.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...position.propTypes,
  ...textAlign.propTypes
}
Box.displayName = 'Box'

export default Box
