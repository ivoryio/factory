#### Hide examples
```js
  import Button from '@ivoryio/kogaio/Button';
  import { Box, Flex, Space } from '@ivoryio/kogaio/Responsive';
  <Flex flexWrap='wrap' flexDirection='column'>
    <Box width={{ xs: 1, md: 1 / 2, lg: 1 / 3 }}>
      <Button title='Button1' width={1} />
    </Box>
    <Space mt={1}>
      <Box width={{ xs: 1, md: 1 / 2, lg: 1 / 3 }}>
        <Button title='Button2' width={1} variant='outline' />
      </Box>
    </Space>
      <Hide md>
      <Space mt={1}>
        <Box width={{ xs: 1 / 2, md: 1 / 2, lg: 1 / 3 }}>
          <Button title='Button3' width={1} variant='destructive' />
        </Box>
      </Space>
      </Hide>
  </Flex>
```