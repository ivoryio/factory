import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import Touchable from '../Touchable'

const BarIcon = ({ color, name, fontSize, onClick, ...rest }) => (
  <Touchable effect='opacity' onClick={onClick}>
    <Icon color={color} name={name} fontSize={fontSize} {...rest} />
  </Touchable>
)

BarIcon.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

BarIcon.defaultProps = {
  color: 'white',
  icSize: '1em'
}
BarIcon.displayName = 'BarIcon'

export default BarIcon
