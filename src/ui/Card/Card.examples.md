#### Empty card
```js
  <Card
    alignItems='center'
    bg='#fff'
    border='1px solid #eee'
    borderRadius='4px'
    color='#fff'
    display='flex'
    flexDirection='column'
    m='auto'
    minHeight={250}
    p={15}
    position='relative'
    width={350}
  />

```

#### Card with content
```js
  <Card
    alignItems='center'
    bg='#fff'
    border='1px solid #eee'
    borderRadius='4px'
    color='#fff'
    display='flex'
    flexDirection='column'
    m='auto'
    p={15}
    position='relative'
    width={350}
  >
    <Text
      fontWeight='normal'
      message='Sign Up'
      type='h3'
    />
    <form style={{ width: '100%' }}>
      <Input
        placeholder='Email'
        label='Username'
        mt={12}
        name='email'
        onChange={ev => console.log(ev.target.value)}
        type='email'
        borderRadius={6}
      />
      <Input
        placeholder='Password'
        label='Password'
        name='password'
        onChange={ev => console.log(ev.target.value)}
        type='password'
        mt={12}
      />
      <Input
        placeholder='Full name'
        label='Full Name'
        name='full-name'
        onChange={ev => console.log(ev.target.value)}
        mt={12}
        />
      </form>
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
```