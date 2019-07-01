import PropTypes from 'prop-types'
import styled from 'styled-components'

import propTypes from '@styled-system/prop-types'
import { border, compose, layout, position, space } from 'styled-system'

const Image = styled.img`
  object-fit: ${props => props.objectFit};
  ${compose(
    border,
    layout,
    position,
    space
  )}
`

Image.propTypes = {
  ...propTypes.border,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  alt: PropTypes.string.isRequired,
  dataTest: PropTypes.string,
  objectFit: PropTypes.oneOf([
    'fill',
    'contain',
    'cover',
    'none',
    'scale-down'
  ]),
  src: PropTypes.string,
  srcSet: PropTypes.string
}

Image.defaultProps = {
  alt: 'image placeholder',
  src: 'https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg'
}
Image.displayName = 'Image'

/** @component */
export default Image