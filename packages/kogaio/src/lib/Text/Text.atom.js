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

const Text = ({ children, className, cursor, message, textStyle, type, ...rest }) => (
  <StyledText
    className={className}
    cursor={cursor}
    textStyle={textStyle}
    type={type}
    {...rest}
  >
    {message || children}
  </StyledText>
)

/** @component */
const StyledText = styled.div`
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
  children: PropTypes.string,
  className: PropTypes.string,
  cursor: PropTypes.string,
  message: PropTypes.string,
  textStyle: PropTypes.string,
  type: PropTypes.string
}

Text.defaultProps = {
  textStyle: 'default'
}

export default Text
