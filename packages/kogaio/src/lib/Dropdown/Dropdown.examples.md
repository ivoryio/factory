#### Simple Dropdown
```js
const React = require('react');
const { useState } = React;

const DropdownExample = () => {
const [selectedOption, setSelectedOption] = useState('')
const selectOption = newOption =>
  setSelectedOption(newOption)

const options = [
  {
    id: 'option1',
    name: 'Option 1'
  },
  {
    id: 'option2',
    name: 'Option 2'
  },
  {
    id: 'option3',
    name: 'Option 3'
  }
]
  return (
      <Dropdown
        colors='dropdown-white'
        id='example-dropdown'
        mx='auto'
        label='Dropdown label'
        onChangeOption={selectOption}
        options={options}
        selectedOption={selectedOption}
        width={{ xs: 1/2, md: 1/3 }}
      />
  )
}
  <DropdownExample />
```