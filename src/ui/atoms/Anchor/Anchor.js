import React from 'react'
import styled from 'styled-components'
import {
  alignContent,
  alignItems,
  alignSelf,
  borders,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  flexDirection,
  flexWrap,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  letterSpacing,
  lineHeight,
  opacity,
  position,
  right,
  space,
  textAlign,
  top,
  verticalAlign,
  zIndex
} from 'styled-system'

const Anchor = ({ children, href, target, rel, ...rest }) => (
  <StyledAnchor href={href} target={target} rel={rel} {...rest}>
    {children}
  </StyledAnchor>
)

const StyledAnchor = styled.a`
  box-shadow: 0 1px 0 #3498db;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${borders}
  ${bottom}
  ${boxShadow}
  ${color}
  ${display}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${fontFamily}
  ${fontSize}
  ${fontStyle}
  ${fontWeight}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${left}
  ${letterSpacing}
  ${lineHeight}
  ${opacity}
  ${position}
  ${right}
  ${space}
  ${textAlign}
  ${top}
  ${verticalAlign}
  ${zIndex}

  :hover {
    transform: scale(1.02);
    font-weight: 500;
  }
`

export default Anchor
