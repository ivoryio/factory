#### Empty cards
```js
const { default: Flex } = require('../Responsive/Flex');
const { default: Space } = require('../Responsive/Space');
  <Flex justifyContent='center'>
    <Space mx={16} my={16}>
      <Card
        width='350px'
        height='350px'
        colors='card-white'
      />
      <Card
        width='350px'
        colors='card-gray'
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
    const [inputVal, setInputVal] = useState('')
    const _changeInputValue = ev => setInputVal(ev.target.value)
    return (
      <Flex justifyContent='center'>
        <Space mx={16} my={16}>
          <Card
            alignItems='center'
            colors='card-gray'
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
                autoComplete='current-text'
                label='Input label'
                mt={12}
                name='full-name'
                onChange={_changeInputValue}
                placeholder='Your text goes here...'
                type='text'
                value={inputVal}
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