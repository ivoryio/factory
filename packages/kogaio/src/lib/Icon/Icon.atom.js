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

const Icon = ({ className, name, ...rest }) => (
  <StyledIcon className={`material-icons${' '}${className}`} {...rest}>
    {name}
  </StyledIcon>
)

const StyledIcon = styled.i`
  user-select: none;
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
  className: '',
  fontSize: '1em',
  name: 'image',
  color: 'gunmetal'
}
Icon.displayName = 'Icon'

export default Icon
