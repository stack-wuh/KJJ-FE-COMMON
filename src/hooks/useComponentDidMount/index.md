## useComponentDidMount

### React组件的生命周期
```jsx
import React, { useState } from 'react'
import { useComponentDidMount } from 'kjj-fe-common'

export default () => {
  const [count, setcount] = useState(0)

  useComponentDidMount(() => {
    setTimeout(() => {
      setcount(state => state + 1)
    }, 3000)
  })

  return (<>
    <p>current is initial count: {count}</p>
  </>)
}
```