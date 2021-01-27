## useForceUpdate

先看一下React官方对于forceUpdate的描述[forceupdate], 用于强制刷新组件状态。

众所周知, useRef所引用的值是不被React的响应式同步更新的至视图的, 所以我们可以直接使用Ref的值的引用来验证forceUpdate的有效性。 

```jsx
import React, { useRef } from 'react'
import { useForceUpdate } from 'kjj-fe-common'

export default () => {
  const ref = useRef({ count: 0 })

  const forceUpdate = useForceUpdate()

  const handleIncrement = () => {
    ref.current.count ++
    forceUpdate();
  }

  return (<>
    <p>current is RefCount: {ref.current.count}</p>

    <button onClick={handleIncrement}>increment</button>
  </>)
}
```

[forceupdate]: https://zh-hans.reactjs.org/docs/hooks-faq.html#is-there-something-like-forceupdate