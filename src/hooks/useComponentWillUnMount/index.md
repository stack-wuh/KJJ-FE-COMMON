## useComponentWillUnMount

### React组件的生命周期
```jsx
import React, { useState } from 'react'
import { useComponentWillUnMount, useToggle } from 'kjj-fe-common'

const Child = () => {
  useComponentWillUnMount(() => {
    console.log('current Cm has unmount')
  })

  return (<>
    current is Child
  </>)
}

export default () => {
  const [visible, { toggle }] = useToggle(false)

  return (<>
    <button onClick={toggle}>unmount</button>
    {
      visible &&  <Child />
    }
  </>)
}
```