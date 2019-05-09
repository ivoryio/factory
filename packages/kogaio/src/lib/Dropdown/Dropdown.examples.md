#### Simple Dropdown

```js
import { useState } from 'react'
import Option from './Option'
const DropdownExample = () => {
  const options = [
    {
      id: 1,
      label: 'Option 1',
      value: 'opt1'
    },
    {
      id: 2,
      label: 'Option 2',
      value: 'opt2'
    },
    {
      id: 3,
      label: 'Option 3',
      value: 'opt3'
    }
  ]
  const [selectedOption, setSelectedOption] = useState({})
  const selectOption = newOption => setSelectedOption(newOption)

  return (
    <Dropdown
      colors='dropdown-white'
      id='example-dropdown'
      mx='auto'
      label='Dropdown label'
      onChange={selectOption}
      placeholder='Select custom value'
      value={selectedOption.label}
      width={{ xs: 1 / 2, md: 1 / 3 }}>
      {options.map(option => (
        <Option key={option.id} value={option}>
          {option.label}
        </Option>
      ))}
    </Dropdown>
  )
}
;<DropdownExample />
```
