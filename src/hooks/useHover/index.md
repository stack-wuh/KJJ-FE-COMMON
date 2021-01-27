## useHover

用于鼠标移入移出事件，切换页面视图需求.

### 在一个div中使用, 鼠标移入时展示isHovered, 鼠标移除时展示isOver
```jsx
import React, { useRef } from 'react'
import { useHover } from 'kjj-fe-common'

export default () => {
  const [elRef, isHovered] = useHover()

  return (<div ref={elRef}>
    {
      isHovered ? (<>isHovered</>) : (<>isOver</>)
    }
  </div>)
}
```