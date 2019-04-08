import React from 'react'
import styled from 'styled-components'
import {
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  borders,
  bottom,
  color,
  colorStyle,
  display,
  fontFamily,
  fontSize,
  height,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  overflow,
  position,
  right,
  space,
  textAlign,
  top,
  width,
  zIndex
} from 'styled-system'

const Box = props => <StyledBox {...props} />

const StyledBox = styled.div`
  box-sizing: border-box;
  ${background}
  ${backgroundImage}
  ${backgroundSize}
  ${backgroundPosition}
  ${backgroundRepeat}
  ${borders}
  ${bottom}
  ${colorStyle}
  ${color}
  ${display}
  ${fontFamily}
  ${fontSize}
  ${height}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${overflow}
  ${position}
  ${right}
  ${space}
  ${textAlign}
  ${top}
  ${width}
  ${zIndex}
`

Box.propTypes = {
  ...background.propTypes,
  ...backgroundImage.propTypes,
  ...backgroundSize.propTypes,
  ...backgroundPosition.propTypes,
  ...backgroundRepeat.propTypes,
  ...borders.propTypes,
  ...bottom.propTypes,
  ...color.propTypes,
  ...colorStyle.propTypes,
  ...display.propTypes,
  ...fontFamily.propTypes,
  ...fontSize.propTypes,
  ...height.propTypes,
  ...left.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...overflow.propTypes,
  ...position.propTypes,
  ...right.propTypes,
  ...space.propTypes,
  ...textAlign.propTypes,
  ...top.propTypes,
  ...width.propTypes,
  ...zIndex.propTypes
}
Box.displayName = 'Box'

export default Box
