## useEventListener

<Alert>
  <p>useEventListener</p>
</Alert>

### Click

```jsx
import React, { useRef } from 'react';
import { useEventListener } from 'kjj-fe-common';

export default () => {
  const ref = useRef();
  const pomart = () => {
    window.alert('has clicked');
  };

  useEventListener('click', pomart, {
    target: ref,
  });

  return (
    <div>
      <p>Click Button See See</p>
      <button ref={ref}>click</button>
    </div>
  );
};
```

### Scroll

```jsx
import React, { useState } from 'react';
import { useEventListener } from 'kjj-fe-common';

export default () => {
  const [top, setTop] = useState(0);

  const logger = e => {
    console.log('================ logger =============');
    setTop(e.scrollTop);
  };

  useEventListener('scroll', logger);

  return (
    <div style={{ height: 400 }}>
      <p>scrollTop: {top}</p>
    </div>
  );
};
```
