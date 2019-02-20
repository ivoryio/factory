#### Propped button
```js
  let counter = 0
  const simulateClick = () => {
    setTimeout(() => {
      counter = 0
    }, 2000)
    counter += 1
    console.log(`I clicked ${counter} times!`)
  }
  <Button
    bg='#2ecc71'
    borderRadius={2}
    color='#fff'
    onClick={simulateClick}
    fontSize={[14, 16]}
    size={[120, 40]}
    title='Submit'
  />
```

#### Button with extended style
```js
const { default: styled } = require('styled-components');
const StyledButton = styled(Button)`
  background-color: #e74c3c;
`;
const simulateClick = () => {
  console.log('Hey, I am styled!')
}
<StyledButton
  borderRadius={2}
  color='#fff'
  fontSize={[14, 16]}
  onClick={simulateClick}
  title='Delete'
  size={[120, 40]}
/>
```

#### LoadingButton
```js
  let counter = 0
  const simulateClick = () => {
    setTimeout(() => {
      counter = 0
    }, 2000)
    counter += 1
    console.log(`I clicked ${counter} times!`)
  }
  <Button
    bg='#2980b9'
    borderRadius={2}
    color='#fff'
    onClick={simulateClick}
    fontSize={[14, 16]}
    size={[120, 40]}
    isLoading
    title='Submit'
  />
```
