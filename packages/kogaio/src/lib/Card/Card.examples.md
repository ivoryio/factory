#### Empty card
```js
const { default: Flex } = require('../Responsive/Flex');
  <Flex justifyContent='center'>
    <Card
      alignItems='center'
      bg='#fff'
      border='1px solid #eee'
      borderRadius='4px'
      color='#fff'
      minHeight={250}
      p={15}
      width={1}
      position='relative'
      width={350}
    />
  </Flex>
```

#### Card with content
```js
const { default: Flex } = require('../Responsive/Flex');
const { default: styled } = require('styled-components');
const Form = styled.form`width: 100%;`;

  <Flex justifyContent='center'>
    <Card
      alignItems='center'
      bg='#fff'
      border='1px solid #eee'
      borderRadius='4px'
      color='#fff'
      display='flex'
      flexDirection='column'
      p={15}
      width={350}
    >
      <Text
        fontWeight='normal'
        message='Sign Up'
        type='h3'
      />
      <Form>
        <Input
          autoComplete='current-email'
          placeholder='Email'
          label='Username'
          mt={12}
          name='email'
          onChange={ev => console.log(ev.target.value)}
          type='email'
          borderRadius={6}
        />
        <Input
          autoComplete='current-password'
          placeholder='Password'
          label='Password'
          name='password'
          onChange={ev => console.log(ev.target.value)}
          type='password'
          mt={12}
        />
        <Input
          autoComplete='your-fullname'
          placeholder='Full name'
          label='Full Name'
          name='full-name'
          onChange={ev => console.log(ev.target.value)}
          mt={12}
          />
        </Form>
      <Button
        bg='#2ecc71'
        border='1px solid transparent'
        borderRadius={6}
        color='#fff'
        height='40px'
        onClick={() => console.log('Clicked!')}
        mt={12}
        title='Submit'
        width={1/3}
      />
    </Card>
  </Flex>
```