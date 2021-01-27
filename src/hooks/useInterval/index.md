## useInterval

在函数式组件中, 定时器的用法与类组件有了明显的差异.

### 组件初始化后, 立即开始轮询
```jsx
import React, { useState } from 'react'
import { useInterval, useToggle } from 'kjj-fe-common'


export default () => {
  const [count, setcount] = useState(0)

  const handleIncrement = () => {
    setcount(state => state + 1)
  }

  useInterval(handleIncrement, 1000)

  return (<>
    <p>current is count: {count}</p>
  </>)
}
```

### 用一个状态去控制定时器运行状态
```jsx
import React, { useState } from 'react'
import { useToggle, useInterval } from 'kjj-fe-common'

export default () => {
  const [count, setcount] = useState(0)
  const [allowPolling, { toggleTure, toggleFalse }] = useToggle(false)

  const handleIncrement = () => {
    setcount(state => state + 1)
  }

  useInterval(handleIncrement, allowPolling ? 1000 : null)

  return (<>
    <p>current is count: {count}</p>

    <button onClick={toggleTure}>Start</button>
    <button onClick={toggleFalse}>pause</button>
  </>)
}
```