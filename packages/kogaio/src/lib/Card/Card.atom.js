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
  colorStyle,
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
  maxHeight,
  maxWidth,
  minHeight,
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

const Card = ({ className, children, ...rest }) => (
  <StyledCard className={className} {...rest}>
    {children}
  </StyledCard>
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
  ${colorStyle}
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
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
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
    PropTypes.func,
    PropTypes.object,
    PropTypes.element,
    PropTypes.node
  ]),
  className: PropTypes.string
}

Card.defaultProps = {}

export default Card
