#### Empty cards
```js
  import { Flex, Space } from '../';

  <Flex justifyContent='center'>
    <Space mx={4} my={4}>
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
import { useState } from 'react';
import styled from 'styled-components';
import { Button, Flex, Input, Space, Typography } from '../';

const Form = styled.form`width: 100%;`;

  const CardWithFormExample = () => {
    const [inputVal, setInputVal] = useState('')
    const _changeInputValue = ev => setInputVal(ev.target.value)
    return (
      <Flex justifyContent='center'>
        <Space mx={4} my={4}>
          <Card
            alignItems='center'
            colors='card-gray'
            display='flex'
            flexDirection='column'
            width='350px'
            p={6}
          >
            <Typography
              message='Card title'
              fontWeight='bold'
              textStyle='h2'
            />
            <Form>
              <Input
                autoComplete='current-email'
                placeholder='Placeholder...'
                label='Input label'
                mt='12px'
                name='email'
                onChange={() => {}}
                type='email'
                disabled
              />
              <Input
                autoComplete='current-text'
                label='Input label'
                mt='12px'
                name='full-name'
                onChange={_changeInputValue}
                placeholder='Your text goes here...'
                type='text'
                value={inputVal}
              />
            </Form>
            <Button
              onClick={() => console.log('Clicked!')}
              mt='12px'
              title='Submit'
            />
          </Card>
        </Space>
      </Flex>
    )
  };
  <CardWithFormExample />
```