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
const CustomTick = () => (
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
        checkbox={{
          background: 'ice-white',
          size: 40,
          checkedBorderColor: 'brand',
          unCheckedBorderColor: 'black'
        }}
        label={{
          title: 'Android',
          color: 'brand'
        }}
        CustomTick={CustomTick}
        boxSize={40}
        fontSize={5}
        label={{
          color: 'brand',
          title: 'Android'
        }}
        isChecked={isChecked}
        handleCheck={handleCheck}
      />
  )
}
  <CheckBoxExample />
```