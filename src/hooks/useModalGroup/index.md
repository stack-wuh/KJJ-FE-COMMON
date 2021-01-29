## useModalGroup

<Alert type='info'>
 成组使用的Modal
</Alert>

### 简单的例子

```jsx
import React from 'react';
import { useModalGroup } from 'kjj-fe-common';
import { Modal, Button } from 'antd';

import 'antd/dist/antd.css';

export default () => {
  const [modals] = useModalGroup({
    config: {
      title: 'useModalGroup',
    },
  });

  const logger = () => {
    console.log(modals);
    modals.toggle();
  };

  return (
    <>
      <Modal {...modals.config}></Modal>
      <Modal></Modal>
      <Modal></Modal>

      <Button onClick={logger}>Modal1</Button>
    </>
  );
};
```
