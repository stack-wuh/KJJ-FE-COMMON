import { useRef, useState, useEffect } from 'react'

const useHover = () => {
  const [value, setvalue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setvalue(true)
  const handleMouseOut = () => setvalue(false)

  useEffect(() => {
    const node = ref.current

    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver)
        node.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [ref.current])

  return [ref, value]
}

export default useHover