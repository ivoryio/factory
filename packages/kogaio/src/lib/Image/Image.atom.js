import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  borderRadius,
  bottom,
  height,
  left,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  right,
  size,
  space,
  top,
  width
} from 'styled-system'
import { dimensions } from '../utils'

import images from '../assets/images'

const Image = ({
  alt,
  children,
  className,
  dimensions,
  objectFit,
  src,
  ...rest
}) => (
  <StyledImage
    alt={alt}
    className={className}
    dimensions={dimensions}
    objectFit={objectFit}
    src={src || images.placeholder}
    {...rest}
  >
    {children}
  </StyledImage>
)

const StyledImage = styled.img`
  object-fit: ${props => props.objectFit};
  ${borderRadius}
  ${bottom}
  ${height}
  ${left}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${right}
  ${size}
  ${space}
  ${top}
  ${width}
  ${dimensions}

`

Image.propTypes = {
  ...borderRadius.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes,
  ...maxWidth.propTypes,
  ...minHeight.propTypes,
  ...minWidth.propTypes,
  ...position.propTypes,
  ...size.propTypes,
  ...space.propTypes,
  ...width.propTypes,
  alt: PropTypes.string.isRequired,
  objectFit: PropTypes.oneOf([
    'fill',
    'contain',
    'cover',
    'none',
    'scale-down'
  ]),
<<<<<<< HEAD
=======
  children: PropTypes.node,
>>>>>>> 80b9aee8c9a328a9cff81c23c633057585bc03d3
  dataTest: PropTypes.string,
  /** [width, height] */
  dimensions: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  src: PropTypes.string.isRequired
}

Image.defaultProps = {
  alt: 'image placeholder',
  src: images.placeholder
}
Image.displayName = 'Image'

export default Image
