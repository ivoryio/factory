import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Box from '../Responsive/Box'

const LoadBar = ({ colors, ...props }) => (
  <Box bg='pastel-blue' height='4px' position='relative' width={1} {...props}>
    {colors.map(color => (
      <Bar bg={color} key={color} />
    ))}
  </Box>
)

const loading = keyframes`
  from {
    left: 50%;
    width: 0;
    z-index: 100;
  }
  33.3333% {
    left: 0;
    width: 100%;
    z-index: 10;
  }
  to {
    left: 0;
    width: 100%;
  }
`

const Bar = styled(Box)`
  content: '';
  display: inline;
  height: 100%;
  left: 50%;
  position: absolute;
  text-align: center;
  width: 0;

  &:nth-child(n + 1) {
    animation: ${loading} 3s linear infinite;
  }
  &:nth-child(n + 2) {
    animation: ${loading} 3s linear 1s infinite;
  }
  &:nth-child(n + 3) {
    animation: ${loading} 3s linear 2s infinite;
  }
}
`

LoadBar.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string)
}

LoadBar.defaultProps = {
  colors: ['info', 'alert', 'error']
}

export default LoadBar
