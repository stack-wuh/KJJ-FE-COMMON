import { useEffect } from 'react'

const useComponentWillUnMount = (onWillUnMount) => {
  useEffect(() => {
    return () => {
      onWillUnMount()
    }
  }, [])
}

export default useComponentWillUnMount