import React from 'react'
import styled from 'styled-components'
import {
  alignContent,
  alignItems,
  alignSelf,
  background,
  backgroundImage,
  borderColor,
  borderRadius,
  borders,
  bottom,
  boxShadow,
  color,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  fontFamily,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  maxWidth,
  minWidth,
  opacity,
  order,
  overflow,
  position,
  ratio,
  right,
  size,
  space,
  textAlign,
  top,
  verticalAlign,
  width,
  zIndex
} from 'styled-system'
import PropTypes from 'prop-types'

const Card = ({ children, ...rest }) => (
  <StyledCard {...rest}>{children}</StyledCard>
)

const StyledCard = styled.div`
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${backgroundImage}
  ${background}
  ${borderColor}
  ${borderRadius}
  ${borders}
  ${bottom}
  ${boxShadow}
  ${color}
  ${display}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${flex}
  ${fontFamily}
  ${height}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${left}
  ${maxWidth}
  ${minWidth}
  ${opacity}
  ${order}
  ${overflow}
  ${position}
  ${ratio}
  ${right}
  ${size}
  ${space}
  ${textAlign}
  ${top}
  ${verticalAlign}
  ${width}
  ${zIndex}
`

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node
  ])
}

export default Card
