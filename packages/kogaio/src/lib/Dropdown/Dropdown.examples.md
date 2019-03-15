#### Simple Dropdown
```js
const React = require('react')
const { useState } = React
const DropdownExample = () => {
const [selectedOption, setSelectedOption] = useState('')
const onChangeOption = newOption =>
  setSelectedOption(newOption)

const options = [
  {
    key: 'option1',
    name: 'Option 1'
  },
  {
    key: 'option2',
    name: 'Option 2'
  },
  {
    key: 'option3',
    name: 'Option 3'
  }
]
  return (
      <Dropdown
        colors='dropdown-white'
        mx='auto'
        id='example-dropdown'
        onChangeOption={onChangeOption}
        options={options}
        selectedOption={selectedOption}
        width={{ xs: 1/2, md: 1/3 }}
      />
  )
}
  <DropdownExample />
```