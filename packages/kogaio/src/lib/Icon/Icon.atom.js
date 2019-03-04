import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  alignSelf,
  color,
  fontSize,
  justifySelf,
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
  cursor,
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
    cursor={cursor}
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
  user-select: none;
  cursor: ${props => props.cursor};
  ${alignSelf}
  ${color}
  ${fontSize}
  ${justifySelf}
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
  ...fontSize.propTypes,
  ...position.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  className: PropTypes.string,
  dataTest: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string
}

Icon.defaultProps = {
  name: 'image',
  fontSize: '1.25rem'
}

export default Icon
