import React from 'react'
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

const Text = ({ className, color, cursor, message, type, ...rest }) => (
  <StyledText className={className} cursor={cursor} type={type} {...rest}>
    {message}
  </StyledText>
)

const withType = css`
  font-size: 14px;
  font-weight: regular;
  ${props =>
    props.type === 'h1' &&
    `
    font-size: 24px; font-weight: bold;
  `};
  ${props =>
    props.type === 'h2' &&
    `
  font-size: 20px; font-weight: regular;
  `};
  ${props =>
    props.type === 'h3' &&
    `
  font-size: 18px; font-weight: regular;
  `};
`

const StyledText = styled.p`
  font-family: ${themeGet('fonts.sansSerif')};
  ${withType};
  ${color};
  ${fontFamily};
  ${fontSize};
  ${fontWeight};
  ${fontStyle};
  ${letterSpacing};
  ${lineHeight};
  ${opacity};
  ${size};
  ${space};
  ${textAlign};
`

export default Text
