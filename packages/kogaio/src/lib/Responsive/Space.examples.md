```js
  import Box from './Box';
  import Flex from './Flex';
  import Button from '../Button';
  import Typography from '../Typography';

  <Flex alignItems='center'>
    <Space px={4} py={3}>
      <Box>
        <Typography textStyle='h6'>A Space example</Typography>
      </Box>
      <Box>
        <Space py={2}>
          <Button title='Button' variant='outline' />
        </Space>
      </Box>
    </Space>
  </Flex>
```