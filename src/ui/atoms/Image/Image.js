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

const Image = ({ alt, dataTest, src, ...rest }) => (
  <StyledImage alt={alt} data-testid={dataTest} src={src} {...rest} />
)

const StyledImage = styled.img`
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
  object-fit: contain;
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
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  m: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  mx: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  my: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  p: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  px: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  py: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.number)]),
  position: PropTypes.string,
  size: PropTypes.arrayOf(PropTypes.number),
  alt: PropTypes.string.isRequired,
  dataTest: PropTypes.string,
  src: PropTypes.string.isRequired
}

export default Image
