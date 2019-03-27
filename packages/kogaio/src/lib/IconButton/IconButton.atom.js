import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import Touchable from '../Touchable'

const IconButton = ({
  color,
  effect,
  name,
  fontSize,
  onClick,
  width,
  ...rest
}) => (
  <Touchable effect={effect} onClick={onClick} width={width}>
    <Icon color={color} name={name} fontSize={fontSize} {...rest} />
  </Touchable>
)

IconButton.propTypes = {
  color: PropTypes.string,
  effect: PropTypes.oneOf(['opacity', 'highlight', 'no-feedback']),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
}

IconButton.defaultProps = {
  color: 'white',
  effect: 'opacity',
  icSize: '1em'
}
IconButton.displayName = 'IconButton'

export default IconButton
