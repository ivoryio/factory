#### CheckBox with default props
```js
import { useState } from 'react';

const CheckBoxExample = () => {
const [isChecked, setIsChecked] = useState(false)
const handleCheck = ev =>
  setIsChecked(ev.target.checked)
  return (
      <CheckBox
        isChecked={isChecked}
        handleCheck={handleCheck}
      />
  )
}
  <CheckBoxExample />
```

#### CheckBox with custom props
```js
import { useState } from 'react';
import { Icon } from '../'
const CustomIcon = () => (
  <Icon
    color='brand'
    fontSize={2}
    name='android'
  />)

const CheckBoxExample = () => {
const [isChecked, setIsChecked] = useState(false)
const handleCheck = ev =>
  setIsChecked(ev.target.checked)
  return (
      <CheckBox
        colors={{
          active: 'brand',
          background: 'ice-white',
          label: 'brand',
          unChecked: 'black'
        }}
        CustomIcon={CustomIcon}
        boxSize={40}
        fontSize={5}
        label='Android'
        isChecked={isChecked}
        handleCheck={handleCheck}
      />
  )
}
  <CheckBoxExample />
```