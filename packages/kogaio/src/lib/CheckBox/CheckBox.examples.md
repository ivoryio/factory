#### CheckBox with default props
```js
import { useState } from 'react';

const CheckBoxExample = () => {
const [isChecked, setIsChecked] = useState(false)
const handleCheck = ev =>
  setIsChecked(ev.target.checked)
  return (
      <CheckBox
        label='Label'
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

const CheckBoxExample = () => {
const [isChecked, setIsChecked] = useState(false)
const handleCheck = ev =>
  setIsChecked(ev.target.checked)
  return (
      <CheckBox
        activeColor='brand'
        bgColor='ice-white'
        disabledColor='black'
        boxSize={40}
        fontSize={5}
        iconName='android'
        label='Android'
        labelColor='brand'
        isChecked={isChecked}
        handleCheck={handleCheck}
      />
  )
}
  <CheckBoxExample />
```