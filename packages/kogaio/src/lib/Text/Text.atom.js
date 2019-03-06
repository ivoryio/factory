import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  color,
  colorStyle,
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  letterSpacing,
  lineHeight,
  opacity,
  size,
  space,
  textAlign,
  textStyle
} from 'styled-system'
import theme from '../assets/theme'

const Text = ({ children, message, ...rest }) => (
  <StyledText {...rest}>{message || children}</StyledText>
)

/** @component */
const StyledText = styled.div`
  font-family: Roboto, sans-serif, -apple-system, BlinkMacSystemFont;
  ${textStyle}
  ${color}
  ${colorStyle}
  ${fontFamily}
  ${fontSize}
  ${fontWeight}
  ${fontStyle}
  ${letterSpacing}
  ${lineHeight}
  ${opacity}
  ${size}
  ${space}
  ${textAlign}
`

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  cursor: PropTypes.string,
  message: PropTypes.string,
  theme: PropTypes.object.isRequired
}

Text.defaultProps = {
  theme
}

export default Text
