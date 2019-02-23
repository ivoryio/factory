import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import {
  color,
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
  themeGet
} from 'styled-system'

const Text = ({ className, cursor, message, type, ...rest }) => (
  <StyledText className={className} cursor={cursor} type={type} {...rest}>
    {message}
  </StyledText>
)

const styleWithType = () => props => {
  switch (props.type) {
    case 'h1':
      return 'font-size: 24px; font-weight: bold;'
    case 'h2':
      return 'font-size: 20px; font-weight: normal;'
    case 'h3':
      return 'font-size: 18px; font-weight: normal;'
    case 'error':
    default:
      break
  }
}

const withType = css`
  font-size: 14px;
  font-weight: normal;
  ${styleWithType()};
`
const isError = type => type && type.includes('error')
/** @component */
const StyledText = styled.div`
  color: ${props =>
    isError(props.type)
      ? themeGet('colors.error', 'red')
      : themeGet('colors.text', '#484848')};
  font-family: ${themeGet('fonts.sansSerif', 'Verdana')};
  ${withType}
  ${color}
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
  className: PropTypes.string,
  cursor: PropTypes.string,
  message: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default Text
