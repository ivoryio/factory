import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import { Space } from '../Responsive'

const ButtonIcon = ({ icon: { color, name, size }, variant }) => {
  const fallbackColor = (() =>
    variant.includes('outline') ? 'brand' : 'white')()
  return (
    <Space ml={-1} mr={1}>
      <Icon name={name} fontSize={size || 16} color={color || fallbackColor} />
    </Space>
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.object,
  variant: PropTypes.string
}

export default ButtonIcon
