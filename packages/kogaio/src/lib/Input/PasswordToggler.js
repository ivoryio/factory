import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '../IconButton'

export const PasswordToggler = ({
  actionType,
  error,
  inputType,
  toggle,
  ...props
}) => (
  <IconButton
    color={error ? 'error' : 'light-gray'}
    effect="no-feedback"
    fontSize={3}
    onMouseDown={toggle}
    onMouseUp={actionType.includes('peek') ? toggle : null}
    onTouchStart={toggle}
    onTouchEnd={actionType.includes('peek') ? toggle : null}
    name={inputType.includes('password') ? 'visibility_off' : 'visibility'}
    position="absolute"
    right={8}
    {...props}
  />
)

const passwordViewTypes = ['peek', 'toggle']
PasswordToggler.propTypes = {
  actionType: PropTypes.oneOf(passwordViewTypes),
  toggle: PropTypes.func.isRequired,
  inputType: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}
