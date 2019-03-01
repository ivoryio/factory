#### Empty card
```js
const { default: Flex } = require('../Responsive/Flex');
const { default: Space } = require('../Responsive/Space');
  <Flex justifyContent='center'>
    <Space mx={16} my={16}>
      <Card
        alignItems='center'
        color='#fff'
        position='relative'
        width='350px'
        height='350px'
      />
    </Space>
  </Flex>
```
#### Card with content
```js
const { useState } = React
const { default: styled } = require('styled-components');
const { Flex, Space } = require('../Responsive');
const Form = styled.form`width: 100%;`;

  const CardWithFormExample = () => {
    const [passwordVal, setPasswordVal] = useState('')
    const _changeInputValue = ev => setPasswordVal(ev.target.value)
    return (
      <Flex justifyContent='center'>
        <Space mx={16} my={16}>
          <Card
            alignItems='center'
            display='flex'
            flexDirection='column'
            width='350px'
            p={32}
          >
            <Text
              message='Card title'
              fontWeight='bold'
              textStyle='h2'
            />
            <Form>
              <Input
                autoComplete='current-email'
                placeholder='Placeholder...'
                label='Input label'
                mt={12}
                name='email'
                onChange={() => {}}
                type='email'
                disabled
              />
              <Input
                autoComplete='current-password'
                label='Input label'
                mt={12}
                name='password'
                onChange={_changeInputValue}
                placeholder='Password'
                type='password'
                value={passwordVal}
              />
            </Form>
            <Button
              onClick={() => console.log('Clicked!')}
              mt={12}
              variant='outlined'
              title='Submit'
            />
          </Card>
        </Space>
      </Flex>
    )
  };
  <CardWithFormExample />
```