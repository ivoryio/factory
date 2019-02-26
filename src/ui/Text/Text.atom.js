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
      return themeGet('textStyles.h1')
    case 'h2':
      return themeGet('textStyles.h2')
    case 'h3':
      return themeGet('textStyles.h3')
    case 'error':
    default:
      break
  }
}

const withType = css`
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
