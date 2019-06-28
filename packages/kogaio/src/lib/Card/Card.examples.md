#### Empty cards
```js
  import { Flex, Space } from '@ivoryio/kogaio/Responsive';
  <Flex justifyContent='center'>
    <Space mx={4} my={4}>
      <Card
        width='350px'
        height='350px'
        variant='white'
      />
      <Card
        width='350px'
        height='350px'
        variant='light'
      />
    </Space>
  </Flex>
```
#### Card with content
```js
import { useState } from 'react';
import styled from 'styled-components';
import { Button, Flex, Input, Space, Typography } from '@ivoryio/kogaio';

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;`;

  const CardWithFormExample = () => {
    const [inputVal, setInputVal] = useState('')
    const _changeInputValue = ev => setInputVal(ev.target.value)
    return (
      <Flex justifyContent='center'>
        <Space mx={4} my={4} p={8}>
          <Card
            alignItems='center'
            display='flex'
            flexDirection='column'
            variant='light'
            width='350px'
          >
            <Typography variant='h2'>
              Card title
            </Typography>
            <Form>
              <Space mt={1}>
                <Input
                  autoComplete='current-email'
                  placeholder='Placeholder...'
                  label='Email'
                  id='current-email'
                  name='email'
                  onChange={() => {}}
                  type='email'
                  disabled
                  value='peter.parker@ivory.io'
                />
                <Input
                  autoComplete='current-text'
                  label='Your name'
                  id='current-password'
                  name='full-name'
                  onChange={_changeInputValue}
                  placeholder='Your text goes here...'
                  type='text'
                  value={inputVal}
                />
                <Button
                  onClick={() => console.log('Clicked!')}
                  title='Submit'
                />
              </Space>
            </Form>
          </Card>
        </Space>
      </Flex>
    )
  };
  <CardWithFormExample />
```