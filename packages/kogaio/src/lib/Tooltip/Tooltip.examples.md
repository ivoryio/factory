#### Tooltip

```js
import { Space } from '@ivoryio/kogaio/Responsive';
<Space mt={3}>
  <Tooltip
    arrow={{ alignment: 'center' }}
    variant='info'
    visible
    width={{ sm: 1, md: 1 / 2, lg: 1 / 3 }}>
    This is an informational tooltip. It's purpose is to inform.
  </Tooltip>
    <Tooltip
      arrow={{ direction: 'left', alignment: 'top' }}
      variant='success'
      visible
      width={{ sm: 1, md: 1 / 2, lg: 1 / 3 }}>
      This is a successful tooltip. Look at it validating your actions. It is
      also aligned to left-top.
    </Tooltip>
  <Tooltip
    arrow={{ direction: 'right', alignment: 'center' }}
    dismissable
    variant='error'
    visible
    width={{ sm: 1, md: 1 / 2, lg: 1 / 3 }}>
    Please add a valid format: an uppercase, a lowercase, a digit and, a
    non-alphanumeric character.
  </Tooltip>
</Space>
```
