## useTimeout

<Alert>useTimeout</Alert>

### 简单例子

```jsx
import React from 'react';
import { useTimeout } from 'kjj-fe-common';

export default () => {
  const logger = useTimeout(() => window.alert('Hello World!'), 1000);

  return (
    <>
      <button onClick={logger}>click me</button>
    </>
  );
};
```
