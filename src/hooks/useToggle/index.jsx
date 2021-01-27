import { useState } from 'react'

const useToggle = (value) => {
  const [visible, setvisible] = useState(value)

  const toggleFalse = () => setvisible(false)

  const toggleTure = () => setvisible(true)

  const toggle = () => setvisible(!visible)

  const actions = {
    toggleFalse,
    toggleTure,
    toggle
  }

  return [visible, actions]
}

export default useToggle