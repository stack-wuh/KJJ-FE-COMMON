## useTitle

<Alert type="info">用于改变 document.title 的值。</Alert>

```jsx
import React, { useEffect } from 'react';
import { useTitle, useToggle } from 'kjj-fe-common';

const Child = () => {
  useTitle('Custom Page Title', { restoreOnUnmount: true });

  return <>Child has render</>;
};

export default () => {
  const [visible, { toggle }] = useToggle();

  return (
    <>
      <p>set current page title</p> <button onClick={toggle}>Toggle</button>
      {visible && <Child />}
    </>
  );
};
```

<API></API>
