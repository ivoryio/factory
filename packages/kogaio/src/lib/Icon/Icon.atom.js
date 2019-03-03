import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  alignSelf,
  color,
  fontSize,
  justifySelf,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  top,
  right,
  bottom,
  left,
  size,
  space
} from 'styled-system'

const Icon = ({
  className,
  dataTest,
  name,
  onMouseDown,
  onMouseUp,
  onTouchStart,
  onTouchEnd,
  onClick,
  ...rest
}) => (
  <StyledIcon
    className='material-icons'
    data-testid={dataTest}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    onClick={onClick}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    {...rest}
  >
    {name}
  </StyledIcon>
)

const StyledIcon = styled.i`
  :active {
    transform: scale(0.965);
    color: ${props => props.colorActive};
  }
  user-select: none;
  cursor: pointer;
  ${alignSelf}
  ${color}
  ${fontSize}
  ${justifySelf}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${size}
  ${space}
  ${top}
  ${right}
  ${bottom}
  ${left}
`

Icon.propTypes = {
  ...alignSelf.propTypes,
  ...justifySelf.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  className: PropTypes.string,
  dataTest: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string
}

Icon.defaultProps = {
  fontSize: 30,
  name: 'image'
}

export default Icon
