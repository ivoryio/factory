```js
  const React = require('react')
  const { useState, useEffect } = React
  const Box = require('../Responsive/Box').default
  const Flex = require('../Responsive/Flex').default

  const InputExamples = () => {
  const [formValues, setInputVal] = useState({ input1: '', input2: '' })
  const [error, setError] = useState(null)

  const handleValueChange = key => ev => {
    setInputVal({ [key]: ev.target.value })
  }

  useEffect(() => {
    validateInput('input2')
  }, [formValues.input2])

 const validateInput = key => {
    const textRegex = /^[a-zA-Z ]*$/
    if (!textRegex.test(formValues[key])) {
      setError('Invalid input. Expected letters only.')
    } else {
      setError(null)
    }
  }

  return (
    <Flex flexWrap='wrap'>
      <Box px='8px' width={{ xs: 1, md: 1/2 }}>
        <form>
          <Input
            autoComplete='current-email'
            placeholder='Email'
            onChange={handleValueChange('input1')}
            label='Default'
            mt='4px'
            name='email'
            type='password'
            value={formValues.input1}
          />
          <Input
            autoComplete='your-text'
            label='Input with error'
            onChange={handleValueChange('input2')}
            name='error-input'
            value={formValues.input2}
            error={error}
          />
        </form>
      </Box>
      <Box px='8px' width={{ xs: 1, md: 1/2 }}>
        <Input
          autoComplete='your-text'
          label='Valid input'
          onChange={() => console.log('It is valid.')}
          mt='4px'
          name='error-input'
          variant='valid'
          value='this is valid'
        />
         <Input
          autoComplete='your-text-here'
          label='Disabled'
          placeholder='Disabled'
          name='disabled-input'
          onChange={() => {}}
          value=''
          variant='disabled'
          disabled
        />
      </Box>
    </Flex>
  )};
  <InputExamples />
```
