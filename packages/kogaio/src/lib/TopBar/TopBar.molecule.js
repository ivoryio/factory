import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  alignContent,
  alignItems,
  alignSelf,
  background,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  borders,
  bottom,
  color,
  colorStyle,
  flex,
  flexBasis,
  flexDirection,
  flexWrap,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  order,
  position,
  right,
  size,
  space,
  textAlign,
  top,
  width,
  zIndex
} from 'styled-system'
import { Flex } from '../Responsive'

const TopBar = ({ color, children, ...rest }) => (
  <Container color={color} {...rest}>
    {children}
  </Container>
)

const Container = styled(Flex)`
  width: 100%;
  ${alignContent}
  ${alignItems}
  ${alignSelf}
  ${background}
  ${backgroundImage}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${backgroundSize}
  ${borders}
  ${bottom}
  ${color}
  ${colorStyle}
  ${flex}
  ${flexBasis}
  ${flexDirection}
  ${flexWrap}
  ${height}
  ${justifyContent}
  ${justifyItems}
  ${justifySelf}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${order}
  ${position}
  ${right}
  ${size}
  ${space}
  ${textAlign}
  ${top}
  ${width}
  ${zIndex}
`

TopBar.propTypes = {
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...background.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...backgroundSize.propTypes,
  ...borders.propTypes,
  ...bottom.propTypes,
  ...color.propTypes,
  ...colorStyle.propTypes,
  ...flex.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...height.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes,
  ...justifySelf.propTypes,
  ...left.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...order.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
  color: PropTypes.string
}

TopBar.defaultProps = {
  color: 'pastel-blue',
  bg: 'gunmetal',
  p: 3
}
TopBar.displayName = 'TopBar'

export default TopBar
