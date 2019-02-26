import React from 'react'
import styled from 'styled-components'
import {
  alignSelf,
  color,
  flex,
  fontFamily,
  fontSize,
  order,
  space,
  textAlign,
  width
} from 'styled-system'

const Box = props => <StyledBox {...props} />

const StyledBox = styled.div`
  box-sizing: border-box;
  ${space}
  ${color}
  ${width}
  ${fontFamily}
  ${fontSize}
  ${flex}
  ${order}
  ${alignSelf}
  ${textAlign}
  ${props => props.css}
`

Box.displayName = 'Box'

Box.propTypes = {
  ...space.propTypes,
  ...color.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...textAlign.propTypes
}

export default Box
