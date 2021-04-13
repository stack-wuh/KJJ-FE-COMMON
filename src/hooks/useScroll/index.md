## useScroll

<Alert type='info'>
  <p>专门用于简单滚动一个Hooks</p>
</Alert>

### 简单例子

```jsx
import React, { useRef } from 'react';
import { useScroll } from 'kjj-fe-common';

export default () => {
  const targetRef = useRef();
  const { scrollTop, scrollBottom } = useScroll(targetRef);

  return (
    <>
      <button onClick={scrollBottom}>down</button>
      <div ref={targetRef} style={{ height: '200vh' }}></div>
    </>
  );
};
```
