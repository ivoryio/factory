import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  borderRadius,
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  position,
  size,
  space,
  width
} from 'styled-system'

import icons from '../assets/icons'

const Image = ({ alt, className, dataTest, objectFit, src, ...rest }) => (
  <StyledImage
    alt={alt}
    className={className}
    data-testid={dataTest}
    objectFit={objectFit}
    src={src}
    {...rest}
  />
)

const StyledImage = styled.img`
  object-fit: ${props => props.objectFit};
  ${borderRadius}
  ${height}
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${minWidth}
  ${position}
  ${size}
  ${space}
  ${width}
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
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  mx: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  my: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  px: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  py: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number)
  ]),
  position: PropTypes.string,
  size: PropTypes.arrayOf(PropTypes.number),
  alt: PropTypes.string.isRequired,
  dataTest: PropTypes.string,
  src: PropTypes.string.isRequired
}

Image.defaultProps = {
  alt: 'image',
  size: [80, 80],
  src: icons.userPlaceholder
}

export default Image
