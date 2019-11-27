import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import Box from '../lib/Responsive/Box'
import { buildTheme } from '../lib/assets/theme'

const Wrapper = ({ children }) => (
  <ThemeProvider theme={buildTheme({})}>
    <Container>{children}</Container>
  </ThemeProvider>
)

const Container = styled(Box)`
  position: relative;
  inline-size: 100%;
`

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
    PropTypes.object
  ])
}

export default Wrapper
