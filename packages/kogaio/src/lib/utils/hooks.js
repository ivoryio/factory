import { useState } from 'react'

export const useBoolean = initialState => {
  const [value, setValue] = useState(initialState)
  const toggleValue = () => setValue(value => !value)
  return {
    value,
    setValue,
    toggleValue
  }
}
