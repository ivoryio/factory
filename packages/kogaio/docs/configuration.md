#### **Step 1**

---

Extend your web application with Kogaio's _themeFactory_ [^1]
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

---

Plug and play!
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
