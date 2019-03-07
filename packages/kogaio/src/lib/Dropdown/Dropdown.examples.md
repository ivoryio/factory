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
        colors='dropdown-white'
        mx='auto'
        fontSize='1rem'
        onChangeOption={onChangeOption}
        options={options}
        selectedOption={selectedOption}
        width={{ xs: 1/2, md: 1/3, lg: 1/4}}
      />
  )
}
  <DropdownExample />
```