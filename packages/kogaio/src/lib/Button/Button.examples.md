#### Primary button
```js
  let counter = 0
  const simulateClick = () => {
    setTimeout(() => {
      counter = 0
    }, 2000)
    counter += 1
    console.log(`I clicked ${counter} times!`)
  }
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  <div style={containerStyle}>
    <Button
      fontSize={['1.4rem', '1.6rem']}
      onClick={simulateClick}
      variant='primary'
      title='Button Label'
      width={[160, 140, 120]}
    />
    <Button
      fontSize={['1.4rem', '1.6rem']}
      onClick={simulateClick}
      variant='primary'
      title='Button Label'
      disabled
      mt='5px'
      width={[160, 140, 120]}
    />
  </div>
```

#### Outlined button
```js
  const simulateClick = () => {
    console.log('Hey, I just clicked!')
  }
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  <div style={containerStyle}>
    <Button
      fontSize={['1.4rem', '1.6rem']}
      onClick={simulateClick}
      title='Button Label'
      variant='outlined'
      width={[160, 140, 120]}
    />
     <Button
      fontSize={['1.4rem', '1.6rem']}
      onClick={simulateClick}
      title='Button Label'
      variant='outlined'
      mt='5px'
      disabled
      width={[160, 140, 120]}
    />
  </div>
```

#### Success button
```js
  const simulateClick = () => {
    console.log('Hey, I just clicked!')
  }
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  <div style={containerStyle}>
    <Button
      fontSize={['1.4rem', '1.6rem']}
      onClick={simulateClick}
      title='Button Label'
      variant='success'
      mt='5px'
      width={[160, 140, 120]}
    />
    <Button
      fontSize={['1.4rem', '1.6rem']}
      onClick={simulateClick}
      title='Button Label'
      variant='success'
      mt='5px'
      disabled
      width={[160, 140, 120]}
    />
  </div>
```

#### Destructive button
```js
  const simulateClick = () => {
    console.log('Hey, I just clicked!')
  }
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  <div style={containerStyle}>
    <Button
      fontSize={['1.4rem', '1.6rem']}
      onClick={simulateClick}
      title='Button Label'
      variant='error'
      mt='5px'
      width={[160, 140, 120]}
    />
    <Button
      border='solid 1px #699100'
      fontSize={['1.4rem', '1.6rem']}
      onClick={simulateClick}
      title='Button Label'
      variant='error'
      mt='5px'
      disabled
      width={[160, 140, 120]}
    />
  </div>
```

#### LoadingButton
```js
  const React = require('react')
  const { useState } = React
  const ButtonExample = () => {
    const [isLoading, setIsLoading] = useState(false)
    const toggleLoading = () => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
    return (
      <Button
        fontSize={['1.4rem', '1.6rem']}
        isLoading={isLoading}
        disabled={isLoading}
        onClick={toggleLoading}
        variant='primary'
        title='Submit'
        width={[160, 140, 120]}
      />
    )
  };
  <ButtonExample />
```
