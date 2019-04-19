#### Spinner
```js
import { Box, Card, Flex, Space } from '../';
  <Flex alignItems='center' flexWrap='wrap'>
    <Flex justifyContent='space-evenly' width={1}>
      <ActivityIndicator colors={{ background: 'white', primary: 'info' }} size='64px' />  
      <ActivityIndicator colors={{ background: 'white', primary: 'alert' }} size='3rem' />
      <ActivityIndicator colors={{ background: 'white', primary: 'error' }} size={24} />
    </Flex>
  </Flex>
```

#### RunningBar
```js
  import { Card, Space } from '../';
    <Space py={8} mx='auto'>
      <Card width={1 / 2} variant='white' position='relative'>
        <ActivityIndicator
          colors={{ background: 'pale-white', primary: 'brand' }}
          position='absolute'
          bottom={0}
          variant='runningbar'
        />
      </Card>
    </Space>
```

#### LoadBar
```js
import { Card, Space } from '../';
    <Space py={8} mx='auto'>
      <Card width={1 / 2} variant='white' position='relative'>
        <ActivityIndicator
          colors={['info', 'alert', 'error']}
          position='absolute'
          top={0}
          variant='loadbar'
        />
      </Card>
    </Space>
```
