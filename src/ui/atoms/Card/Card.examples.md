```js
  <Card
    alignItems='center'
    bg='#fff'
    border='1px solid #eee'
    borderRadius='4px'
    color='#fff'
    display='flex'
    flexDirection='column'
    height={300}
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
    <Button
      bg='#2ecc71'
      border='1px solid transparent'
      borderRadius={6}
      bottom={10}
      color='#fff'
      height='40px'
      onClick={() => console.log('Clicked!')}
      position='absolute'
      title='Submit'
      width={1/3}
    />
  </Card>
```