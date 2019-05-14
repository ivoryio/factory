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

export const activityIndicators = ['spinner', 'loadbar', 'runningbar']
ActivityIndicator.propTypes = {
  /** colors: { background: '', primary: '' }; colors: string[] */
  colors: PropTypes.oneOfType([
    PropTypes.shape({
      background: PropTypes.string.isRequired,
      primary: PropTypes.string.isRequired
    }),
    PropTypes.arrayOf(PropTypes.string)
  ]),
  variant: PropTypes.oneOf(activityIndicators)
}

ActivityIndicator.defaultProps = {
  variant: 'spinner'
}
ActivityIndicator.displayName = 'ActivityIndicator'

export default ActivityIndicator
