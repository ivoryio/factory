import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  alignSelf,
  justifySelf,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  size,
  space,
} from 'styled-system'

const Icon = ({ alt, dataTest, onClick, src, ...rest }) => (
  <StyledIcon
    alt={alt}
    data-testid={dataTest}
    onClick={onClick}
    src={src || 'https://cdn3.iconfinder.com/data/icons/basic-ui-6/40/Asset_12-512.png'}
    {...rest}
  />
)

const StyledIcon = styled.img`
  ${alignSelf}
  ${justifySelf}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${size}
  ${space}
  cursor: pointer;
  :active {
    transform: scale(0.965);
  }
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
  alt: PropTypes.string.isRequired,
  dataTest: PropTypes.string,
  onClick: PropTypes.func,
  src: PropTypes.string.isRequired
}

Icon.defaultProps = {
  size: [30, 30]
}

export default Icon
