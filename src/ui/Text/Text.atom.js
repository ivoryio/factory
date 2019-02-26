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

const Text = ({ className, cursor, message, type, ...rest }) => (
  <StyledText className={className} cursor={cursor} type={type} {...rest}>
    {message}
  </StyledText>
)

/** @component */
const StyledText = styled.div`
  font-family: ${themeGet('fonts.sansSerif', 'Verdana')};
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
  className: PropTypes.string,
  cursor: PropTypes.string,
  message: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default Text
