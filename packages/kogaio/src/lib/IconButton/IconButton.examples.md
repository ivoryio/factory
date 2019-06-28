```js
import { Flex } from '@ivoryio/kogaio'

;<Flex alignItems='center' justifyContent='center'>
  <IconButton
    effect='no-feedback'
    color='gunmetal'
    fontSize={5}
    name='assignment_return'
    onClick={() => console.warn('Clicked!')}
  />
  <IconButton
    effect='opacity'
    color='gunmetal'
    fontSize={5}
    name='assignment_returned'
    onClick={() => console.warn('Clicked!')}
  />
</Flex>
```
