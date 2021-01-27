import { useEffect } from 'react'

const useComponentDidMount = (onMount) => {
  useEffect(() => {
    onMount()
  }, [])
}

export default useComponentDidMount