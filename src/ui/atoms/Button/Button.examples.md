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
    border='none'
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
  height: 40px;
  border-radius: 4px;
  color: #fff;
  border: none;
`;
const simulateClick = () => {
  console.log('Hey, I am styled!')
}
<StyledButton
  fontSize={[14, 16]}
  onClick={simulateClick}
  bg='#e74c3c'
  title='Delete'
  width={[120, 110, 100]}
/>
```

#### LoadingButton
```js
const React = require('react')
const { useState } = React
const ButtonExample3 = () => {
  const [isLoading, setIsLoading] = useState(false)
  const toggleLoading = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }
  return (
    <Button
      bg='#2980b9'
      border='none'
      borderRadius={2}
      color='#fff'
      fontSize={[14, 16]}
      height={42}
      isLoading={isLoading}
      disabled={isLoading}
      onClick={toggleLoading}
      title='Submit'
      width={[120, 110, 100]}
    />
  )
};
<ButtonExample3 />
```
