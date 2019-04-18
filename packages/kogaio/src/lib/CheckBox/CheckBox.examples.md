#### Custom CheckBox
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