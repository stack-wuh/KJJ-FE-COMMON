## useToggle

不用在业务组件中使用useState来声明一些控制状态的变量, 改为使用useToggle.


#### 使用toggle, 来控制状态
```jsx
import React, { useState } from 'react';
import { useToggle } from 'kjj-fe-common';

export default () => {
  const [visible, { toggle, toggleFalse, toggleTure }] = useToggle(false);
  return (<>
    <p>Current is visible: {JSON.stringify(visible)}</p>

    <button onClick={toggle}>toggle</button>
    <button onClick={toggleFalse}>setFalse</button>
    <button onClick={toggleTure}>setTure</button>
  </>)
}
```