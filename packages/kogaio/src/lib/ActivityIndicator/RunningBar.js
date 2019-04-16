import React from 'react'
import PropTypes from 'prop-types'
import { themeGet } from 'styled-system'
import styled, { keyframes } from 'styled-components'

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

const barColour = () => ({ primary }) => themeGet(`colors.${primary}`, primary)
const Bar = styled(Box)`
  :before {
    display: block;
    position: absolute;
    content: '';
    left: -200px;
    width: 200px;
    height: 100%;
    background-color: ${barColour};
    animation: ${loading} 2s linear infinite;
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

export default RunningBar
