#### Simple Input
```js
function handleChange(e) {
  console.log('Input Value Changed:', e.target.value)
}

<Input
  placeholder='email'
  mt={12}
  borderRadius={6}
  onChange={handleChange}
  width={[1/3]}
/>
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
      value={inputVal}
      error={error}
    />
  )
};
<InputSimulator />
```