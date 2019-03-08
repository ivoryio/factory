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
  textStyle,
  themeGet
} from 'styled-system'

const Typography = ({ children, message, ...rest }) => (
  <StyledText {...rest}>{message || children}</StyledText>
)

/** @component */
const StyledText = styled.div`
  color: ${themeGet('colors.dark-gunmetal', '#484848')};
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

Typography.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  cursor: PropTypes.string,
  message: PropTypes.string
}

export default Typography
