import React from 'react'
import styled from 'styled-components'
import {
  alignSelf,
  color,
  fontFamily,
  fontSize,
  space,
  textAlign,
  width
} from 'styled-system'
import theme from '../assets/theme'

const Box = props => <StyledBox {...props} />

const StyledBox = styled.div`
  box-sizing: border-box;
  ${space}
  ${color}
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
  ...width.propTypes,
  ...fontSize.propTypes,
  ...fontFamily.propTypes,
  ...textAlign.propTypes,
  theme
}

Box.defaultProps = {
  theme
}

export default Box
