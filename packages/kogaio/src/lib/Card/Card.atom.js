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
import cardStyle from './cardStyle'

const Card = styled.div`
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
  ${cardStyle}
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
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  ...alignSelf.propTypes,
  ...backgroundImage.propTypes,
  ...background.propTypes,
  ...borderColor.propTypes,
  ...borderRadius.propTypes,
  ...borders.propTypes,
  ...bottom.propTypes,
  ...boxShadow.propTypes,
  ...cardStyle.propTypes,
  ...color.propTypes,
  ...colorStyle.propTypes,
  ...display.propTypes,
  ...flexBasis.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...flex.propTypes,
  ...fontFamily.propTypes,
  ...height.propTypes,
  ...justifyContent.propTypes,
  ...justifyItems.propTypes,
  ...justifySelf.propTypes,
  ...left.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...opacity.propTypes,
  ...order.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...top.propTypes,
  ...verticalAlign.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes,
  children: PropTypes.node,
  className: PropTypes.string
}

Card.defaultProps = {}
Card.displayName = 'Card'

/** @component */
export default Card
