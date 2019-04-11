# `@ivoryio/kogaio`

## Introduction

**[Kogaio][1]** is an independent open source project,
designed and tailored to fit the needs of
  **[Ivory][2]** based web applications.

Its primary concern is to expose for usage a set of primitive UI components,
as well as to offer an opinionated solution for building and styling responsive web applications.

[1]: https://ivoryio.github.io/factory/#introduction "Kogaio"
[2]: https://www.ivory.io/ "Ivory.io"

## Documentation

  Both the documentation and the structure of [Kogaio][1] are [atomic design][2] based; i.e. the purpose is to encourage, implicitly with examples, the substance of breaking the layout down into its basic components, which are then reused throughout the app.

  Kogaio provides an inbuilt, assertive and extensible [style guide][6], along with a continuously growing set of primitives and examples of their usage.
  It aims for sturdy design implementation, while soothing developers' front end development experience.

  There are a few indispensable libraries that act as dependencies for Kogaio; their purposes vary, from _documentation_ to _extensibility_ to _usability and painless development of responsive design systems_.

  * [styled-components][3]
  * [styled-system][4]
  * [react-styleguidist][5]

[1]: https://ivoryio.github.io/factory/#documentation "Ivory documentation"
[2]: http://atomicdesign.bradfrost.com/chapter-2/ "Brad Frost - Atomic design"
[3]: https://www.styled-components.com/docs "Styled components"
[4]: https://styled-system.com/getting-started "Styled System"
[5]: https://react-styleguidist.js.org/docs/getting-started.html "React Styleguidist"
[6]: https://github.com/ivoryio/design-system "Ivory Design System"

## Installation

~~~~
npm i @ivoryio/kogaio
~~~~
or
~~~~
yarn add @ivoryio/kogaio
~~~~


## Configuration

#### **Step 1**

> Extend your web application with Kogaio's _themeFactory_ [^1]

```JSX
    import React from 'react'
    import { ThemeProvider } from 'styled-components'
    import { themeFactory } from '@ivoryio/kogaio'
    import App from 'path/to/App'

    const myCustomTheme = {
      colors: {
        brand: '#66bb6a',
        'brand-hover': '#4caf50',
        'brand-disabled': '#dfe9f2',
        'outline-hover': '#43a047',
        'outline-disabled': '#a5d6a7',
        error: '#ff7043',
        'error-hover': '#ff5722',
        alert: '#fbc02d',
        info: '#64b5f6',
        success: '#66bb6a'
      }
      {...}
    }

    const MyApp = ({ children }) => (
      <ThemeProvider theme={themeFactory(myCustomTheme)}>
        <App>{children}</App>
      </ThemeProvider>
    )
```
**NOTE**

> Kogaio's fallback theme kicks in when no parameters are passed to `themeFactory()`.

[^1] _<span style="font-size: 14px;">`themeFactory` merges your custom theme with Kogaio's built-in theme.</span>_

#### **Step 2**
> Plug and play!
```JSX
   import React from 'react'
    import { Button, Card, Flex, Space, Typography } from '@ivoryio/kogaio'

    const MyScreen = () => (
      <Flex justifyContent='center'>
        <Space m={4}>
          <Card
            alignItems="center"
            colors='card-white'
            width={{ xs: 1, sm: 2 / 3, md: 3 / 4, lg: 1 / 3 }}
          >
          <Typography
            color='dark-gunmetal'
            fontWeight={8}
            textAlign='center'
            textStyle='h2' 
          >
            Hello world!
          </Typography>
          <Button
            title="Say hello"
            width={1}
          />
          </Card>
        </Space>
      </Flex>
    )
```

##### *The snippet below is a peek into the default theme.*
For a painless experience with **Kogaio**, we do not encourage overwriting the entire theme. 

Seek the comments below for recommendations.
```JSX
  breakpoints = {
    xs: '20em',
    sm: '30em',
    md: '48em',
    lg: '80em',
    xlg: '120em'
  }
  borders = [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid'
  ]
  colors = { 
    // #region recommended for overwriting
    brand,
    'brand-hover',
    'brand-disabled',
    'outline-hover',
    'outline-disabled',
    error,
    'error-hover',
    alert,
    info,
    success,
    // #endregion
    white,
    'pale-white',
    'ghost-white',
    'white-smoke',
    'ice-white',
    'azure-white',
    'pastel-blue',
    'light-gray',
    manatee,
    'paynes-gray',
    independence,
    gunmetal,
    'dark-gunmetal',
    black
  }
  // #region recommended for overwriting
  colorStyles: {
    'card-white': {
      boxShadow,
      backgroundColor
    },
    'card-gray': {
      boxShadow,
      backgroundColor
    },
    'menu-list': {
      boxShadow,
      backgroundColor
    },
    'modal-background',
    'button-outline-alt': {
      color,
      border,
      '&:hover': {
        border
      }
    },
    'button-outline-dark': {
      color,
      border,
      '&:hover': {
        border
      }
    },
    overlay: {
      'background-color'
    }
  }
  fonts = {
    primary:
      'Rubik, sans-serif',
    complementary:
      '"Open+Sans", sans-serif'
  }
  // #endregion
  fontSizes = [
    '0.75rem',
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '2rem',
    '3rem',
    '4rem'
  ]
  fontWeights = [100, 200, 300, 400, 500, 600, 700, 800, 900]
  lineHeights = {
    solid: 1,
    title: 1.25,
    copy: 1.5,
    tooltip: 1.6,
    button: 1.9,
    input: 2
  }
  letterSpacings = {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  }
  radii = [0, 1, 2, 4, 16, 32, '50%', '100%']
  space = [0, 4, 8, 12, 16, 24, 32, 40, 48, 64, 72, 84, 96, 128, 256]
  shadows: {
    'button-shadow',
    'input-basic',
    'card-simple',
    'card-highlight',
    'menu-list'
  }
```

> **Happy coding!**

