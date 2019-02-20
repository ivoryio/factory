import React from 'react'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'

import theme from 'assets/theme'

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Container>{children}</Container>
  </ThemeProvider>
)

const Container = styled.div`
  position: relative;
  inline-size: 100%;
`

export default Wrapper
