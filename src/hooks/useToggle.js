import { useState, useCallback } from 'react'

export function useToggle(initialToggleValue = false) {
  const [value, setToggleValue] = useState()

  const toggle = useCallback(() => {
    setToggleValue((valuePrev) => setToggleValue(!valuePrev))
  }, [])

  return [value, toggle]
}
