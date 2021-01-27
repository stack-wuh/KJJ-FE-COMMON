## useDebounce

事件防抖

```jsx
import React, { useState } from 'react'
import { useDebounce } from 'kjj-fe-common'

export default () => {
  const [count, setcount] = useState(0)

  const debounceIncrement = useDebounce(() => setcount(state => state + 1), 800)

  return (<>
    <p>count: {count}</p>
    <button onClick={debounceIncrement}>Click</button>
  </>)
}
```