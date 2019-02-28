#### Simple Input
```js
const React = require('react')
const { useState } = React
const InputExample1 = () => {
const [inputVal, setInputVal] = useState('')
const handleValueChange = ev => setInputVal(ev.target.value)
  return (
    <Input
      placeholder='Email'
      mt={12}
      onChange={handleValueChange}
      name='email'
      value={inputVal}
      width={[1/3]}
    />
  )
};
<InputExample1 />
```

#### Input with error
```js
const React = require('react')
const { useState, useEffect } = React

const InputSimulator = () => {
  const [inputVal, setInputVal] = useState('')
  const [error, setError] = useState(null)
  const handleValueChange = ev => {
    setInputVal(ev.target.value);
  }

  const validateInput = () => {
    const textRegex = /^[a-zA-Z ]*$/
    if (!textRegex.test(inputVal)) {
      setError('Invalid input type')
    } else {
      setError(null)
    }
  }
  useEffect(() => {
    validateInput()
  }, [inputVal])
  return (
    <Input
      onChange={handleValueChange}
      width={[1/3]}
      name='fancy-input'
      value={inputVal}
      error={error}
    />
  )
};
<InputSimulator />
```

#### Disabled Input
```js
const InputExample3 = () => {
  return (
    <Input
      placeholder='Disabled'
      mt={12}
      name='email'
      onChange={() => console.log('onChange disabled input')}
      value=''
      variant='disabled'
      width={[1/3]}
      disabled
    />
  )
};
<InputExample3 />
```
