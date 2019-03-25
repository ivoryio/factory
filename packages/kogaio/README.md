# `@ivoryio/kogaio`

## Introduction

**[Kogaio][1]** is an independent open source project,
designed and tailored to fit the needs of
  **[Ivory][2]** based web applications.

Its primary concern is to expose for usage a set of primitive UI components,
as well as to offer an opinionated solution for building and styling responsive web applications.

[1]: https://ivoryio.github.io/factory/#introduction "Ivory Kogaio"
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
        brand: {
          primary: '#00aeef',
          complementary: '#009feb',
          hover: {
            primary: '#01a2de',
            complementary: '#0197df'
          },
          disabled: {
            background: '#b9e8fa',
            border: '#92d3eb'
          }
        },
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
        <Space m={16}>
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

> **Happy coding!**

