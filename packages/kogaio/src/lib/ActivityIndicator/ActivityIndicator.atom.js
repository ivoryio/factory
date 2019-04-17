import React from 'react'
import PropTypes from 'prop-types'

import { LoadBar, RunningBar, Spinner } from '.'

const ActivityIndicator = ({ variant, ...props }) => {
  const Component = (() => {
    switch (variant) {
      case 'loadbar':
        return LoadBar
      case 'runningbar':
        return RunningBar
      default:
        return Spinner
    }
  })()
  return <Component {...props} />
}

ActivityIndicator.propTypes = {
  colors: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.string)
  ]),
  variant: PropTypes.oneOf(['spinner', 'loadbar', 'runningbar'])
}

ActivityIndicator.defaultProps = {
  variant: 'spinner'
}
ActivityIndicator.displayName = 'ActivityIndicator'

export default ActivityIndicator
