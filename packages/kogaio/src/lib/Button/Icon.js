import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import { Space } from '../Responsive'

const ButtonIcon = ({ icon, variant }) => {
  const fallbackColor = (() =>
    variant.includes('outline') ? 'brand' : 'white')()
  return (
    <Space ml={-1} mr={1}>
      <Icon
        name={icon.name}
        fontSize={icon.size || 16}
        color={icon.color || fallbackColor}
      />
    </Space>
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.object,
  variant: PropTypes.string
}

export default ButtonIcon
