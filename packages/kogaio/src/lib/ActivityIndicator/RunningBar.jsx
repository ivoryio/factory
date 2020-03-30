import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'

import { themeGet } from '../utils'
import Box from '../Responsive/Box'

const RunningBar = ({ colors: { background, primary }, ...props }) => (
  <Bar
    bg={background}
    height='4px'
    overflow='hidden'
    position='relative'
    primary={primary}
    width={1}
    {...props}
  />
)

const loading = keyframes`
  from {
    left: -200px;
    width: 30%;
  }
  50% {
    width: 30%;
  }
  70% {
    width: 70%;
  }
  80% {
    left: 50%;
  }
  95% {
    left: 120%;
  }
  to {
    left: 100%;
  }
`

const Bar = styled(Box)`
  :before {
    animation: ${loading} 2s linear infinite;
    background-color: ${({ primary }) =>
      themeGet(`colors.${primary}`, primary)};
    content: '';
    display: block;
    height: 100%;
    left: -200px;
    position: absolute;
    width: 200px;
  }
`

RunningBar.propTypes = {
  colors: PropTypes.object.isRequired
}
RunningBar.defaultProps = {
  colors: {
    background: 'pale-white',
    primary: 'info'
  }
}

RunningBar.displayName = 'RunningBar'
export default RunningBar
