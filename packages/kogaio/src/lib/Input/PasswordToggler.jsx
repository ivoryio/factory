import React from 'react'
import PropTypes from 'prop-types'

import IconButton from '../IconButton'

export const PasswordToggler = ({
  error,
  inputType,
  tabIndex,
  toggle,
  viewOption,
  ...props
}) => (
  <IconButton
    color={error ? 'error' : 'light-gray'}
    effect="no-feedback"
    fontSize={3}
    name={inputType === 'password' ? 'visibility_off' : 'visibility'}
    onMouseDown={toggle}
    onMouseUp={viewOption.includes('peek') ? toggle : null}
    onTouchStart={toggle}
    onTouchEnd={viewOption.includes('peek') ? toggle : null}
    tabIndex={tabIndex}
    {...props}
  />
)

const toggleOptions = ['peek', 'toggle']
PasswordToggler.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  inputType: PropTypes.string,
  tabIndex: PropTypes.string,
  toggle: PropTypes.func.isRequired,
  viewOption: PropTypes.oneOf(toggleOptions)
}
