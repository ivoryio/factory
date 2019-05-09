#### Dropdown

```js
import { useState } from 'react'
import { Option } from '@ivoryio/kogaio/Dropdown'
const DropdownSingle = () => {
  const options = [
    {
      id: 1,
      label: 'Option 1'
    },
    {
      id: 2,
      label: 'Option 2'
    },
    {
      id: 3,
      label: 'Option 3'
    },
    {
      id: 4,
      label: 'Option 4'
    },
    {
      id: 5,
      label: 'Option 5'
    },
    {
      id: 6,
      label: 'Option 6'
    }
  ]
  const [selectedOption, setSelectedOption] = useState('')
  const selectOption = newOption => setSelectedOption(newOption)
  return (
    <Dropdown
      colors='dropdown-white'
      id='example-dropdown-single'
      label='Single value'
      mx='auto'
      onChange={selectOption}
      value={selectedOption}
      width={{ xs: 1 / 2, md: 1 / 3 }}>
      {options.map(option => (
        <Option key={option.id} value={option.label}>
          {option.label}
        </Option>
      ))}
    </Dropdown>
  )
}
;<DropdownSingle />
```

```js
import { useState } from 'react'
import { Option } from '@ivoryio/kogaio/Dropdown'
const DropdownMulti = () => {
  const options = [
    {
      id: 1,
      label: 'Option 1'
    },
    {
      id: 2,
      label: 'Option 2'
    },
    {
      id: 3,
      label: 'Option 3'
    },
    {
      id: 4,
      label: 'Option 4'
    }
  ]
  const [selectedOptions, setSelectedOptions] = useState([])
  const selectOptions = newOption => {
    if (selectedOptions.includes(newOption)) {
      return setSelectedOptions(selectedOptions.filter(op => op !== newOption))
    }
    setSelectedOptions(selectedOptions.concat(newOption))
  }
  return (
    <Dropdown
      colors='dropdown-white'
      id='example-dropdown-multi'
      label='Multiple values'
      multiple
      mx='auto'
      onChange={selectOptions}
      value={selectedOptions}
      width={{ xs: 1 / 2, md: 1 / 3 }}>
      {options.map(option => (
        <Option key={option.id} value={option.label}>
          {option.label}
        </Option>
      ))}
    </Dropdown>
  )
}
;<DropdownMulti />
```
