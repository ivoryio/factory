import { useEffect, useRef, useState } from 'react'

export function useBoolean (initialState) {
  const [value, setValue] = useState(initialState)
  const toggleValue = () => setValue(value => !value)
  return [value, setValue, toggleValue]
}

export function usePrevious (value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}
