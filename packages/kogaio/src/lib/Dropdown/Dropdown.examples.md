#### Simple Dropdown
```js
const React = require('react')
const { useState } = React
const DropdownExample = () => {
const [selectedOption, setSelectedOption] = useState('')
const handleSelectionChange = newOption =>
  setSelectedOption(newOption)

const options = [
  {
    key: 'option1',
    name: 'First Option'
  },
  {
    key: 'option2',
    name: 'Second Option'
  },
  {
    key: 'option3',
    name: 'Third Option'
  }
]
  return (
    <Dropdown
      mx='auto'
      fontSize='2rem'
      fontFamily='Roboto, sans-serif, -apple-system, BlinkMacSystemFont'
      handleSelectionChange={handleSelectionChange}
      options={options}
      placeholder='Please pick your option...'
      py={12}
      selectedOption={selectedOption}
      width={300}
    />
  )
}
  <DropdownExample />
```