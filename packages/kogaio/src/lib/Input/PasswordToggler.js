import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../Icon'
import Touchable from '../Touchable'

export const PasswordToggler = ({ togglePassword, resetInputType, error }) => (
  <Touchable
    display='flex'
    handleDragAttempt={resetInputType}
    onMouseDown={togglePassword}
    onMouseUp={togglePassword}
    onTouchStart={togglePassword}
    onTouchEnd={togglePassword}
    position='absolute'
    right={8}
  >
    <Icon
      color={error ? 'error' : 'light-gray'}
      fontSize='1.25em'
      name='visibility'
    />
  </Touchable>
)

PasswordToggler.propTypes = {
  togglePassword: PropTypes.func.isRequired,
  resetInputType: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}
