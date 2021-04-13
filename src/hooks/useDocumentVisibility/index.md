## useDocumentVisibility

<Alert>
  <p>useDocumentVisibility</p>
</Alert>

```jsx
import React, { useEffect } from 'react';
import { useDocumentVisibility } from 'kjj-fe-common';

export default () => {
  const documentVisibility = useDocumentVisibility();

  useEffect(() => {
    document.title = 'is hidden';
  }, [documentVisibility]);

  return (
    <>
      <p>documentVisibility: {documentVisibility}</p>
    </>
  );
};
```

### 页面激活后, 事件触发 修改 title

```jsx
import React from 'react';
import { useTitle, useDocumentVisibility } from 'kjj-fe-common';

export default () => {
  const documentTitle = useTitle('useDocumentVisibility');

  return (
    <>
      <div>documentTitle: {documentTitle}</div>
    </>
  );
};
```
