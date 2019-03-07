#### Tooltip
```js
  <Tooltip
    isShown
    arrow={{ alignment: 'center' }}
    width={{ sm: 1, md: 1/2, lg: 1/3 }}
    variant='info'>
    This is an informational tooltip.
    It's purpose is to inform.
  </Tooltip>
  <Tooltip
    isShown
    arrow={{ direction: 'left', alignment: 'top' }}
    mt={12}
    variant='success'
    width={{ sm: 1, md: 1/2, lg: 1/3 }}>
    This is a successful tooltip.
    Look at it validating your actions.
    It is also aligned to left-top.
  </Tooltip>
  <Tooltip
    isShown
    arrow={{ direction: 'right', alignment: 'center' }}
    mt={12}
    variant='error'
    width={{ sm: 1, md: 1/2, lg: 1/3 }}>
    Please add a valid format:
    an uppercase, a lowercase, a digit and, a non-alphanumeric character.
  </Tooltip>
```