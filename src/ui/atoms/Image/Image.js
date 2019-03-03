import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = ({
  alt,
  borderRadius,
  dataTest,
  height,
  marginInlineEnd,
  marginInlineStart,
  paddingInlineEnd,
  paddingInlineStart,
  src,
  width,
}) => (
  <StyledImage
    alt={alt}
    borderRadius={borderRadius}
    data-testid={dataTest}
    height={height}
    marginInlineEnd={marginInlineEnd}
    marginInlineStart={marginInlineStart}
    paddingInlineEnd={paddingInlineEnd}
    paddingInlineStart={paddingInlineStart}
    src={src}
    width={width}
  />
)

const StyledImage = styled.img`
  border-radius: ${props => props.borderRadius}px;
  height: ${props => props.height}px;
  margin-inline-end: ${props => props.marginInlineEnd}px;
  margin-inline-start: ${props => props.marginInlineStart}px;
  padding-inline-end: ${props => props.paddingInlineEnd}px;
  padding-inline-start: ${props => props.paddingInlineStart}px;
  width: ${props => props.width}px;
`

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginInlineEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginInlineStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingInlineEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  paddingInlineStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Image.defaultProps = {
  height: 80,
  marginInlineEnd: 0,
  marginInlineStart: 0,
  paddingInlineEnd: 24,
  paddingInlineStart: 24,
  width: 80
}

export default Image
