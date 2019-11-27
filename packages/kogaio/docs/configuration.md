#### **Step 1**

---

- Extend your web application with Kogaio's _buildTheme_ [^1]

```jsx static
    import React from 'react'
    import { ThemeProvider } from 'styled-components'
    import { buildTheme } from '@ivoryio/kogaio'
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
      <ThemeProvider theme={buildTheme(myCustomTheme)}>
        <App>{children}</App>
      </ThemeProvider>
    )
```

**NOTE**

> Kogaio's fallback theme kicks in when no parameters are passed to `buildTheme()`.

[^1] _<span style="font-size: 14px;">`buildTheme` merges your custom theme with Kogaio's built-in theme.</span>_

#### **Step 2**

---

- Plug and play!

```jsx static
import React from 'react'
import { Button, Card, Flex, Space, Typography } from '@ivoryio/kogaio'

const MyScreen = () => (
  <Flex justifyContent='center'>
    <Space px={4} py={2}>
      <Card
        alignItems='center'
        variant='white'
        width={{ xs: 1, sm: 2 / 3, md: 3 / 4, lg: 1 / 3 }}>
        <Typography
          color='dark-gunmetal'
          fontWeight={3}
          textAlign='center'
          variant='h2'>
          Hello world!
        </Typography>
        <Button title='Say hello' width={1} />
      </Card>
    </Space>
  </Flex>
)
```
