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

const Text = ({ children, className, message, ...rest }) => (
  <StyledText className={className} {...rest}>
    {message || children}
  </StyledText>
)

/** @component */
const StyledText = styled.div`
  font-family: Roboto, sans-serif, -apple-system, BlinkMacSystemFont;
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
  ${textStyle}
`

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  className: PropTypes.string,
  cursor: PropTypes.string,
  message: PropTypes.string
}

export default Text
