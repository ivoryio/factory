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
    border={0}
    borderRadius={2}
    color='#fff'
    fontSize={[14, 16]}
    height={42}
    onClick={simulateClick}
    title='Submit'
    width={[120, 110, 100]}
  />
```

#### Button with extended style
```js
const { default: styled } = require('styled-components');
const StyledButton = styled(Button)`
  background-color: #e74c3c;
  height: 40px;
  border-radius: 4px;
  border: 0;
  color: #fff;
`;
const simulateClick = () => {
  console.log('Hey, I am styled!')
}
<StyledButton
  fontSize={[14, 16]}
  onClick={simulateClick}
  title='Delete'
  width={[120, 110, 100]}
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
    fontSize={[14, 16]}
    height={42}
    isLoading
    onClick={simulateClick}
    title='Submit'
    width={[120, 110, 100]}
  />
```
