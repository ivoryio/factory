import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { Box, themeFactory } from '@ivoryio/kogaio'

const Wrapper = ({ children, ...rest }) => (
  <ThemeProvider theme={themeFactory({})}>
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
