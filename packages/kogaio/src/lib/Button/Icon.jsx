import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import { Space } from '../Responsive'

const ButtonIcon = ({ icon: { color, name, size }, variant }) => {
  const fallbackColor = useMemo(
    () => (variant.includes('outline') ? 'brand' : 'white'),
    [variant]
  )
  return (
    <Space ml={-1} mr={1}>
      <Icon name={name} fontSize={size || 5} color={color || fallbackColor} />
    </Space>
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.object,
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string)
  ])
}

export default ButtonIcon
