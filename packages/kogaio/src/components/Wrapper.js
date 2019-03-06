import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import Box from '../lib/Responsive/Box'

import theme from '../lib/assets/theme'

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>{children}</Container>
  </ThemeProvider>
)

const Container = styled(Box)`
  position: relative;
  inline-size: 100%;
`

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
}

export default Wrapper
